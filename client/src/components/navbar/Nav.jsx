import React, { useState } from "react";

import { Link } from "react-router-dom";

function Nav() {
  const [isNavOpen, setIsNavOpen] = useState(false);
 

  const handleToggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg fixed-top bg-primary">
        <div className="container">
          <a className="navbar-brand text-white fs-4 fw-bold" href="#">
            Aniket Enterprises
          </a>
          <button
            className="navbar-toggler"
            type="button"
            id="navbarToggler"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasDarkNavbar"
            aria-controls="offcanvasDarkNavbar"
            aria-label="Toggle navigation"
            onClick={handleToggleNav}
          >
            <span className="navbar-toggler-icon text-white"></span>
          </button>
          <div
            className={`offcanvas offcanvas-end text-bg-primary ${isNavOpen ? "show" : ""}`}
            tabIndex="-1"
            id="offcanvasDarkNavbar"
            aria-labelledby="offcanvasDarkNavbarLabel"
          >
            <div className="offcanvas-header">
              <h5 className="offcanvas-title text-white" id="offcanvasDarkNavbarLabel">
                Aniket Enterprises
              </h5>
              <button
                type="button"
                className="btn-close btn-close-white"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
                id="togglerClosebtn"
              ></button>
            </div>
            <div className="offcanvas-body">
              <ul className="navbar-nav offnav justify-content-end flex-grow-1 pe-3">
                <li className="nav-item">
                  <Link
                    className="nav-link"
                    to="/"
                  >
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="/#aboutUs"
                  >
                    About Us
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="/#services"
                  >
                    Services
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="/#charges"
                  >
                    Charges & Discount
                  </a>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link"
                    to="/projects"
                  >
                    Projects
                  </Link>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="/#team"
                  >
                    Team
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Nav;
