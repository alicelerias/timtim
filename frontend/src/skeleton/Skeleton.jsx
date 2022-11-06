import { css } from '@emotion/css'
import { keyframes } from '@emotion/react'

import React from 'react'
import { cssCard, cssH1 } from '../HomeComponents/Panel'

const blinker = keyframes`
  50% {
    opacity: 0;
  }
`

const cssCardSkeleton = css`
  ${cssCard}
  height: 20rem;
  filter: brightness(0.8);
  animation: ${blinker} 4s linear infinite;
`

const cssH1Skeleton = css`
  ${cssH1}
  height: 1rem;
`

function Skeleton() {
  return (
    <>
      <div className={cssCardSkeleton}>
        <div className={cssH1Skeleton}></div>
      </div>
      <div className={cssCardSkeleton}>
        <div className={cssH1Skeleton}></div>
      </div>
      <div className={cssCardSkeleton}>
        <div className={cssH1Skeleton}></div>
      </div>
    </>
  )
}

export default Skeleton
