import { useDispatch } from "react-redux";
import Axios from "axios";
import { useEffect } from "react";
import { setProducts } from "../redux/Slices/productsSlice";
import "../App.css";
import DisplayProducts from "./DisplayProducts";

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await Axios.get("https://fakestoreapi.com/products");
        dispatch(setProducts(response.data));
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [dispatch]);

  return (
    <div>
      <h1>Product Details</h1>
      <DisplayProducts />
    </div>
  );
};

export default Home;
