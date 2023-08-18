/* Images */
import Quote from "../../assets/images/header/header-quote.svg";
import Butterfly from "../../assets/images/header/header-butterfly.png";
import Stroke from "../../assets/images/header/header-text-stroke.svg";
import Hero from "../../assets/images/header/header-hero.png";
import Ellipse1 from "../../assets/images/header/ellipse1.svg";
import Ellipse2 from "../../assets/images/header/ellipse2.svg";
import Textbox1 from "../../assets/images/header/header-text1.svg";
import Textbox2 from "../../assets/images/header/header-text2.svg";
import "./Header.scss";
/* Icons */
import { FaArrowRight } from "react-icons/fa";
// motions
import { motion } from "framer-motion";
// typing
import Typewriter from "typewriter-effect/dist/core";
import { useEffect } from "react";

const Header = () => {
  useEffect(() => {
    const typewriter = new Typewriter("#typewriter", {
      loop: true,
      autoStart: true,
    });
    typewriter
      .pauseFor(1000)
      .typeString(
        `<span class="position-relative me-3">AI<img src=${Stroke} alt="" class="position-absolute start-0 bottom-0 mb-1" width="60"/></span>Writer, Content`
      )
      .pauseFor(300)
      .typeString("<br /> Generator Tool")
      .pauseFor(1000)
      .start();
  }, []);

  return (
    <header className="header-bg">
      <div className="container-header pt-md-3">
        <div className="d-flex flex-column flex-lg-row align-items-center">
          <div className="d-flex pt-md-5">
            <div className="d-none d-md-block ms-md-5">
              <img src={Quote} alt="" className="quote_image" width="90" />
            </div>
            <div
              className="my-5 ms-2 px-lg-0 px-3 first-section"
              // style={{ maxWidth: "750px" }}
            >
              <div className="position-relative">
                <div
                  id="typewriter"
                  className="header_caption mb-3 mb-lg-5"
                ></div>
                <motion.img
                  src={Butterfly}
                  alt=""
                  className="position-absolute butterfly_image"
                  width="150"
                  animate={{
                    x: [0, -1, 1, -1.7, 1.7, -1, 1, 0],
                  }}
                  transition={{
                    duration: 6,
                    ease: "linear",
                    repeat: Infinity,
                  }}
                />
              </div>
              <p className="header_text col-xl-11 col-12 text-center text-md-start">
                <strong>AI-powered content generation</strong> for improved
                online visibility and increased conversions. We offer a wide
                range of AI-powered content services that will help you boost
                your business.
              </p>
              <div className="buttons-group d-sm-flex gap-3 mt-4">
                <div>
                  <motion.a
                    target="_blank"
                    href="https://calendly.com/deepline/demo?month=2023-02"
                    className="btn demo_btn px-4"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Get a Demo
                    <FaArrowRight className="ms-2" />
                  </motion.a>
                </div>
                <div>
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href={process.env.REACT_APP_WEB_BASE_URL + "/signup"}
                    className="btn signup_btn px-4"
                    target="_blank"
                  >
                    Sign up for free
                    <FaArrowRight className="ms-2" />
                  </motion.a>
                </div>
              </div>
              <div className="mt-4 highlighted-text text-primary-3">
                Ready for a futuristic experience? Unlock limitless
                possibilities!
              </div>
            </div>
          </div>
          <div className="header-images position-relative d-flex justify-content-center align-items-center mt-5 mt-lg-0 ">
            <img
              src={Ellipse1}
              alt=""
              height="450"
              className="header-thread1"
            />
            <motion.img
              className="position-absolute hero-image"
              src={Hero}
              alt=""
              height="550"
              animate={{
                x: [0, -1, 1, -1.5, 1.5, -1, 1, 0],
              }}
              transition={{
                duration: 6,
                ease: "linear",
                repeat: Infinity,
              }}
            />
            <img
              src={Ellipse2}
              alt=""
              width="60"
              className="position-absolute header-thread2"
            />
            <motion.img
              className="position-absolute header-text1"
              src={Textbox1}
              alt=""
              animate={{
                y: [0, -1, 1, -1.5, 1.5, -1, 1, 0],
              }}
              transition={{
                duration: 6,
                ease: "linear",
                repeat: Infinity,
              }}
            />
            <motion.img
              className="position-absolute header-text2"
              src={Textbox2}
              alt=""
              animate={{
                y: [0, -1, 1, -1.5, 1.5, -1, 1, 0],
              }}
              transition={{
                duration: 6.5,
                repeat: Infinity,
              }}
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
