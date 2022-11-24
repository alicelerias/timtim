import { css } from '@emotion/css'

import { color8, COLOR_BLUE_400, rem, SPACING_2 } from '../style'

const cssBotao = css`
  background-color: ${color8};
  color: #fff;
  padding: ${SPACING_2};
  border-radius: 100%;
  cursor: pointer;
  height: ${rem(2.8)};
  aspect-ratio: 1;
  border: none;
  font-size: ${rem(3)};
  width: auto;
  box-shadow: 0.1rem 0.1rem 0.1rem gray;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    background-color: ${COLOR_BLUE_400};
  }
`

function Botao({ botao, openModal }) {
  // function showShowModal() {
  //   setShowModalCadastro(!showModalCadastro)

  // }
  return (
    <button
      data-testid={'botao-test-render'}
      className={cssBotao}
      onClick={() => openModal()}
    >
      {botao}
    </button>
  )
}

export default Botao
