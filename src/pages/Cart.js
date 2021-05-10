import React from "react";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../Context";
const Cart = () => {
  const { cart, clearCart } = useGlobalContext();
  // console.log(cart);
  let sumTotal = 0;
  if (cart.length === 0) {
    return (
      <section className="cart">
        <h2>Your Cart</h2>
        <div>is currently empty</div>
      </section>
    );
  }
  return (
    <section className="cart">
      <h2>Your Cart</h2>
      {cart.map((cartItem, index) => {
        sumTotal = sumTotal + cartItem.total;
        return (
          <div key={index}>
            <h3>{cartItem.name}</h3>
          </div>
        );
      })}
      <div>Total : {sumTotal}</div>
      <Link to="./products">
        <button type="button">Shop More</button>
        {/* {console.log(cart)} */}
      </Link>
      <button
        type="button"
        onClick={() => {
          clearCart();
        }}
      >
        Clear Cart
      </button>
    </section>
  );
};

export default Cart;
