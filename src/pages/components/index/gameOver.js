import React from 'react'
import {useEffect} from 'react'

function GameOver({setGameOver, setScore, score}) {

  return (
    <>
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-red-400 text-[10vw]">GAME OVER</h1>
      <p className="text-red-400 text-[3vw] mb-[3vw]">Final Score: {score}</p>
      <button
      onClick={() => {setScore(0); setGameOver(false)}}
      className="text-red-400 border p-4 rounded border-red-400">Play Again?</button>
    </div>
    </>
  )
}

export default GameOver;