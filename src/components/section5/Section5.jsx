import { Link } from "react-router-dom";

import "./section5.css";

/* Images */
import Ellipse1 from "../../assets/images/section5-threads/ellipse1.svg";
import Ellipse2 from "../../assets/images/section5-threads/ellipse2.svg";
import Text from "../../assets/images/section5-threads/text.svg";

/* Icons */
import { FaLongArrowAltRight } from "react-icons/fa";
import { motion } from "framer-motion";

const Section5 = () => {
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
    <div className="container text-center section-5">
      <div className="row">
        <div className="col-lg-7 col-12 order-2 order-lg-1 mb-5 mb-lg-0">
          <div className="text-lg-start">
            <h6 className="highlighted-text text-primary-3 text-center text-md-start">
              Get the Most Out of Your Content with Our <br /> AI-Powered Meta
              Description Generator!
            </h6>
            <h1 className="my-4 heading-1 text-center text-md-start">Meta Description Generator</h1>
            <div className="content-text text-dark-1 me-lg-5 pe-lg-5 text-center text-md-start">
              Our Meta Description Generator is a powerful tool for creating
              optimized meta descriptions for your website. Our AI-driven
              solution utilizes natural language processing to generate
              persuasive meta descriptions that accurately describe your website
              and optimize for search engines. With our user-friendly interface,
              you can customize the keywords, length of the description, and
              other variables to ensure an effective meta description. Try our
              Meta Description Generator today and take your website to the next
              level!
            </div>
            <div className="pt-4">
              <Link
                to="/templates/meta"
                rel="noreferrer"
                className="btn btn-theme-blue-gradient-1"
              >
                Improve your ranking
                <FaLongArrowAltRight className="ms-2 mb-1" />
              </Link>
            </div>
          </div>
        </div>
        <div className="col-lg-5 col-12 my-auto order-1 order-lg-2 mb-5">
          <motion.div
            className="position-relative d-flex justify-content-center"
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: false, amount: 0.8 }}
          >
            <motion.img
              src={Text}
              alt=""
              className="section5-hero"
              width="400"
              animate={{
                x: [0, -1, 1, -2, 2 - 1.5, 1.5, -1, 1, 0],
              }}
              transition={{
                duration: 5.5,
                ease: "linear",
                repeat: Infinity,
              }}
            />
            <motion.img
              src={Ellipse1}
              alt=""
              className="position-absolute section5-thread1"
              width="160"
              variants={cardVariants}
            />
            <motion.img
              src={Ellipse2}
              alt=""
              className="position-absolute section5-thread2"
              width="180"
              variants={cardVariants}
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Section5;
