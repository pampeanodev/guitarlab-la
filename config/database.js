module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('DATABASE_HOST', 'dpg-cfijgn9a6gdq1k0dg1s0-a.frankfurt-postgres.render.com'),
      port: env.int('DATABASE_PORT', 5432),
      database: env('DATABASE_NAME', 'guitarla_tl9n'),
      user: env('DATABASE_USERNAME', 'root'),
      password: env('DATABASE_PASSWORD', 'jFXcjPi4DDTLyUvlWQwzqtxKrSR5UKqI'),
      ssl: env.bool('DATABASE_SSL', true),
    },
  },
});
