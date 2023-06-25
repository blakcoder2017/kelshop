import React, { useState, useEffect } from "react";
import ShopService from "../../ApiServices/ShopService";
import ProductList from "../ProductList/ProductList";
import Banner from "../UI/Banner/Banner";
import "./Home.css";

const Home = () => {
  const [allProducts, setAllProducts] = useState([]);

  const banners = ['/assets/images/banner1.jpg','/assets/images/banner2.jpg','/assets/images/banner3.jpg'];

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
