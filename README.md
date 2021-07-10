# Mais Cep - Back End

<a href='https://coveralls.io/github/marlonelima/maiscep-back?branch=main'><img src='https://coveralls.io/repos/github/marlonelima/maiscep-back/badge.svg?branch=main' alt='Coverage Status' /></a>

### Quais tecnologias foram utilizadas?

<ul>
  <li>Express</li>
  <li>Redis</li>
  <li>MongoDB</li>
  <li>Mongoose</li>
  <li>ESLint</li>
  <li>Prettier</li>
  <li>Typescript</li>
</ul>

### Como rodar o servidor?

Certifique-se de ter o Docker Compose e apenas execute o comando `docker-compose up` na pasta do projeto. Todas as ferramentas serão instaladas nos contâineres do Docker e o servidor irá automaticamente iniciar. Após isso, o servidor ficará acessível na porta 3333 do localhost.
<br/>

#### Como rodar os testes?

Após instalar todas as dependências, rode o comando `npm run test` ou `yarn test` para executar os testes automatizados. Será gerado um relatório na pasta `coverage` em sua máquina.
<br/><br/>

### Sobre o sistema de cache

A API foi projetada com dois sistemas de cache. O primeiro sistema de cache e o preferencial é o cache com o banco de dados Redis. Ele é preferencial pelo motivo de ser um banco de dados em memória e ser mais rápido, além de desgastar menos o banco de dados principal.
O segundo sistema de cache é o banco de dados não relacional do MongoDB. Lá os dados serão armazenados permanentemente e somente será acessado caso o cache do Redis não tenha tal informação. Se nenhum dos dois tiver a informação requerida, a API do Via Cep será acionada.
<br/><br/>

### Continuous Integration

Foi definido um processo de Continuous Integration utilizando o GitHub Action e o Coveralls. Para mais detalhes, visite a seção <a href="https://github.com/marlonelima/maiscep-back/actions">Actions</a>.<br/>

### ESLint e Prettier

O ESLint e Prettier foram configurados para padronização do código e garantir boas práticas.
