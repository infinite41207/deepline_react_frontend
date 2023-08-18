import Nav from "../components/nav/Nav";
import { motion } from "framer-motion";
import { FaLongArrowAltRight } from "react-icons/fa";
// images
import Brain from "../assets/images/resources/brain.png";
/* Images */
import Ellipse1 from "../assets/images/resources/ellipse1.svg";
import Ellipse2 from "../assets/images/resources/ellipse2.svg";
import Ellipse3 from "../assets/images/resources/ellipse3.svg";
import Connector from "../assets/images/resources/connector.svg";
export default function Resources() {
  const cardVariants = {
    offscreen: {
      y: 10,
    },
    onscreen: {
      y: 0,
      transition: {
        ease: "easeInOut",
        bounce: 0.75,
        duration: 3,
      },
    },
  };

  return (
    <div className="resources-page">
      <Nav />

      <section className="header">
        <div className="container">
          <div className="d-flex flex-column justify-content-center align-items-center">
            <motion.h1
              className="text-uppercase text-center"
              animate={{
                x: [0, -1, 1, -1.5, 1.5, -1, 1, 0],
              }}
              transition={{
                duration: 4.5,
                ease: "linear",
                repeat: Infinity,
              }}
            >
              Resources
            </motion.h1>
            <motion.img
              src={Brain}
              alt="brain"
              className="brain img-fluid"
              animate={{
                x: [0, -1, 1, -1.5, 1.5, -1, 1, 0],
              }}
              transition={{
                duration: 6,
                ease: "linear",
                repeat: Infinity,
              }}
            />
          </div>
        </div>
      </section>

      <section className="pt-lg-0">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-5 col-lg-6 col-12">
              <motion.div
                className="position-relative d-flex justify-content-center"
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: false, amount: 0.8 }}
              >
                <motion.img
                  src={Connector}
                  alt=""
                  style={{ width: "100%", height: "auto" }}
                  width="600"
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
                  src={Ellipse1}
                  alt=""
                  className="position-absolute section2-thread1"
                  width="110"
                  variants={cardVariants}
                />
                <motion.img
                  src={Ellipse2}
                  alt=""
                  className="position-absolute section2-thread2"
                  width="125"
                  variants={cardVariants}
                />
                <motion.img
                  src={Ellipse3}
                  alt=""
                  className="position-absolute section2-thread3"
                  width="200"
                  variants={cardVariants}
                />
              </motion.div>
            </div>
            <div className="col-xl-7 col-lg-6 col-12 text-start">
              <h6 className="highlighted-text text-primary-3 mt-lg-5">
                BOOST YOUR BUSINESS
              </h6>
              <h1 className="my-4 heading-1">Try deepline.ai</h1>
              <div className="content-text text-dark-1 pe-lg-4 pe-0">
                At deepline.ai we create solutions for individuals,
                professionals, and businesses. Excellent, tailored-made content
                is created by combining your product and our AI-powered tools.
                These generators will help your business achieve more with
                ease. See which AI content generator best suits your needs.
              </div>
              <div className="pt-4 d-flex gap-4 align-items-center">
                <a
                  href="https://www.app.deepline.ai/signup"
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-theme-blue-gradient-1"
                >
                  Get a Demo
                  <FaLongArrowAltRight className="ms-2 mb-1" />
                </a>
                <a
                  href="https://www.app.deepline.ai/signup"
                  target="_blank"
                  rel="noreferrer"
                  className="btn signup_btn px-4"
                >
                  Purchase
                  <FaLongArrowAltRight className="ms-2 mb-1" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
