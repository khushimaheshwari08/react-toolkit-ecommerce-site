import React, { useEffect, useState } from "react";
import { NavLink, useNavigate} from "react-router-dom";
import { getProducts } from "./service/api";
import { useDispatch, useSelector } from "react-redux";
import { AddCart } from "./service/reducer/cartSystem";

const Product = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [product, setProducts] = useState([]);
  const getProduct = async () => {
    let response = await getProducts();
    setProducts(response.data);
  };
  // console.log(product);

  useEffect(() => {
    getProduct();
  }, []);

  return (
    <div>
    <button onClick={()=>navigate('/cart')}>Click to see cart page</button>
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
              {/* <NavLink to="/cart"> */}
              <button style={{ marginBottom: 20 }} onClick={() => dispatch(AddCart(data))}>
                ADD TO CART
              </button>
              {/* </NavLink> */}

            </div>
          ))}
      </ul>
    </div>
  );
};

export default Product;
