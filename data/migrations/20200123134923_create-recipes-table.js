
exports.up = function(knex) {
  return knex.schema
.createTable('recipes',
     table=>{
      table.increments()
      table.text('name').unique().notNullable()
  })
.createTable('ingredients', 
    table=>{
        table.increments()
        table.text('name').unique().notNullable()
    })
.createTable('recipes-ingredients', 
    table=>{
        table.increments()
        table.text('quantity').unique().notNullable()
        table.integer('recipe-id').unsigned().notNullable().references('id').inTable('recipes')
        table.integer('ingredient-id').unsigned().notNullable().references('id').inTable('ingredients')
        
    }
)

.createTable('steps',
     table=>{
      table.increments()
      table.text('steps').unique().notNullable()
      table.integer('recipe_id').unsigned().notNullable().references('id').inTable('recipes')
  })
};

exports.down = function(knex) {
    return knex.schema
    .dropTableIfExists('recipes')
    .dropTableIfExists('ingredients')
    .dropTableIfExists('recipes-ingredients')
    .dropTableIfExists('steps')
}