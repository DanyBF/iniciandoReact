import { useState } from 'react'
import confetti from 'canvas-confetti'

import { Square } from './components/Square.jsx'
import { TURNS } from './constants.js'
import { checkWinnerFrom, checkEndGameFrom } from './logic/board.js'
import { WinnerModal } from './components/WinnerModal.jsx'
import { saveGameToStorage, resetGameStorage } from './logic/index.js'

function App() {
  const [board, setBoard] = useState(() => {
    const boardFromStorage = window.localStorage.getItem('board')
    return boardFromStorage
      ? JSON.parse(boardFromStorage)
      : Array(42).fill(null)
  })

  const [turn, setTurn] = useState(() => {
    const turnFromStorage = window.localStorage.getItem('turn')
    return turnFromStorage ?? TURNS.Red
  })
  const [winner, setWinner] = useState(null)

  const resetGame = () => {
    setBoard(Array(42).fill(null))
    setTurn(TURNS.Red)
    setWinner(null)

    resetGameStorage()
  }

  const updateBoard = (index) => {
    if (board[index] || winner) return

    const newBoard = [...board]
    newBoard[index] = turn
    setBoard(newBoard)

    const newTurn = turn === TURNS.Red ? TURNS.Blue : TURNS.Red
    setTurn(newTurn)
    //guardar aqui partida
    saveGameToStorage({
      board: newBoard,
      turn: newTurn,
    })
    //revisar si hay ganador
    const newWinner = checkWinnerFrom(newBoard)
    if (newWinner) {
      confetti()
      setWinner(newWinner)
    } else if (checkEndGameFrom(newBoard)) {
      setWinner(false)
    }
  }

  return (
    <main className='board'>
      <h1>Cuatro en Linea</h1>
      <button onClick={resetGame}>Reset del juego</button>
      <section className='game'>
        {board.map((square, index) => {
          return (
            <Square key={index} index={index} updateBoard={updateBoard}>
              {square}
            </Square>
          )
        })}
      </section>

      <section className='turn'>
        <Square isSelected={turn === TURNS.Red}>{TURNS.Red}</Square>
        <Square isSelected={turn === TURNS.Blue}>{TURNS.Blue}</Square>
      </section>

      <WinnerModal resetGame={resetGame} winner={winner} />
    </main>
  )
}

export default App
