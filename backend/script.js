const knex = require("./connection");

knex.schema
  .createTable("tasks_table", function (table) {
    table.increments("id");
    table.text("titulo").notNullable();
    table.text("descricao");
    table.text("prioridade").notNullable();
    table.text("status").notNullable();
    table.integer("pontos").notNullable();
    table.integer("user_id").notNullable().unsigned();
    table.foreign("user_id").references("users_table.id");
    table.integer("epic_id").notNullable().unsigned();
    table.foreign("epic_id").references("epics_table.id");
  })
  .then(() => console.log("success"));
