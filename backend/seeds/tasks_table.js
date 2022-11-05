/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('tasks').del()
  await knex('tasks').insert([
    {id: 1, 
    titulo: "test",
    descricao: "lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum",
    prioridade: "low",
    status: "backlog",
    pontos: 8,
    user_id: 1,
    epic_name: 'epic-1'
  },

  {id: 2, 
    titulo: "test-2",
    descricao: "lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum",
    prioridade: "medium",
    status: "in_progress",
    pontos: 18,
    user_id: 2,
    epic_name: "epic-2"
  },

  {id: 3, 
    titulo: "test-3",
    descricao: "lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum",
    prioridade: "hight",
    status: "done",
    pontos: 28,
    user_id: 3,
    epic_name: "epic-3"
  },
   
  ]);
};
