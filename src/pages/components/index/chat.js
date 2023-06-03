import React from 'react'
import { useState } from 'react'

function Chat({name}) {

  const [chatEntry, setChatEntry] = useState("")

  const [chats, setChats] = useState([])

  const handleSubmit = (e) => {
    e.preventDefault();
    setChats((prevChats) => [...prevChats, chatEntry])
    setChatEntry('')
    console.log(chats)
  }

  const handleChange = (e) => {
    setChatEntry(e.target.value)
  }

  return (
<>
  <div className="w-full h-full relative">
    <div className="flex flex-col items-center h-[93%]">
    <div className="flex justify-center border-b w-[80%]">
    <p className="leaderBoard">CHAT</p>
    </div>
    <div>
    {chats && chats.map((chat, idx) => {
  return (
    <div key={idx} className="flex items-center">
      <p className="text-[1vw] mr-[1vw]">{name}:</p>
      <p className="text-[1vw]">{chat}</p>
    </div>
  )
})}
    </div>
    </div>
    <div className="w-full h-[7%]">

      <form onSubmit={handleSubmit} className="flex h-full">
        <input value={chatEntry} onChange={handleChange} type="text" className="w-full rounded bg-opacity-50 bg-black"/>
        <button type="submit" className="flex justify-center items-center border-black rounded bg-opacity-75 bg-black">⪢</button>
      </form>
    </div>
  </div>
</>
  )
}

export default Chat