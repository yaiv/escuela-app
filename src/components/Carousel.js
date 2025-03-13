import React from "react";
import { Swiper, SwiperSlide } from "swiper/react"; 
import { Navigation, Pagination, Autoplay } from "swiper/modules"; 
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Carousel = () => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      autoplay={{ delay: 3000 }}
    >
      <SwiperSlide>
        <img src="diapositiva1.jpg" alt="Slide 1" className="slide" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="diapositiva2.jpg" alt="Slide 2" className="slide" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="diapositiva3.jpg" alt="Slide 3" className="slide" />
      </SwiperSlide>
    </Swiper>
  );
};

export default Carousel;