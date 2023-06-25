import React from "react";
import CartCount from "../../CartCount/CartCount";
import { Link, NavLink } from "react-router-dom";

const Header = (props) => {
  let shopDetails = props.shopDetails;
  console.log("shop", typeof shopDetails);
  const convertToProper = (str) => {
    str = str.toString();

    return str.replace(/\w\S*/g, function (txt) {
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <button
          className="navbar-toggler"
          type="button"
          data-mdb-toggle="collapse"
          data-mdb-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i className="fas fa-bars"></i>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <Link to="/" className="navbar-brand mt-2 mt-lg-0" href="#">
            <img src={'/assets/images/logo.png'} width="200" alt="Logo" loading="lazy" />
          </Link>
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            {shopDetails.map((menu) => (
              <li className="nav-item" key={menu}>
                <Link
                  to={`/products/${menu}`}
                  state={menu}
                  className="nav-link"
                >
                  {convertToProper(menu)}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="d-flex align-items-center">
          <CartCount />
        </div>
      </div>
    </nav>
  );
};

export default Header;
