import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { Grid, CircularProgress } from "@mui/material";
import Axios from "axios";
import { Button } from "@mui/material";
import { setProducts } from "../redux/Slices/productsSlice";
import { LoginStyles } from "./GlobalStyles";
import Navbar from "./Navbar";

function DisplayProducts() {
  const products = useSelector((state) => state.products.products);
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(5);
  const [loading, setLoading] = useState(true); // State for loading
  const classes = LoginStyles();

  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await Axios.get("https://fakestoreapi.com/products");
        dispatch(setProducts(response.data));
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false); // Set loading to false even if there's an error
      }
    };

    fetchData();
  }, [dispatch]);

  const handlePagination = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(products.length / productsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <>
      {loading && (
        <div className={classes.loaderContainer}>
          <CircularProgress />
        </div>
      )}
      {!loading && (
        <Grid container spacing={2} className={classes.pageContainer}>
          <Grid item xs={12}>
            <Grid container spacing={2} className={classes.cardContainer}>
              {currentProducts.map((product) => (
                <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                  <div className={classes.card}>
                    <img
                      src={product.image}
                      alt="product"
                      className={classes.cardImage}
                    />
                    <h5>{product.title}</h5>
                    <h5>{`${product.price} $`}</h5>
                    <Link to={`/ShowDetails/${product.id}`}>
                      <Button
                        variant="contained"
                        sx={{
                          backgroundColor: "#ff5722",
                          color: "#fff",
                          "&:hover": { backgroundColor: "#ff8a65" },
                        }}
                      >
                        Show Details
                      </Button>
                    </Link>
                  </div>
                </Grid>
              ))}
            </Grid>
          </Grid>
          <Grid item xs={12} className={classes.paginationContainer}>
            {pageNumbers.map((number) => (
              <span
                key={number}
                className={classes.paginationButton}
                onClick={() => handlePagination(number)}
                style={{
                  fontWeight: currentPage === number ? "bold" : "normal",
                  backgroundColor: currentPage === number ? "#ff5722" : "#fff",
                }}
              >
                {number}
              </span>
            ))}
          </Grid>
        </Grid>
      )}
    </>
  );
}

export default DisplayProducts;
