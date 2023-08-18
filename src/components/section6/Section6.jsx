import { Link } from "react-router-dom";

import "./section6.css";

/* Images */
import Ellipse1 from "../../assets/images/section6-threads/ellipse1.svg";
import Ellipse2 from "../../assets/images/section6-threads/ellipse2.svg";
import Ellipse3 from "../../assets/images/section6-threads/ellipse3.svg";
import Man from "../../assets/images/section6-threads/man.png";

/* Icons */
import { FaLongArrowAltRight } from "react-icons/fa";
import { motion } from "framer-motion";

const Section6 = () => {
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
    <div className="container text-center section-6">
      <div className="row">
        <div className="col-lg-5 col-12 text-start">
          <motion.div
            className="position-relative d-flex justify-content-center"
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: false, amount: 0.8 }}
          >
            <motion.img
              src={Man}
              alt=""
              height="650"
              className="section6-hero"
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
              className="position-absolute section6-thread1"
              width="125"
              variants={cardVariants}
            />
            <motion.img
              src={Ellipse2}
              alt=""
              className="position-absolute section6-thread2"
              width="45"
              variants={cardVariants}
            />
            <motion.img
              src={Ellipse3}
              alt=""
              className="position-absolute section6-thread3"
              width="180"
              variants={cardVariants}
            />
          </motion.div>
        </div>
        <div className="col-lg-7 col-12 d-flex align-items-center">
          <div className="text-lg-start ps-lg-5">
            <h6 className="highlighted-text text-primary-3 text-center text-md-start">
              Enjoy faster, smarter and better than ever before!
            </h6>
            <h1 className="my-4 heading-1 text-center text-md-start">Social Media Ad Generator</h1>
            <div className="content-text text-dark-1 text-center text-md-start">
              Our Instagram & Facebook Ad Generator is an easy way to quickly
              create captivating ads for your social media accounts. Our
              AI-driven solution uses natural language processing to generate
              eye-catching ad copy that appeals to your target audience, while
              also being optimized for search engine visibility. With our
              user-friendly interface, you can customize the keywords, length of
              the ad text, and other variables to ensure a successful
              advertisement. Try our Instagram & Facebook Ad Generator today and
              take your social media presence to the next level!
            </div>
            <div className="pt-4">
              <Link
                to="/templates/facebook"
                rel="noreferrer"
                className="btn btn-theme-blue-gradient-1"
              >
                Start building backlinks
                <FaLongArrowAltRight className="ms-2 mb-1" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section6;
