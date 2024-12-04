import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import slider1 from '../Main/photos_main/slider-1.png';
import slider2 from '../Main/photos_main/slider-2.png'
import slider3 from '../Main/photos_main/slider-3.png'
import slider4 from '../Main/photos_main/slider-4.png'

const Slider = () => {
  return (
    <div style={{margin:"10px"}}>
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        onSlideChange={() => console.log("Slide changed")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide><img src={slider1} alt="" style={{ width: "100%"}}/></SwiperSlide>
        <SwiperSlide><img src={slider2} alt=""  style={{ width: "100%" }}/></SwiperSlide>
        <SwiperSlide><img src={slider3} alt="" style={{ width: "100%" }}/></SwiperSlide>
        <SwiperSlide><img src={slider4} alt=""  style={{ width: "100%" }}/></SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider;