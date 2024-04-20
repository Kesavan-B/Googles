import React from "react";
import { FaGift } from "react-icons/fa";
import { FaShieldAlt } from "react-icons/fa";
import { FaDollarSign } from "react-icons/fa";
import { FaTruck } from "react-icons/fa";
import "./Testimonial.css";
import { Grid,Container } from "@mui/material";


function DescripCrd() {
  return (
    <div className="Descripcrd">
   <Container>
   <Grid
        container
        direction="row"
        justifyContent="space-between"
        alignItems="center"
      >
        <Grid item xs={12} sm={12} md={3} lg={3}>
          <div className="whole-DesCrd">
            <div className="DesCrd-logo">
              <FaGift className="desc-icns" />
            </div>
            <div className="DesCrd-cont">
              <h5>GENUINE PRODUCT</h5>
              <p>Lorem ipsum dolor sit amet, consectetur</p>
            </div>
          </div>
        </Grid>
        <Grid item xs={12} sm={12} md={3} lg={3}>
          <div className="whole-DesCrd">
            <div className="DesCrd-logo">
              <FaShieldAlt className="desc-icns" />
            </div>
            <div className="DesCrd-cont">
              <h5>SECURE PRODUCT</h5>
              <p>Lorem ipsum dolor sit amet, consectetur</p>
            </div>
          </div>
        </Grid>
        <Grid item xs={12} sm={12} md={3} lg={3}>
        <div className="whole-DesCrd">
          <div className="DesCrd-logo">
            <FaDollarSign className="desc-icns"/>
          </div>
          <div className="DesCrd-cont">
            <h5>CASH ON DELIVERY</h5>
            <p>Lorem ipsum dolor sit amet, consectetur</p>
          </div>
        </div>
        </Grid>
        <Grid item xs={12} sm={12} md={3} lg={3}>
        <div className="whole-DesCrd">
          <div className="DesCrd-logo">
            <FaTruck className="desc-icns"/>
          </div>
          <div className="DesCrd-cont">
            <h5>EASY DELIVERY </h5>
            <p>Lorem ipsum dolor sit amet, consectetur</p>
          </div>
        </div>
        </Grid>
      </Grid>
   </Container>
    </div>
  );
}

export default DescripCrd;
