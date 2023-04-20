import React from 'react'

function LeaderBoard() {

  return (
<>
  <div className="border-8 w-full h-full relative">
    <p className="leaderBoard">CHAT</p>

    <div className="chat-form-container border-8 absolute bottom-0 w-full">
      <form className="border-8">
        <input className="w-full" />
      </form>
    </div>

    <div className="border-8"></div>
  </div>
</>
  )
}

export default LeaderBoard