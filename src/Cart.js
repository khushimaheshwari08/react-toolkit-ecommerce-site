import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const navigate = useNavigate();
  const { cart } = useSelector((data) => data.user);
  console.log(cart);
  return (
    <div>
      <p>ALL CART PRODUCTS</p>
      <button onClick={() => navigate("/")}>Continue Shopping</button>
      <ul>
        {cart &&
          cart.map((data) => (
            <div>
              <img
                src={data.image}
                alt="image"
                style={{ height: 100, width: 100 }}
              />
              <p>name:{data.name}</p>
              <p>quantity:{data.quantity}</p>
            </div>
          ))}
      </ul>
    </div>
  );
};

export default Cart;
