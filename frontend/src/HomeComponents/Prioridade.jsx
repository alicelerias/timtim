import { css } from '@emotion/css'

import { rem, SPACING_2 } from '../style'

const cssPriority = css`
  background-color: #d9d9d9;
  width: auto;
  height: 30%;
  padding: ${SPACING_2};
  display: flex;
  margin: ${SPACING_2};
  text-transform: uppercase;
  font-weight: bold;
  font-size: ${rem(0.9)};
  border-radius: ${rem(0.7)};
  align-items: center;
  opacity: 0.4;
`

const map_prioridade = {
  hight: '#cd4e4e',
  medium: '#cdc94e',
  low: '#67CD4E',
}

function Prioridade({ prioridade }) {
  const cssPrioridadeColor = css`
    ${cssPriority};
    color: ${map_prioridade[prioridade]};
  `
  if (prioridade)
    return (
      <div data-testid={'prioridade-test-id'} className={cssPrioridadeColor}>
        {prioridade}
      </div>
    )
}

export default Prioridade
