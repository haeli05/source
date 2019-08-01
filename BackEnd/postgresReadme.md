# Postgres Models Readme

The Postgres Models are built on top of Knex.js Query builder format. The specific Schema and API can be followed up at http://knexjs.org/

Working with knex will require a global install of Knex cli. It can be install as

`npm install -g knex`

Knex must also be installed within the project. It is already included in `package.json`, otherwise you can install it as

`npm install knex -s`

**Database Connections**

The connection definition is available in file `/Backend/knexfile.js`

The project can be connected to your personal postgres database by providing the connection parameters in Environment variable i.e., `.env` file

The Environment variable of interest are :

`PGHOST=localhost`

`PGUSER=postgres`

`PGPASS=`

`PGPORT=5432`

`PGDATABASE=postgres`

The table definitions for various Models are stored in the folder `/Backend/src/db/migrations/`

To create tables, in your project folder you need to run command

`knex migrate:latest`

With this command `knex.js` will run the migrations i.e, create the tables as per the migration definitions.

I have created some generic CRUD APIs for all the tables along with commented out examples. These models are available in the folder `/Backend/src/pgModels`
