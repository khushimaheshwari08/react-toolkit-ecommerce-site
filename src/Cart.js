import React from 'react'
import { useSelector } from 'react-redux'

const Cart = () => {

  const {cart} = useSelector(data=>data.user)
  console.log(cart)
  return (
    <div>
      <p>ALL CART PRODUCTS</p>
      <ul>
        {cart &&
          cart.map((data) => (
            <div>
              <img
                src={data.image}
                alt="image"
                style={{ height: 100, width: 100 }}
              />
              <p style={{ color: "black" }}>name:{data.name}</p>
              <p style={{ color: "black" }}>quantity:{data.quantity}</p>
              {/* </NavLink> */}

            </div>
          ))}
      </ul>
    </div>
  )
}

export default Cart