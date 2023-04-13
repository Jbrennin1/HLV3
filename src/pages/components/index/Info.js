import React from 'react'
import {useEffect} from 'react'

function Info({resStyle, info}) {

  return (
    <>
      <div className={`absolute z-50 ${resStyle} flex flex-col items-center rounded-lg bg-white border border-black h-[10rem] w-[80vw]`}>
        <p>${info.price}</p>
        {info.info.map((info, index) => {
          return <p key={index}>{info}</p>
        })}
      </div>
    </>
  )
}

export default Info