import React from "react";
import "./Testimonial.css";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

function Testimonial() {

  
  return (
    <div className="review-crd">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
    
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          {" "}
          <div className="testi-cont">
            <h5>
              Anamaria <span style={{ color: "#959596" }}>Customer</span>
            </h5>
            <span style={{ color: "#ff4e00", fontSize: "16px" }}>
              United States
            </span>
            <p>
              Maecenas interdum, metus vitae tincidunt porttitor, magna quam
              egestas sem, ac scelerisque nisl nibh vel lacus. Proin eget
              gravida odio. Donec ullamcorper est eu accumsan cursus.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <div className="testi-cont">
            <h5>
              Esmeralda <span style={{ color: "gray" }}>Customer</span>
            </h5>
            <span style={{ color: "orangered", fontSize: "16px" }}>
              United States
            </span>
            <p>
              Maecenas interdum, metus vitae tincidunt porttitor, magna quam
              egestas sem, ac scelerisque nisl nibh vel lacus. Proin eget
              gravida odio. Donec ullamcorper est eu accumsan cursus.
            </p>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default Testimonial;
