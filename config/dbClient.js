const {Pool} = require('pg')
const {pgConfig} = require('../constants');

// creating pg pool so we don't have to connect every time?
const client = new Pool(pgConfig);

module.exports = client;
