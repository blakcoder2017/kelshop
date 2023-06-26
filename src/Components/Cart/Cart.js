import React, { useState, useEffect } from "react";
import CartItem from "../CartItem/CartItem";

import ShopService from "../../ApiServices/ShopService";

const Cart = () => {
  const [cartTotal, setCartTotal] = useState(0);
  const [cartItemsNumber, setCartItemsNumber] = useState(0);
  const [cartProducts, setCartProducts] = useState([]);

  const [allProducts, setAllProducts] = useState([]);
  let prods = [];

  let totalCart = 0;
  const incrementHandler = () => {
    console.log("qty change");
  };

  useEffect(() => {
    let newTotal = [];
    ShopService.getcartSingleItem().then((res) => {
      setCartItemsNumber(res.data.products.length);
      setCartProducts(res.data.products);
    });

    ShopService.getAllProducts().then((res) => {
      setAllProducts(res.data);
    });

    for (let i = 0; i < cartProducts.length; i++) {
      for (const prod of allProducts) {
        if (cartProducts[i].productId === prod.id) {
          prod.qty = cartProducts[i].quantity;
          totalCart += cartProducts[i].quantity * prod.price;
          //   console.log(totalCart);
          prods.push(prod);
        }
      }
    }

    setCartTotal(totalCart);
    //s console.log(prods, cartTotal);
  }, []);

  return (
    <div>
      <section>
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-12">
              <div
                className="card card-registration card-registration-2"
                style={{ borderRadius: "15px" }}
              >
                <div className="card-body p-0">
                  <div className="row g-0">
                    <div className="col-lg-8">
                      <div className="p-5">
                        <div className="d-flex justify-content-between align-items-center mb-5">
                          <h1 className="fw-bold mb-0 text-black">
                            Shopping Cart
                          </h1>
                          <h6 className="mb-0 text-muted">
                            {cartItemsNumber} items
                          </h6>
                        </div>
                        <hr className="my-4" />

                        <CartItem
                          item={cartProducts}
                          onIncrement={incrementHandler}
                        />

                        <div className="pt-5">
                          <h6 className="mb-0">
                            <a href="#!" className="text-body">
                              <i className="fas fa-long-arrow-alt-left me-2"></i>
                              Back to shop
                            </a>
                          </h6>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 bg-grey">
                      <div className="p-5">
                        <h3 className="fw-bold mb-5 mt-2 pt-1">Summary</h3>
                        <hr className="my-4" />

                        <div className="d-flex justify-content-between mb-4">
                          <h6 className="text-uppercase">
                            Items {cartItemsNumber}
                          </h6>
                          <h6>GHS {cartTotal}</h6>
                        </div>

                        <div className="d-flex justify-content-between mb-5">
                          <h6 className="text-uppercase">Total price</h6>
                          <h6>GHS {cartTotal}</h6>
                        </div>

                        <button
                          type="button"
                          className="btn btn-dark btn-block btn-lg"
                          data-mdb-ripple-color="dark"
                        >
                          Pay
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Cart;