import { css } from '@emotion/css'

import { color2, COLOR_BLUE_400, rem, SPACING_1 } from '../../style'
import { COLOR_MAP } from '../../constants'

const cssImg = css`
  aspect-ratio: 1;
  border-radius: 100%;
  height: ${rem(2.5)};
  opacity: 0.9;
`

const cssName = css`
  width: 100%;
`

const cssSelected = css`
  color: ${COLOR_BLUE_400};
  display: flex;
  gap: ${SPACING_1};
  text-align: center;
  align-items: center;
  justify-content: start;
  overflow: hidden;
`

const cssSelectedOther = css`
  ${cssSelected}
  color: #000;
  &:hover {
    border-bottom: 0.1rem solid ${color2};
  }
`

export const UserRender = ({ selected, onMouseDown, item }) => {
  console.log('UserRender', item)
  if (!item) return
  return (
    <div
      className={selected ? cssSelected : cssSelectedOther}
      onMouseDown={onMouseDown}
    >
      <img alt="Not found" className={cssImg} src={item.profile_picture} />
      <div className={cssName}>{item.display}</div>
    </div>
  )
}

export const EpicRender = ({ selected, onMouseDown, item }) => {
  if (!item) return

  const cssTaskColor = css`
    ${cssImg};
    background-color: ${COLOR_MAP[item.color]};
  `

  if (item.color)
    return (
      <div
        className={selected ? cssSelected : cssSelectedOther}
        onMouseDown={onMouseDown}
      >
        <div className={cssTaskColor}></div>
        <div className={cssName}>{item.display}</div>
      </div>
    )
  else
    return (
      <div
        className={selected ? cssSelected : cssSelectedOther}
        onMouseDown={onMouseDown}
      >
        <div className={cssName}>{item.display}</div>
      </div>
    )
}
