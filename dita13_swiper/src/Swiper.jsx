import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Swiper styles
import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/pagination";

// Your CSS file
import "./Swiper.css";

// Modules
import { EffectCube, Pagination } from "swiper/modules";

export default function MySwiper() {
  return (
    <div className="swiper-container">
      <Swiper
        effect="cube"
        grabCursor={true}
        cubeEffect={{
          shadow: true,
          slideShadows: true,
          shadowOffset: 20,
          shadowScale: 0.94,
        }}
        pagination={true}
        modules={[EffectCube, Pagination]}
        className="Swiper"
      >
        <SwiperSlide><img src="bmw1.jpeg" alt="bmw" /></SwiperSlide>
        <SwiperSlide><img src="bmw2.webp" alt="bmw" /></SwiperSlide>
        <SwiperSlide><img src="bmw3.jpeg" alt="bmw" /></SwiperSlide>
        <SwiperSlide><img src="bmw4.webp" alt="bmw" /></SwiperSlide>
      </Swiper>
    </div>
  );
}
