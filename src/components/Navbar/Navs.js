import React from "react";
import "./Navs.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { FaUser } from "react-icons/fa";
import { FaCartPlus } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { ImCross } from "react-icons/im";
import {
  Button,
  Grid,
  Checkbox,
  FormControlLabel,
  TextField,
} from "@mui/material";
import { FaPhone } from "react-icons/fa";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import { FaCaretDown } from "react-icons/fa";
import { DIA1, DIA2, DIA3 } from "../../assests/ImgData";
import { RxCross2 } from "react-icons/rx";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import { FaRegWindowClose } from "react-icons/fa";
import Box from "@mui/material/Box";
import { Controller, useForm } from "react-hook-form";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

function Navs() {
  const [open, setOpen] = React.useState(false);
  const [opened, setOpened] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [fullWidth, setFullWidth] = React.useState(true);
  const [maxWidth, setMaxWidth] = React.useState("lg");
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // login drawer state
  const [state, setState] = React.useState({
    right: false,
  });

  const handleMaxWidthChange = (event) => {
    setMaxWidth(
      // @ts-expect-error autofill of arbitrary value is not handled.
      event.target.value
    );
  };

  const handleFullWidthChange = (event) => {
    setFullWidth(event.target.checked);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const handleClickOpened = () => {
    setOpened(true);
  };
  const handleClosed = () => {
    setOpened(false);
  };

  const opens = Boolean(anchorEl);
  const handleClicks = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleCloses = () => {
    setAnchorEl(null);
  };

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const onsubmit = () => {};

  const list = (anchor) => (
    <Container>
      <Box
        sx={{
          width: anchor === "top" || anchor === "bottom" ? "auto" : 500,
          paddingTop: "10px",
        }}
        role="presentation"
      >
        <div onClick={toggleDrawer(anchor, false)}>
          <FaRegWindowClose style={{ fontSize: "30px", color: "#ff4e00" }} />
        </div>
        <div className="drawer">
          <div className="form-div">
            <h3 className="drawer-title">Login Now</h3>
            <form onSubmit={handleSubmit(onsubmit)} className="login-form">
              <div className="fields">
                <Controller
                  name="email"
                  control={control}
                  rules={{
                    required: "Enter Email",
                    pattern: {
                      value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                      message: "Enter valid email",
                    },
                  }}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      fullWidth
                      label="Email"
                      size="small"
                      type="text"
                      error={Boolean(errors?.email?.message)}
                      InputLabelProps={{
                        style: { color: "white", borderColor: "white" },
                      }}
                      InputProps={{
                        style: { color: "white", borderColor: "white" },
                        classes: {
                          notchedOutline: "whiteBorder",
                        },
                      }}
                    />
                  )}
                />
                {errors?.email?.message && (
                  <span className="aler">{errors?.email?.message}</span>
                )}
              </div>
              <div className="fields">
                <Controller
                  fullWidth
                  name="Password"
                  control={control}
                  rules={{
                    required: "Enter Password",
                    minLength: {
                      value: 3,
                      message: "Min 3 char",
                    },
                  }}
                  render={({ field }) => (
                    <TextField
                      fullWidth
                      {...field}
                      label="Password"
                      size="small"
                      type="password"
                      error={Boolean(errors?.Password?.message)}
                      InputLabelProps={{
                        style: { color: "white", borderColor: "white" },
                      }}
                      InputProps={{
                        style: { color: "white", borderColor: "white" },
                        classes: {
                          notchedOutline: "whiteBorder",
                        },
                      }}
                    />
                  )}
                />
                {errors?.Password?.message && (
                  <span className="aler">{errors?.Password?.message}</span>
                )}
              </div>
              <FormControlLabel
                control={<Checkbox style={{ color: "white" }} />}
                label={
                  <span style={{ color: "white" }}>
                    Agree terms & conditions
                  </span>
                }
              />
              <div className="signin-button">
                <Button
                  sx={{
                    textTransform: "none",
                    background: "#ff4e00",
                    "&:hover": {
                      background: "#ff4e00",
                    },
                  }}
                  variant="contained"
                  type="submit"
                  fullWidth
                >
                  Sign In
                </Button>
              </div>
            </form>
          </div>
        </div>
      </Box>
    </Container>
  );
  return (
    <div>
      <Navbar
        expand="lg"
        className="bg-body-tertiary"
        style={{ position: "sticky", top: "0", width: "100%" }}
      >
        <Container fluid className="nav-container">
          <div className="helps">
            <p>Need Help</p>
            <p>
              <FaPhone style={{ color: "#ff4e00", fontSize: "14px" }} /> Call
              12345678099
            </p>
          </div>
          <Navbar.Brand href="#" className="nav-name">
            GOGGLES
          </Navbar.Brand>
          <div className="fl-right">
            {["right"].map((anchor) => (
              <React.Fragment key={anchor}>
                <div onClick={toggleDrawer(anchor, true)}>
                  {anchor === "right" && (
                    <FaUser style={{ fontSize: "16px" }} />
                  )}
                </div>
                <SwipeableDrawer
                  anchor={anchor}
                  open={state[anchor]}
                  onClose={toggleDrawer(anchor, false)}
                  onOpen={toggleDrawer(anchor, true)}
                >
                  {list(anchor)}
                </SwipeableDrawer>
              </React.Fragment>
            ))}
            <div className="left-btn">
              <Button
                variant="outlined"
                id="basic-button"
                aria-controls={opens ? "basic-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={opens ? "true" : undefined}
                onClick={handleClicks}
                sx={{
                  textTransform: "none",
                  color: "#000",
                  borderColor: "#454645",
                  fontSize: "16px",
                  marginLeft: "15px",
                  borderRadius: "none",
                  "&:hover": {
                    color: "#000",
                    borderColor: "#454645",
                  },
                }}
              >
                <Link to="/Checkout">
                  My Cart
                  <FaCartPlus
                    style={{
                      color: "#000",
                      fontSize: "16px",
                      marginLeft: "15px",
                    }}
                  />
                </Link>
              </Button>
              <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={opens}
                onClose={handleCloses}
                MenuListProps={{
                  "aria-labelledby": "basic-button",
                }}
              >
                <MenuItem onClick={handleCloses} style={{ color: "orangered" }}>
                  Your Shopping Cart is Empty <RxCross2 />{" "}
                </MenuItem>
              </Menu>
            </div>
          </div>
        </Container>
      </Navbar>

      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="m-auto my-2 my-lg-0"
              style={{
                maxHeight: "100px",
                alignItems: "center",
                fontSize: "15px",
              }}
              navbarScroll
            >
              <Nav.Link href="/">HOME</Nav.Link>
              <Nav.Link href="/abt">ABOUT</Nav.Link>
              <Button
                onClick={handleClickOpen}
                sx={{ fontSize: "15px", color: "#828264", marginLeft: "35px" }}
              >
                Features
                <FaCaretDown
                  style={{
                    fontSize: "15px !important",
                    color: "#828264",
                    marginLeft: "20px",
                    display: "flex",
                    alignItems: "center",
                  }}
                />
              </Button>
              <BootstrapDialog
                onClose={handleClose}
                aria-labelledby="customized-dialog-title"
                open={open}
                fullWidth={fullWidth}
                maxWidth={maxWidth}
              >
                <DialogContent dividers>
                  <Grid
                    container
                    direction="row"
                    justifyContent="center"
                    alignItems="flex-start"
                  >
                    <Grid item sm={12} md={4} lg={4}>
                      <h3>Title goes here</h3>
                      <Nav.Link href="/shop">
                        <ul style={{ fontSize: "16px", color: "#454645" }}>
                          <li> Designer Glasses</li>
                          <li>Ray-Ban</li>
                          <li>Prescription Glasses</li>
                        </ul>
                      </Nav.Link>
                      <h3>View More Pages</h3>
                      <Nav.Link href="/shop">
                        <ul style={{ fontSize: "16px", color: "#454645" }}>
                          <li>About</li>
                          <li>Customer</li>
                        </ul>
                      </Nav.Link>
                    </Grid>
                    <Grid item sm={12} md={4} lg={4}>
                      <h3>Title goes here</h3>
                      <img
                        src={DIA2}
                        alt="d1"
                        style={{ width: "100%", maxWidth: "300px" }}
                      />
                    </Grid>
                    <Grid item sm={12} md={4} lg={4}>
                      <h3>Title goes here</h3>
                      <img
                        src={DIA3}
                        alt="d1"
                        style={{ width: "100%", maxWidth: "300px" }}
                      />
                    </Grid>
                  </Grid>
                </DialogContent>
              </BootstrapDialog>
              <Button
                onClick={handleClickOpened}
                sx={{
                  fontSize: "15px",
                  color: "#828264",
                  marginLeft: "35px",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                Shop <FaCaretDown sx={{ color: "#828264" }} />
              </Button>
              <BootstrapDialog
                onClose={handleClosed}
                aria-labelledby="customized-dialog-title"
                open={opened}
                fullWidth={fullWidth}
                maxWidth={maxWidth}
              >
                <DialogContent dividers sx={{ width: "100%" }}>
                  <Grid
                    container
                    direction="row"
                    justifyContent="center"
                    alignItems="flex-start"
                  >
                    <Grid item sm={12} md={4} lg={4}>
                      <h3>Title goes here</h3>
                      <Nav.Link href="/shop">
                        <ul style={{ fontSize: "16px", color: "#454645" }}>
                          <li> Designer Glasses</li>
                          <li>Ray-Ban</li>
                          <li>Prescription Glasses</li>
                          <li> Rx Sunglasses</li>
                          <li>Contact Lenses</li>
                          <li>Multifocal Glasses</li>
                          <li>Kids Glasses</li>
                          <li>Lightweight Glasses</li>
                          <li>Sports Glasses</li>
                        </ul>
                      </Nav.Link>
                    </Grid>
                    <Grid item sm={12} md={4} lg={4}>
                      <h3>Title goes here</h3>
                      <Nav.Link href="/shop">
                        <ul style={{ fontSize: "16px", color: "#454645" }}>
                          <li>Brooks Brothers</li>
                          <li>Persol</li>
                          <li>Polo Ralph Lauren</li>
                          <li>Prada</li>
                          <li>Ray-Ban Jr</li>
                          <li>Sferoflex</li>
                          <li>Polo Ralph Lauren</li>
                          <li>Prada</li>
                          <li>Ray-Ban Jr</li>
                        </ul>
                      </Nav.Link>
                    </Grid>
                    <Grid item sm={12} md={4} lg={4}>
                      <h3>Title goes here</h3>
                      <img
                        src={DIA1}
                        alt="d2"
                        style={{ width: "100%", maxWidth: "300px" }}
                      />
                    </Grid>
                  </Grid>
                </DialogContent>
              </BootstrapDialog>
              <Nav.Link href="/cont">CONTACT</Nav.Link>
              <div style={{ paddingLeft: "20px" }}>
                <FaSearch />
              </div>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Navs;
