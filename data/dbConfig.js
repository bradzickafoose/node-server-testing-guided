const knex = require('knex');
const knexconfig = require('../knexfile.js');

const environment = process.env.DB_ENV || 'development';

module.exports = knex(knexconfig[environment]);
