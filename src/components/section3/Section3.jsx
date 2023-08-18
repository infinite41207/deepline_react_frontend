import { Link } from "react-router-dom";

import "./section3.css";

/* Images */
import Ellipse1 from "../../assets/images/section3-threads/ellipse1.svg";
import Ellipse2 from "../../assets/images/section3-threads/ellipse2.svg";
import Ellipse3 from "../../assets/images/section3-threads/ellipse3.svg";
import Man from "../../assets/images/section3-threads/man.png";

/* Icons */
import { FaLongArrowAltRight } from "react-icons/fa";

import { motion } from "framer-motion";

const Section3 = () => {
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
    <div className="container text-center section-3">
      <div className="row">
        <div className="col-lg-8 col-12 d-flex align-items-center mt-lg-0 mt-5 order-2 order-lg-1">
          <div className="text-start">
            <h6 className="highlighted-text text-primary-3 text-center text-md-start">
              Discover the possibilities of AI-powered product descriptions with
              our automated tools!
            </h6>
            <h1 className="my-4 heading-1 text-center text-md-start">
              Product Description Generator
            </h1>
            <div className="content-text text-dark-1 col-lg-9 col-12 text-center text-md-start">
              Our Product Description Generator is a powerful tool to quickly
              and easily create detailed product descriptions. Our AI-driven
              solution uses natural language processing to analyze your product
              details and generate detailed, persuasive summaries that appeal to
              customers and are optimized for search engines. With our
              user-friendly interface, you can customize keywords, length of the
              description, and other variables to ensure the perfect product
              summary. Try our Product Description Generator today and make your
              products stand out!
            </div>
            <div className="pt-4 text-center text-md-start">
              <Link
                to="/templates/product"
                rel="noreferrer"
                className="btn btn-theme-blue-gradient-1"
              >
                Increase your sales & leads
                <FaLongArrowAltRight className="ms-2 mb-1" />
              </Link>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-12 text-start order-1 order-lg-2 pe-md-5">
          <motion.div
            className="position-relative d-flex justify-content-center pe-md-5"
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: false, amount: 0.8 }}
          >
            <motion.img
              src={Man}
              alt=""
              height="700"
              className="section3-hero"
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
              className="position-absolute section3-thread1"
              width="120"
              variants={cardVariants}
            />
            <motion.img
              src={Ellipse2}
              alt=""
              className="position-absolute section3-thread2"
              width="140"
              variants={cardVariants}
            />
            <motion.img
              src={Ellipse3}
              alt=""
              className="position-absolute section3-thread3"
              width="200"
              variants={cardVariants}
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Section3;
