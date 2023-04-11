import React from 'react'

function LeaderBoard() {

  return (
    <>
      <p className="leaderBoard">LEADERBOARD</p>
        <div className="flex flex-col h-full w-5/6 regText pl-1 pt-1">
          <div className="flex">
          <div className="flex-col justify-evenly mr-[1rem]">
            <p className="lbText w-[5vw] border-b">User</p>
              <div className="flex">
                <p className="lbText ">HLproX</p>
              </div>
          </div>
          <div className="flex-col justify-evenly">
            <p className="lbText mr-[5vw] w-[5vw] border-b">Score</p>
              <div className="flex">
                <p className="lbText mr-[5vw]">15</p>
              </div>
          </div>
          </div>

        </div>
        <p className="text-[.8rem] mb-[1rem]">(daily)</p>
    </>
  )
}

export default LeaderBoard