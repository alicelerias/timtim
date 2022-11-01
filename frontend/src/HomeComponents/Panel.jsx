import { css } from '@emotion/css'

import { BACKGROUND_COLOR, color2, rem, SPACING_1, SPACING_2 } from '../style'
import TaskCard from './TaskCard'

const cssCard = css`
  display: flex;
  flex-direction: column;
  gap: ${SPACING_2};
  background-color: ${BACKGROUND_COLOR};
  padding: 0rem;
  width: ${rem(18)};
  height: min-content;
  box-shadow: 0.1rem 0.2rem 0.2rem 0.2rem gray;
`

const cssH1 = css`
  background-color: ${color2};
  margin: 0rem;
  padding: ${SPACING_1};
  color: #d3d3d3;
  font-size: ${rem(0.9)};
  text-align: center;
`

const cssBoxTasks = css`
  padding: ${SPACING_2};
  padding-top: 0rem;
  display: flex;
  flex-direction: column;
`

export const Panel = ({ title, openModal, tasks, taskId, setTaskId }) => {
  return (
    <div className={cssCard}>
      <div className={cssH1}>{title}</div>
      <div className={cssBoxTasks}>
        {tasks.map((task) => (
          <TaskCard
            key={task.id}
            {...task}
            openModal={openModal}
            taskId={taskId}
            setTaskId={setTaskId}
          />
        ))}
      </div>
    </div>
  )
}

export default Panel
