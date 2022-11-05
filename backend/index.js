

const express = require('express');
const bodyParser = require('body-parser');
const { response } = require('express');
const config = require('./config');
const epics = require('./model/epics');
const users = require('./model/users');
const tasks = require('./model/tasks');
const cors = require('cors');
const yup = require('yup');




console.log(`Starting server on ${config.APP_ENVIRONMENT} environment...`)

const app = express();

// middleware to parse http body to json
app.use(cors());
app.use(bodyParser.json())

// epics

app.get('/epics', async function(req, res){
  const epicsList = await epics.list()
  res.status(200).json(epicsList);
})

// users

app.get('/users', async function(req, res) {
  const usersList = await users.list()
  res.status(200).json(usersList)
})


// tasks

app.get('/tasks', async function(req, res) {
  console.log(req.query)
  const tasksList = await tasks.list(req.query)
  res.status(200).json(tasksList)
})

app.post('/tasks', async function(req, res) {
  const schema = yup.object().shape({
    titulo: yup.string().required(),
    descricao: yup.string().required(),
    prioridade: yup.string().required(),
    pontos: yup.number().required(),
    status: yup.string().required(),
    user_id: yup.number().required(),
    epic_name: yup.string().required()
  });

  if(!(await schema.isValid(req.body))) {
      res.status(ex.status).json(ex.json)
      return
    }

await tasks.create(req.body)
  res.status(201).json({
      message: "Criado com sucesso!"
    });
})

// const ID = yup.number().min(1)

// const patchSchema = yup.schema.object({
//   user_id: ID,
//   epic_id: ID,
//   titulo: yup.string().max(160),
// })

app.patch('/tasks/:id', async function(req, res) {
  const id = req.params.id;
  // if(!patchSchema.valid(res.body)) {
  //   res.status(400).json(errors)
  //   return
  // }
  const {
    user_id,
    titulo,
    epic_name,
    descricao,
    prioridade, 
    pontos,
    status,
  } = req.body
  await tasks.update(id, { user_id, epic_name, titulo, descricao, prioridade, pontos, status}) 
  res.status(200).json({
    status: 'Objeto alterado com sucesso!'
  })
})

app.delete('/tasks/:id', async function(req, res) {
  const id = req.params.id;
  await tasks.deleteTask(id)
  res.status(200).json({
    status: 'Deletado com sucesso!'})})


app.get('/tasks/:id', async function(req, res) {
  const id = req.params.id;
  const task = await tasks.get(id)
  res.status(200).json(task);
})


app.listen(config.APP_PORT, function() {
  console.log(`App escutando na porta ${config.APP_PORT}!`);
})
