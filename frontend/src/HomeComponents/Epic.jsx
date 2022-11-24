import { css } from '@emotion/css'

import {
  EPIC_COLOR_CINZA,
  EPIC_COLOR_ROXO,
  EPIC_COLOR_VERDE,
  EPIC_COLOR_VERDE_CLARO,
  rem,
  SPACING_1,
} from '../style'

const cssEpicRoxo = css`
  background-color: ${EPIC_COLOR_ROXO};
  width: ${rem(6)};
  padding: ${SPACING_1};
  cursor: pointer;
  color: #fff;
  text-align: center;

  &:active {
    border: ${rem(0.1)} solid #ba20ba;
  }
`

const cssEpicVerde = css`
  ${cssEpicRoxo}
  background-color: ${EPIC_COLOR_VERDE};

  &:active {
    border: ${rem(0.1)} solid #519b5c;
  }
`

const cssEpicVerdeClaro = css`
  ${cssEpicRoxo}
  background-color: ${EPIC_COLOR_VERDE_CLARO};

  &:active {
    border: ${rem(0.1)} solid #758e40;
  }
`

const cssEpicCinza = css`
  ${cssEpicRoxo}
  background-color: ${EPIC_COLOR_CINZA};

  &:hover {
    border: ${rem(0.1)} solid #000;
  }
`

const cssMap = {
  cinza: cssEpicCinza,
  roxo: cssEpicRoxo,
  verde: cssEpicVerde,
  'verde claro': cssEpicVerdeClaro,
}

const cssEpicRoxoSelected = css`
  background-color: ${EPIC_COLOR_ROXO};
  width: ${rem(6)};
  padding: ${SPACING_1};
  cursor: pointer;
  color: #fff;
  text-align: center;
  border: ${rem(0.1)} solid #ba20ba;
`

const cssEpicVerdeSelected = css`
  ${cssEpicRoxoSelected}
  background-color: ${EPIC_COLOR_VERDE};
  border: ${rem(0.1)} solid #519b5c;
`

const cssEpicVerdeClaroSelected = css`
  ${cssEpicRoxoSelected}
  background-color: ${EPIC_COLOR_VERDE_CLARO};
  border: ${rem(0.1)} solid #758e40;
`

const cssEpicCinzaSelected = css`
  ${cssEpicRoxoSelected}
  background-color: ${EPIC_COLOR_CINZA};
  border: ${rem(0.1)} solid #000;
`

const cssMapSelected = {
  cinza: cssEpicCinzaSelected,
  roxo: cssEpicRoxoSelected,
  verde: cssEpicVerdeSelected,
  'verde claro': cssEpicVerdeClaroSelected,
}

function Epic({ name, color, selected, onSelect, epic }) {
  if (epic.name === selected)
    return (
      <div
        data-testid={'epic-render-id'}
        className={cssMapSelected[color]}
        onClick={() => onSelect(selected !== epic.name && epic.name)}
      >
        {name}
      </div>
    )
  else
    return (
      <div
        data-testid={'epic-render-id'}
        className={cssMap[color]}
        onClick={() => onSelect(selected !== epic.name && epic.name)}
      >
        {name}
      </div>
    )
}

export default Epic
