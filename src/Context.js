import React, { useReducer, useContext } from "react";
import { data } from "./data";

const AppContext = React.createContext();
const initialState = {
  cart: [],
};

// Reducer ----------------------------
const reducer = (state, action) => {
  if (action.type === "CLEAR_CART") {
    return { ...state, cart: [] };
  }
  //   if (action.type === "REMOVE") {
  //     return {
  //       ...state,
  //       cart: state.cart.filter((cartItem) => cartItem.id !== action.payload),
  //     };
  //   }
  if (action.type === "ADD_TO_CART") {
    console.log("previous state :", state.cart);
    let tmpCart = data.find((item) => item.id === action.payload);
    console.log("temp : ", tmpCart);

    let cartid = state.cart.find((item) => {
      if (item.id === action.payload) {
        item.amount = item.amount + action.counter;
        item.total = item.amount * item.price;
        return true;
      }
      return false;
    });

    if (cartid) {
      return {
        cart: [...state.cart],
      };
    } else {
      tmpCart.amount = action.counter;
      if (tmpCart.amount > 0) {
        tmpCart.inCart = true;
        tmpCart.total = tmpCart.total + tmpCart.amount * tmpCart.price;
      } else {
        return {
          cart: [...state.cart],
        };
      }
      return {
        cart: [...state.cart, tmpCart],
      };
    }
  } else {
    return state;
  }
};
// AppProvider-------------------------

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const addToCart = (id, counter) => {
    dispatch({ type: "ADD_TO_CART", payload: id, counter: counter });
  };
  const clearCart = () => {
    dispatch({ type: "CLEAR_CART" });
  };
  return (
    <AppContext.Provider value={{ ...state, addToCart, clearCart }}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
export { AppContext, AppProvider };
