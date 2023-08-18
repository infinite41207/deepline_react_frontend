/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import "./pricing.css";
import "./sticky_table_head.js";

/* Component */
import Packagecards from "../packages/Packagecards";

/* Images */
import Tick from "../../assets/images/pricing-plans/tick.svg";
import Minimize from "../../assets/images/pricing-plans/minimize.svg";
import Longrightarow from "../../assets/images/pricing-plans/long-right-arrow.svg";
import Smallrightarrow from "../../assets/images/pricing-plans/small-right-arrow.svg";
import Google from "../../assets/images/pricing-plans/google.svg";
import Applepay from "../../assets/images/pricing-plans/apple-pay.svg";
import Visa from "../../assets/images/pricing-plans/visa.svg";
import Master from "../../assets/images/pricing-plans/master.svg";
import Amex from "../../assets/images/pricing-plans/amex.svg";
import Dinners from "../../assets/images/pricing-plans/dinners.svg";
import StartedrImg from "../../assets/images/pricing-plans/startedrImg.png";
import EnterpriseImg from "../../assets/images/pricing-plans/enterpriseImg.png";

const Pricing = () => {
  const [isMonthly, setIsMonthly] = useState(true);
  const handleChangeCurrency = () => {
    setIsMonthly(!isMonthly);
  };
  return (
    <>
      <Helmet>
        <title>
          Check our pricelist for AI-powered content generation services |
          deepline.ai
        </title>
        <meta
          name="description"
          content="Boost your online visibility and conversions with our AI-powered content generation services. Get a free quote today!"
        />

        <meta
          property="og:url"
          content={process.env.REACT_APP_BASE_URL + "/pricing"}
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Check our pricelist for AI-powered content generation services |
          deepline.ai"
        />
        <meta
          property="og:description"
          content="Boost your online visibility and conversions with our AI-powered content generation services. Get a free quote today!"
        />
        <meta
          property="og:image"
          content={process.env.REACT_APP_BASE_URL + "/meta.jpg"}
        />
      </Helmet>

      {/* Package Pricing Section */}
      <div className="pricing-package-card-title">
        <div className="container text-center mb-4 pt-5">
          <h1 className="package-started">
            Check Out Our Plans <br />
            for Professionals & Businesses
          </h1>
          <h5 className="package-lead my-5">
            Join our happy client list writing content with deepline.ai
          </h5>

          <div className="d-flex flex-column mt-5">
            <div className="package-highlighted-text">
              Billing: Save 17% with annual
            </div>
            <div className="package-switch-text d-flex justify-content-center my-2 py-1">
              <div>Monthly</div>
              <div className="mx-2">
                <label className="switch mt-1">
                  <input type="checkbox" onChange={handleChangeCurrency} />
                  <span
                    className={`${
                      !isMonthly ? "pink" : ""
                    } switch-slider round`}
                  ></span>
                </label>
              </div>
              <div>Annually</div>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center mb-5 pricing-package-card-section">
        <Packagecards isMonthly={isMonthly} />
      </div>

      {/* Table section */}
      <div className="container">
        <div className="row w-100 table-heading-text mt-5rem">
          <span className="display-4 fw-500 text-center mb-5 font-inter page-heading">
            Compare the Features & <br />
            Choose the Plan That Works for You!
          </span>
          <span className="font-inter fw-normal bg-gray text-center fs-5">
            deepline.ai offers packages tailored to your needs.
          </span>
        </div>
        <div className="row mt-375 mx-0 video-intro-row bg-pink gx-4">
          <div className="col-xxl-6 col-xl-5 col-lg-12 col-md-12 pricing-descr-column pe-xl-5">
            <span className="fs-3 font-inter fw-500 text-dark-black">
              Choosing the Right Path: Starter,
              <br />
              Enterprise, or Business?
            </span>
            <br />
            <p className="fs-14px mt-4 font-inter text-blackish">
              Select the perfect plan for you and your business. Whether it’s
              the Starter plan, Enterprise Mode, or Business plan, at
              deepline.ai you can find the best solutions to cover all your
              content creation needs. Choose the Starter plan for access to our
              top AI templates, Grammarly add-on, and more, or opt for
              Enterprise Mode to use all our AI templates in 29+ languages with
              add-ons and our Chrome Extension. If you are looking for a more
              advanced solution, choose our Business plan that is tailored to
              your word and user needs, and comes with full support and
              onboarding. Look no further, deepline.ai has you covered.
            </p>
            <a href="#" className="fs-6 fw-600 text-blue learn-more">
              Learn more
            </a>
          </div>
          <div className="col-xxl-6 col-xl-7 col-lg-12 col-md-12 d-flex pricing-video-container pt-xxl-0 pt-xl-3 pt-lg-3 pt-md-3 pt-sm-3 pt-3">
            <div className="ratio ratio-16x9 w-100 video-frame">
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

        <div className="table-above-section"></div>

        {/* Table starts here  */}
        <div className="table-wrapper mt-5rem">
          <table id="pricingTable">
            <thead>
              <tr className="gap-3">
                <th></th>
                <th>
                  <div className="info text-left">
                    <div className="plan-type text-left">Starter</div>
                    <div className="billing-msg my-1">Starting at $29/mo</div>
                    <button className="btn bg-voilet-gradient w-100 rounded-1 text-white py-2">
                      Start Free
                    </button>
                  </div>
                </th>
                <th>
                  <div className="info text-left">
                    <div className="plan-type ">Enterprise Mode</div>
                    <div className="billing-msg my-1">Starting at $59/mo</div>
                    <button className="btn bg-voilet-gradient w-100 rounded-1 text-white py-2">
                      Start Free
                    </button>
                  </div>
                </th>
                <th>
                  <div className="info text-left">
                    <div className="plan-type ">Business</div>
                    <div className="billing-msg my-1">Starting at $499/mo</div>
                    <button className="btn bg-voilet-gradient w-100 rounded-1 text-white py-2">
                      Contact Sales
                    </button>
                  </div>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-light">
                <td colSpan="4" className="bg-grey"></td>
              </tr>
              <tr>
                <td className="plan-parts-heading fw-bold">Templatates</td>
                <td>
                  <img src={Tick} alt="" />
                </td>
                <td>
                  <img src={Tick} alt="" />
                </td>
                <td>
                  <img src={Tick} alt="" />
                </td>
              </tr>
              <tr>
                <td>Product Description </td>
                <td>
                  <img src={Tick} alt="" />
                </td>
                <td>
                  <img src={Tick} alt="" />
                </td>
                <td>
                  <img src={Tick} alt="" />
                </td>
              </tr>
              <tr>
                <td>Amazon Product Description </td>
                <td>
                  <img src={Tick} alt="" />
                </td>
                <td>
                  <img src={Tick} alt="" />
                </td>
                <td>
                  <img src={Tick} alt="" />
                </td>
              </tr>
              <tr>
                <td>Social Media Ads + Post</td>
                <td>
                  <img src={Tick} alt="" />
                </td>
                <td>
                  <img src={Tick} alt="" />
                </td>
                <td>
                  <img src={Tick} alt="" />
                </td>
              </tr>
              <tr>
                <td>Paragraph Re-Writting</td>
                <td>
                  <img src={Tick} alt="" />
                </td>
                <td>
                  <img src={Tick} alt="" />
                </td>
                <td>
                  <img src={Tick} alt="" />
                </td>
              </tr>
              <tr>
                <td>Blog Post Generator</td>
                <td>
                  <img src={Tick} alt="" />
                </td>
                <td>
                  <img src={Tick} alt="" />
                </td>
                <td>
                  <img src={Tick} alt="" />
                </td>
              </tr>
              <tr>
                <td>Email Generator</td>
                <td>
                  <img src={Tick} alt="" />
                </td>
                <td>
                  <img src={Tick} alt="" />
                </td>
                <td>
                  <img src={Tick} alt="" />
                </td>
              </tr>
              <tr>
                <td>Meta Description</td>
                <td>
                  <img src={Tick} alt="" />
                </td>
                <td>
                  <img src={Tick} alt="" />
                </td>
                <td>
                  <img src={Tick} alt="" />
                </td>
              </tr>
              <tr>
                <td>Long-Form Writing (Doc-Style)</td>
                <td>
                  <img src={Minimize} alt="" />
                </td>
                <td>
                  <img src={Tick} alt="" />
                </td>
                <td>
                  <img src={Tick} alt="" />
                </td>
              </tr>
              <tr className="bg-light">
                <td colSpan="4" className="bg-grey"></td>
              </tr>
              <tr>
                <td className="plan-parts-heading fw-bold">Addons</td>
                <td>
                  <img src={Tick} alt="" />
                </td>
                <td>
                  <img src={Tick} alt="" />
                </td>
                <td>
                  <img src={Tick} alt="" />
                </td>
              </tr>
              <tr>
                <td>AI Chat Assistance</td>
                <td>
                  <img src={Minimize} alt="" />
                </td>
                <td>
                  <img src={Tick} alt="" />
                </td>
                <td>
                  <img src={Tick} alt="" />
                </td>
              </tr>
              <tr>
                <td>AI Image Generator</td>
                <td>
                  <img src={Minimize} alt="" />
                </td>
                <td>
                  <img src={Tick} alt="" />
                </td>
                <td>
                  <img src={Tick} alt="" />
                </td>
              </tr>
              <tr>
                <td>Translator (29+ Languages)</td>
                <td>
                  <img src={Minimize} alt="" />
                </td>
                <td>
                  <img src={Tick} alt="" />
                </td>
                <td>
                  <img src={Tick} alt="" />
                </td>
              </tr>
              <tr>
                <td>Grammarly</td>
                <td>
                  <img src={Tick} alt="" />
                </td>
                <td>
                  <img src={Tick} alt="" />
                </td>
                <td>
                  <img src={Tick} alt="" />
                </td>
              </tr>
              <tr>
                <td>Document Editor</td>
                <td>
                  <img src={Minimize} alt="" />
                </td>
                <td>
                  <img src={Tick} alt="" />
                </td>
                <td>
                  <img src={Tick} alt="" />
                </td>
              </tr>
              <tr>
                <td>Plagiarism Checker</td>
                <td>
                  <img src={Minimize} alt="" />
                </td>
                <td>
                  <img src={Tick} alt="" />
                </td>
                <td>
                  <img src={Tick} alt="" />
                </td>
              </tr>
              <tr>
                <td>Predictive Scoring</td>
                <td>
                  <img src={Minimize} alt="" />
                </td>
                <td>
                  <img src={Tick} alt="" />
                </td>
                <td>
                  <img src={Tick} alt="" />
                </td>
              </tr>
              <tr className="bg-light">
                <td colSpan="4" className="bg-grey"></td>
              </tr>
              <tr>
                <td className="fw-bold">Intergration</td>
                <td>
                  <img src={Minimize} alt="" />
                </td>
                <td>
                  <img src={Tick} alt="" />
                </td>
                <td>
                  <img src={Tick} alt="" />
                </td>
              </tr>
              <tr>
                <td className="">Chrome Extension</td>
                <td>
                  <img src={Minimize} alt="" />
                </td>
                <td>
                  <img src={Tick} alt="" />
                </td>
                <td>
                  <img src={Tick} alt="" />
                </td>
              </tr>
              <tr>
                <td className="">SEO Intergration (SemRush)</td>
                <td>
                  <img src={Minimize} alt="" />
                </td>
                <td>
                  <img src={Minimize} alt="" />
                </td>
                <td>
                  <img src={Tick} alt="" />
                </td>
              </tr>
              <tr>
                <td className="">Zapier</td>
                <td>
                  <img src={Minimize} alt="" />
                </td>
                <td>
                  <img src={Minimize} alt="" />
                </td>
                <td>
                  <img src={Tick} alt="" />
                </td>
              </tr>
              <tr>
                <td className="">WordPress Plug-In</td>
                <td>
                  <img src={Minimize} alt="" />
                </td>
                <td>
                  <img src={Minimize} alt="" />
                </td>
                <td>
                  <img src={Tick} alt="" />
                </td>
              </tr>
              <tr className="bg-light">
                <td colSpan="4" className="bg-grey"></td>
              </tr>
              <tr>
                <td className="fw-bold">Support Services</td>
                <td>
                  <img src={Tick} alt="" />
                </td>
                <td>
                  <img src={Tick} alt="" />
                </td>
                <td>
                  <img src={Tick} alt="" />
                </td>
              </tr>
              <tr>
                <td className="">In-App Chat</td>
                <td>
                  <img src={Tick} alt="" />
                </td>
                <td>
                  <img src={Tick} alt="" />
                </td>
                <td>
                  <img src={Tick} alt="" />
                </td>
              </tr>
              <tr>
                <td className="">Email</td>
                <td>
                  <img src={Tick} alt="" />
                </td>
                <td>
                  <img src={Tick} alt="" />
                </td>
                <td>
                  <img src={Tick} alt="" />
                </td>
              </tr>
              <tr>
                <td className="">Customer Onboarding</td>
                <td>
                  <img src={Minimize} alt="" />
                </td>
                <td>
                  <img src={Minimize} alt="" />
                </td>
                <td>
                  <img src={Tick} alt="" />
                </td>
              </tr>
              <tr>
                <td className="">Account Manager</td>
                <td>
                  <img src={Minimize} alt="" />
                </td>
                <td>
                  <img src={Minimize} alt="" />
                </td>
                <td>
                  <img src={Tick} alt="" />
                </td>
              </tr>
              <tr className="bg-light">
                <td colSpan="4" className="bg-grey"></td>
              </tr>
              <tr>
                <td className="fw-bold">Customisation for Businesses</td>
                <td>
                  <img src={Minimize} alt="" />
                </td>
                <td>
                  <img src={Minimize} alt="" />
                </td>
                <td>
                  <img src={Tick} alt="" />
                </td>
              </tr>
              <tr>
                <td className="">API Connections</td>
                <td>
                  <img src={Minimize} alt="" />
                </td>
                <td>
                  <img src={Minimize} alt="" />
                </td>
                <td>
                  <img src={Tick} alt="" />
                </td>
              </tr>
              <tr>
                <td className="">Personalisation for Businesses</td>
                <td>
                  <img src={Minimize} alt="" />
                </td>
                <td>
                  <img src={Minimize} alt="" />
                </td>
                <td>
                  <img src={Tick} alt="" />
                </td>
              </tr>
              <tr className="bg-light">
                <td colSpan="4" className="bg-grey"></td>
              </tr>
              <tr>
                <td className="fw-bold">Credits</td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td className="">Monthly Credits</td>
                <td>25</td>
                <td>100</td>
                <td>Up to Unlimited</td>
              </tr>
              <tr>
                <td className="">Additional Credits</td>
                <td>$10 / 25 Credits</td>
                <td>$10 / 25 Credits</td>
                <td>Free</td>
              </tr>
              <tr>
                <td className="">Plagiarism Checks</td>
                <td>-</td>
                <td>Unlimited</td>
                <td>Unlimited</td>
              </tr>
              <tr className="bg-light">
                <td colSpan="4" className="bg-grey"></td>
              </tr>
              <tr>
                <td className="fw-bold">Included Team Members</td>
                <td>5</td>
                <td>10</td>
                <td>10+</td>
              </tr>
              <tr className="bg-light">
                <td colSpan="4" className="bg-grey"></td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Payment plans section */}
        <div className="payment-options table-below-section">
          <div className="heading fw-bold font-inter text-center py-4">
            Payment Options
          </div>
          <div className="d-flex flex-wrap justify-content-evenly pb-4 gap-3">
            <div
              className="d-flex align-items-center gap-2 fs-14px font-inter"
              data-aos="zoom-out-right"
              data-aos-duration="2000"
            >
              <a href="#" className="text-decoration-none text-dark-black">
                <img src={Google} className="me-2" alt="" /> Google Pay
              </a>
            </div>
            <div
              className="d-flex align-items-center gap-2 fs-14px font-inter"
              data-aos="zoom-out-right"
              data-aos-duration="2000"
            >
              <a href="#" className="text-decoration-none text-dark-black">
                <img src={Applepay} className="me-2" alt="" />
                Apple Pay
              </a>
            </div>
            <div
              className="d-flex align-items-center gap-2 fs-14px font-inter"
              data-aos="zoom-out-right"
              data-aos-duration="2000"
            >
              <a href="#" className="text-decoration-none text-dark-black">
                <img src={Visa} className="me-2" alt="" />
                Visa
              </a>
            </div>
            <div
              className="d-flex align-items-center gap-2 fs-14px font-inter"
              data-aos="zoom-out-right"
              data-aos-duration="2000"
            >
              <a href="#" className="text-decoration-none text-dark-black">
                <img src={Master} className="me-2" alt="" />
                Mastercard
              </a>
            </div>
            <div
              className="d-flex align-items-center gap-2 fs-14px font-inter"
              data-aos="zoom-out-right"
              data-aos-duration="2000"
            >
              <a href="#" className="text-decoration-none text-dark-black">
                <img src={Amex} className="me-2" alt="" />
                American Express
              </a>
            </div>
            <div
              className="d-flex align-items-center gap-2 fs-14px font-inter"
              data-aos="zoom-out-right"
              data-aos-duration="2000"
            >
              <a href="#" className="text-decoration-none text-dark-black">
                {" "}
                <img src={Dinners} className="me-2" alt="" />
                Diners
              </a>
            </div>
          </div>
          <div className="bg-light py-4"></div>
        </div>

        {/* Have More Question */}
        <div className="row br-rad-14px mt-4 questions">
          <div className="col-lg-7 text-center text-lg-start">
            <span className="fs-2 fw-500 text-white">Have more questions?</span>
            <p className="text-white">
              We're here to help with any questions you have about plans,
              pricing, and supported features.
            </p>
          </div>
          <div className="contact-support justify-content-center justify-content-lg-start d-flex align-items-center col-lg-5 justify-content-lg-end jsutify-content-md-start">
            <div className="d-inline-block pr-contact-support-container">
              <a
                href="#"
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
              </a>
            </div>
          </div>
        </div>

        {/* Compare and contrast  */}
        <div className="compare-and-contrast-heading text-center mt-5p6rem">
          <span className="display-4 fw-500 text-center mb-5 font-inter text-center">
            Compare and Contrast
          </span>
          <br />
          <p className="font-inter fw-normal bg-gray text-center fs-6 mt-1p25rem">
            Take a closer look at how the Enterprise Mode plan <br /> compares
            to the Starter plan.
          </p>
        </div>
        <div className="row d-flex justify-content-center gap-4 mt-5 compare-and-contrast-cards">
          <div className="col-auto starter-card p-5">
            <span className="fs-2 fw-bold font-inter">Starter</span>
            <p className="fs-14px text-dark-gray font-inter mt-2">
              Our basic solution for content creation issues is a good
              <br /> place to start, but it might not cover all your needs.
            </p>
            <div className="mt-4 p-0">
              <img
                src={StartedrImg}
                alt="Starter plan man using laptop"
                className="img-fluid"
              />
            </div>
            <div className="lists  mt-3">
              <ul className="starter-list">
                <li className="pr-cards-li d-flex align-items-center">
                  No Doc-Style template
                </li>
                <li className="pr-cards-li">No Document Editor</li>
                <li className="pr-cards-li">No AI Chat Assistance</li>
                <li className="pr-cards-li">No AI Image Generator</li>
                <li className="pr-cards-li">Only available in 1 language</li>
                <li className="pr-cards-li">No Plagiarism Checker</li>
                <li className="pr-cards-li">No Chrome Extension</li>
              </ul>
            </div>
          </div>
          <div className="col-auto enterprise-card p-5">
            <span className="fs-2 fw-bold font-inter text-blue">
              Enterprise Mode
            </span>
            <p className="fs-14px text-dark-gray font-inter mt-2">
              Our basic solution for content creation issues is a good
              <br /> place to start, but it might not cover all your needs.
            </p>
            <div className="mt-4 p-0">
              <img
                src={EnterpriseImg}
                alt="Enterprise 3 mens discussing"
                className="img-fluid"
              />
            </div>
            <div className="lists mt-3">
              <ul className="enterprise-list">
                <li className="pr-cards-li d-flex align-items-center">
                  No Doc-Style template
                </li>
                <li className="pr-cards-li">No Document Editor</li>
                <li className="pr-cards-li">No AI Chat Assistance</li>
                <li className="pr-cards-li">No AI Image Generator</li>
                <li className="pr-cards-li">Only available in 1 language</li>
                <li className="pr-cards-li">No Plagiarism Checker</li>
                <li className="pr-cards-li">No Chrome Extension</li>
              </ul>
            </div>
          </div>
          <div className="plan-pick-btn text-center mt-3p5rem">
            <Link to="/pricing" className="btn bg-voilet-gradient px-4 rounded-pill text-white font-inter fs-6 fw-600 py-2">
              Pick your plan now{" "}
              <img src={Smallrightarrow} className="btn-right-arrow" alt="" />
            </Link>
          </div>
        </div>
      </div>

      {/* FAQs section starts here */}
      <div className="w-100 bg-light">
        <div className="container mt-5p87rem">
          <div className="row d-flex justify-content-center">
            <div className="col-auto">
              <div className="py-5rem font-inter display-5 fs-normal fw-bold text-center d-inline-block">
                Frequently Asked <br /> Questions
              </div>
            </div>
          </div>
          <div className="row d-flex justify-content-center">
            <div className="col-md-8 col-sm-11 col-12 d-flex justify-content-center p-0 px-sm-0 px-4">
              <div
                className="accordion accordion-flush w-100"
                id="accordionFlushExample"
              >
                <div className="accordion-item">
                  <h2 className="accordion-header" id="flush-headingOne">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#flush-collapseOne"
                      aria-expanded="false"
                      aria-controls="flush-collapseOne"
                    >
                      What payment methods does deepline.ai accept?
                    </button>
                  </h2>
                  <div
                    id="flush-collapseOne"
                    className="accordion-collapse collapse"
                    aria-labelledby="flush-headingOne"
                    data-bs-parent="#accordionFlushExample"
                  >
                    <div className="accordion-body">
                      You can pay using Google Pay, Apple Pay, Visa, Mastercard,
                      American Express, and Diners.
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="flush-headingTwo">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#flush-collapseTwo"
                      aria-expanded="false"
                      aria-controls="flush-collapseTwo"
                    >
                      What is deepline.ai’s refund policy?
                    </button>
                  </h2>
                  <div
                    id="flush-collapseTwo"
                    className="accordion-collapse collapse"
                    aria-labelledby="flush-headingTwo"
                    data-bs-parent="#accordionFlushExample"
                  >
                    <div className="accordion-body">
                      If you haven’t used your deepline.ai plan, you can contact
                      us at [help@deepline.ai] within 10 days of your purchase
                      and request a refund. <br />
                      <br />
                      If you’d like to keep your subscription, but stop future
                      payments, you can do so by accessing your account and
                      turning off the auto-renew option.
                      <br />
                      <br />
                      Please note, if you are outside the 10-day window or if
                      you have used deepline.ai, you are not entitled to a
                      refund, and canceling your subscription will not generate
                      a refund.
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="flush-headingThree">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#flush-collapseThree"
                      aria-expanded="false"
                      aria-controls="flush-collapseThree"
                    >
                      Can I cancel my subscription?
                    </button>
                  </h2>
                  <div
                    id="flush-collapseThree"
                    className="accordion-collapse collapse"
                    aria-labelledby="flush-headingThree"
                    data-bs-parent="#accordionFlushExample"
                  >
                    <div className="accordion-body">
                      Yes. You can cancel your subscription by going to your
                      account and clicking “cancel subscription”. Your account
                      will remain active until the next billing cycle.
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="flush-headingFour">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#flush-collapseFour"
                      aria-expanded="false"
                      aria-controls="flush-collapseFour"
                    >
                      Can I switch from monthly to annual payments?
                    </button>
                  </h2>
                  <div
                    id="flush-collapseFour"
                    className="accordion-collapse collapse"
                    aria-labelledby="flush-headingFour"
                    data-bs-parent="#accordionFlushExample"
                  >
                    <div className="accordion-body">
                      Yes, you can switch from monthly to annual payments at any
                      time and your payment fee will be updated with the next
                      billing cycle.
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="flush-headingFive">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#flush-collapseFive"
                      aria-expanded="false"
                      aria-controls="flush-collapseFive"
                    >
                      How can I switch to a different plan?
                    </button>
                  </h2>
                  <div
                    id="flush-collapseFive"
                    className="accordion-collapse collapse"
                    aria-labelledby="flush-headingFive"
                    data-bs-parent="#accordionFlushExample"
                  >
                    <div className="accordion-body">
                      If you would like to switch to a different plan, simply go
                      to your account, select “change plan”, and choose the new
                      plan you want. Once you have confirmed your change of
                      plan, your account will be updated and your payments will
                      change with the next billing cycle.
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="flush-headingSix">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#flush-collapseSix"
                      aria-expanded="false"
                      aria-controls="flush-collapseSix"
                    >
                      How do I purchase credits?
                    </button>
                  </h2>
                  <div
                    id="flush-collapseSix"
                    className="accordion-collapse collapse"
                    aria-labelledby="flush-headingSix"
                    data-bs-parent="#accordionFlushExample"
                  >
                    <div className="accordion-body">
                      To purchase credits, simply go to our Credits page, select
                      the number of credits you would like to add to your plan,
                      and click purchase. Once you have purchased your credits,
                      your account will be updated to reflect your new credit
                      number.
                    </div>
                  </div>
                </div>

                <div className="accordion-item">
                  <h2 className="accordion-header" id="flush-headingSeven">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#flush-collapseSeven"
                      aria-expanded="false"
                      aria-controls="flush-collapseSeven"
                    >
                      How many users can share my deepline.ai?
                    </button>
                  </h2>
                  <div
                    id="flush-collapseSeven"
                    className="accordion-collapse collapse"
                    aria-labelledby="flush-headingSeven"
                    data-bs-parent="#accordionFlushExample"
                  >
                    <div className="accordion-body">
                      The Starter plan allows you to share deepline.ai with 5
                      team members, the Enterprise Mode allows for 10 team
                      members, and the Business plan allows for 10+ team
                      members, adjustable to your needs.
                    </div>
                  </div>
                </div>

                <div className="accordion-item">
                  <h2 className="accordion-header" id="flush-headingEight">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#flush-collapseEight"
                      aria-expanded="false"
                      aria-controls="flush-collapseEight"
                    >
                      Will my plan renew automatically?
                    </button>
                  </h2>
                  <div
                    id="flush-collapseEight"
                    className="accordion-collapse collapse"
                    aria-labelledby="flush-headingEight"
                    data-bs-parent="#accordionFlushExample"
                  >
                    <div className="accordion-body">
                      Yes. Your plan will renew automatically, whether you are
                      on a monthly or annual subscription. If you would like to
                      turn off automatic renewal, simply go to your account and
                      click on “turn off auto-renew”.
                    </div>
                  </div>
                </div>

                <div className="accordion-item">
                  <h2 className="accordion-header" id="flush-headingNine">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#flush-collapseNine"
                      aria-expanded="false"
                      aria-controls="flush-collapseNine"
                    >
                      My team is interested in the Business plan. How do I get a
                      quote?
                    </button>
                  </h2>
                  <div
                    id="flush-collapseNine"
                    className="accordion-collapse collapse"
                    aria-labelledby="flush-headingNine"
                    data-bs-parent="#accordionFlushExample"
                  >
                    <div className="accordion-body">
                      To get a quote for your team or organization, please
                      contact our Sales Team at info@deepline.ai
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
      </div>
    </>
  );
};

export default Pricing;
