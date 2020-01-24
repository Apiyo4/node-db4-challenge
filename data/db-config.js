const knex = require('knex');
const configuration = require('../knexfile');

const db = configuration.development;

// select * from recipes
function getRecipes(){
    return db('recipes');
}

// select i.name, quantity from
// [recipes-ingredients] as r
// join ingredients as i 
// on r."ingredient-id"= i.id
// where r."recipe-id" = 1

function getShoppingList(recipe_id){
    return db('recipes-ingredients  as r')
    .join('ingredients as i', 'r.ingredent-id', 'i.id')
    .select('i.name', 'quantity').where({recipe_id})
}
// select steps from steps 
// where recipe_id = 1

function getInstructions(recipe_id){
    return db('steps')
    .select(steps)
    .where({recipe_id})
}

module.exports = {getRecipes, getShoppingList, getInstructions}