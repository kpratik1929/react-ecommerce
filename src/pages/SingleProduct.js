import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useGlobalContext } from "../Context";
const SingleProduct = ({ products }) => {
  const { addToCart } = useGlobalContext();
  let { id } = useParams();
  const [counter, setCounter] = useState(1);
  return (
    <div>
      <Link to="/products">Back To Products</Link>
      {products.map((item, index) => {
        const { name, desc, price, availability, image } = item;
        if (item.id === Number(id)) {
          return (
            <div className="single-item" key={index}>
              <div className="image-container">
                <img src={image} alt={name} />
              </div>
              <p>{name}</p>
              <p>Description :{desc}</p>
              <p>Price : ${price}</p>
              <p>Availability : {availability}</p>
              <button
                type="button"
                onClick={() => {
                  if (counter <= 0) {
                    setCounter(0);
                  } else {
                    setCounter(counter - 1);
                  }
                }}
              >
                -
              </button>
              {counter}
              <button type="button" onClick={() => setCounter(counter + 1)}>
                +
              </button>
              <Link to="../cart">
                <button
                  type="button"
                  onClick={() => addToCart(Number(id), counter)}
                >
                  Add To Cart
                </button>
              </Link>
            </div>
          );
        } else {
          return <div key={index}></div>;
        }
      })}
    </div>
  );
};

export default SingleProduct;
