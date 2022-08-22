import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { remove } from "../features/cartSlice";

export const Cart = () => {
  const products = useSelector((store) => store.cart);
  const dispatch = useDispatch();
  return (
    <div>
      <h3>Cart</h3>
      <div className="cartWrapper">
        {products.map((product) => {
          return (
            <div className="cartCard" key={product.id}>
              <img src={product.image} alt="" />
              <h4>{product.title}</h4>
              <h4>{product.price}</h4>
              <button
                className="btn"
                onClick={() => dispatch(remove(product.id))}
              >
                Remove Cart
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};
