/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("tasks", function (table) {
    table.increments("id");
    table.text("titulo").notNullable();
    table.text("descricao");
    table.text("prioridade").notNullable();
    table.text("status").notNullable();
    table.integer("pontos").notNullable();
    table.integer("user_id").notNullable().unsigned();
    table.foreign("user_id").references("users.id");
    table.text("epic_name").notNullable().unsigned();
    table.foreign("epic_name").references("epics.name");
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable("tasks_table");
};
