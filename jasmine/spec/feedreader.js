/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        it('todas as feeds estão definidas e são não vazias', function() {
            expect(allFeeds).toBeDefined();             // esperamos que array de feeds está definido
            expect(allFeeds.length).not.toBe(0);        // esperamos que array de feeds não está vazio
        });

        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */
        it('todas as feeds possuem URL definida e não vazia', function() {
            allFeeds.forEach(function(feed) {

                expect(feed.url).toBeDefined();         // esperamos que url definida
                expect(feed.url.length).not.toBe(0);    // esperamos que url não vazia
            });
        });

        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */
        it('todas as feeds possuem nome definido e não vazio', function() {
            allFeeds.forEach(function(feed) {

                expect(feed.name).toBeDefined();        // esperamos que nome definido
                expect(feed.name.length).not.toBe(0);   // esperamos que nome não vazio
            });
        });

    });


    /* TODO: Write a new test suite named "The menu" */ 
    describe('O menu', function() {

        /* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * 
        Analisando o código, nota-se que a visibilidade do menu é feita através
        da classe "menu-hidden" aplicada ao elemento <body>. Sendo assim,
        os testes deste suite de testes deverão focar no botão/ícone do menu,
        no elemento <body> e a classe "menu-hidden" atribuída a ele.
        * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

        /* TODO: Write a test that ensures the menu element is
         * hidden by default. You'll have to analyze the HTML and
         * the CSS to determine how we're performing the
         * hiding/showing of the menu element.
         */
        it('menu está oculto por padrão', function() {
            expect($('body').hasClass('menu-hidden')).toBe(true);   // esperamos que body possui class "menu-hidden"
        });

         /* TODO: Write a test that ensures the menu changes
          * visibility when the menu icon is clicked. This test
          * should have two expectations: does the menu display when
          * clicked and does it hide when clicked again.
          */
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


    /* TODO: Write a new test suite named "Initial Entries" */
    describe('Entradas iniciais', function() {

        /* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * 
        Analisando o código, vemos que quando chamamos o loadFeed, os artigos
        são carregados em um container de elemento <div> e classe "feed". Neste
        container os artigos são carregados em elementos <article> e classe "entry".
        Com isso definido, precisamos então verificar se existe ao menos um elemento
        com classe "entry", lembrando que loadFeed é assíncrona.
        * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

        /* TODO: Write a test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         * Remember, loadFeed() is asynchronous so this test will require
         * the use of Jasmine's beforeEach and asynchronous done() function.
         */

        // Como se trata de uma chamada assíncrona, precisamos chamar
        // antes beforeEach com done como argumento.
        beforeEach(function(done) {
            loadFeed(0, done);      // chama a loadFeed - com id = 0
        });

         it('conteúdo é carregado quando loadFeed é chamado', function(done) {
            const artigos = $('.entry');                    // procuramos por todos os artigos carregados

            expect(artigos.length).toBeGreaterThan(0);      // esperamos que artigo existe / entradas iniciais existem
            done();
        });
    });


    /* TODO: Write a new test suite named "New Feed Selection" */
    describe('Nova seleção de feed', function() {

        // Antes de qualquer coisa precisamos buscar alguma informação
        // do feed já carregado para poder comparar e verificar se
        // o conteúdo foi substituído. Analisando o código, vemos que
        // podemos capturar facilmente o link com classe "entry-link"

        const urlAntiga = $('.entry-link').attr('href');    // url do feed já carregado

        // Como se trata de uma chamada assíncrona, precisamos chamar
        // antes beforeEach com done como argumento.
        beforeEach(function(done) {

            loadFeed(1, done);      // chama a loadFeed - com id = 1 (outtro feed)
        });

        /* TODO: Write a test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         * Remember, loadFeed() is asynchronous.
         */

        it('conteúdo foi substituído com sucesso após troca de feed', function() {
            
            // Agora que o feed já foi carregado, pegamos o valor do  novo url
            const urlNova = $('.entry-link').attr('href');  // url do feed que ainda iremos carregar
            
            expect(urlAntiga).not.toBe(urlNova);            // esperamos que a nova url seja diferente da antiga
        });

    });
}());
