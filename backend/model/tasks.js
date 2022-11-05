const knex = require("../connection");

async function list({ epic_name, user_id }) {
  const query = knex("tasks");

  if (epic_name) {
    query.where({ epic_name: epic_name });
  }

  if (user_id) {
    query.where({ user_id: user_id });
  }

  let tasks = await query;

  tasks = await Promise.all(
    tasks.map(async (item) => {
      const epicTask = await knex("epics")
        .select("epics.*")
        .join("tasks", "tasks.epic_name", "epics.name")
        .where("tasks.id", item.id)
        .first();
      const userTask = await knex("users")
        .select("users.*")
        .join("tasks", "tasks.user_id", "users.id")
        .where("tasks.id", item.id)
        .first();
      const finalItem = {
        ...item,
        epic: epicTask,
        user: userTask
      };
      return finalItem;
    })
  );

  return tasks;
}

async function create({
  titulo,
  descricao,
  prioridade,
  status,
  pontos,
  user_id,
  epic_name
}) {
  const newTicket = {
    titulo: titulo,
    descricao: descricao,
    prioridade: prioridade,
    status: status,
    pontos: pontos,
    user_id: user_id,
    epic_name: epic_name
  };
  await knex("tasks").insert(newTicket);
}

async function update(id, update) {
  await knex("tasks").where({ id }).update(update);
}

async function deleteTask(id) {
  await knex("tasks").where({ id }).del();
}

async function get(id) {
  const task = await knex("tasks").where({ id }).first();
  const epicTask = await knex("epics")
    .select("epics.*")
    .join("tasks", "tasks.epic_name", "epics.name")
    .where("tasks.id", id)
    .first();
  const userTask = await knex("users")
    .select("users.*")
    .join("tasks", "tasks.user_id", "users.id")
    .where("tasks.id", id)
    .first();
  const finalItem = {
    ...task,
    epic: epicTask,
    user: userTask
  };
  return finalItem;
}

module.exports = {
  list,
  create,
  update,
  deleteTask,
  get
};
