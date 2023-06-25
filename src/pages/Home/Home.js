import React from "react";
import ProductList from "@components/ProductList/ProductList";
import Banner from "@components/UI/Banner/Banner";
import "./Home.css";
import useProducts from "../../hooks/useProducts";

const Home = () => {
  const [loading, products] = useProducts('/products');

  const banners = ['/assets/images/banner1.jpg','/assets/images/banner2.jpg','/assets/images/banner3.jpg'];

  return (
    <>
      <Banner bans={banners} />
      <ProductList loading={loading} products={products} />
    </>
  );
};

export default Home;
