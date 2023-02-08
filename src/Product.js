import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getProducts } from "./service/api";

const Product = () => {
  const navigate = useNavigate();

  const [product, setProducts] = useState([]);
  const getProduct = async () => {
    let response = await getProducts();
    setProducts(response.data);
  };
  console.log(product);

  const onCart = () => {
    navigate("/cart");
  };

  useEffect(() => {
    getProduct();
  }, []);

  return (
    <div>
      <p>ALL PRODUCTS</p>
      <ul>
        {product &&
          product.map((data) => (
            <div>
              <img
                src={data.image}
                alt="image"
                style={{ height: 100, width: 100 }}
              />
              <p style={{ color: "black" }}>{data.name}</p>
              <button style={{ marginBottom: 20 }} onClick={onCart}>
                ADD TO CART
              </button>
            </div>
          ))}
      </ul>
    </div>
  );
};

export default Product;
