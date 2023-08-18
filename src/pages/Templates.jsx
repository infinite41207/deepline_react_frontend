import { useEffect } from "react";
// typewiter
import Typewriter from "typewriter-effect/dist/core";
// components
import Nav from "../components/nav/Nav";
import Footer from "../components/footer/Footer";
import Section1 from "../components/section1/Section1";
import Packages from "../components/packages/Packages";
import Services from "../components/services/Services";
import Contact from "../components/contact/Contact";
import { motion } from "framer-motion";
/* Images */
import Quote from "../assets/images/header/header-quote.svg";
import Butterfly from "../assets/images/header/header-butterfly.png";
import Ellipse1 from "../assets/images/templates/ellipse1.svg";
import Ellipse2 from "../assets/images/templates/ellipse2.svg";
import Hero from "../assets/images/templates/estate-hero.svg";
import Textbox1 from "../assets/images/header/header-text1.svg";
import Textbox2 from "../assets/images/header/header-text2.svg";
import Tryyourself from "../assets/images/templates/estate-try.svg";
import Form1 from "../assets/images/templates/estate1.gif";
import Form2 from "../assets/images/templates/estate2.gif";
import Form3 from "../assets/images/templates/estate3.gif";
import Ellipse11 from "../assets/images/section7-threads/ellipse1.svg";
import Ellipse22 from "../assets/images/section7-threads/ellipse2.svg";
import Ellipse3 from "../assets/images/section7-threads/ellipse3.svg";
import Tag1 from "../assets/images/section7-threads/tag1.svg";
import Tag2 from "../assets/images/section7-threads/tag2.svg";
import Tag3 from "../assets/images/section7-threads/tag3.svg";
import Tag4 from "../assets/images/section7-threads/tag4.svg";
import Stroke1 from "../assets/images/section7-threads/stroke1.svg";
import Stroke2 from "../assets/images/section7-threads/stroke2.svg";
import Stroke3 from "../assets/images/section7-threads/stroke3.svg";
import Wire1 from "../assets/images/section7-threads/wire1.svg";
import Wire2 from "../assets/images/section7-threads/wire2.svg";
import Wire3 from "../assets/images/section7-threads/wire3.svg";

/* Icons */
import { FaArrowRight } from "react-icons/fa";

const items = {
  estate: {
    fir: "Real Estate Listing",
    sec: "Content Generator",
  },
  amazon: {
    fir: "Amazon Product",
    sec: "Descriptions Generator",
  },
  product: {
    fir: "Product Descriptions",
    sec: "Generator",
  },
  blog: {
    fir: "AI Blog Posts",
    sec: "Generator",
  },
  paragraph: {
    fir: "AI Powered Paragraph",
    sec: "Re-Writer",
  },
  email: {
    fir: "AI Powered E-mail",
    sec: "Engaging Letters",
  },
  facebook: {
    fir: "AI Powered Facebook",
    sec: "Ads Generator",
  },
  istagram: {
    fir: "AI Powered Instagram",
    sec: "Captions Generator",
  },
  meta: {
    fir: "AI Powered Meta",
    sec: "Descriptions Generator",
  },
  chatai: {
    fir: "Chat AI: An All in one",
    sec: "AI Assistant",
  },
  text: {
    fir: "long-form texts",
    sec: "and documents Generator",
  },
  image: {
    fir: "AI Powered Image",
    sec: "Generator",
  },
};

