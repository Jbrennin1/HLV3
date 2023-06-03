import React from 'react'
import {useState, useEffect, useCallback} from 'react'
import Carousel from './Carousel'
import Info from './Info'
import buildHouse from '../../../infoBuilders/houseBuilder'
import GameOver from './gameOver'
import axios from 'axios'
function Game({setCurrentSession ,currentSession, objArray, setHouses, gameMode, highScore, setHighScore, name}) {


  const[initialRender, setInitialRender] = useState(false)

  const [info, setInfo] = useState(false)

  const [score, setScore] = useState(0)

  const [obj1, setObj1] = useState(null)

  const [obj2, setObj2] = useState(null)

  const [gameOver, setGameOver] = useState(false)

  const handleHigher = () => {
    if(obj1Info.price < obj2Info.price) {
      setScore(score+1)
      setObj1(obj2)
      setObj2(getRandomHouse(objArray))
    } else {
      endGame()
    }
  }

  const handleLower = () => {
    if(obj1Info.price > obj2Info.price) {
      setScore(score+1)
      setObj1(obj2)
      setObj2(getRandomHouse(objArray))
    } else {
      endGame()
    }
  }

  const endGame = () => {
    if(score > highScore) {
      setHighScore(score)
      axios.post('/highScore', {name: name, highScore: score})
    }

    setGameOver(true)
  }

  const getRandomHouse = (objArray) => {
    console.log(objArray)
    var randInt = Math.floor(Math.random()*objArray.length)
    var obj = objArray[randInt]
    var objArray = objArray.splice(randInt, 1)
    return obj;
  }

  useEffect(() => {
    if(objArray.length !== 0 && obj1 === null) {
      var randInt = Math.floor(Math.random()*objArray.length)
      setObj1(objArray.splice(randInt, 1)[0])
      randInt = Math.floor(Math.random()*objArray.length)
      setObj2(objArray.splice(randInt, 1)[0])
    }
  }, [objArray, obj1]);

  const [photoArray1, setPhotoArray1] = useState([]);
  const [photoArray2, setPhotoArray2] = useState([]);

  useEffect(() => {
    if (gameMode === 'houses' && obj1) {
      setPhotoArray1(obj1.photos);
      setPhotoArray2(obj2.photos);
    }
  }, [obj1, obj2, gameMode, photoArray1, photoArray2]);

  const[obj1Info, setObj1Info] = useState({
    price: 0,
    info: []
  })
  const[obj2Info, setObj2Info] = useState({
    price: 0,
    info: []
  })

  useEffect(() => {
    setObj1Info(buildHouse(obj1))
    setObj2Info(buildHouse(obj2))
  }, [obj1, obj2])



  return (
    <>
    {gameOver ? (<GameOver setGameOver={setGameOver} setScore={setScore} score={score}/>):(
    <div className="flex flexType resCenter w-full h-full bg-gradient-to-b from-blue-500 via-white to-blue-500 bg-opacity-70">
    <div className="slideWidth h-full imageDiv overflow-hidden">
      <Carousel
        photos={photoArray1}
        resStyle={"bottom-[73%]"}
        resStyleRight={"ml-[40vw] mt-[10vw]"}
        resStyleLeft={"ml-[5vw] mt-[26vw]"}
        resImageBorder={"border-r-2 p-4"}
      />
    </div >
    <div className="absolute flex flex-col items-center justify-center h-full w-[5rem]">
      <div className="absolute rounded-lg flex flex-col items-center justify-center border h-[3rem] w-[3rem] top-5 bg-white z-50 border-black">
        <p>
          Score
        </p>
        <p>
          {score}
        </p>
      </div>
      <div className="flex flex-col justify-center items-center border-2 border-white rounded-lg bg-gradient-to-b from-red-500 to-red-400 bg-opacity-75 z-50 h-[10rem] w-[10rem]">
      <button className="
      gameButton flex justify-center items-center text-white font-bold py-2 px-4 rounded-md shadow-lg shadow-black border border-white bg-opacity-75
      bg-black h-[3rem] mb-[1rem] w-[8rem] z-50 hover:bg-opacity-100"
      onClick={handleHigher}>
        HIGHER
      </button>
      <button className="gameButton flex justify-center items-center text-white font-bold py-2 px-4 rounded-md shadow-lg shadow-black border border-white bg-opacity-75
      bg-black h-[3rem] w-[8rem] z-50 hover:bg-opacity-100"
      onClick={handleLower}>
        LOWER
      </button>
      </div>
      <div className="absolute rounded-lg flex flex-col items-center justify-center border border-black h-[2rem] w-[2rem] bottom-5 bg-white z-40"
      onClick={() => {setInfo(!info)}}
      >i</div>
      <div className="absolute flex flexType justify-evenly gap-[16%] h-screen w-screen z-1 items-center">
      {info ? (<Info info={obj1Info} show={true} resStyle={"bottom-20"}/>) : (<></>)}
      {info ? (<Info info={obj2Info} show={false} resStyle={"top-20"}/>) : (<></>)}
      </div>
    </div>
    <button className="absolute rounded-lg top-5 left-5 p-2 bg-gradient-to-b from-red-600 to-red-400 z-50"
    onClick={() => {setCurrentSession('home')}}
    >home</button>

    <div className="absolute flex justify-evenly h-[5rem] w-full z-30 border  bg-gradient-to-b from-red-400 to-red-600 priceBox">
    <div className="h-full w-[25%] z-50 bg-gradient-to-b from-red-400 to-red-600 priceDivLeft text-green-600 flex items-center justify-center">
      <p className="bored tex">${obj1Info.price}</p>
    </div>
    <div className="h-full w-[25%] z-50 bg-gradient-to-b from-red-400 to-red-600 priceDivRight text-green-600 flex items-center justify-center">
      <p>???</p>
    </div>
    </div>




    <div className="slideWidth h-full imageDiv overflow-hidden">
      <Carousel
        photos={photoArray2}
        resStyle={"bottom-[23%]"}
        resStyleRight={"ml-[40vw] mb-[26vw]"}
        resStyleLeft={"ml-[5vw] mb-[27vw]"}
        resImageBorder={"border-l-2 p-4"}
      />
    </div >
  </div>
    )}
    </>
  )
}

export default Game