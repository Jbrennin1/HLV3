
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

function Carousel({currentSession, photos, resStyle, resStyleLeft, resStyleRight}) {
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
      <Swiper ref={sliderRef} className="flex items-center justify-center">
        {photos.map((photo, index) => {
            return <SwiperSlide key={index}>
              <div className="flex items-center justify-center h-full border">
              <img src={photo} className="h-full border"/>
              </div>
            </SwiperSlide>
          })}
        <SwiperSlide />
      </Swiper>
      <div className={`absolute ${resStyle} flex items-center justify-center carouselButtonDiv h-[screen] z-5`} style={{ gap: '15rem' }}>
      <button className={`text-[1rem] w-[2rem] z-40 border-2 border-black bg-red-400 rounded`} onClick={handlePrev} >
      ⪡
      </button>
      <button className={`text-[1rem] w-[2rem] z-40 border-2 border-black rounded bg-red-400`} onClick={handleNext} >
      ⪢
      </button>
      </div>

    </div>
  )
}

export default Carousel