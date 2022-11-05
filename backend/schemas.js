const yup = require("yup");

const TASK_SCHEMA = yup.object().required().noUnknown().shape({
  titulo: yup.string(),
  descricao: yup.string(),
  prioridade: yup.string(),
  pontos: yup.number(),
  status: yup.string(),
  user_id: yup.number(),
  epic_name: yup.string()
});

module.exports = {
  TASK_SCHEMA
};
