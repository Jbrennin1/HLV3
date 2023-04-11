import React from 'react'
import {useState, useEffect, useCallback} from 'react'
import Carousel from './Carousel'
import Info from './Info'
function Game({setCurrentSession ,currentSession, objArray, setHouses, gameMode}) {

  const[initialRender, setInitialRender] = useState(false)

  const [info, setInfo] = useState(false)

  const[score, setScore] = useState(0)

  const[obj1, setObj1] = useState(null)

  const[obj2, setObj2] = useState(null)

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

  return (
    <>
      <div className="flex flexType items-center justify-center w-full h-full border-2">
        <div className="slideWidth h-full bg-black bg-opacity-25">
          <Carousel
            photos={photoArray1}
          />
        </div >
        <div className="absolute flex flex-col items-center justify-center h-full w-[5rem]">
          <div className="absolute rounded-lg flex flex-col items-center justify-center border h-[3rem] w-[3rem] top-5 bg-white">
            <p>Score</p><p>0</p>
          </div>
          <button className="bg-green-400 border rounded-lg h-[3rem] mb-[1rem] w-full">HIGHER</button>
          <button className="bg-green-400 border rounded-lg h-[3rem] w-full">LOWER</button>
          <div className="absolute rounded-lg flex flex-col items-center justify-center border border-black h-[2rem] w-[2rem] bottom-5 bg-white"
          onClick={() => {setInfo(!info)}}
          >i</div>
          {info ? (<Info resStyle={"bottom-20"}/>) : (<></>)}
          {info ? (<Info resStyle={"top-20"}/>) : (<></>)}
        </div>
        <button className="absolute rounded-lg top-5 left-5 p-2 bg-red-400"
        onClick={() => {setCurrentSession('home')}}
        >home</button>
        <div className="slideWidth h-full bg-white bg-opacity-25">
          <Carousel
            photos={photoArray2}
          />
        </div >
      </div>
    </>
  )
}

export default Game