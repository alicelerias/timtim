import { css } from '@emotion/css'
import { useContext } from 'react'

import { PANELS } from '../constants'
import Panel from './Panel'
import TasksContext from '../context/tasks'
import { BACKGROUND_COLOR, SPACING_3, SPACING_4 } from '../style'

const cssContainer = css`
  background-color: ${BACKGROUND_COLOR};
  padding: ${SPACING_3};
  margin: 0rem;
  display: flex;
  flex-wrap: wrap;
  gap: ${SPACING_4};
  justify-content: center;
`

const Main = ({ openModal, taskId, setTaskId }) => {
  const tasks = useContext(TasksContext)
  return (
    <div className={cssContainer}>
      {PANELS.map(({ display, value: filterValue }) => (
        <Panel
          key={filterValue}
          title={display}
          tasks={tasks.filter((task) => task.status === filterValue)}
          openModal={openModal}
          taskId={taskId}
          setTaskId={setTaskId}
        />
      ))}
    </div>
  )
}

export default Main
