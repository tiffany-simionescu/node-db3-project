const knex = require('knex');
const config = require('../knexfile');
const schemesDb = knex(config.development);

module.exports = schemesDb;