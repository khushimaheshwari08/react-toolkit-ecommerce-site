import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cart from "./Cart";
import Home from "./Home";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
