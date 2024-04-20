import { Button, Grid } from "@mui/material";
import React from "react";
import Form from "react-bootstrap/Form";
import { Row } from "react-bootstrap";
import "./Contacts.css";

const Formss = () => {
  return (
    <div className="full-frm">
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="flex-start"
        columnGap={4}
      >
        <Grid md={5}>
          <div>
            <Form>
              <Row>
                <Form.Label>NAME</Form.Label>
                <Form.Control type="text" size="lg"  />
                <Form.Label>EMAIL</Form.Label>
                <Form.Control size="lg" />
                <Form.Label>SUBJECT</Form.Label>
                <Form.Control type="text" size="lg" />
              </Row>
            </Form>
          </div>
        </Grid>

        <Grid md={5}>
          <Form>
            <Form.Group
              className="mb-4"
              controlId="exampleForm.ControlTextarea1"
              
            >
              <Form.Label>ENTER MESSAGE</Form.Label>
              <Form.Control
                as="textarea"
                rows={7}
                style={{ display: "inline" }}
                size="lg"
              />
              <Button variant="contained" fullWidth sx={{ padding: "15px",fontSize:'15px',background:'#000','&:hover':{
                background:'#000'
              } }}>
                Submit
              </Button>
            </Form.Group>
          </Form>
        </Grid>
      </Grid>
    </div>
  );
};

export default Formss;
