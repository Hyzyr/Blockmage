import React from "react";
// import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { swiperData, swiperSettings } from "./constants/swiper";
import { Autoplay } from "swiper";
import Frame from "components/frame/Frame.jsx";

const assetsFolder = process.env.PUBLIC_URL + "/images/";

const Slider = () => {
  return (
    <section className="heroSlider">
      <div className="autoContainer">
        <Swiper
          area-label={"platforms carusel"}
          className="heroSlider__swiper"
          modules={[Autoplay]}
          {...swiperSettings}
        >
          {swiperData.map((item, index) => (
            <SwiperSlide key={index} area-label={item.title}>
              <Frame type="sliderFrame" />
              <img
                src={assetsFolder + "platforms/" + item.img}
                alt={item.title}
              />
            </SwiperSlide>
          ))}
          {swiperData.map((item, index) => (
            <SwiperSlide key={index} area-label={item.title}>
              <Frame type="sliderFrame" />
              <img
                src={assetsFolder + "platforms/" + item.img}
                alt={item.title}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Slider;
