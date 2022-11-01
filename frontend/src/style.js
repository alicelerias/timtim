import { Global, css } from '@emotion/react'

export const color1 = '#06060f'
export const color2 = '#213147'
export const COLOR_BLUE_400 = '#576794'
export const color4 = '#9ca0df'
export const color5 = '#dfd4ea'
export const color6 = '#b49ccb'
export const color7 = '#967eac'
export const color8 = '#656ab4'
export const BACKGROUND_COLOR = '#d7c8e7'
export const EPIC_COLOR_ROXO = '#b281b2'
export const EPIC_COLOR_VERDE = '#84b88c'
export const EPIC_COLOR_VERDE_CLARO = '#9bb465'
export const EPIC_COLOR_CINZA = '#999999'

export const rem = (value) => `${value}rem`;

export const SPACING_BASE = 0.5;
export const SPACING_1 = rem(SPACING_BASE);
export const SPACING_2 = rem(SPACING_BASE * 1.5);
export const SPACING_3 = rem(SPACING_BASE * 2);
export const SPACING_4 = rem(SPACING_BASE * 4);
export const SPACING_5 = rem(SPACING_BASE * 6)

export const CSS_FONT_REGULAR = css`
  font-family: 'Times New Roman', Times, serif;
  `

export const CSS_FONT_BOLD = css`
  ${CSS_FONT_REGULAR}
  font-weight: bold;
`

const cssGlobal = css`
  * {
    ${CSS_FONT_REGULAR}
  }

  &::selection {
    background-color: ${COLOR_BLUE_400};
    color: #fff;
  }

  body {
    background-color: ${BACKGROUND_COLOR};
  }
`

const GlobalStyle = () => <Global styles={cssGlobal} />

export default GlobalStyle

