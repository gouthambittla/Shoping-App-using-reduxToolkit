import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./buyitem.css";
import { addProduct, subtractProduct } from "../redux/Slices/buyingSlice";

function Buyitem() {
  const [increment, setIncrement] = useState(1);
  const [click, setClick] = useState(false);
  const data = useSelector((state) => state.selectedProduct);
  const data1 = useSelector((state) => state.buying.totalPrice);
  console.log("data is", data1);
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
    <div className="Buy">
      <img src={data.image} alt="" />
      <h3>{`${click ? data1 : data.price} $`}</h3>
      <label>No of items: {increment}</label>
      <div>
        <button onClick={handleIncrement} className="incrementBtn">
          +
        </button>
        <button onClick={handleDecrement} className="decrementBtn">
          -
        </button>
      </div>
      <div>
        <input
          type="text"
          placeholder="Enter card details"
          className="cardInput"
        />
        <input type="text" placeholder="Expiry date" className="expiryInput" />
        <input type="text" placeholder="CVV" className="cvvInput" />
      </div>
      <button>Buy</button>
    </div>
  );
}

export default Buyitem;
