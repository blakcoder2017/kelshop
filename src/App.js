import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";

import Header from "@components/UI/Header/Header";
import Footer from "@components/UI/Footer/Footer";
import { routes } from "@utils/routes";
import useProducts from "@hooks/useProducts";

function App() {
  const [_, categories] = useProducts(`/products/categories`);

  return (
    <div className="container-md">
      <Router>
        <Header shopDetails={categories} />
        <Routes>
          {routes.map((route, index) => (
            <Route
              key={index}
              path={route.path}
              Component={route.component}
            ></Route>
          ))}
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
