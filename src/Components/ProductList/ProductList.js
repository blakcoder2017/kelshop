import React, { useState } from "react";
import "./ProductList.css";

const ProductList = (props) => {
  let products = props.products;

  return (
    <>
      <section className="section-background ">
        <div className="container py-5">
          <h4 className="text-center mb-5">
            <strong>Product listing</strong>
          </h4>

          <div className="row">
            {products.map((product) => (
              <div className="col-lg-4 col-md-12 mb-4" key={product.id}>
                <div className="bg-image hover-zoom ripple shadow-1-strong rounded">
                  <img src={product.image} className="w-100" height="350px" />
                  <a href="#!">
                    <div className="mask mask-color">
                      <div className="d-flex justify-content-start align-items-start h-100">
                        <h5>
                          <span className="badge bg-success pt-2 ms-3 mt-3 text-light">
                            GHS {product.price}
                          </span>
                        </h5>
                      </div>
                    </div>
                    <div className="hover-overlay">
                      <div className="mask mask-color"></div>
                    </div>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductList;
