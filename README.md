Udacity - Nanodegree Web Front-End Avan�ado

Teste do leitor de feed

1.O PROJETO
=> Este projeto tem por objetivo realizar testes de um sistema de leitor de feed, utilizando para isto a ferramenta Jasmine.

2.ARQUIVOS

css\icomoon.css
css\normalize.css
css\style.css
fonts\icomoon.eot
fonts\icomiin.svg
fonts\icomoon.ttf
fonts\icomoon.woff
Jasmine\lib\jasmine-2.1.2\boot.js
Jasmine\lib\jasmine-2.1.2\console.js
Jasmine\lib\jasmine-2.1.2\jasmine_favicon.png
Jasmine\lib\jasmine-2.1.2\jasmine-html.js
Jasmine\lib\jasmine-2.1.2\jasmine.css
Jasmine\lib\jasmine-2.1.2\jasmine.js
spec\feedreader.js
js\app.js
index.html
README.md

3.TESTES REALIZADOS
=> Os testes em nosso sistema de leitura de feeds é realizado com a ferramenta Jasmine. Os testes estão descritos no arquivo spec\feedreader.js. Seguem abaixo as descrições dos testes implementados:

a) Verifica se as feeds estão definidas e não são vazias.
b) Verifica se as feeds possuem URL definida e não vazia.
c) Verifica se as feeds possuem nome definido e não vazio.
d) Verifica se o menu do feed está oculto por padrão.
e) Verifica se a visibilidade do menu se altera quando se clica no botão/ícone do menu.
f) Verifica se o conteúdo é carregado após a chamada do carregador de feed.
g) Verifica se o conteúdo é substituído corretamente após carregarmos um novo feed.

4. COMO EXECUTAR OS TESTES

a) No arquivo <index.html>, dentro da seção <head> do código, adicione as chamadas do Jasmine:

         <link rel="stylesheet" href="jasmine/lib/jasmine-2.1.2/Jasmine.css">

         <script src="jasmine/lib/jasmine-2.1.2/jasmine.js"></script>
         <script src="jasmine/lib/jasmine-2.1.2/jasmine-html.js"></script>
         <script src="jasmine/lib/jasmine-2.1.2/boot.js"></script>

b) Ainda no arquivo <index.html>, adicione após a chamada do arquivo <app.js> o arquivo de especificações do Jasmine:

         <script src="jasmine/spec/feedreader.js"></script>

c) Tudo pronto para executar os testes. No navegador se sua preferência, carregue a página <index.html>. Ao término da carga, verifique na parte inferior da página, utilizando a barra de rolagem se necessário, o resultado dos testes do Jasmine.

5. EXAMINANDO O RESULTADO DOS TESTES

a) Na parte superior da área referente ao resultado dos testes, logo abaixo da logo do Jasmine, dentro de uma barra aparecerá o número de testes e o número de falhas na execução dos testes. Caso tudo tenha corrido bem, a barra será verde e nenhuma falha terá ocorrido. Caso algum teste tenha falhado, esta barra será vermelha e o número de falhas estará indicado.

b) No caso do número de falhas ser zero, logo abaixo da barra aparecerão os grupos de teste e todos os testes executados.

c) No caso do número de falhas ser maior que zero, logo abaixo aparecerão as descrições dos erros, e em quais linhas do arquivo de definição de testes ("jasmine/spec/feedreader.js") você poderá encontrar os testes que causaram as falhas no sistema.

