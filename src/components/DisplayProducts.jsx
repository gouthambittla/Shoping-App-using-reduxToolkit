import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function DisplayProducts() {
  const products = useSelector((state) => state.products.products);

  return (
    <div className="arrange">
      {products.map((product) => (
        <div className="row" key={product.id}>
          <div className="display">
            <img src={product.image} alt="product" />
            <h5>Title: {product.title}</h5>
            <h5>Price: {`${product.price} $`}</h5>

            <Link to={`/ShowDetails/${product.id}`}>
              <button>Show Details</button>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}

export default DisplayProducts;
