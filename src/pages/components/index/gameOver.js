import React from 'react'
import {useEffect} from 'react'

function GameOver() {

  return (
    <>
    <div className="bg-red-400">
      <h1>GAME OVER</h1>
      <button className="mt-[1rem]">Play Again?</button>
    </div>
    </>
  )
}

export default GameOver;