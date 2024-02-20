import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import Axios from "axios";
import { setSelectedProduct } from "../redux/Slices/selectedProductSlice";
import Navbar from "./Navbar";
import { Grid, Stack, Typography, Button } from "@mui/material";

const ShowDetails = () => {
  const { id } = useParams();
  const data = useSelector((state) => state.selectedProduct);
  const dispatch = useDispatch();

  const fetchData = async () => {
    try {
      const response = await Axios.get(
        `https://fakestoreapi.com/products/${id}`
      );
      dispatch(setSelectedProduct(response.data));
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    if (id) {
      fetchData();
    }
  }, [id]);

  return (
    <>
      <Navbar />
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        height="100vh"
      >
        <Grid item xs={10} sm={8} md={6}>
          <Stack spacing={3} sx={{ textAlign: "center" }}>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <img
                src={data.image}
                alt="img"
                style={{ width: "30%", borderRadius: "5px", height: "300px" }}
              />
            </div>
            <Typography variant="h5">{data.title}</Typography>
            <Typography variant="h6">{`${data.price} $`}</Typography>
            <Typography>{data.description}</Typography>
            <Link to="/Buyitem" style={{ textDecoration: "none" }}>
              <Button
                variant="contained"
                sx={{
                  backgroundColor: "#ff5722",
                  color: "#fff",
                  "&:hover": { backgroundColor: "#ff8a65" },
                }}
              >
                Buy
              </Button>
            </Link>
          </Stack>
        </Grid>
      </Grid>
    </>
  );
};

export default ShowDetails;
