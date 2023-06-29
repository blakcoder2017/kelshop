import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import useCarts from "@hooks/useCarts";
import useProducts from "@hooks/useProducts";

import "./ProductList.css";

const ProductList = ({ loading, products }) => {
  const [items, setItems] = useState([]);
  const [myLoading, carts] = useProducts(`/carts`);
  const [msg, setMsg] = useState("");

  const addCart = (prod) => {
    const cartId = 2;
    const userId = 5;
    const cartDate = new Date();

    let product = [{ productId: prod.id, quantity: prod.quantity }];

    const finalData = {
      id: cartId,
      userId: 5,
      date: cartDate,
      products: product,
    };

    let filteredItems = carts.filter((cart) => {
      return cart.id === cartId;
    });

    if (filteredItems.length > 0) {
      axios
        .put(`https://fakestoreapi.com/carts/${cartId}`, finalData)
        .then((res) => {
          if (res.status === 200) {
            setMsg("Cart successfully updated");
          }
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      axios
        .post("https://fakestoreapi.com/carts", finalData)
        .then((res) => {
          if (res.status === 200) {
            setMsg("Item successfully added to cart!");
          }
        })
        .catch((err) => {
          console.log(err);
        });
      //
    }
  };
  return (
    <>
      <section className="section-background ">
        <div className="container py-5">
          <h4 className="text-center mb-5">
            <strong>Product listing</strong>
          </h4>
          {msg && (
            <div className="alert alert-success" role="alert">
              Item successfully addded to cart
            </div>
          )}

          {loading ? (
            <div className="d-flex justify-content-center">
              <div className="spinner-border" role="status">
                <span className="sr-only"></span>
              </div>
              <h5>Loading...</h5>
            </div>
          ) : (
            <div className="row">
              {products.map((product) => (
                <div className="col-lg-4 col-md-12 mb-4" key={product.id}>
                  <div className="bg-image hover-zoom ripple shadow-1-strong rounded">
                    <Link to={`/product/${product.id}`} state={product.id}>
                      <img
                        src={product.image}
                        className="w-100"
                        height="350px"
                        alt={""}
                      />
                    </Link>
                    <div className="mask mask-color">
                      <div className="d-flex justify-content-start align-items-start h-100">
                        <h5>
                          <span className="badge bg-success pt-2 ms-3 mt-3 text-light">
                            GHS {product?.price}
                          </span>
                        </h5>
                        <h5 className="btn" onClick={() => addCart(product)}>
                          <span className="badge bg-warning pt-2 ms-3 mt-3 text-light">
                            Add to Cart
                          </span>
                        </h5>
                      </div>
                    </div>
                    <div className="hover-overlay">
                      <div className="mask mask-color"></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default ProductList;
