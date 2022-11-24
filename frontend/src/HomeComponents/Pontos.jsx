import { css } from '@emotion/css'

import { rem, SPACING_2 } from '../style'

const cssPontos = css`
  background-color: #d9d9d9;
  padding: ${SPACING_2};
  opacity: 0.4;
  aspect-ratio: 1;
  border-radius: 100%;
  height: auto;
  width: auto;
  font-size: ${rem(1.3)};
  text-align: center;
  color: #000;
`

function Pontos({ pontos }) {
  return (
    <div className={cssPontos} data-testid={'pontos-test-id'}>
      {pontos}
    </div>
  )
}

export default Pontos
