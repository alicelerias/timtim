import { css } from '@emotion/css'
import { useEffect, useReducer } from 'react'
import { BiSave } from 'react-icons/bi'
import { TiDelete } from 'react-icons/ti'
import { AiOutlineDelete } from 'react-icons/ai'

import { useEpics } from '../Hooks/useEpics'
import Select from '../CadastroComponents/Select'
import { useUsers } from '../Hooks/useUsers'
import {
  EpicRender,
  UserRender,
} from '../TasksComponents/Modal Components/ContentRender'
import {
  color2,
  color6,
  color7,
  rem,
  SPACING_1,
  SPACING_2,
  SPACING_3,
  SPACING_4,
} from '../style'
import { API_HOST } from '../config'

const cssHeader = css`
  background-color: ${color2};
  width: 100%;
  height: 3%;
  display: flex;
  padding: ${SPACING_2};
  align-items: center;
`
const cssSelected = css`
  border: none;
  background-color: transparent;
  font-size: ${rem(1)};
  text-transform: uppercase;
  text-align: center;
  padding: ${SPACING_1};
  width: 100%;
  color: #fff;
  border-radius: 0px;
  border: ${rem(0.1)} solid ${color7};
  &:focus {
    outline: 0.1rem solid ${color2};
  }
`

const cssBody = css`
  background-color: #e2d7ed;
  padding: ${SPACING_3};
  height: auto;
  width: 100%;
  display: flex;
  gap: ${SPACING_3};
  overflow-y: scroll;
`

const cssCardDados = css`
  background-color: #ccb7e0;
  padding-top: ${SPACING_1};
  padding-bottom: ${SPACING_1};
  height: 80%;
  width: 40%;
  display: flex;
  flex-wrap: wrap;
  gap: ${SPACING_1};
  color: #fff;
`
const cssBox = css`
  overflow: hidden;
  background-color: ${color6};
  color: #000;
  padding: ${SPACING_1};
  width: 100%;
  display: flex;
  flex-direction: row;
  gap: ${SPACING_2};
  font-style: italic;
  text-align: center;
  align-items: center;
  justify-content: start;
  font-size: ${rem(1)};
`
const cssBoxStatus = css`
  ${cssBox}
  color: #fff;
  flex-wrap: wrap;
  font-style: normal;
`

const cssBoxEpic = css`
  ${cssBox};
  font-style: normal;
`

const cssDescricoes = css`
  background-color: transparent;
  font-size: ${rem(1.5)};
  width: 70%;
  display: flex;
  flex-wrap: wrap;
`
const cssPrimeiraDescricao = css`
  background-color: transparent;
  font-size: ${rem(1.2)};
  width: 100%;
  height: ${rem(3)};
  overflow: hidden;
  line-height: ${rem(1.5)};
  border: none;
  resize: none;
  &:focus {
    outline: none;
  }
`
const cssSegundaDescricao = css`
  ${cssPrimeiraDescricao}
  background-color: #ccb7e0;
  font-size: ${rem(0.8)};
  padding: ${SPACING_2};
  height: auto;
  min-height: ${rem(3)};
  margin-bottom: ${SPACING_4};
  &:focus {
    outline: none;
  }
`

const cssH1 = css`
  background-color: ${color2};
  margin: 0rem;
  color: #d3d3d3;
  width: 100%;
  font-size: ${rem(1.2)};
  text-align: center;
  text-transform: uppercase;
`

const cssBtn = css`
  background-color: transparent;
  color: #d3d3d3;
  cursor: pointer;
  border: none;
  font-size: ${rem(1.5)};
`

const cssModal = css`
  position: fixed;
  background-color: transparent;
  left: 0;
  width: 100%;
  height: 100%;
  align-items: center;
  display: flex;
  z-index: 2;
`

const cssContainer = css`
  background-color: #000;
  display: flex;
  flex-wrap: wrap;
  margin: auto;
  max-height: 100vh;
  height: auto;
  width: 50%;
`

const taskReducer = (state, action) => {
  if (!state) return action

  return { ...state, ...action }
}

