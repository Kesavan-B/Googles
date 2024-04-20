import React from 'react'
import Card from "react-bootstrap/Card";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";
import { FaCartPlus } from "react-icons/fa";
import {  Grid } from "@mui/material";
import './CrdOne.css'
import { arrival } from './CrdOneData';


function CrdOne() {

  return (
    <div>
         <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
        rowGap={2}
        sx={{margin:'0px auto'}}
        >
          {arrival &&
            arrival.map((a, i) => {
             
              return (
                <Grid item xs={12} sm={6} md={4} lg={3} key={i}>
                  <Card className="width-crd" >
                    <div className="prod-stocks">
                      <p className="stocks">{a.stock}</p>
                    </div>
                    <Card.Img variant="top" src={a.imag} style={{width:'100%',maxWidth:'260px'}} alt="products"/>
                    <Card.Body>
                      <div className="crd-flexs">
                        <div>
                          <Card.Title className="arrcrd-titles">
                            {a.title}
                          </Card.Title>
                          <Card.Text className="arrcrd-texts">
                            {a.price}
                          </Card.Text>
                        </div>
                        <div>
                          <FaCartPlus style={{ fontSize: "22px" }} />
                        </div>
                      </div>
                      <Stack spacing={1}>
                        <Rating name="size-small" size="small" />
                      </Stack>
                    </Card.Body>
                  </Card>
                </Grid>
              );
            })}
        </Grid>
    </div>
  )
}

export default CrdOne
