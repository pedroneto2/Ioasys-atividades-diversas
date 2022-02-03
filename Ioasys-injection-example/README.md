# Injetion Example

## Essa aplicação possui o intuito de demonstrar o funcionamento do SQL Injection

[![Build Status](https://travis-ci.org/joemccann/dillinger.svg?branch=master)](https://travis-ci.org/joemccann/dillinger)

Para rodar o projeto é necessário possuir as seguintes ferramentas:

- NodeJs
- Postgres
- Yarn
- Postman ou Insomnia

## Instalação

requires [Node.js](https://nodejs.org/) v10+ to run.

Vamos instalar as dependências do projeto.

```sh
cd injection-example
yarn
```

Configure as suas credenciais do banco dentro do arquivo config/database-credentials.js

```sh
yarn create-database
yarn create-tables
yarn create-seed
yarn start
```

## Consultando os dados

Basta acessar a url http://localhost:3000/users/1 pelo postman ou diretamenteo pelo brownser

## License

MIT
