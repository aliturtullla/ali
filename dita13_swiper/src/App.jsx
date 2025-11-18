import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import './App.css';

// import required modules
import { EffectCoverflow, Pagination } from 'swiper/modules';

export default function App() {
  return (
    <>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src="https://wallpapers.com/images/file/bmw-pictures-x1dz6n8kncw74gzq.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://m.atcdn.co.uk/vms/media/w600h450/85c503b5f0244b819d9da4a0647b9092.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://tse2.mm.bing.net/th/id/OIP.Yj37YzzXd_dZWH6xS63dPwHaE8?rs=1&pid=ImgDetMain&o=7&rm=3" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://bmw-canada-public.s3.amazonaws.com/static/dag/events/2025-06/JuneFormImg.png" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://www.bmw.co.za/content/dam/bmw/common/all-models/m-series/m8-coupe/2019/inform/bmw-m8competition-coupe-inform-mc-performance-features-desktop-03.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="bmw1.jpeg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="bmw2.webp" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="bmw3.jpeg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="bmw4.webp" />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
