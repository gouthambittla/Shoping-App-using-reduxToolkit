import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Grid,
  Typography,
  TextField,
  Button,
  Card,
  CardContent,
  CardActions,
} from "@mui/material"; // Importing Grid, Typography, TextField, Button, Card, CardContent, and CardActions from Material-UI
import { addProduct, subtractProduct } from "../redux/Slices/buyingSlice";

function Buyitem() {
  const [increment, setIncrement] = useState(1);
  const [click, setClick] = useState(false);
  const data = useSelector((state) => state.selectedProduct);
  const data1 = useSelector((state) => state.buying.totalPrice);
  const dispatch = useDispatch();

  const handleIncrement = () => {
    setIncrement(increment + 1);
    const update = data.price * (increment + 1);
    dispatch(addProduct(update));
    setClick(true);
  };

  const handleDecrement = () => {
    if (increment > 1) {
      const price = data.price;
      const updatedPrice = data1 - price;
      dispatch(subtractProduct(updatedPrice));
      setIncrement(increment - 1);
      setClick(true);
    } else {
      dispatch(subtractProduct(data.price));
      setClick(false);
    }
  };

  return (
    <Grid container justifyContent="center" alignItems="center" height="100vh">
      <Grid item xs={12} sm={8} md={6}>
        <Card>
          <CardContent
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
          >
            <Typography variant="h5" component="div" align="center">
              {data.title}
            </Typography>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <img
                src={data.image}
                alt="product"
                style={{ maxWidth: "35%", height: "auto", marginTop: 10 }}
              />
            </div>
            <Typography
              variant="h6"
              component="div"
              align="center"
              gutterBottom
            >
              {`${click ? data1 : data.price} $`}
            </Typography>
            <Typography variant="body1" component="div" align="center">
              No of items: {increment}
            </Typography>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                marginTop: 10,
              }}
            >
              <Button
               variant="contained"
               sx={{
                 backgroundColor: "#ff5722",
                 color: "#fff",
                 "&:hover": { backgroundColor: "#ff8a65" },
               }}
                onClick={handleIncrement}
                style={{ marginRight: 10 }}
              >
                +
              </Button>
              <Button
                variant="contained"
                sx={{
                  backgroundColor: "#ff5722",
                  color: "#fff",
                  "&:hover": { backgroundColor: "#ff8a65" },
                }}
                onClick={handleDecrement}
              >
                -
              </Button>
            </div>
            <div style={{ marginTop: 20 }}>
              <TextField
                fullWidth
                variant="outlined"
                placeholder="Enter card details"
                className="cardInput"
              />
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginTop: 10,
              }}
            >
              <TextField
                variant="outlined"
                placeholder="Expiry date"
                className="expiryInput"
              />
              <TextField
                variant="outlined"
                placeholder="CVV"
                className="cvvInput"
              />
            </div>
          </CardContent>
          <CardActions style={{ justifyContent: "center" }}>
            <Button variant="contained"
                sx={{
                  backgroundColor: "#ff5722",
                  color: "#fff",
                  "&:hover": { backgroundColor: "#ff8a65" },
                }}>
              Buy
            </Button>
          </CardActions>
        </Card>
      </Grid>
    </Grid>
  );
}

export default Buyitem;
