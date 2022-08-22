import React from "react";
import { Products } from "../Components/Products";

export const Home = () => {
  return (
    <div>
      <h2 className="heading">Welcome To Redux Toolkit Store</h2>
      <section>
        <h1>Products</h1>
        <Products />
      </section>
    </div>
  );
};
