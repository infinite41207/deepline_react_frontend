import { Link } from "react-router-dom";

import "./section2.css";

/* Images */
import Ellipse1 from "../../assets/images/section2-threads/ellipse1.svg";
import Ellipse2 from "../../assets/images/section2-threads/ellipse2.svg";
import Ellipse3 from "../../assets/images/section2-threads/ellipse3.svg";
import Connector from "../../assets/images/section2-threads/connector.svg";

/* Icons */
import { FaLongArrowAltRight } from "react-icons/fa";
import { motion } from "framer-motion";

const Section2 = () => {
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
    <div className="container text-center section-2">
      <div className="row">
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
              width="340"
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
          <h6 className="highlighted-text text-primary-3 text-center text-md-start">
            Experience the power of AI to get more from your Amazon shopping!
          </h6>
          <h1 className="my-4 heading-1 text-center text-md-start">Amazon Description Generator </h1>
          <div className="content-text text-dark-1 pe-lg-4 pe-0 text-center text-md-start">
            Our Amazon Description Generator from AI is a powerful tool for
            quickly creating product descriptions for Amazon listings. Our
            AI-driven solution uses natural language processing to analyze your
            product details and generate a concise and persuasive summary in no
            time. With our user-friendly interface, you can create product
            descriptions that appeal to customers and are optimized for Amazon's
            search engine. The generator allows you to customize the keywords,
            length of the description, and other variables to ensure the perfect
            product summary. Try our Amazon Description Generator from AI today
            and take your Amazon listing to the next level!
          </div>
          <div className="pt-4 text-center text-md-start">
            <Link
              to="/templates/amazon"
              rel="noreferrer"
              className="btn btn-theme-blue-gradient-1"
            >
              Improve your ranking
              <FaLongArrowAltRight className="ms-2 mb-1" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section2;
