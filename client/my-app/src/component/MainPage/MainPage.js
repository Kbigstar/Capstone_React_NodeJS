import * as React from 'react'
import { useTrail, useChain, useSprings, animated, useSpringRef } from '@react-spring/web'

import styles from './styles.module.css'
import { Container } from '@mui/material';

const COORDS = [
  // C
  [5, 40],
  [10, 40],
  [15, 40],
  [5, 45],
  [5, 50],
  [5, 55],
  [5, 60],
  [10, 60],
  [15, 60],

  // A
  [25, 40],
  [30, 40],
  [35, 40],
  [25, 45],
  [25, 50],
  [25, 55],
  [25, 60],
  [35, 45],
  [35, 50],
  [35, 55],
  [35, 60],
  [30, 50],

  // P
  [45, 40],
  [45, 45],
  [45, 50],
  [45, 55],
  [45, 60],
  [50, 40],
  [55, 40],
  [55, 45],
  [55, 50],
  [50, 50],

  // S
  [75, 40],
  [70, 40],
  [65, 40],
  [65, 45],
  [65, 50],
  [70, 50],
  [75, 50],
  [75, 55],
  [75, 60],
  [70, 60],
  [65, 60],

  // T
  [85, 40],
  [90, 40],
  [95, 40],
  [90, 45],
  [90, 50],
  [90, 55],
  [90, 60],

  // O
  [105, 40],
  [105, 45],
  [105, 50],
  [105, 55],
  [105, 60],
  [110, 40],
  [115, 40],
  [115, 45],
  [115, 50],
  [115, 55],
  [115, 60],
  [110, 60],

  // N
  [125, 40],
  [125, 45],
  [125, 50],
  [125, 55],
  [125, 60],
  [130, 45],
  [135, 50],
  [140, 40],
  [140, 45],
  [140, 50],
  [140, 55],
  [140, 60],

  // E
  [150, 40],
  [150, 45],
  [150, 50],
  [150, 55],
  [150, 60],
  [155, 40],
  [160, 40],
  [155, 50],
  [160, 50],
  [155, 60],
  [160, 60],
]

const STROKE_WIDTH = 0.25

const OFFSET = STROKE_WIDTH / 2

const MAX_WIDTH = 170 + OFFSET * 2
const MAX_HEIGHT = 105 + OFFSET * 2


function MainPage() {
const gridApi = useSpringRef()

  const gridSprings = useTrail(36, {
    ref: gridApi,
    from: {
      x2: 0,
      y2: 0,
    },
    to: {
      x2: MAX_WIDTH,
      y2: MAX_HEIGHT,
    },
  })

  const boxApi = useSpringRef()

  const [boxSprings] = useSprings(COORDS.length, i => ({
    ref: boxApi,
    from: {
      scale: 0,
    },
    to: {
      scale: 1,
    },
    delay: i * 35,
    config: {
      mass: 2,
      tension: 220,
    },
  }))

  useChain([gridApi, boxApi], [0, 1], 1500)

  return (
    <Container maxWidth="xl" className={styles['background-container']} sx={{paddingTop: '100px'}}>
      <div className={styles.container}>
        <svg viewBox={`0 0 ${MAX_WIDTH} ${MAX_HEIGHT}`}>
          <g>
            {gridSprings.map(({ x2 }, index) => (
              <animated.line
                x1={0}
                y1={index * 5 + OFFSET}
                x2={x2}
                y2={index * 5 + OFFSET}
                key={index}
                strokeWidth={STROKE_WIDTH}
                stroke="currentColor"
              />
            ))}
            {gridSprings.map(({ y2 }, index) => (
              <animated.line
                x1={index * 5 + OFFSET}
                y1={0}
                x2={index * 5 + OFFSET}
                y2={y2}
                key={index}
                strokeWidth={STROKE_WIDTH}
                stroke="currentColor"
              />
            ))}
          </g>
          {boxSprings.map(({ scale }, index) => (
            <animated.rect
              key={index}
              width={5}
              height={5}
              fill="currentColor"
              style={{
                transformOrigin: `${5 + OFFSET * 2}px ${5 + OFFSET * 2}px`,
                transform: `translate(${COORDS[index][0] + OFFSET}px, ${COORDS[index][1] + OFFSET}px)`,
                scale,
              }}
            />
          ))}
        </svg>
      </div>
    </Container>
  )

}
export default MainPage;