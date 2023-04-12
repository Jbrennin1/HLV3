
import React from 'react'
import {useState, useRef, useCallback} from 'react'

import Image from "next/image";
import 'swiper/css';
import "swiper/css/effect-cards";
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

function Carousel({currentSession, photos, resStyle}) {
  console.log(resStyle)
  const sliderRef = useRef(null);

  const handlePrev = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slidePrev();
  }, []);

  const handleNext = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slideNext();
  }, []);

  return (
    <div className="h-full w-full">
      <Swiper ref={sliderRef} className="">
        {photos.map((photo, index) => {
            return <SwiperSlide key={index}>
              <div className="absolute flex items-center justify-center h-full">
              <img src={photo} className="h-full border"/>
              </div>
            </SwiperSlide>
          })}
        <SwiperSlide />
      </Swiper>
      <div>
      <button className={`absolute ${resStyle} left-5 h-[100px] w-[100px] bg-black z-50`} onClick={handlePrev} ></button>
      </div>
      <div>
      <button className={`absolute ${resStyle} right-5 h-[100px] w-[100px] bg-black z-50`} onClick={handleNext} ></button>
      </div>
    </div>
  )
}

export default Carousel