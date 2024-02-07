import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import Axios from "axios";
import { useEffect } from "react";
import { setSelectedProduct } from "../redux/Slices/selectedProductSlice";
import "./ShowDetails.css";

const ShowDetails = () => {
  const { id } = useParams();
  const data = useSelector((state) => state.selectedProduct);
  console.log(data);
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
    <div className="item">
      <img src={data.image} alt="img" />
      <h4>{data.title}</h4>
      <h4>{`${data.price} $`}</h4>
      <p>{data.description}</p>
      <Link to="/Buyitem">
        <button>Buy</button>
      </Link>
    </div>
  );
};

export default ShowDetails;
