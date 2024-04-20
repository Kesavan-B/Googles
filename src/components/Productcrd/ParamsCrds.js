import React, { useEffect, useState } from "react";
import "./PrdCrd.css";
import Card from "react-bootstrap/Card";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";
import { Button, Container, Grid } from "@mui/material";
import { Link, useParams } from "react-router-dom";
import { productCrd } from "./PrdCrdData";
import Navs from "../Navbar/Navs";
import AbtImg from "../Aboutmenu/AbtImg";
import Foot from "../Footer/Foot";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import { G1, G2, G3, PART1 } from "../../assests/ImgData";
// import ReactImageMagnify from "react-image-magnify";

function ParamsCrds() {
  const [productDetail, setProductDetail] = useState();
  const [value, setValue] = React.useState(0);
  const [age, setAge] = React.useState("");
  const [VariantImage, setVariantImage] = useState("");

  const variImg = [
    {
      variImg: G1,
    },
    {
      variImg: G2,
    },
    {
      variImg: G3,
    },
  ];

  const handleChange = (event, newValue) => {
    setValue(newValue);
    setAge(event.target.value);
  };
  function CustomTabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 3 }}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }

  CustomTabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
  };

  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      "aria-controls": `simple-tabpanel-${index}`,
    };
  }

  // const location = useLocation();
  // console.log(location,'location>');

  // const productDetail = location.state;

  const { id } = useParams();

  const dataID = parseInt(id, 10);

  useEffect(() => {
    const productDetail = productCrd.filter((card) => card?.id === dataID);
    setProductDetail(productDetail[0]);
    console.log(productDetail, "prod");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <Navs />
      <AbtImg />
      <Container>
        <Grid
          container
          direction="row"
          justifyContent="left"
          alignItems="flex-start"
          sx={{ paddingTop: "5rem" }}
        >
          <Grid item sm={12} md={5} lg={5}>
            <Card className="main-crd">
            
              {VariantImage ? (
                
                <img src={VariantImage} alt="VariantImage" style={{
                  width: "100%",
                  maxWidth: "260px",
                  margin: "0px auto",
                }}/>
              ) : (
                <Card.Img
                variant="top"
                src={ productDetail && productDetail.imag}
                style={{
                  width: "100%",
                  maxWidth: "260px",
                  margin: "0px auto",
                }}
              />
              )}
            </Card>

            <Grid
              container
              direction="row"
              justifyContent="center"
              columnGap={3}
              sx={{ marginTop: "8px" }}
            >
              {variImg &&
                variImg.map((a, i) => (
                  <Grid item sm={4} md={2} lg={2}>
                    <Card
                      style={{ width: "8rem" }}
                      key={i}
                      onClick={() => setVariantImage(a.variImg)}
                    >
                      <Card.Img
                        variant="top"
                        src={a.variImg}
                        alt="variantImages"
                        style={{
                          width: "100%",
                          maxWidth: "260px",
                          margin: "0px auto",
                        }}
                      />
                    </Card>
                  </Grid>
                ))}
            </Grid>
          </Grid>
          <Grid item sm={12} md={7} lg={7}>
            {productDetail && (
              <Card.Body>
                <div className="crd-flexs">
                  <div>
                    <Card.Title className="parms-titles">
                      <h1> {productDetail.title}</h1>
                    </Card.Title>
                    <Card.Text className="parms-texts">
                      {productDetail.price}
                    </Card.Text>
                  </div>
                </div>
                <Stack spacing={1} sx={{ paddingBottom: "25px" }}>
                  <Rating name="size-small" size="small" />
                </Stack>
                <div className="quantity">
                  <Box sx={{ minWidth: 120 }}>
                    <InputLabel
                      id="demo-simple-select-label"
                      sx={{ fontSize: "16px", color: "#000" }}
                    >
                      Quantity :{" "}
                    </InputLabel>
                    <FormControl
                      fullWidth
                      sx={{ maxWidth: 100, paddingBottom: "25px" }}
                      size="small"
                    >
                      <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={age}
                        onChange={handleChange}
                        sx={{ marginTop: "8px" }}
                      >
                        <MenuItem value={10}>2 Qty</MenuItem>
                        <MenuItem value={20}>3 Qty</MenuItem>
                        <MenuItem value={30}>4 Qty</MenuItem>
                      </Select>
                    </FormControl>
                  </Box>
                </div>
                <div className="types">
                  <InputLabel
                    id="demo-simple-select-label"
                    sx={{ fontSize: "16px", color: "#000" }}
                  >
                    Types :
                  </InputLabel>
                  <FormControl sx={{ marginTop: "8px" }}>
                    <RadioGroup
                      row
                      aria-labelledby="demo-row-radio-buttons-group-label"
                      name="row-radio-buttons-group"
                    >
                      <FormControlLabel
                        value="female"
                        control={<Radio />}
                        label="Irayz Butterfly (Black)"
                      />
                      <FormControlLabel
                        value="male"
                        control={<Radio />}
                        label="Irayz Butterfly (Grey)"
                      />
                      <FormControlLabel
                        value="other"
                        control={<Radio />}
                        label=" Irayz Butterfly (white)"
                      />
                    </RadioGroup>
                  </FormControl>
                </div>
                <div className="addtocart-btn">
                  <Button
                    variant="contained"
                    sx={{
                      background: "#000",
                      color: "#fff",
                      "&:hover": {
                        color: "#fff",
                        background: "#000",
                      },
                    }}
                  >
                    <Link to="/Checkout">ADD TO CART</Link>
                  </Button>
                </div>
              </Card.Body>
            )}
          </Grid>
        </Grid>
      </Container>
      <Container>
        <div
          style={{
            width: "100%",
            padding: "30px 0px  25px 0px",
          }}
        >
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label="basic tabs example"
              TabIndicatorProps={{
                style: {
                  backgroundColor: "grey",
                },
              }}
            >
              <Tab
                label="DESCRIPTION"
                {...a11yProps(0)}
                sx={{ fontSize: "16px", fontWeight: "700",
                backgroundColor: value === 0 ? "#FF4E00" : "transparent",
                color: value === 0 ? "#fff" : "gray",
                "&.Mui-selected": { color: "#fff" },
                borderRadius: "10px 10px 0 0", }}
              />
              <Tab
                label="REVIEWS"
                {...a11yProps(1)}
                sx={{ fontSize: "16px", fontWeight: "700",
                backgroundColor: value === 1 ? "#FF4E00" : "transparent",
                color: value === 1 ? "#fff" : "gray",
                "&.Mui-selected": { color: "#fff" },
                borderRadius: "10px 10px 0 0", }}
              />
              <Tab
                label="INFORMATION"
                {...a11yProps(2)}
                sx={{ fontSize: "16px", fontWeight: "700",
                backgroundColor: value === 2 ? "#FF4E00" : "transparent",
                color: value === 2 ? "#fff" : "gray",
                "&.Mui-selected": { color: "#fff" },
                borderRadius: "10px 10px 0 0", }}
              />
            </Tabs>
          </Box>
          <CustomTabPanel value={value} index={0}>
            <h3> Lorem ipsum dolor sit amet </h3>
            <p style={{ color: "gray", fontSize: "14px" }}>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint,
              vel quaerat. Sapiente dolor distinctio quasi amet omnis ab
              adipisci accusantium iste modi culpa harum, aspernatur unde rerum
              ipsa laborum sint!
            </p>
          </CustomTabPanel>
          <CustomTabPanel value={value} index={1}>
            <div className="full-tab">
              <div className="tab-img">
                <Card>
                  <img src={PART1} alt="reviews" />
                </Card>
              </div>
              <div>
                <h3>ADMIN</h3>
                <p style={{ color: "gray", fontSize: "14px" }}>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. At
                  asperiores, enim tempora molestias aliquam quo ipsum ullam,
                  laboriosam tenetur est beatae saepe eius ea similique quasi
                  ad! Nihil, voluptate exercitationem?
                </p>
              </div>
            </div>
          </CustomTabPanel>
          <CustomTabPanel value={value} index={2}>
            <h3>Product Name</h3>
            <p style={{ color: "gray", fontSize: "14px" }}>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. At
              asperiores, enim tempora molestias aliquam quo ipsum ullam,
              laboriosam tenetur est beatae saepe eius ea similique quasi ad!
              Nihil, voluptate exercitationem?
            </p>
          </CustomTabPanel>
        </div>
      </Container>
      <Foot />
    </div>
  );
}

export default ParamsCrds;
