import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Grid } from "@mui/material";
import { FaRegHand } from "react-icons/fa6";
import { FaRocket } from "react-icons/fa";
import { MdOutlineSettings } from "react-icons/md";

function TestimonialCrd() {
  return (
    <div>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        rowSpacing={"5px"}
      >
        <Grid item lg={4} md={4} sm={6} xs={12}>
          <Card sx={{ minWidth: 200, textAlign: "center", boxShadow: "none" }}>
            <CardContent>
              <FaRegHand style={{ fontSize: "35px" }} />
              <Typography
                variant="h5"
                gutterBottom
                sx={{ padding: "15px 0px" }}
              >
                Satisfaction Guaranteed
              </Typography>

              <Typography
                sx={{
                  mb: 1.5,
                  padding: "0px 30px",
                  color: "#959596",
                  letterSpacing: "2px",
                }}
                color="text.secondary"
              >
                Duis mollis, est non commodo luctus, nisi erat porttitor ligula,
                eget lacinia odio sem nec elit.
              </Typography>
            </CardContent>
            <CardActions sx={{ justifyContent: "center" }}>
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
            </CardActions>
          </Card>
        </Grid>
        <Grid item lg={4} md={4} sm={6} xs={12}>
          <Card sx={{ minWidth: 275, textAlign: "center", boxShadow: "none" }}>
            <CardContent>
              <FaRocket style={{ fontSize: "35px" }} />
              <Typography
                variant="h5"
                gutterBottom
                sx={{ padding: "15px 0px" }}
              >
                Fast Shipping
              </Typography>

              <Typography
                sx={{
                  mb: 1.5,
                  padding: "0px 30px",
                  color: "#959596",
                  letterSpacing: "2px",
                }}
                color="text.secondary"
              >
                Duis mollis, est non commodo luctus, nisi erat porttitor ligula,
                eget lacinia odio sem nec elit.
              </Typography>
            </CardContent>
            <CardActions sx={{ justifyContent: "center" }}>
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
            </CardActions>
          </Card>
        </Grid>
        <Grid item lg={4} md={4} sm={6} xs={12}>
          <Card sx={{ minWidth: 275, textAlign: "center", boxShadow: "none" }}>
            <CardContent>
              <MdOutlineSettings style={{ fontSize: "35px" }} />
              <Typography
                gutterBottom
                variant="h5"
                sx={{ padding: "15px 0px" }}
              >
                UV Protection
              </Typography>

              <Typography
                sx={{
                  mb: 1.5,
                  padding: "0px 30px",
                  color: "#959596",
                  letterSpacing: "2px",
                }}
              >
                Duis mollis, est non commodo luctus, nisi erat porttitor ligula,
                eget lacinia odio sem nec elit.
              </Typography>
            </CardContent>
            <CardActions sx={{ justifyContent: "center" }}>
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
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
}

export default TestimonialCrd;
