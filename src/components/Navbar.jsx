import React from "react";
import { formateador } from "../utils/formateador";
import { FaShoppingCart } from "react-icons/fa";

const total = 25000;
const token = false;
const Navbar = () => {
  return (
    <div>
      {/* <p>Home</p>

      <div>
        {token ? (
          <div>
            <p>Profile</p>
            <p>Logout</p>
          </div>
        ) : (
          <div>
            <p>Login</p>
            <p>Register</p>
          </div>
        )}
      </div>

      <p>Total ${total}</p> */}

      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand colorLogo" href="#">
            Pizzería Mamma mía
          </a>
          <span className="navbar-toggler-icon"></span>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <div className="navbar-nav me-auto mb-2 mb-lg-0">
              <button
                className="btn btn-outline-light btn-sm margenBoton"
                type="submit"
              >
                <FaShoppingCart />
                Home
              </button>
              {token ? (
                <>
                  <button
                    className="btn btn-outline-light btn-sm margenBoton"
                    type="submit"
                  >
                    <FaShoppingCart />
                    Profile
                  </button>
                  <button
                    className="btn btn-outline-light btn-sm margenBoton"
                    type="submit"
                  >
                    <FaShoppingCart />
                    Logout
                  </button>
                </>
              ) : (
                <>
                  <button
                    className="btn btn-outline-light btn-sm margenBoton"
                    type="submit"
                  >
                    <FaShoppingCart />
                    Login
                  </button>
                  <button
                    className="btn btn-outline-light btn-sm margenBoton"
                    type="submit"
                  >
                    <FaShoppingCart />
                    Register
                  </button>
                </>
              )}
            </div>

            <form className="d-flex" role="search">
              <button className="btn btn-outline-info" type="submit">
                <FaShoppingCart />
                Total: ${formateador(total)}
              </button>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
