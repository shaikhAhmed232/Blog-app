const path = require('path');
const {migrate} = require('postgres-migrations');
const pgClient = require('./dbClient');

// Migration function from creating and updating tables inside Database.
module.exports.runMigrations = async () => {
    // first connecting server to Database.
    const client = await pgClient.connect();
    try {
        // Migrating sql to Database for creating relations.
        await migrate({client}, path.resolve(__dirname, 'migrations'))
        console.log('Migrations successfull');
    } catch (err) {
        console.log('Migrations failed with error:\n', err)
    } finally {
        // after we done migrating or there is an error release the client.
        client.release()
    }
}