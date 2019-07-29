// Update with your config settings.

module.exports = {
  test: {
    client: "postgresql",
    migrations: {
      directory: `${__dirname}/db/migrations`
    },
    seeds: {
      directory: `${__dirname}/db/seeds/test`
    }
  },
  development: {
    client: "postgresql",
    connection: {
      // host : process.env.PGHOST,
      // user : process.env.PGUSER,
      // port : process.env.PGPORT,
      // database : process.env.PGDATABASE
      host: process.env.PGHOST || "localhost",
      user: process.env.PGUSER || "postgres",
      password: process.env.PGPASS || "",
      port: process.env.PGPORT || 5432,
      database: process.env.PGDATABASE || "postgres"
    },
    migrations: {
      directory: `${__dirname}/db/migrations`
    },
    seeds: {
      directory: `${__dirname}/db/seeds/development`
    },
    pool: {
      min: 2,
      max: 20
    }
  },
  production: {
    client: "postgresql",
    connection: {
      host: process.env.PGHOST,
      user: process.env.PGUSER,
      port: process.env.PGPORT,
      password: process.env.PGPASS,
      database: process.env.PGDATABASE
    },
    pool: {
      min: 2,
      max: 20
    },
    migrations: {
      directory: `${__dirname}/db/migrations`
    },
    seeds: {
      directory: `${__dirname}/db/seeds/production`
    }
  }
};
