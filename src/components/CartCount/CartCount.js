import React, { useState, useEffect } from "react";
import { FaCartPlus } from "react-icons/fa";
import useProducts from "@hooks/useProducts";

const CartCount = () => {
  const [loading, carts] = useProducts(`/carts`);
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    if (!loading && carts.length > 0) {
      const cartItems = carts
        .map((cart) => cart.products.length)
        .reduce((acc = 0, curr) => acc + curr);
      setCartCount(cartItems);
    }
  }, [carts, loading]);

  return (
    <div>
      <FaCartPlus />
      <span className="badge text-bg-danger">{cartCount}</span>
    </div>
  );
};

export default CartCount;
