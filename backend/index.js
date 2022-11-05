const express = require("express");
const bodyParser = require("body-parser");
const { response } = require("express");
const config = require("./config");
const epics = require("./model/epics");
const users = require("./model/users");
const tasks = require("./model/tasks");
const cors = require("cors");
const { TASK_SCHEMA } = require("./schemas");

console.log(`Starting server on ${config.APP_ENVIRONMENT} environment...`);

const app = express();

// middleware to parse http body to json
app.use(cors());
app.use(bodyParser.json());

const errorHandler = (handler) => {
  return async (req, res) => {
    try {
      await handler(req, res);
    } catch (ex) {
      res.status(500).json({
        error: true,
        message: "Unexpected error!"
      });
      throw ex;
    }
  };
};

// epics

app.get(
  "/epics",
  errorHandler(async (req, res) => {
    const epicsList = await epics.list();
    res.status(200).json(epicsList);
  })
);

// users

app.get(
  "/users",
  errorHandler(async function (req, res) {
    const usersList = await users.list();
    res.status(200).json(usersList);
  })
);

// tasks

app.get(
  "/tasks",
  errorHandler(async function (req, res) {
    const tasksList = await tasks.list(req.query);
    res.status(200).json(tasksList);
  })
);

app.post(
  "/tasks",
  errorHandler(async function (req, res) {
    const schema = TASK_SCHEMA;
    let task;
    try {
      task = await schema.validate(req.body);
    } catch (ex) {
      res.status(400).json(ex);
      return;
    }

    await tasks.create(req.body);

    res.status(201).json({
      message: "Criado com sucesso!"
    });
  })
);

app.patch(
  "/tasks/:id",
  errorHandler(async function (req, res) {
    const id = req.params.id;
    const schema = TASK_SCHEMA;
    let task;
    try {
      task = await schema.validate(req.body);
    } catch (ex) {
      res.status(400).json(ex);
      return;
    }

    await tasks.update(id, task);
    res.status(200).json({
      status: "Objeto alterado com sucesso!"
    });
  })
);

app.delete(
  "/tasks/:id",
  errorHandler(async function (req, res) {
    const id = req.params.id;
    await tasks.deleteTask(id);
    res.status(200).json({
      status: "Deletado com sucesso!"
    });
  })
);

app.get(
  "/tasks/:id",
  errorHandler(async function (req, res) {
    const id = req.params.id;
    const task = await tasks.get(id);
    res.status(200).json(task);
  })
);

app.listen(config.APP_PORT, function () {
  console.log(`App escutando na porta ${config.APP_PORT}!`);
});
