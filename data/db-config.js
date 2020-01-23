const knex = require('knex');
const configuration = require('../knexfile');

const db = configuration.development;

// select * from recipes
function getRecipes(){
    return db('recipes');
}
module.exports = {getRecipes}