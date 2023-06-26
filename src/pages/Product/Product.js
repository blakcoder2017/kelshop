import React from "react";
import { useLocation } from "react-router-dom";
import "./Product.css";

import useProducts from "@hooks/useProducts";

const Product = (props) => {
  const location = useLocation();
  const [loading, product] = useProducts(`/products/${location.state}`);

  // console.log(location.state);
  const handleIncrement = () => {};

  const convertToProper = (str) => {
    str = str.toString();
    return str.replace(/\w\S*/g, function (txt) {
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
  };

  return (
    <section className="py-5">
      {loading ? (
        <div className="d-flex justify-content-center">
          <div className="spinner-border" role="status">
            <span className="sr-only"></span>
          </div>
          <h5>Loading...</h5>
        </div>
      ) : (
        <div className="container px-4 px-lg-5 my-5">
          <div className="row gx-4 gx-lg-5 align-items-center">
            <div className="col-md-6">
              <img
                className="card-img-top mb-5 mb-md-0"
                src={product.image}
                alt="..."
              />
            </div>
            <div className="col-md-6">
              <div className="small mb-1">{product.category}</div>
              <h5 className="display-6 fw-bolder">{product.title}</h5>
              <div className="fs-5 mb-5">
                <span>GHS {product.price}</span>
              </div>
              <p className="lead">{product.description}</p>
              <div className="d-flex">
                <input
                  className="form-control text-center me-3"
                  id="inputQuantity"
                  type="num"
                  value="1"
                  onChange={handleIncrement}
                  style={{ maxWidth: "3rem" }}
                />
                <button
                  className="btn btn-outline-dark flex-shrink-0"
                  type="button"
                >
                  <i className="bi-cart-fill me-1"></i>
                  Add to cart
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Product;
