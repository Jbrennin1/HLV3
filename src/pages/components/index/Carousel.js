
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

function Carousel({currentSession, photos, resStyle, resStyleLeft, resStyleRight, resImageBorder}) {
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
    <div className="h-full flex flex-col justify-center">
      <div className="overflow-hidden">

      <Swiper ref={sliderRef}>
        {photos ? (
        photos.map((photo, index) => (
        <SwiperSlide key={index} className="overflow-hidden">
          <Image
            src={photo}
            className=""
            alt="My Image"
            object-fit="cover"
            layout="responsive"
            width={100}
            height={75}
          />
        </SwiperSlide>
  ))
) : (
  <p>No photos found.</p>
)}
        <SwiperSlide />
      </Swiper>
      </div>
      <div className={`absolute ${resStyle} flex items-center justify-between carouselButtonDiv h-[screen] z-5 z-50`}>
      <button className={`text-[1rem] w-[2rem] z-40 border-2 border-black bg-gradient-to-b from-red-400 to-red-600 rounded`} onClick={handlePrev} >
      ⪡
      </button>
      <button className={`text-[1rem] w-[2rem] z-40 border-2 border-black rounded bg-gradient-to-b from-red-400 to-red-600`} onClick={handleNext} >
      ⪢
      </button>
      </div>
    </div>
  );
}

export default Carousel