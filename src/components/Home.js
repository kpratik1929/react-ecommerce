import React from "react";
import { Link } from "react-router-dom";
// import { data } from "../data";
const Home = () => {
  return (
    <main className="home">
      <section className="home-center">
        <div className="container">
          <h1>Design Your Comfort Zone</h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto
            fugit dolorem dignissimos earum assumenda. Illo ea porro nemo, fugit
            ipsum quia necessitatibus debitis vel voluptates mollitia
            perspiciatis eius quisquam dolores.
          </p>
          <div>
            <Link to="/products">
              <button type="button" className="btn">
                Shop Now
              </button>
            </Link>
          </div>
        </div>
        <div className="container">
          <div className="img-container">
            <img src="../../assets/iPhone-X.jpg" alt="shop" />
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
