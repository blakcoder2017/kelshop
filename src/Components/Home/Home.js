import React, { useState, useEffect } from "react";
import Banner1 from "../../banner1.jpg";
import Banner2 from "../../banner2.jpg";
import Banner3 from "../../banner3.jpg";
import ShopService from "../../ApiServices/ShopService";
import ProductList from "../ProductList/ProductList";
import Banner from "../UI/Banner/Banner";
import "./Home.css";

const Home = () => {
  const [allProducts, setAllProducts] = useState([]);

  const banners = [Banner1, Banner2, Banner3];

  useEffect(() => {
    ShopService.getAllProducts().then((res) => {
      setAllProducts(res.data);
    });
  }, []);

  const viewProduct = () => {
    console.log("single product clicked");
  };
  return (
    <>
      <Banner bans={banners} />
      <ProductList products={allProducts} />
    </>
  );
};

export default Home;