export default function Templates(props) {
  const imageVariant = {
    offscreen: {
      transformPerspective: 400,
      rotateX: 0,
    },
    onscreen: {
      transformPerspective: 400,
      rotateX: [0, -15, 15, -10, 10, -5, 5, 0],
      transition: {
        ease: "easeInOut",
        bounce: 0.75,
        duration: 2.5,
      },
    },
  };

  useEffect(() => {
    const typewriter = new Typewriter("#typewriter", {
      loop: true,
      autoStart: true,
    });
    typewriter
      .pauseFor(1000)
      .typeString(`${items[props.type]["fir"]}`)
      .pauseFor(300)
      .typeString(`<br /> ${items[props.type]["sec"]}`)
      .pauseFor(1000)
      .start();
  }, []);

  return (
    <>
      <Nav />

      <header className="header-bg">
        <div className="container-header pt-md-3">
          <div className="d-lg-flex align-items-center">
            <div className="d-flex pt-md-5">
              <div className="d-none d-md-block">
                <img src={Quote} alt="" className="quote_image" width="90" />
              </div>
              <div
                className="my-5 ms-2 px-lg-0 px-3"
                style={{ maxWidth: "750px" }}
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
                <p className="header_text col-lg-11 col-12 text-center text-md-start">
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
                src={require(`../assets/images/templates/${props.type}-hero.svg`)}
                alt=""
                height="650"
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

      <section className="try-it-section">
        <div className="container">
          <h1 className="heading-1 mb-4 text-center mb-5">Try it yourslef</h1>

          <img src={Tryyourself} alt="try your self" className="w-100" />
        </div>
      </section>

      <Section1 />

      <section>
        <div className="container text-center section-7">
          <h1 className="lead-text mb-md-5">How it works</h1>

          {/* Step No 1 */}
          <div className="row pt-5">
            <div className="col-md-6 text-center order-lg-1 order-2">
              <motion.div
                className="position-relative d-flex justify-content-center"
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: false, amount: 0.8 }}
              >
                <motion.img
                  src={require(`../assets/images/templates/${props.type}1.gif`)}
                  alt=""
                  className="img-fluid motion-image"
                  variants={imageVariant}
                />
                <img
                  src={Ellipse11}
                  alt=""
                  className="position-absolute section7-thread1 d-none d-xl-block"
                />
              </motion.div>
            </div>
            <div className="col-md-6 text-start pt-lg-4 mb-md-0 mb-4 order-lg-2 order-1">
              <div className="d-flex justify-content-lg-center justify-content-start">
                <div>
                  <img src={Tag1} alt="" />
                </div>
                <div className="p-2">
                  <h4 className="heading-4">Enter category & description</h4>
                  <ul className="info-text my-3">
                    <li>Amazon Description Grader</li>
                    <li>Product Description Generator</li>
                    <li>Blog Title Generator</li>
                    <li>Instagram Caption Generator</li>
                    <li>Meta Description Generator</li>
                    <li>AB Test Facebook Ad Generator</li>
                    <li>Paragraph Re-Writing</li>
                    <li>Emails Engaging Letters</li>
                    <li>Long-Form Documents</li>
                    <li>Chat AI</li>
                  </ul>
                  <h5 className="heading-5">
                    <div className="position-relative">
                      AI Content Generator
                      <img
                        src={Stroke1}
                        alt=""
                        className="position-absolute top-0 start-0 stroke1"
                      />
                    </div>
                  </h5>
                </div>
              </div>
            </div>
          </div>

          <div className="my-3">
            <img src={Wire1} alt="" className="d-none d-lg-inline-block" />
            {/* <img src={Wire1} alt="" width="250" className='d-md-iline-block d-lg-none'/> */}
          </div>

          {/* Step No 2 */}
          <div className="row mt-md-0 mt-5">
            <div className="col-md-6 col-12 text-start pt-lg-4 mb-md-0 mb-4">
              <div className="d-flex justify-content-lg-center justify-content-start mt-lg-5">
                <div>
                  <img src={Tag2} alt="" />
                </div>
                <div className="p-2">
                  <h4 className="heading-4">
                    Give deepline.ai a bit of context
                  </h4>
                  <div className="info-text my-3">
                    Enter a few sentences about your brand and products and let
                    AI boost it with <br />
                    <span className="text-primary-3">
                      original amazing content
                    </span>
                    .
                  </div>
                  <h5 className="heading-5">
                    <div className="position-relative">
                      10X Your Content Output
                      <img
                        src={Stroke2}
                        alt=""
                        className="position-absolute top-0 start-0 stroke2"
                      />
                    </div>
                  </h5>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-12 text-center">
              <motion.div
                className="position-relative d-flex justify-content-center"
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: false, amount: 0.8 }}
              >
                <motion.img
                  src={require(`../assets/images/templates/${props.type}2.gif`)}
                  alt=""
                  className="img-fluid motion-image"
                  variants={imageVariant}
                />
                <img
                  src={Ellipse22}
                  alt=""
                  className="position-absolute section7-thread2 d-none d-xl-block"
                />
              </motion.div>
            </div>
          </div>

          <div className="my-3">
            <img src={Wire2} alt="" className="d-none d-lg-inline-block" />
            {/* <img src={Wire2} alt="" width="250" className='d-md-iline-block d-lg-none'/> */}
          </div>

          {/* Step No 3 */}
          <div className="row mt-md-0 mt-5">
            <div className="col-md-6 col-12 text-center order-lg-1 order-2">
              <motion.div
                className="position-relative d-flex justify-content-center"
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: false, amount: 0.8 }}
              >
                <motion.img
                  src={require(`../assets/images/templates/${props.type}3.gif`)}
                  alt=""
                  className="img-fluid motion-image"
                  variants={imageVariant}
                />
                <img
                  src={Ellipse3}
                  alt=""
                  className="position-absolute section7-thread3 d-none d-xl-block"
                />
              </motion.div>
            </div>
            <div className="col-md-6 col-12 text-start pt-lg-4 order-lg-2 order-1 mb-md-0 mb-4">
              <div className="d-flex mt-lg-5">
                <div>
                  <img src={Tag3} alt="" />
                </div>
                <div className="p-2">
                  <h4 className="heading-4">Sift through the results</h4>
                  <div className="info-text my-3">
                    Our{" "}
                    <span className="text-primary-3">AI content generator</span>{" "}
                    gives you multiple options for each campaign that you’re
                    working on.
                  </div>
                  <h5 className="heading-5">
                    More Engaging Content{" "}
                    <span className="position-relative">
                      In Less Time
                      <img
                        src={Stroke3}
                        alt=""
                        className="position-absolute top-0 end-0 stroke3"
                      />
                    </span>
                  </h5>
                </div>
              </div>
            </div>
          </div>

          <div className="my-3">
            <img src={Wire3} alt="" className="d-none d-lg-inline-block" />
            {/* <img src={Wire3} alt="" width="250" className='d-md-iline-block d-lg-none'/> */}
          </div>

          {/* Step No 4 */}
          <div className="row justify-content-center d-lg-flex d-none">
            <div className="d-flex justify-content-center">
              <div>
                <img src={Tag4} alt="" />
              </div>
              <div className="heading-4 my-auto">Edit, polish, and publish</div>
            </div>
            <div className="info-text my-3 col-12 col-lg-6">
              Our AI-driven solutions use natural language processing to
              generate persuasive copy that is optimized for search engine
              visibility. With our easy-to-use interface, you can customize the
              keywords, length of the text, and other variables to make sure
              your content stands out. Try our AI Copy Generators today and take
              your content to the next level!
            </div>
          </div>
          <div className="d-flex text-start d-lg-none d-inline-block mt-md-0 mt-5">
            <div>
              <img src={Tag4} alt="" />
            </div>
            <div className="p-2">
              <h4 className="heading-4">Edit, polish, and publish</h4>
              <div className="info-text my-3">
                Our AI-driven solutions use natural language processing to
                generate persuasive copy that is optimized for search engine
                visibility. With our easy-to-use interface, you can customize
                the keywords, length of the text, and other variables to make
                sure your content stands out. Try our AI Copy Generators today
                and take your content to the next level!
              </div>
            </div>
          </div>
        </div>
      </section>

      <Packages />

      <Services />

      <Contact />

      <Footer />
    </>
  );
}
