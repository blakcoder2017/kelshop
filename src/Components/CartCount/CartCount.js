import React, { useState, useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { FaCartPlus } from "react-icons/fa";

import ShopService from "../../ApiServices/ShopService";

const CartCount = () => {
  const [cartCount, setCartCount] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    ShopService.getcartSingleItem().then((res) => {
      setCartCount(res.data.products.length);
    });
  }, []);

  const goToCart = () => {
    //console.log("go to cart page");
    navigate("cart");
  };

  return (
    <div>
      <button onClick={goToCart}>
        <FaCartPlus />
        <span className="badge text-bg-danger">{cartCount}</span>
      </button>
    </div>
  );
};

export default CartCount;
