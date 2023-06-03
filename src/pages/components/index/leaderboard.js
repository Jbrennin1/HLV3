import React from 'react'

function LeaderBoard({leaderBoard}) {
  return (
    <>
        <div className="flex flex-col h-full w-5/6 regText pl-1 pt-1 items-center">
        <p className="leaderBoard">LEADERBOARD</p>
            {leaderBoard && leaderBoard.map((user, idx) => {
              return (<div key={idx} className="flex flex-col w-[75%] h-[15%] bg-black bg-opacity-30 rounded items-center justify-evenly mb-2">
                <p className="name">{user.name}</p>
                <p className="score">{user.highScore}</p>
              </div>)
            })}

        </div>
        <p className="text-[.8rem] mb-[1rem]">(daily)</p>
    </>
  )
}

export default LeaderBoard