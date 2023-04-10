import Link from 'next/link';
import Image from 'next/image'
import Head from 'next/head'
import HomeMenu from './components/index/homeMenu'
import {useState, useEffect} from 'react'
import axios from 'axios'


export default function Home() {

  const [houses, setHouses] = useState();

  const [gameMode, setGameMode] = useState('houses');

  const [playStyle, setPlayStyle] = useState('casual')

  const [startGame, setStartGame] = useState(false);

  useEffect(() => {
    console.log('loading houses')
    const getHouses = async ()  => {
      try {
        const response = await axios.get('http://localhost:3000/houses')
        setHouses(response.data);
      } catch (err) {
        console.error(err);
      }
    }
    getHouses();
  }, [])

  return (
    <>

      <Head>
        <title>Higher or Lower</title>
        <link />
      </Head>
      <div className="flex items-center justify-evenly h-full w-full ring-2 ring-white bg">
          <HomeMenu
            gameMode={gameMode}
            setGameMode={setGameMode}
            playStyle={playStyle}
            setPlayStyle={setPlayStyle}
            setStartGame={setStartGame}
            />
      </div>
    </>
  )
}
