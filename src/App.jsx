import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import "./assets/scss/App.scss";

import "../node_modules/bootstrap/dist/js/bootstrap.min.js"; /* Include Bootstrap 5 JS */

import Nav from "./components/nav/Nav"; /* Include NavBar */
import Footer from "./components/footer/Footer"; /* Include Footer */
import ScrollToTop from "./components/ScrollToTop";

import Privacypolicy from "./components/privacy&terms/Privacypolicy"; /* Privacy Policy */
import Terms from "./components/privacy&terms/Terms"; /* Terms And Conditions */
import Careers from "./components/careers/Careers"; /* Include Careers */
import Product from "./components/product/Product";
import Notfound404 from "./components/errorscreens/Notfound404"; /* Include 404 Not Found */

/*---------------For GTM Tracking----------------- */
import TagManager from "react-gtm-module";
import Home from "./pages/Home";
import Price from "./pages/Price";
import FAQs from "./pages/FAQs";
import Solutions from "./pages/Solutions";
import Customers from "./pages/Customers";
import Resources from "./pages/Resources";
import Partners from "./pages/Partners";
import Templates from "./pages/Templates";
import ToTop from "./components/ToTop/ToTop";

const tagManagerArgs = {
  gtmId: "G-1PNQR5ZFHF",
};
TagManager.initialize(tagManagerArgs);
/*---------------For GTM Tracking----------------- */

const App = () => {
  /* Prevent Auths States */
  const [isAutheticated, setisAutheticated] = useState(false);

  /* Tracking GTM */
  window.dataLayer.push({
    event: "pageview",
  });

  useEffect(() => {
    /* AOS Mount */
    AOS.init();
    return () => AOS.refresh();
  }, []);

  /* Disable Right Click In App */
  useEffect(() => {
    const handleContextmenu = (e) => {
      e.preventDefault();
    };
    document.addEventListener("contextmenu", handleContextmenu);
    return function cleanup() {
      document.removeEventListener("contextmenu", handleContextmenu);
    };
  }, []);

  useEffect(() => {
    /* Prevent Routes From Unauthorized Person */
    if (window.sessionStorage.getItem("login_data") !== null) {
      setisAutheticated(true);
    } else {
      setisAutheticated(false);
    }
  }, [isAutheticated]);

  return (
    <>
      <ScrollToTop>
        <ToTop />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route excat path="/pricing" element={<Price />} />
          <Route
            excat
            path="/product"
            element={
              <>
                <Nav />
                <Product />
                <Footer />
              </>
            }
          />
          <Route excat path="/faqs" element={<FAQs />} />
          <Route excat path="/solutions" element={<Solutions />} />
          <Route excat path="/resources" element={<Resources />} />
          <Route excat path="/partners" element={<Partners />} />
          <Route excat path="/customers" element={<Customers />} />
          <Route
            excat
            path="/templates/estate"
            element={<Templates type={"estate"} />}
          />
          <Route
            excat
            path="/templates/amazon"
            element={<Templates type={"amazon"} />}
          />
          <Route
            excat
            path="/templates/product"
            element={<Templates type={"product"} />}
          />
          <Route
            excat
            path="/templates/blog"
            element={<Templates type={"blog"} />}
          />
          <Route
            excat
            path="/templates/meta"
            element={<Templates type={"meta"} />}
          />
          <Route
            excat
            path="/templates/facebook"
            element={<Templates type={"facebook"} />}
          />
          <Route
            excat
            path="/privacy-policy"
            element={
              <>
                <Privacypolicy />
                <Footer />
              </>
            }
          />
          <Route
            excat
            path="/terms-and-conditions"
            element={
              <>
                <Terms />
                <Footer />
              </>
            }
          />
          <Route
            excat
            path="/careers"
            element={
              <>
                <Nav />
                <Careers />
                <Footer />
              </>
            }
          />
          {/* <Route
          excat
          path="/resources"
          element={
            <>
              <Nav />
              <Resources />
              <Footer />
            </>
          }
        /> */}
          <Route path="*" exact={true} element={<Notfound404 />} />
        </Routes>
      </ScrollToTop>
    </>
  );
};

export default App;
