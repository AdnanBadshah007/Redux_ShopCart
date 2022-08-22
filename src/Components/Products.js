import React from "react";
import { useEffect } from "react";
// import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { add } from "../features/cartSlice";
import { getData } from "../features/productSlice";

export const Products = () => {
  const dispatch = useDispatch();
  const { data, isLoading } = useSelector((store) => store.product);
  // const [products, setProducts] = useState([]);

  // useEffect(() => {
  //   const fetchProducts = async () => {
  //     const res = await fetch("https://fakestoreapi.com/products");
  //     const data = await res.json();
  //     setProducts(data);
  //   };
  //   fetchProducts();
  // }, []);

  useEffect(() => {
    dispatch(getData());
  }, []);

  if (isLoading) {
    return <div class="loader"></div>;
  }

  return (
    <>
      <div className="productsWrapper">
        {data.map((product) => {
          return (
            <div className="card" key={product.id}>
              <img src={product.image} alt="" />
              <h4>{product.title}</h4>
              <h4>{product.price}</h4>
              <button className="btn" onClick={() => dispatch(add(product))}>
                Add to Cart
              </button>
            </div>
          );
        })}
      </div>
    </>
  );
};
