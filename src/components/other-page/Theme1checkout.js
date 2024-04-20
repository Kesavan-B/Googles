import {
  Button,
  Card,
  Container,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import React, {  useState } from "react";
import { Link } from "react-router-dom";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { MdDeleteOutline } from "react-icons/md";
import Divider from "@mui/material/Divider";
import { Controller, useForm } from "react-hook-form";
import './Checkout.css'

function Theme1checkout() {
  const [count, setCount] = useState(0);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  //   count function for cart
  const addItem = () => {
    if (count >= 0) {
      setCount(count + 1);
    }
  };
  const subItem = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };
  const onSubmit =(a)=>{
    console.log(a);
  }
  return (
    <div className="checkout-page">
      <div className="abt-banner">
        <h4 style={{ color: "#ff4e00" }}>
          <Link to='/' style={{ color: "#ff4e00" }}>
            Home
          </Link>
          | <span style={{ color: "#fff" }}>CheckOut</span>
        </h4>
      </div>
      <Container>
        <div className="checkout-div">
        <div className="checkout-content">
          <div className="checkout-title">
            <h2>Checkout</h2>
            <p style={{ color: "gray" }}>
              Your shopping cart contains:
              <span style={{ fontWeight: "700" }}>3 Products</span>
            </p>
          </div>
          <div className="checkout-table">
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead sx={{ background: "#000" }}>
                  <TableRow>
                    <TableCell align="center">S.NO</TableCell>
                    <TableCell align="center">PRODUCT</TableCell>
                    <TableCell align="center">QUANTITY</TableCell>
                    <TableCell align="center">PRODUCT NAME</TableCell>
                    <TableCell align="center">PRICE</TableCell>
                    <TableCell align="center">ACTIONS</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" scope="row" align="center">
                      1
                    </TableCell>
                    <TableCell align="center">
                      <img
                        src="./images/g1.jpg"
                        alt="products"
                        className="checkout-image"
                      />
                    </TableCell>
                    <TableCell align="center">
                      <div className="checkout-count">
                        <h6 onClick={() => subItem()}>-</h6>
                        <p>{count}</p>
                        <h6 onClick={() => addItem()}>+</h6>
                      </div>
                    </TableCell>
                    <TableCell align="center">Irayz Butterfly</TableCell>
                    <TableCell align="center"> Rs. 281.00</TableCell>
                    <TableCell align="center">
                      <MdDeleteOutline
                        style={{ fontSize: "25px", color: "#ff4e00" }}
                      />
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
          </div>
        </div>

        <Grid
          container
          direction="row"
          justifyContent="space-between"
          alignItems="flex-start"
          columnGap={2}
        >
          <Grid item sm={12} md={4} lg={4}>
            <Card>
              <div className="cart-details">
                <div className="cart-details-title">
                  <h5>Continue to basket</h5>
                </div>
                <div className="cart-details-list">
                  <ul>
                    <li className="cart-list-row">
                      <div> Product1 :</div>
                      <div> Rs. 281.00</div>
                    </li>
                    <li className="cart-list-row">
                      <div> Product2 :</div>
                      <div> Rs. 281.00</div>
                    </li>
                    <li className="cart-list-row">
                      <div> Product3 :</div>
                      <div> Rs. 281.00</div>
                    </li>
                    <li className="cart-list-row">
                      <div> Service Charges :</div>
                      <div> Rs. 281.00</div>
                    </li>
                    <Divider
                      variant="middle"
                      component="li"
                      style={{ color: "#000" }}
                    />
                    <li className="cart-list-total">
                      <div> Total :</div>
                      <div> Rs. 281.00</div>
                    </li>
                  </ul>
                </div>
              </div>
            </Card>
          </Grid>
          <Grid item sm={12} md={7} lg={7}>
            <div className="delivery-details">
              <div className="delivery-form-title">
                <h5>Add Delivery Details</h5>
              </div>
              <div className="delivery-form">
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="fields">
                    <Controller
                      name="FullName"
                      control={control}
                      rules={{
                        required: "Enter FullName",
                        minLength: {
                          value: 3,
                          message: "Minimum 3 char",
                        },
                      }}
                      render={({ field }) => (
                        <TextField
                          {...field}
                          fullWidth
                          label="FullName"
                          size="small"
                          type="text"
                          error={Boolean(errors?.FullName?.message)}
                          InputLabelProps={{
                            style: { color: "#000", borderColor: "#000" },
                          }}
                          InputProps={{
                            style: { color: "#000", borderColor: "#000" },
                            classes: {
                              notchedOutline: "blackBorder",
                            },
                          }}
                        />
                      )}
                    />
                    {errors?.FullName?.message && (
                      <span className="aler">{errors?.FullName?.message}</span>
                    )}
                  </div>
                  <div className="fields">
                    <Controller
                      fullWidth
                      name="MobileNumber"
                      control={control}
                      rules={{
                        required: "Enter MobileNumber ",
                        minLength: {
                          value: 10,
                          message: "Enter a Valid MobileNumber",
                        },
                        maxLength: {
                          value: 10,
                          message: "Max 10 char",
                        },
                      }}
                      render={({ field }) => (
                        <TextField
                          fullWidth
                          {...field}
                          label="Mobile Number"
                          size="small"
                          type="number"
                          error={Boolean(errors?.MobileNumber?.message)}
                          InputLabelProps={{
                            style: { color: "#000", borderColor: "#000" },
                          }}
                          InputProps={{
                            style: { color: "#000", borderColor: "#000" },
                            classes: {
                              notchedOutline: "blackBorder",
                            },
                          }}
                        />
                      )}
                    />
                    {errors?.MobileNumber?.message && (
                      <span className="aler">
                        {errors?.MobileNumber?.message}
                      </span>
                    )}
                  </div>
                  <div className="fields">
                    <Controller
                      fullWidth
                      name="LandMark"
                      control={control}
                      rules={{
                        required: "Enter LandMark",
                        minLength: {
                          value: 3,
                          message: "Min 5 char",
                        },
                      }}
                      render={({ field }) => (
                        <TextField
                          fullWidth
                          {...field}
                          label="Land Mark"
                          size="small"
                          type="text"
                          error={Boolean(errors?.LandMark?.message)}
                          InputLabelProps={{
                            style: { color: "#000", borderColor: "#000" },
                          }}
                          InputProps={{
                            style: { color: "#000", borderColor: "#000" },
                            classes: {
                              notchedOutline: "blackBorder",
                            },
                          }}
                        />
                      )}
                    />
                    {errors?.LandMark?.message && (
                      <span className="aler">{errors?.LandMark?.message}</span>
                    )}
                  </div>
                  <div className="fields">
                    <Controller
                      fullWidth
                      name="City"
                      control={control}
                      rules={{
                        required: "Enter City",
                      }}
                      render={({ field }) => (
                        <TextField
                          fullWidth
                          {...field}
                          label="Town / City"
                          size="small"
                          type="text"
                          error={Boolean(errors?.City?.message)}
                          InputLabelProps={{
                            style: { color: "#000", borderColor: "#000" },
                          }}
                          InputProps={{
                            style: { color: "#000", borderColor: "#000" },
                            classes: {
                              notchedOutline: "blackBorder",
                            },
                          }}
                        />
                      )}
                    />
                    {errors?.LandMark?.message && (
                      <span className="aler">{errors?.City?.message}</span>
                    )}
                  </div>
                  <div className="fields">
                    <FormControl fullWidth size="small">
                      <InputLabel
                        id="demo-simple-select-label"
                        
                      >
                        Address type
                      </InputLabel>
                      <Controller
                        name=" Addresstype"
                        control={control}
                        defaultValue=""
                        render={({ field }) => (
                          <Select
                            {...field}
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            label=" Address type"
        
                          >
                            <MenuItem value={10}>Office</MenuItem>
                            <MenuItem value={20}>Home</MenuItem>
                            <MenuItem value={30}>Commercial</MenuItem>
                          </Select>
                        )}
                      />
                    </FormControl>
                  </div>
                  <div className="whole-btn">
                    <div className="bt-sub">
                      <Button
                        variant="contained"
                        type="submit"
                        sx={{
                          background: "#000",
                          "&:hover": {
                            background: "#000",
                          },
                        }}
                        className="sub-btn"
                      >
                        Delivery to this address
                      </Button>
                    </div>
                    <div className="bt-sub">
                    <Link to='/payment'>
                      <Button
                        variant="contained"
                        type="submit"
                        sx={{
                          background: "#000",
                          "&:hover": {
                            background: "#000",
                          },
                        }}
                        className="sub-btn"
                      >
                        make a payment
                      </Button>
                      </Link>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </Grid>
        </Grid>
        </div>
      </Container>
    </div>
  );
}

export default Theme1checkout;
