import { useCallback, useReducer, useState } from 'react'
import { css } from '@emotion/css'

import Main from './HomeComponents/Main'
import Filters from './HomeComponents/Filters'
import Header from './HomeComponents/Header'
import Modal from './TasksComponents/Modal'
import { useTasks } from './Hooks/useTasks'
import { defaultFilter, filterReducer } from './context/filters'
import TasksContext from './context/tasks'
import FiltersContext from './context/filters'
import GlobalStyle, { BACKGROUND_COLOR } from './style'

const cssBody = css`
  background-color: ${BACKGROUND_COLOR};
`

const cssContainer = css`
  margin: auto;
  width: 80%;
`

const App = () => {
  const [taskId, setTaskId] = useState('')

  // const [state, dispatcher] = useReducer(appReducer, initialState)
  const [filters, setFilters] = useReducer(filterReducer, defaultFilter)
  const [tasks, refreshTasks, loading] = useTasks(filters)

  const [showModal, setShowModal] = useState(false)
  const [showModalCadastro, setShowModalCadastro] = useState(false)

  const closeModal = useCallback(() => {
    setShowModal(false)
    setShowModalCadastro(false)
    setTaskId()
  }, [])

  const openModal = useCallback((taskID) => {
    setTaskId(taskID)
    setShowModal(true)
  }, [])

  const openModalCadastro = useCallback(() => {
    setShowModalCadastro(true)
  }, [])

  return (
    <>
      <GlobalStyle />
      <div className={cssBody}>
        <div className={cssContainer}>
          <Modal
            showModal={showModal}
            onClose={closeModal}
            taskId={taskId}
            refreshTasks={refreshTasks}
            showModalCadastro={showModalCadastro}
          />

          <Header openModal={openModalCadastro} />

          <FiltersContext.Provider value={{ filters, setFilters }}>
            <Filters />
          </FiltersContext.Provider>

          <TasksContext.Provider value={{ tasks, loading }}>
            <Main
              showModal={showModal}
              openModal={openModal}
              taskId={taskId}
              setTaskId={setTaskId}
            />
          </TasksContext.Provider>
        </div>
      </div>
    </>
  )
}

export default App
