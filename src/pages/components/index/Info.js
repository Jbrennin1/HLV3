import React from 'react'
import {useEffect} from 'react'

function Info({resStyle, info, show}) {
  return (
    <>
  {info ? (
    <div className={`z-50 ${resStyle} flex flex-col items-center justify-center rounded-lg bg-white border border-black resInfo`}>
      {show ? (<p>${info.price}</p>) : (<p>???</p>)}
      {info.info.map((info, index) => {
        return <p key={index}>{info}</p>
      })}
    </div>
  ) : (
    <p>Error: info does not exist</p>
  )}
    </>
  )
}

export default Info