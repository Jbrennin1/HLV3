import React from 'react'
import {useEffect} from 'react'

function Info({resStyle}) {

  return (
    <>
      <div className={`absolute ${resStyle} flex flex-col items-center rounded-lg bg-white bg-opacity-75 border h-[10rem] w-[80vw]`}>
        <p>Info</p>
        <p>Price</p>
        <p>Size</p>
        <p>Location</p>
      </div>
    </>
  )
}

export default Info