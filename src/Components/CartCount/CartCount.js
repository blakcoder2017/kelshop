import React, { useState, useEffect } from "react";
import { FaCartPlus } from "react-icons/fa";

import ShopService from "../../ApiServices/ShopService";

const CartCount = () => {
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    ShopService.getCartItems().then((res) => {
      let count = 0;
      res.data.forEach((item) => {
        count += item.products.length;
      });

      setCartCount(count);
    });
  }, []);

  return (
    <div>
      <FaCartPlus />
      <span className="badge text-bg-danger">{cartCount}</span>
    </div>
  );
};

export default CartCount;
