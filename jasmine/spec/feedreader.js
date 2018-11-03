/* feedreader.js
 *
 * Arquivo de teste Jasmine.
 */

$(function() {

    // Primeiro grupo de testes - Feed
    describe('RSS Feeds', function() {

        it('todas as feeds estão definidas e são não vazias', function() {
            expect(allFeeds).toBeDefined();             // esperamos que array de feeds está definido
            expect(allFeeds.length).not.toBe(0);        // esperamos que array de feeds não está vazio
        });

        it('todas as feeds possuem URL definida e não vazia', function() {
            allFeeds.forEach(function(feed) {

                expect(feed.url).toBeDefined();         // esperamos que url definida
                expect(feed.url.length).not.toBe(0);    // esperamos que url não vazia
            });
        });

        it('todas as feeds possuem nome definido e não vazio', function() {
            allFeeds.forEach(function(feed) {

                expect(feed.name).toBeDefined();        // esperamos que nome definido
                expect(feed.name.length).not.toBe(0);   // esperamos que nome não vazio
            });
        });

    });

    // Segundo grupo de testes - Menu
    describe('O menu', function() {

        /* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * 
        Analisando o código, nota-se que a visibilidade do menu é feita através
        da classe "menu-hidden" aplicada ao elemento <body>. Sendo assim,
        os testes deste suite de testes deverão focar no botão/ícone do menu,
        no elemento <body> e a classe "menu-hidden" atribuída a ele.
        * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

        it('menu está oculto por padrão', function() {
            expect($('body').hasClass('menu-hidden')).toBe(true);   // esperamos que body possui class "menu-hidden"
        });

        it('a visibilidade do menu se altera quando o ícone é clicado', function() {

            // primeiro criamos um objeto com o botão/ícone do menu
            const iconeMenu = $('.menu-icon-link');

            // como inicialmente o menu está oculto, se apertarmos o botão
            // uma vez, esperamos que ele apareça
            iconeMenu.click();                                          // apertamos o botão do menu
            expect($('body').hasClass('menu-hidden')).toBe(false);      // esperamos que body não possui class "menu-hidden"

            // como já apertarmos o botão uma vez, agora o menu não está oculto
            // então, se apertarmos novamente, esperamos que ele fique oculto novamente
            iconeMenu.click();                                          // apertamos o botão do menu
            expect($('body').hasClass('menu-hidden')).toBe(true);       // esperamos que body possui class "menu-hidden"
        });

    });

    // Terceiro grupo de testes - Primeira carga de feed
    describe('Entradas iniciais', function() {

        /* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * 
        Analisando o código, vemos que quando chamamos o loadFeed, os artigos
        são carregados em um container de elemento <div> e classe "feed". Neste
        container os artigos são carregados em elementos <article> e classe "entry".
        Com isso definido, precisamos então verificar se existe ao menos um elemento
        com classe "entry", lembrando que loadFeed é assíncrona.
        * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

        // Como se trata de uma chamada assíncrona, precisamos chamar
        // antes beforeEach com done como argumento.
        beforeEach(function(done) {
            loadFeed(0, done);      // chama a loadFeed - com id = 0
        });

         it('conteúdo é carregado quando loadFeed é chamado', function(done) {
            const artigos = $('.feed .entry');                  // procuramos por todos os artigos carregados

            expect(artigos.length).toBeGreaterThan(0);          // esperamos que artigo existe / entradas iniciais existem
            done();
        });
    });

    describe('Nova seleção de feed', function() {

        /* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * 
        Neste teste precisamos carregar um feed em seguida de outro, verificando
        se as informações mudam corretamente entre as cargas de feed.
        * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */
        
        let feedId = 0;                 // id do primeiro feed que será carregado
        let i = 0;                      // contador para loop entre os artigos do feed
        let artigos;                    // array que recebe o conteúdo do feed
        let artigosTmp;                 // armazena os títulos de todos os artigos do feed
        let artigosOld = "";            // armazena a artigosTmp do primeiro feed

        // Carregamos
        beforeEach(function(done) {
            loadFeed(feedId, done);      // chama a loadFeed
            artigosTmp = "";             // iniciamos a variável temporária
            feedId += 1;                 // adiciona 1 ao id para a próxima chamada
        });

        it('conteúdo inicial carregado com sucesso', function() {
            artigos = $('.feed .entry h2');                         // títulos de todas as feeds
            
            for (i = 0; i < artigos.length; i++) {
                artigosTmp = artigosTmp + artigos[i].innerHTML;     // carregamos a variável temporária com todos os títulos
            }

            artigosOld = artigosTmp;                                // guardamos em uma variável para comparação

            expect(artigosOld.length).toBeGreaterThan(0);           // fazemos um teste para ver se tudo correu bem
        })

        it('conteúdo foi substituído com sucesso após troca de feed', function() {
            artigos = $('.feed .entry h2');                         // títulos de todas as novas feeds
            artigosTmp = "";                        

            for (i = 0; i < artigos.length; i++) {
                artigosTmp = artigosTmp + artigos[i].innerHTML;     // carregamos a variável temporária com os novos títulos
            }
                             
            expect(artigosTmp).not.toBe(artigosOld);                // esperamos que os conteúdos dos feeds sejam diferentes
        });

    });
}());
