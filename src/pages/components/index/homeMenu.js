import React from 'react'
import LeaderBoard from './leaderboard'
import Chat from './chat'
function HomeMenu({setGameMode, gameMode, playStyle, setPlayStyle, setCurrentSession}) {
  const btnOn = "regText flex justify-center w-1/2 text-white font-bold py-2 px-4 rounded-md shadow-md shadow-lg shadow-black border border-white bg-black bg-opacity-50"
  const btnOff = "regText flex justify-center w-1/2 text-white font-bold py-2 px-4 rounded-md shadow-md shadow-md shadow-black border border-white bg-black bg-opacity-10"

  const playGame = () => {
    if(gameMode === 'houses' && playStyle === 'casual') {
      setCurrentSession('hc')
    } else if (gameMode === 'cars' && playStyle === 'casual') {
      setCurrentSession('cc')
    } else if (gameMode === 'houses' && playStyle === 'timed') {
      setCurrentSession('ht')
    } else if (gameMode === 'cars' && playStyle === 'timed') {
      setCurrentSession('ct')
    }
  }

  return (
    <div className="regText flex flex-col items-center justify-center w-full h-full bg">
      <div className="flex flexType items-center justify-center h-full w-full bg-blue-400 bg-opacity-25">

        <div className="responsiveWidthHeight rounded-lg flex flex-col items-center h-1/4 bg-black bg-opacity-25">
          <LeaderBoard/>
        </div>

        <div className="flex flex-col items-center justify-center h-1/2 w-4/6">
        <p className="title">HIGHER OR LOWER?</p>
        <div className="w-5/6 border border-black"></div>
        <div className="flex flex-row w-full h-[full] py-5">

          {/*GAME SELECTION*/}
          <div className="flex flex-col items-center justify-center  border-r-2 border-black w-1/3 h-full">

          {gameMode === 'houses' ?

          <div className="w-full flex justify-center items-center h-[5vw]">
            <button className={`${btnOn} mb-[2rem]`}>
              HOUSES
            </button>
          </div>
           :
          <div className="w-full flex justify-center items-center h-[5vw]">
              <button className={`${btnOff} mb-[2rem]`} onClick={() => {setGameMode('houses')}}>
                HOUSES
              </button>
          </div>
            }

          {gameMode === 'cars' ?
            <div className="w-full flex justify-center items-center h-[5vw]">
              <button className={btnOn}>
                CARS
              </button>
            </div>
           :
            <div className="w-full flex justify-center items-center h-[5vw]">
              <button className={btnOff}onClick={() => {setGameMode('cars')}}>
                CARS
              </button>
            </div>
          }
          </div>

          {/*SCORE SECTION*/}
          <div className="flex flex-col items-center justify-center w-1/3 h-full">
            <p>HighScore</p>
            <button className="regText flex items-center px-2  rounded mb-[1rem] mt-[.3rem] h-[2.5vw]">14</button>
            <p>LastScore</p>
            <button className="regText flex items-center px-2 h-[2.5vw] rounded mt-[.3rem]">3</button>
          </div>

          {/*PLAYSTYLE SELECTION*/}
          <div className="flex flex-col items-center justify-center border-l-2 border-black w-1/3 h-full">

          {playStyle === 'casual' ?
            <div className="w-full flex justify-center items-center h-[5vw]">
            <button className={`${btnOn} mb-[2rem]`}>
              <p>CASUAL</p>
            </button>
            </div>
           :
           <div className="w-full flex justify-center items-center h-[5vw]">
           <button className={`${btnOff} mb-[2rem]`} onClick={() => {setPlayStyle('casual')}}>
              CASUAL
            </button>
            </div>
            }

          {playStyle === 'timed' ?
            <div className="w-full flex justify-center items-center h-[5vw]">
            <button className={btnOn}>
              TIMED
            </button>
            </div>
           :
           <div className="w-full flex justify-center items-center h-[5vw]">
           <button className={btnOff} onClick={() => {setPlayStyle('timed')}}>
              TIMED
            </button>
            </div>
          }
          </div>
        </div>

        {/*PLAY BUTTON*/}
        <div className="flex justify-center w-full h-[3rem]">
          <button className="regText flex justify-center items-center glow border bg-gradient-to-b from-red-500 to-red-400 shadow-md shadow-black border-black w-2/6 h-[3rem] rounded mt-[3vw] focus:mt-[3.2vw] focus:shadow focus:mt-[3.2vw]hover:transition hover:duration-300"
          onClick={() => {playGame()}}
          >PLAY</button>
        </div>
        </div>
        <div className="responsiveWidthHeight flex flex-col items-center rounded-lg h-1/4 bg-black bg-opacity-25">
          <Chat />
        </div>
      </div>
    </div>
  )
}

export default HomeMenu