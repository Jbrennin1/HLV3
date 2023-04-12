import React from 'react'
import {useEffect} from 'react'

function Info({resStyle}) {

  return (
    <>
      <div className={`absolute z-50 ${resStyle} flex flex-col items-center rounded-lg bg-white border border-black h-[10rem] w-[80vw]`}>
        <p>Info</p>
        <p>Price</p>
        <p>Size</p>
        <p>Location</p>
      </div>
    </>
  )
}

export default Info