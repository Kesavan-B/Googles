import React from "react";
import Navs from "./components/Navbar/Navs";
import Carou from "./components/carousel/Carou";
import ArrivlCrd from "./components/New Arrival crds/ArrivlCrd";
import PrdCrd from "./components/Productcrd/PrdCrd";
import { Container } from "@mui/material";
import Testimonial from "./components/Testimonial/Testimonial";
import TestimonialCrd from "./components/Testimonial/TestimonialCrd";
import Foot from "./components/Footer/Foot";
import DescripCrd from "./components/Testimonial/DescripCrd";

function Main() {
  return (
    <>
      <Navs />
 
      <Carou />
      <Container maxWidth="lg">
      <h1 className="newarrival-head" style={{marginBottom:'20px'}}>New Arrivals for you</h1>
        <ArrivlCrd />
        <PrdCrd />
        <Testimonial />
        <TestimonialCrd/>
        <DescripCrd/>
      </Container>
      <Foot/>
    </>
  );
}

export default Main;


