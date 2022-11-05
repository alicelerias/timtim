const yup = require("yup");

const MY_SCHEMA = yup.object().shape({
  titulo: yup.string(),
  descricao: yup.string(),
  prioridade: yup.string(),
  pontos: yup.number(),
  status: yup.string(),
  user_id: yup.number(),
  epic_name: yup.string()
});

module.exports = {
  MY_SCHEMA
};
