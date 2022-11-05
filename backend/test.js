const yup = require("yup");
const data = {
  id: 19,
  titulo: "testando o patch",
  descricao: "beijar beijar beijar beijar",
  prioridade: "medium",
  status: "in_progress",
  pontos: 10,
  user_id: 2,
  epic_name: "epic-1",
  epic: {
    display: "Epic 1",
    name: "epic-1",
    color: "roxo"
  },
  user: {
    id: 2,
    name: "maxwel",
    profile_picture:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvYk0ggVMEnpFji7w1t1PatNmFjATfneMMfg&usqp=CAU"
  }
};

const schema = yup.object().required().noUnknown().shape({
  titulo: yup.string(),
  descricao: yup.string(),
  prioridade: yup.string(),
  pontos: yup.number(),
  status: yup.string(),
  user_id: yup.number(),
  epic_name: yup.string()
});

schema
  .validate(data)
  .then((data) => console.log(data))
  .catch((err) => console.log(err));
