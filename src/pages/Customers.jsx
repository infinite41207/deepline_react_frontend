import { FaArrowRight } from "react-icons/fa";
import Nav from "../components/nav/Nav";
import { motion } from "framer-motion";
// images
import Ellipse1 from "../assets/images/header/ellipse1.svg";
import Ellipse3 from "../assets/images/header/ellipse3.svg";
import Hero from "../assets/images/customers/hero.png";
import Stars from "../assets/images/customers/stars.svg";
import Quotes from "../assets/images/customers/quotes.svg";
import Avatar1 from "../assets/images/customers/avatar1.svg";
import Avatar2 from "../assets/images/customers/avatar2.svg";
import Avatar3 from "../assets/images/customers/avatar3.svg";
import Logo1 from "../assets/images/customers/logo1.svg";
import Logo2 from "../assets/images/customers/logo2.svg";
import Logo3 from "../assets/images/customers/logo3.svg";
import Logo4 from "../assets/images/customers/logo4.svg";
import Logo5 from "../assets/images/customers/logo5.svg";
import Smallrightarrow from "../assets/images/customized/small-right-arrow.svg";
import CEOPIC from "../assets/images/customized/ceo.png";
import Footer from "../components/footer/Footer";
import { useEffect } from "react";
import Typewriter from "typewriter-effect/dist/core";
export default function Customers() {
  useEffect(() => {
    const typewriter = new Typewriter("#typewriter", {
      loop: true,
      autoStart: true,
    });
    typewriter
      .pauseFor(1000)
      .typeString("deepline.ai is suitable for all type of people")
      .pauseFor(300)
      .start();
  }, []);

  return (
    <>
      <Nav />

      <section className="header-bg customer-header">
        <div className="container">
          <div className="row align-items-center flex-column-reverse d-flex flex-lg-row flex-md-row flex-sm-row">
            <div className="col-lg-7">
              <div
                id="typewriter"
                className="header_caption mb-3 mb-lg-5"
              ></div>
              <p className="col-lg-11 col-12 text-center text-lg-start text-md-start text-sm-start">
                <span className="fw-bold fst-italic customer-header-desc">
                  Our customers are at the heart of everything we do at
                  deepline.ai.
                </span>
                Their satisfaction and success drive us to constantly improve
                and deliver the best automation solutions possible. We are proud
                to serve a diverse range of businesses and individuals, and we
                are committed to helping each and every one of them reach their
                goals.
              </p>
              <div className="buttons-group d-sm-flex gap-3 mt-2 mt-md-5">
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
            </div>
            <div className="col-lg-5">
              <div className="customer-header-images mt-5 mb-5 mb-lg-0 mb-md-0 mb-sm-0 mt-lg-0 position-relative d-flex justify-content-center align-items-center">
                <img
                  src={Ellipse1}
                  alt=""
                  height="450"
                  className="header-thread1"
                />
                <img
                  src={Ellipse3}
                  alt=""
                  width="66"
                  className="position-absolute customer-thread2"
                />
                <motion.img
                  className="position-absolute hero-image me-1"
                  src={Hero}
                  alt=""
                  height="470.5"
                  animate={{
                    x: [0, -1, 1, -1.5, 1.5, -1, 1, 0],
                  }}
                  transition={{
                    duration: 6,
                    ease: "linear",
                    repeat: Infinity,
                  }}
                />
                <motion.img
                  src={Stars}
                  alt="stars"
                  className="position-absolute stars-group"
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
        </div>
      </section>

      <section className="what-out-customers">
        <div className="container">
          <h6 className="highlighted-text text-primary-1 mb-4 text-center">
            Customer’s Views
          </h6>
          <h1 className="heading-1 text-center">
            What out customers think about us!
          </h1>
          <div className="row mt-lg-5 pt-lg-5">
            <div className="col-lg-6">
              <div className="out-customers">
                <div className="out-customer-title position-relative text-center text-lg-start">
                  Deepline.ai has completely transformed the way I work.
                  <span className="fw-bold fst-italic">
                    The platform is efficient, user-friendly,
                  </span>
                  and has saved me countless hours on tedious tasks. Highly
                  recommend!
                  <img
                    src={Quotes}
                    alt="quotes"
                    className="quotes left"
                    width="100px"
                  />
                </div>
                <div className="customer d-flex gap-3 align-items-center">
                  <div className="position-relative">
                    <div className="avatar-left"></div>
                    <img src={Avatar2} alt="avatar" />
                  </div>
                  <div className="name-position">
                    Sarah Lynn, Director of Finance & Operations
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="out-customers">
                <div className="out-customer-title text-center text-lg-end position-relative">
                  Deepline.ai is a game-changer. The platform has
                  <span className="fw-bold fst-italic">
                    streamlined my workflow and saved me time on repetitive
                    tasks.
                  </span>
                  Highly recommend giving it a try!
                  <img
                    src={Quotes}
                    alt="quotes"
                    className="quotes right"
                    width="100px"
                  />
                </div>
                <div className="customer d-flex gap-3 align-items-center">
                  <div className="position-relative">
                    <div className="avatar-left"></div>
                    <img src={Avatar1} alt="avatar" />
                  </div>
                  <div className="name-position">
                    John Hill, Director of Finance & Operations
                  </div>
                </div>
              </div>
            </div>
            <div className="col mt-lg-5">
              <div className="out-customers mt-lg-5">
                <div className="out-customer-title text-end position-relative text-center">
                  <img
                    src={Quotes}
                    alt="quotes"
                    className="quotes left"
                    width="100px"
                  />
                  I've been using deepline.ai for several months now and I'm
                  blown away by its capabilities. The platform is intuitive and
                  easy to use, making it a breeze to automate tasks and
                  streamline my workflow. The results I've seen since
                  <span className="fw-bold fst-italic">
                    switching from Jasper to deepline.ai have been nothing short
                    of impressive.
                  </span>
                  I'm now able to complete tasks in a fraction of the time,
                  freeing up more of my day for higher-level tasks. I highly
                  recommend deepline.ai to anyone looking for a top-notch
                  automation solution.
                  <img
                    src={Quotes}
                    alt="quotes"
                    className="quotes right"
                    width="100px"
                  />
                </div>
                <div className="customer d-flex flex-column gap-3 align-items-center">
                  <div className="position-relative">
                    <div className="avatar-left"></div>
                    <img src={Avatar3} alt="avatar" />
                  </div>
                  <div className="name-position">
                    Rock Smith, Director of Finance & Operations
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          {/* Video and content section */}
          <div className="col-12 custom-sol-video-section video-intro-row gx-4 mx-md-0 mx-sm-2 mx-3 mt-md-5 px-0">
            <div className="row">
              <div className="col-xxl-6 col-xl-5 col-lg-12 col-md-12 custom-sol-video-descr d-flex flex-column px-md-2 px-sm-4 px-4 text-center text-lg-start">
                <p className="text-decoration-none font-inter fw-500 fst-normal text-voilet">
                  See for yourself
                </p>
                <span className="fs-47px font-dm-sans fw-bold fst-normal learning-cards-black lh-sm">
                  Watch our happy customers
                </span>
                <br />
                <span className="fs-18px font-inter learning-cards-blac fw-normal lh-lg">
                  Our customers are the reason we exist. It is a privilege to
                  serve such a dedicated and hard-working group of individuals
                  and businesses. We are committed to providing them with
                  exceptional service and innovative solutions that help them
                  grow and succeed. Thank you to all of our customers for
                  choosing deepline.ai.
                </span>
                <div className="my-1p6rem d-flex justify-content-center justify-content-lg-start">
                  <button className="rounded-pill px-5 py-2 text-white d-flex align-items-center fw-600 fst-normal font-inter border-0 outline-0 shadow-none bg-gradient-voilet-2 cust-sol-cntct-btn">
                    Contact Us{" "}
                    <img src={Smallrightarrow} className="ms-3" alt="" />
                  </button>
                </div>
              </div>
              <div className="col-xxl-6 col-xl-7 col-lg-12 col-md-12 d-flex pricing-video-container pt-xxl-0 pt-xl-3 pt-lg-3 pt-md-3 pt-sm-3 pt-3 px-md-4 px-sm-3 px-4">
                <div className="ratio ratio-16x9 w-100 video-frame">
                  <div className="video-base"></div>
                  <iframe
                    src="https://www.youtube.com/embed/wv9lzxBHmeM"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="products">
        <div className="container">
          <h6 className="highlighted-text text-primary-1 mb-4 text-center">
            Companies
          </h6>
          <h1 className="heading-1 text-center">
            Companies that use our product
          </h1>

          <div className="logos d-flex flex-column flex-md-row justify-content-between mt-5 pt-md-5 gap-4 gap-lg-0">
            <div className="logo mb-3 mb-md-0 d-flex justify-content-center">
              <img src={Logo1} alt="logo" />
            </div>
            <div className="logo mb-3 mb-md-0 d-flex justify-content-center">
              <img src={Logo2} alt="logo" />
            </div>
            <div className="logo mb-3 mb-md-0 d-flex justify-content-center">
              <img src={Logo3} alt="logo" />
            </div>
            <div className="logo mb-3 mb-md-0 d-flex justify-content-center">
              <img src={Logo4} alt="logo" />
            </div>
            <div className="logo mb-3 mb-md-0 d-flex justify-content-center">
              <img src={Logo5} alt="logo" />
            </div>
          </div>
        </div>
      </section>

      <section className="ceo-section">
        <div className="container">
          <h6 className="highlighted-text text-primary-1 mb-4 text-center">
            Message
          </h6>
          <h1 className="heading-1 text-center">Message from our CEO</h1>
          {/* CEO Qoute */}
          <div className="row mt-md-5 pt-md-3 d-flex justify-content-center mx-md-0 mx-sm-3 mx-2">
            <div className="col-lg-11 col-md-10 col-sm-12 col-12">
              <div className="row">
                <div className="col-lg-4 col-md-5 col-sm-12 col-12 py-5 text-center">
                  <div className="ceo-img-ellipse w-auto">
                    <img src={CEOPIC} alt="" />
                  </div>
                </div>
                <div className="col-lg-8 col-md-7 col-sm-12 col-12 ceo-qoute-container d-flex justify-content-center flex-column py-5 ps-lg-0 ps-md-2 px-sm-5 ps-5">
                  <p className="fs-5 qoute-black fw-500 fst-italic px-lg-5 px-md-4 px-sm-2 px-2 position-relative qoute-text ps-lg-1 ps-md-1 ps-sm-2 ps-4">
                    Our AI-powered platform enables users to quickly craft
                    high-quality content, freeing up valuable time for other
                    activities for both individuals and businesses alike!
                  </p>
                  <p className="mt-2">
                    <span className="font-inter fw-bold fs-6 text-blue text-left">
                      Demetris Nikolaou
                    </span>
                    <span className="fw-300 fs-6 fw-300 font-inter text-blue">
                      - CEO at deepline.ai
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
