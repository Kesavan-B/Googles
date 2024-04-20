import React from "react";
import "./Foot.css";
import { Container, Divider, Grid, TextField } from "@mui/material";
import { FaFacebookSquare } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaGooglePlusG } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaRss } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";

function Foot() {
  return (
    <div className="footers">
      <Container maxWidth="xl">
        <Grid
          container
          direction="row"
          justifyContent="space-evenly"
          alignItems="flex-start"
          className="fots-cont"
        >
          <Grid item xs={12} sm={12} md={3} lg={3} className="Fots">
            <h3>About Us</h3>
            <hr />
            <p style={{ textAlign: "left" }}>
              Curabitur non nulla sit amet nislinit tempus convallis quis ac
              lectus. lac inia eget consectetur sed, convallis at tellus. Nulla
              porttitor accumsana tincidunt.
            </p>
            <div className="social-media">
              <FaFacebookSquare />
              <FaTwitter />
              <FaGooglePlusG />
              <FaLinkedinIn />
              <FaRss />
            </div>
          </Grid>
          <Grid item xs={12} sm={12} md={2} lg={2} className="Fots">
            <h3>Get in touch</h3>
            <span>Location:</span>
            <p>0926k 4th block building, king Avenue, New York City.</p>
            <span>Contact:</span>
            <p>Phone : +121 098 8907 9987</p>
            <p> Email : info@example.com</p>
          </Grid>
          <Grid item xs={12} sm={12} md={3} lg={3} className="Fots">
            <h3>Quick links</h3>
            <ul>
              <li>Home</li>
              <li>About</li>
              <li>Error</li>
              <li>Shop</li>
              <li>Contact Us</li>
            </ul>
          </Grid>
          <Grid item xs={12} sm={12} md={3} lg={3} className="Fots">
            <h3>Signup for your offers</h3>
            <p>
              By subscribing to our mailing list you will always get latest news
              and updates from us.
            </p>
            {/* <div style={{ display: "flex", alignItems: "center" }}>
              <TextField
                id="outlined-basic"
                label="Outlined"
                variant="outlined"
             
              />
              <MdOutlineMail style={{ color: "#ff4e00", fontSize: "20px" }} />
            </div> */}
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default Foot;
