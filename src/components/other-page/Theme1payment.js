import React from "react";
import { Link } from "react-router-dom";
import {
  Checkbox,
  Container,
  FormControlLabel,
  TextField,
  FormControl,
  Button,
  FormLabel,
  RadioGroup,
  Radio,
  Tabs,
  Tab,
  Typography,
  Box,
  Autocomplete,
  Grid,
} from "@mui/material";
import PropTypes from "prop-types";
import { Controller, useForm } from "react-hook-form";
import "./Checkout.css";

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

function Theme1payment() {
  // tab state
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };
  const bankName = [
    {
      label: "INDUSIND",
    },
    {
      label: "IOB",
    },
    {
      label: "BOI",
    },
  ];
  return (
    <div className="payment">
      <div className="abt-banner">
        <h4 style={{ color: "#ff4e00" }}>
          <Link to="/" style={{ color: "#ff4e00" }}>
            Home
          </Link>
          | <span style={{ color: "#fff" }}>Payment</span>
        </h4>
      </div>
      <Container>
        <div className="payment-tab">
          <h3>Payment</h3>
          <Box sx={{ width: "100%" }}>
            <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
              <Tabs
                value={value}
                onChange={handleChange}
                aria-label="basic tabs example"
                TabIndicatorProps={{
                  style: {
                    backgroundColor: 'grey', 
                  }
                }}
              >
                <Tab
                  label="CASH ON DELIVERY (COD)"
                  {...a11yProps(0)}
                  sx={{
                    fontSize: "16px",
                    fontWeight: "700",
                    backgroundColor: value === 0 ? "#FF4E00" : "transparent",
                    color: value === 0 ? "#fff" : "gray" ,
                    '&.Mui-selected': { color: '#fff' },
                    borderRadius: '10px 10px 0 0'
                  }}
                />
                <Tab
                  label="CREDIT / DEBIT"
                  {...a11yProps(1)}
                  sx={{
                    fontSize: "16px",
                    fontWeight: "700",
                    backgroundColor: value === 1 ? "#FF4E00" : "transparent",
                    color: value === 1 ? "#fff" : "gray" ,
                    '&.Mui-selected': { color: '#fff' },
                    borderRadius: '10px 10px 0 0',
                    indicatorColor: 'secondary',
                  }}
                />
                <Tab
                  label="NET BANKING"
                  {...a11yProps(2)}
                  sx={{
                    fontSize: "16px",
                    fontWeight: "700",
                    backgroundColor: value === 2 ? "#FF4E00" : "transparent",
                    color: value === 2 ? "#fff" : "gray" ,
                    '&.Mui-selected': { color: '#fff' },
                    borderRadius: '10px 10px 0 0',
                  }}
                />
                <Tab
                  label="PAYPAL ACCOUNT"
                  {...a11yProps(3)}
                  sx={{
                    fontSize: "16px",
                    fontWeight: "700",
                    backgroundColor: value === 3 ? "#FF4E00" : "transparent",
                    color: value === 3 ? "#fff" : "gray" ,
                    '&.Mui-selected': { color: '#fff' },
                    borderRadius: '10px 10px 0 0',
            
                    
                  }}
                />
              </Tabs>
            </Box>
            <CustomTabPanel value={value} index={0}>
              <div className="cod-tab">
                <p>COD</p>
                <FormControlLabel
                  control={<Checkbox defaultChecked />}
                  label="We also accept Credit/Debit card on delivery. Please Check with the agent."
                />
              </div>
            </CustomTabPanel>
            <CustomTabPanel value={value} index={1}>
              <div className="payment-form">
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="fields">
                    <Controller
                      name="cardName"
                      control={control}
                      rules={{
                        required: "Enter Card Name",
                        minLength: {
                          value: 3,
                          message: "Minimum 3 char",
                        },
                      }}
                      render={({ field }) => (
                        <TextField
                          {...field}
                          fullWidth
                          label="Card Name"
                          size="small"
                          type="text"
                          error={Boolean(errors?.cardName?.message)}
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
                    {errors?.cardName?.message && (
                      <span className="aler">{errors?.cardName?.message}</span>
                    )}
                  </div>
                  <div className="fields">
                    <Controller
                      fullWidth
                      name="cardNumber"
                      control={control}
                      rules={{
                        required: "Enter Card Number",
                        minLength: {
                          value: 12,
                          message: "Enter a Valid Card Number",
                        },
                      }}
                      render={({ field }) => (
                        <TextField
                          fullWidth
                          {...field}
                          label="Card Number"
                          size="small"
                          type="number"
                          error={Boolean(errors?.cardNumber?.message)}
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
                    {errors?.cardNumber?.message && (
                      <span className="aler">
                        {errors?.cardNumber?.message}
                      </span>
                    )}
                  </div>
                  <div className="fields">
                    <Controller
                      fullWidth
                      name="CVV"
                      control={control}
                      rules={{
                        required: "Enter CVV",
                        minLength: {
                          value: 3,
                          message: "Min 3 char",
                        },
                      }}
                      render={({ field }) => (
                        <TextField
                          fullWidth
                          {...field}
                          label="CVV"
                          size="small"
                          type="number"
                          error={Boolean(errors?.CVV?.message)}
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
                    {errors?.CVV?.message && (
                      <span className="aler">{errors?.CVV?.message}</span>
                    )}
                  </div>
                  <div className="fields">
                    <Controller
                      fullWidth
                      name="expiryDate"
                      control={control}
                      rules={{
                        required: "Enter Expiry Date",
                      }}
                      render={({ field }) => (
                        <TextField
                          fullWidth
                          {...field}
                          size="small"
                          type="date"
                          error={Boolean(errors?.expiryDate?.message)}
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
                    {errors?.expiryDate?.message && (
                      <span className="aler">
                        {errors?.expiryDate?.message}
                      </span>
                    )}
                  </div>

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
                      make a payment
                    </Button>
                  </div>
                </form>
              </div>
            </CustomTabPanel>
            <CustomTabPanel value={value} index={2}>
              <div className="netbanking-tab">
                <div className="netbanking-frm">
                  <FormControl>
                    <FormLabel id="demo-row-radio-buttons-group-label">
                      Select From Popular Banks
                    </FormLabel>
                    <RadioGroup
                      row
                      aria-labelledby="demo-row-radio-buttons-group-label"
                      name="row-radio-buttons-group"
                      sx={{ paddingLeft: "15px" }}
                    >
                      <FormControlLabel
                        value="Syndicate Bank"
                        control={<Radio />}
                        label="Syndicate Bank"
                      />
                      <FormControlLabel
                        value="Bank of Baroda"
                        control={<Radio />}
                        label="Bank of Baroda"
                      />
                      <FormControlLabel
                        value="Canara Bank"
                        control={<Radio />}
                        label="Canara Bank"
                      />
                      <FormControlLabel
                        value="ICICI Bank"
                        control={<Radio />}
                        label="ICICI Bank"
                      />
                    </RadioGroup>
                  </FormControl>
                </div>
                <div className="netbanking-select">
                  <p style={{ margin: "0px", color: "gray" }}>
                    Or SELECT OTHER BANK
                  </p>
                  <Autocomplete
                    disablePortal
                    size="small"
                    id="combo-box-demo"
                    options={bankName}
                    sx={{ width: 300, marginTop: "15px" }}
                    renderInput={(params) => (
                      <TextField {...params} label="Other Bank" />
                    )}
                  />
                </div>
              </div>
            </CustomTabPanel>
            <CustomTabPanel value={value} index={3}>
              <Grid
                container
                direction="row"
                justifyContent="center"
                alignItems="flex-start"
              >
                <Grid item sm={12} md={5} lg={5}>
                  <div className="payment-img">
                    <img
                      src="./images/payapl.png"
                      alt="payment-img"
                      style={{ width: "100%", maxWidth: "100px" }}
                    />
                  </div>
                  <div className="payment-message">
                    <p style={{ margin: "0px", color: "gray" }}>
                      Important: You will be redirected to PayPal's website to
                      securely complete your payment.
                    </p>
                    <Button
                      sx={{ textTransform: "none", marginTop: "10px" }}
                      variant="contained"
                    >
                      Check Via PayPal
                    </Button>
                  </div>
                </Grid>
                <Grid item sm={12} md={7} lg={7}>
                  <div className="card-form">
                    <form onSubmit={handleSubmit(onSubmit)}>
                      <div className="fields">
                        <Controller
                          name="cardnum"
                          control={control}
                          rules={{
                            required: "Enter Card Number",
                            minLength: {
                              value: 12,
                              message: "Minimum 3 char",
                            },
                          }}
                          render={({ field }) => (
                            <TextField
                              {...field}
                              fullWidth
                              label="Card Number"
                              size="small"
                              type="number"
                              error={Boolean(errors?.cardnum?.message)}
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
                        {errors?.cardnum?.message && (
                          <span className="aler">
                            {errors?.cardnum?.message}
                          </span>
                        )}
                      </div>
                      <div className="fields">
                        <Controller
                          fullWidth
                          name="cvv"
                          control={control}
                          rules={{
                            required: "Enter cvv Number",
                            minLength: {
                              value: 3,
                              message: "Enter a Valid cvv Number",
                            },
                          }}
                          render={({ field }) => (
                            <TextField
                              fullWidth
                              {...field}
                              label="Cvv Number"
                              size="small"
                              type="number"
                              error={Boolean(errors?.cvv?.message)}
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
                        {errors?.cvv?.message && (
                          <span className="aler">{errors?.cvv?.message}</span>
                        )}
                      </div>

                      <div className="fields">
                        <Controller
                          name="cardholderName"
                          control={control}
                          rules={{
                            required: "Enter Card Holder Name",
                            minLength: {
                              value: 3,
                              message: "Minimum 3 char",
                            },
                          }}
                          render={({ field }) => (
                            <TextField
                              {...field}
                              fullWidth
                              label="Card Holder Name"
                              size="small"
                              type="text"
                              error={Boolean(errors?.cardholderName?.message)}
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
                        {errors?.cardholderName?.message && (
                          <span className="aler">
                            {errors?.cardholderName?.message}
                          </span>
                        )}
                      </div>
                      <div className="fields">
                        <Controller
                          fullWidth
                          name="Cvvnum"
                          control={control}
                          rules={{
                            required: "Enter CVV",
                            minLength: {
                              value: 3,
                              message: "Min 3 char",
                            },
                          }}
                          render={({ field }) => (
                            <TextField
                              fullWidth
                              {...field}
                              label="CVV"
                              size="small"
                              type="number"
                              error={Boolean(errors?.Cvvnum?.message)}
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
                        {errors?.Cvvnum?.message && (
                          <span className="aler">
                            {errors?.Cvvnum?.message}
                          </span>
                        )}
                      </div>

                      <div className="fields">
                        <Controller
                          fullWidth
                          name="valid"
                          control={control}
                          rules={{
                            required: "Enter Expiry Date",
                          }}
                          render={({ field }) => (
                            <TextField
                              fullWidth
                              {...field}
                              size="small"
                              type="date"
                              error={Boolean(errors?.valid?.message)}
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
                        {errors?.valid?.message && (
                          <span className="aler">{errors?.valid?.message}</span>
                        )}
                      </div>
                      <div className="fields">
                        <FormControlLabel
                          control={<Checkbox />}
                          label="Add to My Cards"
                        />
                      </div>
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
                          proceed payment
                        </Button>
                      </div>
                    </form>
                  </div>
                </Grid>
              </Grid>
            </CustomTabPanel>
          </Box>
        </div>
      </Container>
    </div>
  );
}

export default Theme1payment;
