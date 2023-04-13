import React from 'react'
import {useState, useEffect, useCallback} from 'react'
import Carousel from './Carousel'
import Info from './Info'
import buildHouse from '../infoBuilders/houseBuilder'
function Game({setCurrentSession ,currentSession, objArray, setHouses, gameMode}) {

  const[initialRender, setInitialRender] = useState(false)

  const [info, setInfo] = useState(false)

  const [score, setScore] = useState(0)

  const [obj1, setObj1] = useState(null)

  const [obj2, setObj2] = useState(null)

  const getRandomHouse = () => {
    var randInt = Math.floor(Math.random()*objArray.length)
    var objArray = objArray.splice(randInt, 1)
    return house[0];
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
      <div className="flex flexType items-center justify-center w-full h-full border-2 bg-white">
        <div className="slideWidth h-full">
          <Carousel
            photos={photoArray1}
            resStyle={"bottom-[73%]"}
            resStyleRight={"ml-[40vw] mt-[10vw]"}
            resStyleLeft={"ml-[5vw] mt-[26vw]"}
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
          <div className="flex flex-col justify-center items-center border rounded-lg bg-white bg-opacity-75 z-50 h-[10rem] w-[10rem]">
          <button className="bg-green-400 border rounded-lg h-[3rem] mb-[1rem] w-[8rem] z-50">
            HIGHER
          </button>
          <button className="bg-green-400 border rounded-lg h-[3rem] w-[8rem] z-50">
            LOWER
          </button>
          </div>
          <div className="absolute rounded-lg flex flex-col items-center justify-center border border-black h-[2rem] w-[2rem] bottom-5 bg-white z-50"
          onClick={() => {setInfo(!info)}}
          >i</div>
          {info ? (<Info info={obj1Info} resStyle={"bottom-20"}/>) : (<></>)}
          {info ? (<Info info={obj2Info} resStyle={"top-20"}/>) : (<></>)}
        </div>
        <button className="absolute rounded-lg top-5 left-5 p-2 bg-red-400 z-50"
        onClick={() => {setCurrentSession('home')}}
        >home</button>
        <div className="h-[3rem] w-[5rem] border z-50 bg-black">

        </div>
        <div className="slideWidth h-full">
          <Carousel
            photos={photoArray2}
            resStyle={"bottom-[23%]"}
            resStyleRight={"ml-[40vw] mb-[26vw]"}
            resStyleLeft={"ml-[5vw] mb-[27vw]"}
          />
        </div >
      </div>
    </>
  )
}

export default Game