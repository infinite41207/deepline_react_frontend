import "./section7.css";

/* Images */
import Form1 from "../../assets/images/section7-threads/form1.mp4";
import Form2 from "../../assets/images/section7-threads/form2.mp4";
import Form3 from "../../assets/images/section7-threads/form3.mp4";
import Ellipse1 from "../../assets/images/section7-threads/ellipse1.svg";
import Ellipse2 from "../../assets/images/section7-threads/ellipse2.svg";
import Ellipse3 from "../../assets/images/section7-threads/ellipse3.svg";
import Tag1 from "../../assets/images/section7-threads/tag1.svg";
import Tag2 from "../../assets/images/section7-threads/tag2.svg";
import Tag3 from "../../assets/images/section7-threads/tag3.svg";
import Tag4 from "../../assets/images/section7-threads/tag4.svg";
import Stroke1 from "../../assets/images/section7-threads/stroke1.svg";
import Stroke2 from "../../assets/images/section7-threads/stroke2.svg";
import Stroke3 from "../../assets/images/section7-threads/stroke3.svg";
import Wire1 from "../../assets/images/section7-threads/wire1.svg";
import Wire2 from "../../assets/images/section7-threads/wire2.svg";
import Wire3 from "../../assets/images/section7-threads/wire3.svg";

// motions
import { motion } from "framer-motion";

const section7 = () => {
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
  return (
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
            <motion.div variants={imageVariant}>
              <video autoPlay loop muted className="img-fluid motion-image">
                <source src="https://s3.amazonaws.com/spotlightr-output/99131990/backup/1680964741983form1.mp4" type="video/mp4" />
              </video>
            </motion.div>
            <img
              src={Ellipse1}
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
          <div className="d-flex justify-content-lg-center justify-content-start">
            <div>
              <img src={Tag2} alt="" />
            </div>
            <div className="p-2">
              <h4 className="heading-4">Give deepline.ai a bit of context</h4>
              <div className="info-text my-3">
                Enter a few sentences about your brand and products and let AI
                boost it with <br />
                <span className="text-primary-3">original amazing content</span>
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
            <motion.div variants={imageVariant}>
              <video autoPlay muted loop className="img-fluid motion-image">
                <source src="https://s3.amazonaws.com/spotlightr-output/99131990/backup/1680964742079form2.mp4" type="video/mp4" />
              </video>
            </motion.div>
            <img
              src={Ellipse2}
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
            <motion.div variants={imageVariant}>
              <video autoPlay loop muted className="img-fluid motion-image">
                <source src="https://s3.amazonaws.com/spotlightr-output/99131990/backup/1680964751304form3.mp4" type="video/mp4" />
              </video>
            </motion.div>
            <img
              src={Ellipse3}
              alt=""
              className="position-absolute section7-thread3 d-none d-xl-block"
            />
          </motion.div>
        </div>
        <div className="col-md-6 col-12 text-start pt-lg-4 order-lg-2 order-1 mb-md-0 mb-4">
          <div className="d-flex">
            <div>
              <img src={Tag3} alt="" />
            </div>
            <div className="p-2">
              <h4 className="heading-4">Sift through the results</h4>
              <div className="info-text my-3">
                Our <span className="text-primary-3">AI content generator</span>{" "}
                gives you multiple options for each campaign that you’re working
                on.
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
          Our AI-driven solutions use natural language processing to generate
          persuasive copy that is optimized for search engine visibility. With
          our easy-to-use interface, you can customize the keywords, length of
          the text, and other variables to make sure your content stands out.
          Try our AI Copy Generators today and take your content to the next
          level!
        </div>
      </div>
      <div className="d-flex text-start d-lg-none d-inline-block mt-md-0 mt-5">
        <div>
          <img src={Tag4} alt="" />
        </div>
        <div className="p-2">
          <h4 className="heading-4">Edit, polish, and publish</h4>
          <div className="info-text my-3">
            Our AI-driven solutions use natural language processing to generate
            persuasive copy that is optimized for search engine visibility. With
            our easy-to-use interface, you can customize the keywords, length of
            the text, and other variables to make sure your content stands out.
            Try our AI Copy Generators today and take your content to the next
            level!
          </div>
        </div>
      </div>
    </div>
  );
};

export default section7;
