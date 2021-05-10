import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
// import Sidebar from "./components/Sidebar";
import Home from "./components/Home";
import About from "./pages/About";
import Cart from "./pages/Cart";
import Products from "./pages/Products";
import Error from "./pages/Error";
import SingleProduct from "./pages/SingleProduct";
import { data } from "./data";

const allCategories = ["all", ...new Set(data.map((item) => item.category))];
function App() {
  const [products, setProducts] = useState(data);
  // console.log(data);
  const categories = allCategories;
  const filterItems = (category) => {
    if (category === "all") {
      setProducts(data);
      return;
    }
    const newProduct = data.filter((item) => item.category === category);
    setProducts(newProduct);
  };
  return (
    <Router>
      <Navbar />
      {/* <Sidebar /> */}
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route exact path="/products">
          <Products
            products={products}
            categories={categories}
            filterItems={filterItems}
          />
        </Route>
        <Route path="/products/:id">
          <SingleProduct products={products} />
        </Route>
        <Route path="/cart">
          <Cart />
        </Route>
        <Route path="*">
          <Error />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
