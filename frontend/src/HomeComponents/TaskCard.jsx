import { css } from '@emotion/css'

import Prioridade from './Prioridade'
import Pontos from './Pontos'
import { COLOR_MAP } from '../constants'
import { rem, SPACING_2 } from '../style'

const cssTask = css`
  background-color: #999;
  font-size: ${rem(1.2)};
  padding: ${SPACING_2};
  display: flex;
  gap: ${SPACING_2};
  width: 75%;
  margin: ${SPACING_2};
  flex-wrap: wrap;
  align-items: center;
  color: #fff;
  cursor: pointer;
`

const cssOutros = css`
  background-color: transparent;
  padding: 0rem;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Task = ({
  titulo,
  id,
  prioridade,
  pontos,
  openModal,
  epic: { color },
}) => {
  const cssTaskColor = css`
    ${cssTask};
    background-color: ${COLOR_MAP[color]};
  `
  return (
    <div className={cssTaskColor} onClick={() => openModal(id)}>
      {titulo}
      <div className={cssOutros}>
        {' '}
        <Prioridade prioridade={prioridade} />
        <Pontos pontos={pontos} />{' '}
      </div>
    </div>
  )
}

export default Task
