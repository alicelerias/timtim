import React from 'react'
import { css } from '@emotion/css'

import { color2, rem } from '../style'

const cssImgUser = css`
  aspect-ratio: 1;
  border-radius: 3rem;
  width: 3rem;
  height: 80%;
  background-color: #fff;
  cursor: pointer;
  justify-content: center;
  display: flex;
  align-items: center;
`

const cssImgUserSelected = css`
  ${cssImgUser};
  border: ${rem(0.1)} solid ${color2};
`

const cssImg = css`
  aspect-ratio: 1;
  border-radius: 100%;
  width: 100%;
  height: 100%;
  opacity: 0.9;
`

const User = ({ selected, onSelect, user }) => {
  const isSelected = selected === user.name
  // const context = useCon

  return (
    <div
      className={isSelected ? cssImgUserSelected : cssImgUser}
      name={user.name}
      id={user.id}
      onClick={() => onSelect(selected !== user.name && user.name)}
    >
      <img className={cssImg} alt="x" src={user.profile_picture} />
    </div>
  )
}

export default User
