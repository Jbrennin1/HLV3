import React from 'react'
import {useState} from 'react'
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
function Carousel({currentSession, photos}) {

  return (
    <>
      <div className="flex items-center justify-centerborder h-full relative z-0">
      <Swiper
      // install Swiper modules
      modules={[Navigation, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}

    >
          {photos.map((photo, index) => {
            return <SwiperSlide key={index}>
              <Image src={photo} layout="fill" objectFit="contain" objectPosition="center" alt="text"
              quality={100}
              className="bg-black" />
            </SwiperSlide>
          })}
        </Swiper>
      </div>
    </>
  )
}

export default Carousel