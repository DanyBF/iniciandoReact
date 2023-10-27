import { Slot } from './Slot'
import { useState } from 'react'

export const Board = () => {
  const [board, setBoard] = useState([
    ['', '', '', '', '', '', ''],
    ['', '', '', '', '', '', ''],
    ['', '', '', '', '', '', ''],
    ['', '', '', '', '', '', ''],
    ['', '', '', '', '', '', ''],
    ['', '', '', '', '', '', ''],
  ])
  const [currPlayer, setCurrPlayer] = useState('X')
  const [oppPlayer, setOppPlayer] = useState('O')
  const [gameOver, setGameOver] = useState(false)
  return (
    <>
      <div id='board'>
        {board.map((row, i) => {
          return row.map((ch, j) => {
            return <Slot ch={ch} y={i} x={j} />
          })
        })}
      </div>
    </>
  )
}
