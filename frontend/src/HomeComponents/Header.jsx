import { css } from '@emotion/css'

import Logo from '../Logo'
import { SPACING_2, SPACING_4 } from '../style'
import Botao from './Botao'

const cssHeader = css`
  width: 100%;
  padding: ${SPACING_2};
  display: flex;
`

const cssBtn = css`
  padding: ${SPACING_4};
  margin-right: ${SPACING_4};
  justify-content: right;
  width: 100%;
  display: flex;
`

const cssLogo = css`
  padding: ${SPACING_2};
  justify-content: left;
  width: auto;
  display: flex;
`

function Header({ openModal }) {
  return (
    <div className={cssHeader}>
      <div className={cssLogo}>
        <Logo />
      </div>
      <div className={cssBtn}>
        <Botao openModal={openModal} botao="+" />
      </div>
    </div>
  )
}

export default Header
