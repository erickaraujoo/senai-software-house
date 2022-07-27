<h1 align="center">
    <img alt="SENAI" title="#senai" src=".github/senai-logo.png" width="280px" />
</h1>

<h4 align="center"> 
  :rocket: Projeto desenvolvido para avaliação prática :rocket:
</h4>

<p align="center">
  <a href="#books-tecnologias">Tecnologias</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#information_source-configuração">Configuração</a>&nbsp;&nbsp;&nbsp;
</p>

## :books: Tecnologias

![Node.js](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=ts-node&logoColor=white)
![SQLite](https://img.shields.io/badge/SQLite-007AAC?style=for-the-badge&logo=sqlite&logoColor=white)
![Knex](https://img.shields.io/badge/SQLite-E16426?style=for-the-badge&logoColor=white)


## :information_source: Configuração

Primeiro, realize o clone do projeto com o comando abaixo:

``` bash
git clone https://github.com/erickaraujoo/senai-software-house.git
```

Entre na pasta gerada após o clone do projeto:

``` bash
cd ./senai-software-house
```

Faça a instalação dos pacotes inserindo o comando abaixo

``` bash
yarn install
```

Após a instalação dos pacotes, é importante realizar a configuração do banco de dados (SQLite) e inserir dados para testes como forma de verificar se a configuração do banco foi realizada com sucesso. Utilize o comando abaixo

Utilizaremos o **Knex** como SQL query builder e o **SQLite** como banco de dados

``` bash
yarn knex:init
```

Será exibido os comandos abaixo e as 2 linhas verdes onde foi feito a configuração do banco de dados e a inserção dos dados para testes

<img alt="Resultado do comando yarn knex:init" title="#resultado-comando-yarn-knex-init" src=".github/example-1.png" />

Para inicalizar a API, utilize o comando abaixo

``` bash
yarn dev
```

--- 

Made by Erick Araujo!