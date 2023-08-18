/* eslint-disable jsx-a11y/anchor-is-valid */
/* Components */
import Services from "../components/services/Services";
import Nav from "../components/nav/Nav";
import Footer from "../components/footer/Footer";
import { Link } from "react-router-dom";

/* Images */
import Robot from "../assets/images/solutions/robot.png";
import Downarow from "../assets/images/solutions/down-arrow.svg";
import Longrightarow from "../assets/images/solutions/long-right-arrow.svg";
import Createcontent from "../assets/images/solutions/create-content-icon.svg";
import Centeralized from "../assets/images/solutions/centralize-antenna-icon.svg";
import Infinity from "../assets/images/solutions/infinity-icon.svg";
import Templateicon from "../assets/images/solutions/content-page-templates-icon.svg";
import Languageicon from "../assets/images/solutions/content-page-lang-icon.svg";
import Imageicon from "../assets/images/solutions/content-page-img-icon.svg";
import Cromeicon from "../assets/images/solutions/content-page-chrome-icon.svg";
import Chaticon from "../assets/images/solutions/content-page-chat-icon.svg";
import Searchicon from "../assets/images/solutions/content-page-search-icon.svg";
import CEO2 from "../assets/images/solutions/ceo.png";

export default function Solutions() {
  return (
    <>
      <Nav />
      <div
        className="content-creation-header bg-light-container1 bg-light pb-5"
        style={{ marginBottom: "4rem", zIndex: "1", position: "relative" }}
      >
        <div
          className="hero-section-cont-creation position-relative"
          style={{ zIndex: "1111" }}
        >
          <div
            className="container position-relative"
            style={{ zIndex: "10000" }}
          >
            <div className="row text-center pt-6p5rem pb-3p25rem">
              <span className="font-dm-sans display-5 page-head-black-1D1D1D fw-bold ">
                Content Creation for Professionals,
                <br /> Businesses, and Corporations
              </span>
            </div>
            <div className="row text-center px-0 d-flex jsutify-content-center">
              <span className="page-sub-head-text-dar-grey font-inter fs-4 fw-normal">
                deepline.ai is a content creation tool providing a range of
                solutions to suit your needs. Save <br /> yourself time writing
                and improve the quality of your content at the same time.
              </span>

              <span className="font-inter fw-500 text-voilet mt-3p5rem">
                The perfect way to make everyday conversations more productive
                and engaging!
              </span>
              <div className="d-flex justify-content-center p-0 mt-5rem">
                <Link to="/pricing" className="hero-btn w-auto content-page-head-btn btn outline-none shadow-none fw-600 font-ibm bg-voilet-gradient text-white d-flex rounded-pill px-3 py-2">
                  Check Out Our Plans
                  <div>
                    <img
                      src={Downarow}
                      className="ps-2 down-arrow-in-hero-btn"
                      alt=""
                    />
                  </div>
                </Link>
              </div>
            </div>
          </div>
          <div className="custom-shape-divider-bottom-1675407005">
            <svg
              data-name="Layer 1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1200 120"
              preserveAspectRatio="none"
            >
              <path
                d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
                className="shape-fill"
              ></path>
            </svg>
          </div>
        </div>
      </div>

      <div className="container" style={{ zIndex: "2", position: "relative" }}>
        {/* Crads */}
        <div className="row gap-5 justify-content-center">
          <div className="col-12 py-2p37rem px-1p8rem content-page-downToHero-cards text-center">
            <div className="w-auto">
              <img src={Createcontent} alt="" />
            </div>
            <p className="fs-5 font-inter fw-600 text-dark my-1p6rem dark-black-text text-nowrap">
              Automated Content Creation
            </p>
            <span className="cont-page-card-grey-text fs-6">
              Creating thousands of texts and descriptions can be time-consuming
              and expensive, and does not always yield the results you want.
              With deepline.ai you can automate this content creation process
              using AI technology.
            </span>
          </div>
          <div className="col-12 py-2p37rem px-1p8rem content-page-downToHero-cards text-center">
            <div className="w-auto">
              <img src={Centeralized} alt="" />
            </div>
            <p className="fs-5 font-inter fw-600 text-dark my-1p6rem dark-black-text text-nowrap">
              Centralized Expertise
            </p>
            <span className="cont-page-card-grey-text fs-6">
              deepline.ai doesn’t require any expertise or prior knowledge for
              you to create content. It is simple and intuitive to use, with the
              AI providing all the skills needed to generate engaging content
              that will boost your business’ performance.
            </span>
          </div>
          <div className="col-12 py-2p37rem px-1p8rem content-page-downToHero-cards text-center">
            <div className="w-auto mt-3">
              <img src={Infinity} alt="" />
            </div>
            <p className="fs-5 font-inter fw-600 text-dark my-1p6rem dark-black-text text-nowrap">
              All-In-One Coverage
            </p>
            <span className="cont-page-card-grey-text fs-6">
              All your needs are covered in one place. From a Blog Title
              Generator to Long-Form Documents, with deepline.ai, you no longer
              have to worry about how or where to generate your content.
            </span>
          </div>
        </div>

        {/* Robot image container */}
        <div className="row mt-10p8rem">
          <div className="col-12 d-flex justify-content-center">
            <div className="content-page-robot-elipse position-relative">
              <div className="content-page-yellow-elipse-robot position-absolute"></div>
              <div className="robot-img-container d-flex justify-content-center">
                <img src={Robot} alt="" />
              </div>
            </div>
          </div>
        </div>

        {/* Templates and langs */}
        <div className="row bg-grey-ligh templ-and-lang-cards mt-7p5rem mx-lg-0 mx-md-0 mx-sm-3 mx-2">
          <div className="col-lg-6 col-md-12 col-sm-12 col-12 px-4p5rem py-4p37rem sep-card">
            <div className="w-auto p-0">
              <img src={Templateicon} alt="" />
            </div>
            <p className="fs-5 fw-600 font-inter template-heading-black pt-12px">
              Templates
            </p>
            <p className="lh-lg font-inter text-left fs-14px text-blackish fw-300 col-lg-9">
              Choose from a range of AI templates and quickly generate
              high-quality written content, including product descriptions, blog
              posts, social media captions, and more.
            </p>
          </div>

          <div className="col-lg-6 col-md-12 col-sm-12 col-12 px-4p5rem py-4p37rem sep-card">
            <div className="w-auto p-0">
              <img src={Languageicon} alt="" />
            </div>
            <p className="fs-5 fw-600 font-inter template-heading-black pt-12px">
              Languages
            </p>
            <p className="lh-lg font-inter text-left fs-14px text-blackish fw-300 col-lg-9">
              As part of our Enterprise Mode and Business plans, you can
              automatically translate your generated content into 29+ languages.
            </p>
          </div>

          <div className="col-lg-6 col-md-12 col-sm-12 col-12 px-4p5rem py-4p37rem sep-card">
            <div className="w-auto p-0">
              <img src={Imageicon} alt="" />
            </div>
            <p className="fs-5 fw-600 font-inter template-heading-black pt-12px">
              Image Generator
            </p>
            <p className="lh-lg font-inter text-left fs-14px text-blackish fw-300 col-lg-9">
              deepline.ai’s image generator creates stunning visual images for
              your blog posts, website, and social media. The image generator is
              available in the Enterprise Mode and Business plan.
            </p>
          </div>

          <div className="col-lg-6 col-md-12 col-sm-12 col-12 px-4p5rem py-4p37rem sep-card">
            <div className="w-auto p-0">
              <img src={Cromeicon} alt="" />
            </div>
            <p className="fs-5 fw-600 font-inter template-heading-black pt-12px">
              Chrome Extensions
            </p>
            <p className="lh-lg font-inter text-left fs-14px text-blackish fw-300 col-lg-9">
              Get the AI writing assistance you need in real time with our
              Chrome extension, which will allow you to generate high-quality
              writing in Google Docs, Gmail, and more.
            </p>
          </div>

          <div className="col-lg-6 col-md-12 col-sm-12 col-12 px-4p5rem py-4p37rem sep-card">
            <div className="w-auto p-0">
              <img src={Chaticon} alt="" />
            </div>
            <p className="fs-5 fw-600 font-inter template-heading-black pt-12px">
              AI Chat Assistance
            </p>
            <p className="lh-lg font-inter text-left fs-14px text-blackish fw-300 col-lg-9">
              AI Chat Assistance is your newest colleague. Simply ask your AI
              Chat a question or give it a prompt, such as “write a product
              description for...” or “create a caption…” and you will quickly
              have the answer and/or content you need.
            </p>
          </div>

          <div className="col-lg-6 col-md-12 col-sm-12 col-12 px-4p5rem py-4p37rem sep-card">
            <div className="w-auto p-0">
              <img src={Searchicon} alt="" />
            </div>
            <p className="fs-5 fw-600 font-inter template-heading-black pt-12px">
              Plagiarism Checker
            </p>
            <p className="lh-lg font-inter text-left fs-14px text-blackish fw-300 pe-4p5rem">
              Check your content for any instances of plagiarism with our useful
              add-on and make your texts plagiarism-proof. Available with our
              Enterprise Mode and Business plans.
            </p>
          </div>
        </div>

        {/* CEO Qoute */}
        <div className="row mt-5 pt-lg-5 d-flex justify-content-center mx-md-0 mx-sm-3 mx-2">
          <div className="col-lg-4 col-md-5 col-12 py-5 text-center">
            <div className="ceo-img-ellipse w-auto">
              <img src={CEO2} alt="" />
            </div>
          </div>
          <div className="col-lg-8 col-md-7 col-12 ceo-qoute-container d-flex justify-content-center flex-column py-5 ps-lg-0 ps-md-2 px-sm-5 ps-5">
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

        {/* Services   */}
        <div className="row mt-7p5rem mx-md-0 mx-sm-3 mx-2">
          <Services />
        </div>

        {/* Have More questions */}
        <div className="row br-rad-14px mt-4 questions my-5p6rem mx-0">
          <div className="col-lg-7">
            <span className="fs-2 fw-500 text-white">Have more questions?</span>
            <p className="text-white">
              We're here to help with any questions you have about plans,
              pricing, and supported features.
            </p>
          </div>
          <div className="contact-support d-flex align-items-center col-lg-5 justify-content-lg-end jsutify-content-md-start">
            <div className="d-inline-block pr-contact-support-container">
              <Link
                to="/partners"
                className="contact-support-goto text-white cursor-pointer text-decoration-none d-flex"
              >
                Contact support{" "}
                <div className="ps-3 pr-right-arrow">
                  <img
                    src={Longrightarow}
                    className="pr-cs-right-arrow"
                    alt=""
                  />
                </div>
              </Link>
            </div>
          </div>
        </div>

        {/* Value mission and vision section */}
        <div className="row mx-md-0 mx-sm-3 mx-2">
          <div className="col-lg-4 col-md-6 col-sm-16 col-12 px-5 py-3 value-card border-bottom-effect">
            <p className="mb-4">
              <span className="fs-4 fw-bold font-inter text-dark-black">
                Our
              </span>
              <span className="fs-4 fw-bold font-inter text-voilet ms-2">Value</span>
            </p>
            <p className="lh-base font-inter fw-300 text-left fs-6 value-vision-text-grey">
              We’re expert. We come to work. To make things. We listen, learn
              and work together. And we really believe dream work.
            </p>
          </div>

          <div className="col-lg-4 col-md-6 col-sm-16 col-12 px-5 py-3 mission-card border-bottom-effect">
            <p className="mb-4">
              <span className="fs-4 fw-bold font-inter text-dark-black">
                Our
              </span>
              <span className="fs-4 fw-bold font-inter text-voilet ms-2">
                Mission
              </span>
            </p>
            <p className="lh-base font-inter fw-300 text-left fs-6 value-vision-text-grey">
              Increase social reach and productivity with our App Directory, a
              collection of famous applications like Instagram.
            </p>
          </div>

          <div className="col-lg-4 col-md-6 col-sm-16 col-12 px-5 py-3 vision-card border-bottom-effect">
            <p className="mb-4">
              <span className="fs-4 fw-bold font-inter text-dark-black">
                Our
              </span>
              <span className="fs-4 fw-bold font-inter text-voilet ms-2">
                Vision
              </span>
            </p>
            <p className="lh-base font-inter fw-300 text-left fs-6 value-vision-text-grey">
              Forging relationships between multi to national corporations,
              governments and global NGOs begins with connections.
            </p>
          </div>
        </div>
        <br />
        <br />
        <br />
        <br />
      </div>

      <Footer />
    </>
  );
}
