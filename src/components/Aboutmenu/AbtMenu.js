import React from "react";
import "./AbtMenu.css";
import Navs from "../Navbar/Navs";
import { Button, Container, Grid } from "@mui/material";
import { CARO3, PART1, PART2, PART3, PART4 } from "../../assests/ImgData";
import DescripCrd from "../Testimonial/DescripCrd";
import Foot from "../Footer/Foot";
import Testimonial from "../Testimonial/Testimonial";
import TestimonialCrd from "../Testimonial/TestimonialCrd";
import AbtImg from "./AbtImg";

function AbtMenu() {
  return (
    <div>
      <Navs />
    <AbtImg/>
      <div className="abt-contents">
        <Container maxWidth="xl">
          <Grid
            container
            direction="row"
            justifyContent="space-between"
            alignItems="flex-end"
          >
            <Grid item xs={12} sm={12} md={6} lg={6}>
              <img
                src={CARO3}
                alt="abt-img"
                style={{ width: "100%", maxWidth: "600px" }}
              />
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={6}>
              <h2>About Us</h2>
              <p className="abt-para">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </p>
              <Button
                variant="outlined"
                sx={{
                  color: "#000",
                  padding: "10px 25px",
                  fontSize: "14px",
                  borderRadius: "none",
                  border: "2px solid #ff4e00",
                  fontWeight: "500",
                }}
              >
                Shop Now
              </Button>
            </Grid>
          </Grid>
          <div className="partners">
            <div>
              <h1>Partners</h1>
            </div>
            <div className="partner-imag">
              <div>
                <img src={PART1} alt="par1" />
              </div>
              <div>
                <img src={PART2} alt="par2" />
              </div>
              <div>
                <img src={PART3} alt="par3" />
              </div>
              <div>
                <img src={PART4} alt="par4" />
              </div>
            </div>
          </div>
        </Container>
      </div>
      <Container maxWidth="xl">
        <div style={{paddingTop:'30px'}}>
          <TestimonialCrd />
          <Testimonial />
          <DescripCrd />
        </div>
      </Container>
      <Foot />
    </div>
  );
}

export default AbtMenu;
