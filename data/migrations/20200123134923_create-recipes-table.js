
exports.up = function(knex) {
  return knex.schema
.createTable('recipes',
     table=>{
      table.increments()
      table.text('name').notNullable()
  })
.createTable('ingredients', 
    table=>{
        table.increments()
        table.text('name').notNullable()
    })
.createTable('recipes-ingredients', 
    table=>{
        table.increments()
        table.text('quantity').notNullable()
        table.integer('recipe-id').unsigned().notNullable().references('id').inTable('recipes')
        table.integer('ingredient-id').unsigned().notNullable().references('id').inTable('ingredients')
        
    }
)

.createTable('steps',
     table=>{
      table.increments()
      table.text('steps').notNullable()
      table.integer('recipe_id').unsigned().notNullable().references('id').inTable('recipes')
  })
};

exports.down = function(knex) {
    return knex.schema
    .dropTableIfExists('recipes')
    .dropTableIfExists('ingredients')
    
}