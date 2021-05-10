import React from "react";
import { Link } from "react-router-dom";
const Products = ({ products, categories, filterItems }) => {
  return (
    <div className="main">
      <section className="sidebar-filter">
        <div className="category">
          <h2>Category</h2>
          {categories.map((category, index) => {
            let active = false;
            return (
              <div key={index}>
                <button
                  onClick={() => {
                    filterItems(category);
                    active = !active;
                  }}
                  className={`category-btn ${active ? "active" : ""}`}
                >
                  {category}
                </button>
              </div>
            );
          })}
        </div>
      </section>
      <section className="products">
        {products.map((item) => {
          const { id, image, name, price } = item;
          return (
            <Link to={`/products/${id}`} key={id}>
              <div className="single-item">
                <div className="img-div">
                  <img className="product-img" src={image} alt={name} />
                </div>
                <footer>
                  <h4>{name}</h4>
                  <p>Price :${price}</p>
                </footer>
              </div>
            </Link>
          );
        })}
      </section>
    </div>
  );
};

export default Products;
