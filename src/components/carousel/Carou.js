import React from "react";
import "swiper/css";
import "swiper/css/navigation";

import "./Carou.css";

// import required modules
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import {  CARO2, CARO3 } from "../../assests/ImgData";
import { Button } from "@mui/material";

function Carou() {
  return (
    <div>
      
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        {/* <SwiperSlide className="coro-head">
        <div className="bg-col">
          <img src={CARO1} alt="caro1" style={{ width: "100%",opacity:'0.6' }} />
          <div className="caro-para">
            <h2> Men’s eyewear</h2>
            <p>Cool summer sale 50% off</p>
            <Button
              variant="outlined"
              sx={{
                color: "#fff",
                padding: "10px 25px",
                fontSize: "14px",
                borderRadius: "none",
                border: "2px solid #ff4e00",
                fontWeight: "500",
              }}
            >
              Shop Now
            </Button>
          </div>
          </div>
        </SwiperSlide> */}
        <SwiperSlide className="coro-head">
        <div className="bg-col"></div>
          <img src={CARO2} alt="caro1" style={{ width: "100%" }} />
          <div className="caro-para">
            <h2> Women’s eyewear</h2>
            <p>Want to Look Your Best?</p>
            <Button
              variant="outlined"
              sx={{
                color: "#fff",
                padding: "10px 25px",
                fontSize: "14px",
                borderRadius: "none",
                border: "2px solid #ff4e00",
                fontWeight: "500",
              }}
            >
              Shop Now
            </Button>
          </div>
        </SwiperSlide>
        <SwiperSlide className="coro-head">
        <div className="bg-col"></div>
          <img src={CARO3} alt="caro1" style={{ width: "100%" }} />
          <div className="caro-para">
            <h2> Men’s eyewear</h2>
            <p>Cool summer sale 50% off</p>
            <Button
              variant="outlined"
              sx={{
                color: "#fff",
                padding: "10px 25px",
                fontSize: "14px",
                borderRadius: "none",
                border: "2px solid #ff4e00",
                fontWeight: "500",
              }}
            >
              Shop Now
            </Button>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default Carou;
