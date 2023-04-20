import Link from 'next/link';
import Image from "next/image"
import Head from 'next/head'
import HomeMenu from './components/index/homeMenu'
import Game from './components/index/game'
import {useState, useEffect} from 'react'
import axios from 'axios'


export default function Home() {

  const [houses, setHouses] = useState([]);

  const [gameMode, setGameMode] = useState('houses');

  const [playStyle, setPlayStyle] = useState('casual')

  const [currentSession, setCurrentSession] = useState('home')

  const [name, setName] = useState(null)

  const [highScore, setHighScore] = useState(0)

  const [leaderBoard, setLeaderBoard] = useState([])

  useEffect(() => {
    console.log('loading houses')
    const getHouses = async ()  => {
      try {
        const response = await axios.get('/houses')
        setHouses(response.data);
      } catch (err) {
        console.error(err);
      }
    }
    getHouses();
  }, [])

  useEffect(() => {
    console.log('loading houses')
    const getName = async ()  => {
      try {
        const response = await axios.get('/get-name')
        setName(response.data.name);
        if(response.data.highScore) {
          setHighScore(response.data.highScore)
        }
      } catch (err) {
        console.error(err);
      }
    }
    getName();
  }, [])

  useEffect(() => {
    console.log('Loading LeaderBoard')
    const getLeaderBoard = async () => {
      const response = await axios.get('/leaderBoard')
      setLeaderBoard(response.data)
    }
    getLeaderBoard();
  }, [])

  return (
    <>

      <Head>
        <title>Higher or Lower</title>
        <link />
      </Head>
      <div className="flex items-center justify-evenly h-full w-full ring-2 ring-white">
        {currentSession === 'home' ? (
          <HomeMenu
            gameMode={gameMode}
            setGameMode={setGameMode}
            playStyle={playStyle}
            setPlayStyle={setPlayStyle}
            setCurrentSession={setCurrentSession}
            name={name}
            highScore={highScore}
            leaderBoard={leaderBoard}
          />
          ):(
          <Game
            currentSession={currentSession}
            setCurrentSession={setCurrentSession}
            objArray={houses}
            setHouses={setHouses}
            playStyle={playStyle}
            gameMode={gameMode}
            highScore={highScore}
            setHighScore={setHighScore}
            name={name}
          />)}
      </div>
    </>
  )
}
