import React from "react";
import Form from "react-bootstrap/Form";
import "./Draws.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Button } from "@mui/material";
import { FaSearch } from "react-icons/fa";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import { G1, G2 } from "../../assests/ImgData";
import Slider from '@mui/material/Slider';

function valuetext(value) {
  return `${value}°C`;
}

const minDistance = 10;


function Draws() {
  const [value2, setValue2] = React.useState([20, 37]);

  const handleChange2 = (event, newValue, activeThumb) => {
    if (!Array.isArray(newValue)) {
      return;
    }

    if (newValue[1] - newValue[0] < minDistance) {
      if (activeThumb === 0) {
        const clamped = Math.min(newValue[0], 100 - minDistance);
        setValue2([clamped, clamped + minDistance]);
      } else {
        const clamped = Math.max(newValue[1], minDistance);
        setValue2([clamped - minDistance, clamped]);
      }
    } else {
      setValue2(newValue);
    }
  };

  return (
    <div className="Drawer">
      <h3>Search Here...</h3>
      <Form inline>
        <Row>
          <Col xs="auto">
            <Form.Control
              type="text"
              placeholder="Search"
              className=" mr-sm-2"
            />
          </Col>
          <Col xs="auto">
            <FaSearch />
          </Col>
        </Row>
      </Form>
      <div className="Deal-offer"style={{marginTop:'25px',marginBottom:'25px'}}>
        <h3>Price Range</h3>
      <Slider
        getAriaLabel={() => 'Minimum distance shift'}
        value={value2}
        onChange={handleChange2}
        valueLabelDisplay="auto"
        getAriaValueText={valuetext}
        disableSwap
        sx={{width:'70%',color:'orange'}}
      />
      </div>
      <div className="Deal-offer">
        <h3>Deal offer On</h3>
        <ul>
          <li>
            {" "}
            <FormControlLabel control={<Checkbox />} label="BackPack" />
          </li>
          <li>
            <FormControlLabel control={<Checkbox />} label="Phone Pocket" />
          </li>
        </ul>
      </div>
      <div className="Deal-offer">
        <h3>Discount</h3>
        {[
          "5% or More",
          "10% or More",
          "20% or More",
          "30% or More",
          "50% or More",
          "60% or More",
        ].map((a, i) => (
          <ul key={i}>
            <li>
              {" "}
              <FormControlLabel control={<Checkbox />} label={a} />
            </li>
          </ul>
        ))}
      </div>
      <div className="Deal-offer">
        <h3>Customer Reviews</h3>
        <ul>
          <li>
            <Rating
              name="half-rating"
              size="small"
              defaultValue={5}
              precision={0.5}
            />
            5.0
          </li>

          <li>
            {" "}
            <Rating
              name="half-rating"
              size="small"
              defaultValue={4}
              precision={0.5}
            />{" "}
            4.0
          </li>
          <li>
            <Rating
              name="half-rating"
              defaultValue={3.5}
              precision={0.5}
              size="small"
            />{" "}
            3.5
          </li>
          <li>
            <Rating
              name="half-rating"
              defaultValue={3}
              precision={0.5}
              size="small"
            />
            3.0
          </li>
          <li>
            <Rating
              name="half-rating"
              defaultValue={2.5}
              precision={0.5}
              size="small"
            />
            2.5
          </li>
        </ul>
      </div>
      <div className="Deal-offer">
        <h3>Special Deals</h3>
        <ul>
            <li className="draw-rows">
                <div className="draw-img">
                    <img src={G1} alt="1"/>
                </div>
                <div>
                    <p>Farenheit (Grey)</p>
                    <p>$575.00</p>
                </div>
            </li>
            <li className="draw-rows">
                <div className="draw-img">
                    <img src={G1} alt="1"/>
                </div>
                <div>
                    <p>Farenheit (Grey)</p>
                    <p>$575.00</p>
                </div>
            </li>
            <li className="draw-rows">
                <div className="draw-img">
                    <img src={G2} alt="1"/>
                </div>
                <div>
                    <p>Opium (Grey)</p>
                    <p>$325.00</p>
                </div>
            </li>
            <li className="draw-rows">
                <div className="draw-img">
                    <img src={G1} alt="1"/>
                </div>
                <div>
                    <p>Azmani Round</p>
                    <p>$725.00</p>
                </div>
            </li>
            <li className="draw-rows">
                <div className="draw-img">
                    <img src={G1} alt="1"/>
                </div>
                <div>
                    <p>Farenheit Oval</p>
                    <p>$325.00</p>
                </div>
            </li>
        </ul>
      </div>
    </div>
    
  );
}

export default Draws;
