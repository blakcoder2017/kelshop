import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";

import Header from "@components/UI/Header/Header";
import ShopService from "@services/ShopService";
import {routes} from "@utils/routes";

function App() {
  const [shopDetails, setShopDetails] = useState([]);

  useEffect(() => {
    ShopService.getCategories().then((res) => {
      setShopDetails(res.data);
    });
  }, []);

  return (
    <div className="container-md">
      <Router>
        <Header shopDetails={shopDetails} />
        <Routes>
          {
            routes.map((route)=>(
                <Route path={route.path} Component={route.component}></Route>
            ))
          }

          {/*<Route path="/cart/:id" Component={Cart}></Route>*/}
          {/*<Route path="/product/:id" Component={Product}></Route>*/}
          {/*<Route path="/products/:cat" Component={Products}></Route>*/}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
