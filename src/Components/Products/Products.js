import React from "react";
import { useLocation } from "react-router-dom";

const Products = () => {
  const location = useLocation();

  const params = location.state;
  return (
    <div>
      <h3>Products in {params} category</h3>
    </div>
  );
};

export default Products;
