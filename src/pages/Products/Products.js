import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import ShopService from "../../services/ShopService";

import ProductList from "../../components/ProductList/ProductList";

const Products = () => {
  const [products, setProducts] = useState([]);
  const location = useLocation();

  const params = location.state;

  ShopService.getOneCategory(params).then((res) => {
    setProducts(res.data);
  });

  return (
    <div>
      <ProductList products={products} />
    </div>
  );
};

export default Products;
