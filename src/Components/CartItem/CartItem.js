import React, { useState, useEffect } from "react";
import ShopService from "../../ApiServices/ShopService";
const CartItem = (props) => {
  const [productsDetails, setProductsDetails] = useState([]);

  const products = props.item;
  let prods = [];
  useEffect(() => {
    products.forEach((prod) => {
      ShopService.getSingleProduct(prod.productId).then((res) => {
        prods.push(res.data);
      });
    });
    setProductsDetails(prods);
  }, []);

  const incrementHandler = () => {
    console.log(productsDetails[0], "hhh");
  };

  return (
    <div>
      {prods.map((product) => (
        <div
          className="row mb-4 d-flex justify-content-between align-items-center"
          key={product.id}
        >
          <div className="col-md-2 col-lg-2 col-xl-2">
            <img
              src={product.image}
              className="img-fluid rounded-3"
              alt={product.title}
            />
          </div>
          <div className="col-md-3 col-lg-3 col-xl-3">
            <h6 className="text-muted">{product.quantity}</h6>
            <h6 className="text-black mb-0">{product.category}</h6>
          </div>
          <div className="col-md-3 col-lg-3 col-xl-2 d-flex">
            <button className="btn btn-link px-2">
              <i className="fas fa-minus"></i>
            </button>

            <input
              id="form1"
              min="0"
              name="quantity"
              value={product.quantity}
              type="number"
              onChange={incrementHandler}
              className="form-control form-control-sm"
            />

            <button className="btn btn-link px-2">
              <i className="fas fa-plus"></i>
            </button>
          </div>
          <div className="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
            <h6 className="mb-0">GHS {product.price}</h6>
          </div>
          <div className="col-md-1 col-lg-1 col-xl-1 text-end">
            <a href="#!" className="text-muted">
              <i className="fas fa-times"></i>
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CartItem;
