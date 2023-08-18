/* eslint-disable jsx-a11y/anchor-is-valid */
import "./nav.css";
import { Link } from "react-router-dom";
import MenuIcon from "../../assets/images/nav/menu.svg";
import LoginIcon from "../../assets/images/nav/login.svg";
import CloseIcon from "../../assets/images/nav/close.svg";

/* Icons */
import { FaChevronRight } from "react-icons/fa";
import { RiEarthFill } from "react-icons/ri";
import { useEffect, useState } from "react";

const Nav = ({ transparent }) => {
  var nav_bg_color = "#F5F7FA";

  if (transparent) {
    /* For Transparent */
    nav_bg_color = "#ffffff00";
  }

  const navbgColor = {
    background: `${nav_bg_color}`,
  };
  var secondary_nav_text_color = "#00000A";

  if (transparent) {
    /* For Transparent */
    secondary_nav_text_color = "#ffffff";
  }

  const navtextColor = {
    color: `${secondary_nav_text_color}`,
  };
  var primary_nav_text_color = "#000000e6";

  if (transparent) {
    /* For Transparent */
    primary_nav_text_color = "#ffffff";
  }

  const primaryNavtextColor = {
    color: `${primary_nav_text_color}`,
  };

  const [isShow, setIsShow] = useState(false);

  const handleToggleMenu = () => {
    setIsShow(!isShow)
    document.body.classList.toggle('overflow-hidden')
  }

  useEffect(() => {
    document.body.classList.remove('overflow-hidden')
  }, [])

  return (
    <nav className="navbar navbar-expand-xl navbar-light" style={navbgColor}>
      <div className="container-fluid p-0">
        <button
          className="d-block d-xl-none bg-transparent"
          onClick={handleToggleMenu}
        >
          {!isShow ? (
            <img src={MenuIcon} alt="menu" />
          ) : (
            <img src={CloseIcon} alt="close" />
          )}
        </button>
        <Link to="/" className="navbar-brand" style={primaryNavtextColor}>
          deepline<span className="text-warning-1">.</span>ai
        </Link>
        <Link to="https://www.app.deepline.ai/signup" className="d-block d-xl-none">
          <img src={LoginIcon} alt="menu" />
        </Link>
        {/* <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarText"
          aria-controls="navbarText"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button> */}
        <div
          className={`collapse navbar-collapse ${isShow ? "show" : ""}`}
          id="navbarText"
        >
          <ul className="navbar-nav ms-xl-5 ms-0 me-auto secondary_nav">
            <li className="nav-item me-2">
              <Link
                className="nav-link active1"
                style={navtextColor}
                aria-current="page"
                to="/product"
              >
                Product
              </Link>
            </li>
            <li className="nav-item me-2">
              <Link className="nav-link" style={navtextColor} to="/pricing">
                Pricing
              </Link>
            </li>
            <li className="nav-item me-2">
              <Link className="nav-link" style={navtextColor} to="/solutions">
                Solutions
              </Link>
            </li>
            <li className="nav-item me-2">
              <Link className="nav-link" style={navtextColor} to="/customers">
                Customers
              </Link>
            </li>
            <li className="nav-item me-2">
              <Link className="nav-link" style={navtextColor} to="/resources">
                Resources
              </Link>
            </li>
            <li className="nav-item me-2">
              <Link className="nav-link" style={navtextColor} to="/partners">
                Partners
              </Link>
            </li>
          </ul>
          <div className="navbar-text">
            <ul className="navbar-nav primary_nav">
              <li className="nav-item me-2">
                <a
                  href="#"
                  className="nav-link d-flex align-items-center text-hover-warning-1"
                >
                  <RiEarthFill
                    className="me-1 text-warning-1"
                    style={{ fontSize: "18px" }}
                  />
                  <div style={primaryNavtextColor}>English</div>
                </a>
              </li>
              <li className="nav-item me-2 d-none d-xl-block">
                <Link
                  className="nav-link d-flex align-items-center text-hover-warning-1"
                  style={primaryNavtextColor}
                  to={process.env.REACT_APP_WEB_BASE_URL}
                >
                  <div>Log in</div>
                  <FaChevronRight className="ms-1" />
                </Link>
              </li>
              <li className="me-2">
                <Link
                  className="nav-link btn btn-warning-1 bg-hover-warning-1 d-flex justify-content-center align-items-center px-3 my-xl-0 my-2"
                  target="_blank"
                  to={`${process.env.REACT_APP_WEB_BASE_URL}/freetrial/starter/true/10000`}
                >
                  <div>Try it free</div>
                  <FaChevronRight className="ms-2" />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

/* Default Navbar Props Set */
Nav.defaultProps = {
  transparent: false,
};

export default Nav;
