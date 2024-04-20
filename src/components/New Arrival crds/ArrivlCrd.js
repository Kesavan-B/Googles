import {  Button, Grid } from "@mui/material";
import React,{useState} from "react";
import { arrival } from "./ArrivlCrdData";
import Card from "react-bootstrap/Card";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";
import { FaCartPlus } from "react-icons/fa";
import "./ArrivlCrd.css";
import { useNavigate } from "react-router";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import { MdClose } from "react-icons/md";
import { Link } from "react-router-dom";

function ArrivlCrd() {
    const navigate = useNavigate();

    const oneData = (e,data)=>{
      navigate(`/arivalparms/${data?.id}`,{
        state:data
      })
    }

    const [open, setOpen] = useState(false);
    const [fullWidth, setFullWidth] = useState(true);
    const [maxWidth, setMaxWidth] = useState("sm");
  
    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };
  return (
    <div className="arrCrd-section">
      
       
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
         spacing={5}      
        >
          {arrival &&
            arrival.map((a, i) => {
              return (
                <Grid item xs={12} sm={6} md={4} lg={3} key={i}>
                  <Card style={{ width: "22rem",cursor:"pointer" }} >
                    <div className="prod-stock">
                      <p className="stock">{a.stock}</p>
                    </div>
                    <Card.Img variant="top" src={a.imag} style={{width:'100%',maxWidth:'260px'}} alt="products"  onClick={(e)=>oneData(e,a,i)}/>
                    <Card.Body>
                      <div className="crd-flex">
                        <div>
                          <Card.Title className="arrcrd-title" onClick={(e)=>oneData(e,a,i)}>
                            {a.title}
                          </Card.Title>
                          <Card.Text className="arrcrd-text">
                            {a.price}
                          </Card.Text>
                        </div>
                        <div>
                          <FaCartPlus style={{ fontSize: "22px" }}  onClick={handleClickOpen}/>
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
        <Dialog
              fullWidth={fullWidth}
              maxWidth={maxWidth}
              open={open}
              onClose={handleClose}
              className="full-dialog"
            >
              <div className="dialog-title">
                <div>
                  <h3 style={{ margin: "0px`" }}>Cart</h3>
                </div>
                <div>
                  <MdClose onClick={handleClose} style={{ fontSize: "22px" }} />
                </div>
              </div>
              <DialogContent>
                <DialogContentText>
                  <div className="dialog-items">
                    <ul className="dialog-items-list">
                      <li>Azmani Round</li>
                      <li>2</li>
                      <li>$2900.00</li>
                    </ul>
                    <ul className="dialog-items-list">
                      <li>Azmani Round</li>
                      <li>2</li>
                      <li>$2900.00</li>
                    </ul>
                    <ul className="dialog-items-list">
                      <li>Azmani Round</li>
                      <li>2</li>
                      <li>$2900.00</li>
                    </ul>
                  </div>
                </DialogContentText>
              </DialogContent>
              <div className="dialog-actions">
                <div>
                  <p
                    style={{
                      margin: "0px",
                      fontSize: "18px",
                      fontWeight: "600",
                    }}
                  >
                    Total amount : Rs. 22500
                  </p>
                </div>
                <div>
                  <Link to='/checkout'>
                    <Button sx={{ color: "#ff4e00",fontWeight:'600' }}>CHECK OUT</Button>
                  </Link>
                </div>
              </div>
            </Dialog>
    </div>
  );
}

export default ArrivlCrd;
