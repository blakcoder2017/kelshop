import React from "react";
import { useLocation } from "react-router-dom";

import ProductList from "@components/ProductList/ProductList";
import useProducts from "@hooks/useProducts";

const Products = () => {
  const location = useLocation();
  const [loading, products] = useProducts(
    `/products/category/${location.state}`
  );

  const addToCart = (event) => {
    console.log("Products page", event.target);
  };

  return (
    <div>
      <ProductList loading={loading} products={products} />
    </div>
  );
};

export default Products;