function Modal({
  showModalCadastro,
  showModal,
  onClose,
  taskId,
  refreshTasks,
}) {
  const [task, setTask] = useReducer(taskReducer)

  const cleanTask = () => {
    onClose()
    setTask()
  }

  function handleChangeDescricao(e) {
    const newTask = {
      descricao: e.target.value,
    }
    setTask(newTask)
  }

  function handleChangeTitulo(e) {
    const newTask = {
      titulo: e.target.value,
    }
    setTask(newTask)
  }

  function handleChangeStatus(status) {
    const newTask = {
      status: status.value,
    }
    setTask(newTask)
  }

  function handleChangeEpic(epic) {
    const newTask = {
      epic_name: epic.name,
      epic: { name: epic.name, color: epic.color },
    }

    setTask(newTask)
  }

  function handleChangeUser(user) {
    const newTask = {
      user_id: user.id,
      user: {
        name: user.name,
        id: user.id,
        profile_picture: user.profile_picture,
      },
    }
    setTask(newTask)
  }

  function handleChangePrioridade(prioridade) {
    const newTask = {
      prioridade: prioridade.value,
    }
    setTask(newTask)
  }

  function handleChangePontos(e) {
    const newTask = {
      pontos: e.target.value,
    }
    setTask(newTask)
  }

  const newTicket = () => {
    fetch(`${API_HOST}/tasks`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(task),
    })
      .then((resp) => resp.json())
      .then((data) => {
        cleanTask()
        refreshTasks()
      })
  }
  const saveEdit = () => {
    fetch(`${API_HOST}/tasks/${taskId}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(task),
    }).then(() => {
      cleanTask()
      refreshTasks()
    })
  }
  useEffect(() => {
    if (!taskId) return
    fetch(`${API_HOST}/tasks/${taskId}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((resp) => resp.json())
      .then((data) => {
        setTask(data)
      })
      .catch((err) => console.error(err))
  }, [taskId])

  const deleteTicket = () => {
    fetch(`${API_HOST}/tasks/${taskId}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(task),
    }).then(() => {
      cleanTask()
      refreshTasks()
    })
  }

  const status = [
    { id: 1, display: 'Backlog', value: 'backlog' },

    { id: 2, display: 'In progress', value: 'in_progress' },

    { id: 3, display: 'Done', value: 'done' },
  ]

  const prioridade = [
    { id: 1, display: 'Hight', value: 'hight' },

    { id: 2, display: 'Medium', value: 'medium' },

    { id: 3, display: 'Low', value: 'low' },
  ]

  const myEpicsBack = useEpics()

  const myEpics = myEpicsBack.map((item) => ({
    ...item,
    id: item.name,
  }))

  const myUsersBack = useUsers()

  const myUsers = myUsersBack.map((user) => ({
    ...user,
    display: user.name,
  }))

  if (showModalCadastro)
    return (
      <div className={cssModal}>
        <div className={cssContainer}>
          <div className={cssHeader}>
            <div className={cssH1}>New Ticket</div>{' '}
            <button className={cssBtn} onClick={newTicket}>
              <BiSave />
            </button>
            <button className={cssBtn} onClick={cleanTask}>
              <TiDelete />
            </button>
          </div>

          <div className={cssBody}>
            <div className={cssDescricoes}>
              <textarea
                className={cssPrimeiraDescricao}
                placeholder="Insira o título"
                onChange={handleChangeTitulo}
              ></textarea>
              <textarea
                className={cssSegundaDescricao}
                onChange={handleChangeDescricao}
                placeholder="Insira a descricão"
              ></textarea>
            </div>

            <div className={cssCardDados}>
              <div className={cssBoxStatus}>
                Prioridade:
                <Select items={prioridade} onSelect={handleChangePrioridade} />
              </div>

              <div className={cssBoxStatus}>
                Pontos:
                <input className={cssSelected} onChange={handleChangePontos} />
              </div>

              <div className={cssBoxStatus}>
                Status:
                <Select items={status} onSelect={handleChangeStatus} />
              </div>

              <div className={cssBoxStatus}>
                Epic:
                <Select
                  items={myEpics}
                  onSelect={handleChangeEpic}
                  ContentRender={EpicRender}
                />
              </div>

              <div className={cssBoxStatus}>
                User:
                <Select
                  items={myUsers}
                  onSelect={handleChangeUser}
                  ContentRender={UserRender}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    )

  if (!showModal || !task) return

  return (
    <div className={cssModal}>
      <div className={cssContainer}>
        <div className={cssHeader}>
          <div className={cssH1}>Editar tarefa</div>

          <button className={cssBtn} onClick={deleteTicket}>
            <AiOutlineDelete />
          </button>

          <button className={cssBtn} onClick={saveEdit}>
            <BiSave />
          </button>

          <button className={cssBtn} onClick={cleanTask}>
            <TiDelete />
          </button>
        </div>
        <div className={cssBody}>
          <div className={cssDescricoes}>
            <textarea
              className={cssPrimeiraDescricao}
              onChange={handleChangeTitulo}
              value={task.titulo}
            ></textarea>
            <textarea
              className={cssSegundaDescricao}
              onChange={handleChangeDescricao}
              value={task.descricao}
            ></textarea>
          </div>
          <div className={cssCardDados}>
            <div className={cssBoxStatus}>
              <Select
                items={status}
                onSelect={handleChangeStatus}
                selectedValue={task.status}
              />
            </div>
            <div className={cssBoxEpic}>
              <Select
                items={myEpics}
                value={task.epic_name}
                onSelect={handleChangeEpic}
                SelectedRender={({ onClick, item }) => (
                  <EpicRender onMouseDown={onClick} item={item} />
                )}
                ContentRender={EpicRender}
              />
            </div>
            <div className={cssBox}>
              <Select
                items={myUsers}
                value={task.user.id}
                onSelect={handleChangeUser}
                SelectedRender={({ onClick, item }) => {
                  return (
                    <UserRender
                      key={item?.id ?? 'null'}
                      onMouseDown={onClick}
                      item={item}
                    />
                  )
                }}
                ContentRender={UserRender}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Modal
