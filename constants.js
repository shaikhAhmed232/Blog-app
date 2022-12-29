const pgConfig = {
    database: process.env.PG_DB,
    user: process.env.PG_USER,
    password: process.env.PG_PASSWORD,
    port: +(process.env.PG_PORT),
    host: process.env.PG_HOST || 'localhost',
}
module.exports = {pgConfig}