import React, { useState, useEffect } from "react";
import ShopService from "../../ApiServices/ShopService";
import { type } from "@testing-library/user-event/dist/type";
const CartItem = (props) => {
  const [productsDetails, setProductsDetails] = useState([]);
  const [allProducts, setAllProducts] = useState([]);
  let prods = [];

  const products = props.item;

  useEffect(() => {
    ShopService.getAllProducts().then((res) => {
      setAllProducts(res.data);
    });

    for (let i = 0; i < products.length; i++) {
      for (const prod of allProducts) {
        if (products[i].productId === prod.id) {
          prod.qty = products[i].quantity;
          prods.push(prod);
        }
      }
    }

    // console.log("setAllproducts", prods);
    setProductsDetails(prods);
  }, [products]);

  const incrementHandler = () => {
    console.log("prods", productsDetails);
  };

  return (
    <div>
      {productsDetails.map((p) => (
        <div
          className="row mb-4 d-flex justify-content-between align-items-center"
          key={p.id}
        >
          <div className="col-md-2 col-lg-2 col-xl-2">
            <img src={p.image} className="img-fluid rounded-3" alt={p.title} />
          </div>
          <div className="col-md-3 col-lg-3 col-xl-3">
            <h6 className="text-muted">{p.title}</h6>
            <h6 className="text-black mb-0">{p.category}</h6>
          </div>
          <div className="col-md-3 col-lg-3 col-xl-2 d-flex">
            <button className="btn btn-link px-2">
              <i className="fas fa-minus"></i>
            </button>

            <input
              id="form1"
              min="0"
              name="quantity"
              value={p.qty}
              type="number"
              onChange={incrementHandler}
              className="form-control form-control-sm"
            />

            <button className="btn btn-link px-2">
              <i className="fas fa-plus"></i>
            </button>
          </div>

          <div className="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
            <h6 className="mb-0"> {p.price}</h6>
          </div>
          <div className="col-md-1 col-lg-1 col-xl-1 text-end">
            <a href="#!" className="text-muted">
              <i className="fas fa-times"></i>
            </a>
          </div>
          <hr className="my-4" />
        </div>
      ))}
    </div>
  );
};

export default CartItem;
