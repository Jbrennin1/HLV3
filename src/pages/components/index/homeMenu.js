import React from 'react'

function HomeMenu({setGameMode, gameMode, playStyle, setPlayStyle, setStartGame}) {

  const btnOn = "flex justify-center items-center w-1/2 bg-gradient-to-b from-red-500 to-red-400 h-[2.8rem] rounded shadow-lg shadow-black transition duration-300"
  const btnOff = "flex justify-center items-center w-1/2 h-[2.8rem] rounded transition duration-1000 hover:duration-300 hover:transition-all bg-gradient-to-b from-red-400 to-red-300 shadow-md shadow-black"

  return (
    <div className="regText flex flex-col items-center justify-center w-full h-full">
      <div className="flex flex-col items-center justify-center h-full w-full bg-white bg-opacity-25">
        <div className="flex flex-col items-center justify-center h-3/6 w-4/6 pb-20">
        <p className="title">HIGHER OR LOWER?</p>
        <div className="w-5/6 border border-black"></div>
        <div className="flex flex-row w-full h-[15rem] py-5">

          {/*GAME SELECTION*/}
          <div className="flex flex-col items-center justify-center  border-r-2 border-black w-1/3 h-full">

          {gameMode === 'houses' ?

          <div className="w-full flex justify-center items-center h-[5rem]">
            <button className={btnOn}>
              <p>HOUSES</p>
            </button>
          </div>
           :
          <div className="w-full flex justify-center items-center h-[5rem]">
            <button className={btnOff} onClick={() => {setGameMode('houses')}}>
              HOUSES
            </button>
          </div>
            }

          {gameMode === 'cars' ?
            <div className="w-full flex justify-center items-center h-[5rem]">
              <button className={btnOn}>
                CARS
              </button>
            </div>
           :
            <div className="w-full flex justify-center items-center h-[5rem]">
              <button className={btnOff}onClick={() => {setGameMode('cars')}}>
                CARS
              </button>
            </div>
          }
          </div>

          {/*SCORE SECTION*/}
          <div className="flex flex-col items-center justify-center border-black w-1/3 h-full">
            <p>HighScore</p>
            <button className="flex items-center px-2 border border-black h-[2rem] rounded mb-[1rem] mt-[.3rem]">14</button>
            <p>LastScore</p>
            <button className="flex items-center px-2 border border-black h-[2rem] rounded mt-[.3rem]">3</button>
          </div>

          {/*PLAYSTYLE SELECTION*/}
          <div className="flex flex-col items-center justify-center border-l-2 border-black w-1/3 h-full">

          {playStyle === 'casual' ?
            <div className="w-full flex justify-center items-center h-[5rem]">
            <button className={btnOn}>
              <p>CASUAL</p>
            </button>
            </div>
           :
           <div className="w-full flex justify-center items-center h-[5rem]">
           <button className={btnOff} onClick={() => {setPlayStyle('casual')}}>
              CASUAL
            </button>
            </div>
            }

          {playStyle === 'timed' ?
            <div className="w-full flex justify-center items-center h-[5rem]">
            <button className={btnOn}>
              TIMED
            </button>
            </div>
           :
           <div className="w-full flex justify-center items-center h-[5rem]">
           <button className={btnOff} onClick={() => {setPlayStyle('timed')}}>
              TIMED
            </button>
            </div>
          }
          </div>
        </div>

        {/*PLAY BUTTON*/}
        <div className="flex justify-center w-full h-[3rem]">
        <button className="flex justify-center items-center glow border bg-gradient-to-b from-red-500 to-red-400 shadow-md shadow-black border-black w-2/6 h-[3rem] rounded mt-[2rem] transition duration-300 focus:h-[0rem] focus:text-[0px] focus:w-0 focus:border-0 focus:transition-all">PLAY</button>
        </div>
        </div>
      </div>
    </div>
  )
}

export default HomeMenu