/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('epics').del()
  await knex('epics').insert([
    {display: "Epic 1",  name: "epic-1", color: "roxo"},
    {display: "Epic 2",  name: "epic-2", color: "verde"},
    {display: "Epic 3",  name: "epic-3", color: "verde claro"},
  ]);
};
