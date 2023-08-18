import { Link } from "react-router-dom";

import "./section4.css";

/* Images */
import Ellipse1 from "../../assets/images/section4-threads/ellipse1.svg";
import Ellipse2 from "../../assets/images/section4-threads/ellipse2.svg";
import Ellipse3 from "../../assets/images/section4-threads/ellipse3.svg";
import Lady from "../../assets/images/section4-threads/lady.png";

/* Icons */
import { FaLongArrowAltRight } from "react-icons/fa";
import { motion } from "framer-motion";

const Section4 = () => {
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
    <div className="container text-center section-4">
      <div className="row">
        <div className="col-lg-5 col-12 text-start">
          <motion.div
            className="position-relative d-flex justify-content-center ms-md-5"
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: false, amount: 0.8 }}
          >
            <motion.img
              src={Lady}
              alt=""
              height="700"
              className="section4-hero"
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
              className="position-absolute section4-thread1"
              width="115"
              variants={cardVariants}
            />
            <motion.img
              src={Ellipse2}
              alt=""
              className="position-absolute section4-thread2"
              width="150"
              variants={cardVariants}
            />
            <motion.img
              src={Ellipse3}
              alt=""
              className="position-absolute section4-thread3"
              width="245"
              variants={cardVariants}
            />
          </motion.div>
        </div>
        <div className="col-lg-7 col-12 d-flex align-items-center px-lg-5 mt-lg-0 mt-5">
          <div className="text-lg-start">
            <h6 className="highlighted-text text-primary-3 text-center text-md-start">
              Upgrade Your Blog With Our Innovative Title Generator!
            </h6>
            <h1 className="my-4 heading-1 text-center text-md-start">Blog Title Generator</h1>
            <div className="content-text text-dark-1 text-center text-md-start">
              Our Blog Title Generator is a powerful tool that helps you quickly
              and easily create captivating blog titles. Our AI-driven solution
              uses natural language processing to generate creative and unique
              titles that stand out and engage your audience, while being
              optimized for search engines. With our user-friendly interface,
              you can customize the keywords, length of the title, and more to
              ensure that your title gets the attention it deserves. Try our
              Blog Title Generator today and take your blogging to the next
              level!
            </div>
            <div className="pt-4">
              <Link
                to="/templates/blog"
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

export default Section4;
