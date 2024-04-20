import React from "react";
import Navs from "../Navbar/Navs";
import AbtImg from "../Aboutmenu/AbtImg";
import PrdCrd from "../Productcrd/PrdCrd";
import Foot from "../Footer/Foot";
import { Container, Grid } from "@mui/material";
import CrdOne from "./CrdOne";
import Draws from "../Drawer/Draws";
import { CARO1, CARO4 } from "../../assests/ImgData";

function ShopCrd() {
  return (
    <div className="dble-menus">
      <Navs />
      <AbtImg />
      <Container maxWidth="xl" sx={{ marginTop: "30px", paddingLeft: "35px" }}>
        <h1>New Arrivals for you </h1>
        <Grid
          container
          direction="row"
          justifyContent="space-between"
          alignItems="flex-start"
          sx={{ margin: "50px auto" }}
        >
          <Grid Item lg={3} md={3} sm={12}>
            <Draws />
          </Grid>
          <Grid Item lg={9} md={9} sm={12}>
            <div className="dble-img" style={{ position: "relative" }}>
              <div>
                <img src={CARO1} alt="1" />

                <div
                  style={{ position: "absolute", top: "100px", left: "80px" }}
                >
                  <h5>40% Off</h5>
                </div>
              </div>
              <div style={{ position: "relative" }}>
                <img src={CARO4} alt="2" />
                <div
                  style={{ position: "absolute", top: "100px", left: "80px" }}
                >
                  <h5>50% Off</h5>
                </div>
              </div>
            </div>
            <CrdOne />
          </Grid>
        </Grid>
      </Container>
      <Container>
        <PrdCrd />
      </Container>

      <Foot />
    </div>
  );
}

export default ShopCrd;
