/* eslint-disable jsx-a11y/anchor-is-valid */
import Nav from "../components/nav/Nav";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
// images
import Ellipse1 from "../assets/images/partners/ellipse1.svg";
import Ellipse2 from "../assets/images/partners/ellipse2.svg";
import Hero from "../assets/images/partners/hero.svg";
import ServiceImage1 from "../assets/images/partners/service1.svg";
import ServiceImage2 from "../assets/images/partners/service2.svg";
import ServiceImage3 from "../assets/images/partners/service3.svg";
import Longrightarow from "../assets/images/solutions/long-right-arrow.svg";
// Countries
import { CountryNames, CountryPhoneCodes } from "../constants/Countries";
import { useState } from "react";
import { FaLongArrowAltRight } from "react-icons/fa";
import Partner from "../components/partner/Partner";
import Arrow from "../assets/images/partners/arrow.svg";
import Footer from "../components/footer/Footer";

export default function Partners() {
  const [countryCode, setCountryCode] = useState("CY");
  const [countryMenuShow, setCountryMenuShow] = useState(false);
  const handleClickCountry = (key) => {
    setCountryCode(key);
    setCountryMenuShow(false);
  };

  return (
    <div className="partners-page">
      <Nav />

      <section className="header pb-lg-0 d-flex flex-column-reverse flex-lg-column">
        <div className="container">
          <h6 className="highlighted-text text-primary-3 text-center">
            deepline.ai Partner Programs
          </h6>
          <h1 className="heading-1 text-center mb-4">
            Let’s Become <br />
            Partners
          </h1>
          <p className="heading-desc text-center col-lg-10 mx-auto">
            Join our Partner Ecosystem and unlock the potential of our
            subscription-based services. As a Deepline.ai partner, you will gain
            access to a world of value-added offerings, designed to benefit
            merchants, aggregators and marketplaces globally. Enhance your
            offerings and achieve new levels of success by becoming a part of
            our partner community today.
          </p>
        </div>

        <div className="partner-header-images mt-5 mt-lg-0 mb-5 position-relative d-flex justify-content-center align-items-center">
          <img src={Ellipse1} alt="" height="340" className="header-thread1" />
          <img
            src={Ellipse2}
            alt=""
            width="66"
            className="position-absolute partner-thread2"
          />
          <motion.img
            className="position-absolute hero-image"
            style={{marginTop: "110px"}}
            src={Hero}
            alt=""
            height="350"
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
      </section>

      <section className="pt-lg-0 form-section">
        <div className="container">
          <div className="row justify-content-center">
            <form className="col-lg-7">
              <div className="row">
                <div className="col-lg-6">
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="form-group">
                        <label>
                          First name <span>*</span>
                        </label>
                        <input name="fname" placeholder="Type first name" />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="form-group">
                        <label>
                          Last name <span>*</span>
                        </label>
                        <input name="fname" placeholder="Type last name" />
                      </div>
                    </div>
                  </div>
                  <div className="form-group">
                    <label>
                      Job title <span>*</span>
                    </label>
                    <input name="job" placeholder="Type your job title" />
                  </div>
                  <div className="form-group">
                    <label>
                      Country/Region<span>*</span>
                    </label>
                    <input
                      name="country"
                      placeholder="Type your Country/Region"
                    />
                  </div>
                  <div className="form-group">
                    <label>
                      Number of employees<span>*</span>
                    </label>
                    <input
                      name="employees"
                      placeholder="Type number of employees"
                    />
                  </div>
                  <div className="form-group">
                    <label>
                      How do you envision working with deepline.ai?
                      <span>*</span>
                    </label>
                    <input name="envision" placeholder="Type your response" />
                  </div>
                  <div className="form-group">
                    <label>
                      How many clients/merchants do you have?
                      <span>*</span>
                    </label>
                    <input
                      name="numberOfclient"
                      placeholder="Type your response"
                    />
                  </div>
                  <div className="form-group">
                    <label>
                      Do you have mutual customers with deepline.ai?
                      <span>*</span>
                    </label>
                    <input name="customers" placeholder="Type your response" />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="form-group">
                    <label>
                      Business email<span>*</span>
                    </label>
                    <input
                      name="employees"
                      type="email"
                      placeholder="Type your business email..."
                    />
                  </div>
                  <div className="form-group">
                    <label>
                      Company name<span>*</span>
                    </label>
                    <input
                      name="companyName"
                      placeholder="Type your business email..."
                    />
                  </div>
                  <div className="form-group">
                    <label>
                      Phone number<span>*</span>
                    </label>
                    <div className="d-flex phone-number">
                      <div className="select-group position-relative">
                        <span className="arrow-down">
                          <svg
                            width="8"
                            height="6"
                            viewBox="0 0 8 6"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M3.1401 5.17793L0.5401 2.57793C0.223433 2.26126 0.152767 1.89893 0.3281 1.49093C0.502767 1.08226 0.8151 0.87793 1.2651 0.87793H6.4151C6.8651 0.87793 7.17743 1.08226 7.3521 1.49093C7.52743 1.89893 7.45677 2.26126 7.1401 2.57793L4.5401 5.17793C4.4401 5.27793 4.33177 5.35293 4.2151 5.40293C4.09843 5.45293 3.97343 5.47793 3.8401 5.47793C3.70677 5.47793 3.58177 5.45293 3.4651 5.40293C3.34843 5.35293 3.2401 5.27793 3.1401 5.17793Z"
                              fill="#334155"
                            />
                          </svg>
                        </span>
                        <div
                          className="active-value"
                          onClick={() => setCountryMenuShow(!countryMenuShow)}
                        >
                          {CountryNames[countryCode]}
                        </div>
                        <ul className={!countryMenuShow ? "d-none" : ""}>
                          {Object.entries(CountryNames).map(([key, value]) => (
                            <li
                              key={key}
                              onClick={() => handleClickCountry(key)}
                            >
                              {value}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="position-relative w-100">
                        <input
                          name="phonenumber"
                          type="number"
                          className="border-start-0"
                        />
                        <div className="country-code">{`+${CountryPhoneCodes[countryCode]}`}</div>
                      </div>
                    </div>
                  </div>
                  <div className="form-group">
                    <label>
                      What type of organizations do you work with?
                      <span>*</span>
                    </label>
                    <div className="select-group position-relative">
                      <span className="arrow-down">
                        <svg
                          width="8"
                          height="6"
                          viewBox="0 0 8 6"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M3.1401 5.17793L0.5401 2.57793C0.223433 2.26126 0.152767 1.89893 0.3281 1.49093C0.502767 1.08226 0.8151 0.87793 1.2651 0.87793H6.4151C6.8651 0.87793 7.17743 1.08226 7.3521 1.49093C7.52743 1.89893 7.45677 2.26126 7.1401 2.57793L4.5401 5.17793C4.4401 5.27793 4.33177 5.35293 4.2151 5.40293C4.09843 5.45293 3.97343 5.47793 3.8401 5.47793C3.70677 5.47793 3.58177 5.45293 3.4651 5.40293C3.34843 5.35293 3.2401 5.27793 3.1401 5.17793Z"
                            fill="#334155"
                          />
                        </svg>
                      </span>
                      <div className="active-value">Please Select</div>
                    </div>
                  </div>
                  <div className="form-group">
                    <label>
                      What type of organizations do you work with?{" "}
                      <span>*</span>
                    </label>
                    <input
                      name="companyName"
                      placeholder="Type your business email..."
                    />
                  </div>
                  <div className="form-group">
                    <label>
                      What other technologies do you work with? <span>*</span>
                    </label>
                    <input
                      name="companyName"
                      placeholder="Type your business email..."
                    />
                  </div>
                  <div className="form-group">
                    <label>
                      What does a successful partnership look like for you?
                      <span>*</span>
                    </label>
                    <input
                      name="companyName"
                      placeholder="Type your business email..."
                    />
                  </div>
                </div>
              </div>
              <button type="submit" className="w-100">
                Become a Partner <FaLongArrowAltRight className="ms-2 mb-1" />
              </button>
            </form>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <h6 className="highlighted-text text-primary-3 text-center">
            deepline.ai Partner Programs
          </h6>
          <h1 className="my-4 heading-1 text-center mb-5">
            Payment Service Provider (PSPs)
          </h1>
          <div className="col-lg-9 mx-auto">
            <p className="text-center highlighted-desc mb-4">
              Payment Service Providers play a critical role in facilitating
              seamless payment transactions, from the point of customer payment
              to the receipt of funds in the business bank account.
            </p>
            <p className="text-center highlighted-desc">
              At Deepline.ai, we recognize the importance of a diverse payments
              ecosystem in enabling businesses of all sizes to succeed. To this
              end, we are dedicated to fostering an environment that promotes
              connectivity between our Payment Service Partners and our
              extensive network of merchants and platform customers. By doing
              so, we aim to support the growth and success of businesses across
              the globe.
            </p>
          </div>

          <div className="row mt-lg-5 g-0">
            <div className="col-md-6 col-lg-4">
              <Partner
                src={
                  require("../assets/images/partners/cybersource.svg").default
                }
              />
            </div>
            <div className="col-md-6 col-lg-4">
              <Partner
                src={require("../assets/images/partners/adyen.svg").default}
              />
            </div>
            <div className="col-md-6 col-lg-4">
              <Partner
                src={require("../assets/images/partners/paypal.svg").default}
              />
            </div>
            <div className="col-md-6 col-lg-4">
              <Partner
                src={
                  require("../assets/images/partners/gocardless.svg").default
                }
              />
            </div>
            <div className="col-md-6 col-lg-4">
              <Partner
                src={require("../assets/images/partners/bluesnap.svg").default}
              />
            </div>
            <div className="col-md-6 col-lg-4">
              <Partner
                src={require("../assets/images/partners/checkout.svg").default}
              />
            </div>
            <div className="col-md-6 col-lg-4">
              <Partner
                src={require("../assets/images/partners/mollie.svg").default}
              />
            </div>
            <div className="col-md-6 col-lg-4">
              <Partner
                src={require("../assets/images/partners/worldpay.svg").default}
              />
            </div>
            <div className="col-md-6 col-lg-4">
              <Partner
                src={require("../assets/images/partners/worldline.svg").default}
              />
            </div>
          </div>
          <Link to="#" className="payment-gateways-link">
            See all Payment Gateways <img src={Arrow} alt="arrow" />
          </Link>
        </div>
      </section>

      <section>
        <div className="container">
          <h6 className="highlighted-text text-primary-3 text-center">
            Technology Alliance Partners
          </h6>
          <h1 className="my-4 heading-1 text-center mb-5">
            Independent Software Vendor (ISVs)
          </h1>
          <div className="col-lg-8 mx-auto">
            <p className="text-center highlighted-desc mb-4">
              Deepline.ai's Independent Software Vendors (ISVs) are committed to
              delivering customized solutions and personalized integration
              support, aimed at providing added value to merchants across the
              world. Our ISVs leverage their expertise to create unique
              offerings that enhance the functionality of the platform, and
              drive the growth of our global network of merchants in the
              thriving world of subscriptions.
            </p>
          </div>

          <div className="row mt-lg-5 g-0">
            <div className="col-md-6 col-lg-4">
              <Partner
                src={require("../assets/images/partners/xero.svg").default}
              />
            </div>
            <div className="col-md-6 col-lg-4">
              <Partner
                src={require("../assets/images/partners/hubspot.svg").default}
              />
            </div>
            <div className="col-md-6 col-lg-4">
              <Partner
                src={
                  require("../assets/images/partners/quickbooks.svg").default
                }
              />
            </div>
            <div className="col-md-6 col-lg-4">
              <Partner
                src={
                  require("../assets/images/partners/salesforce.svg").default
                }
              />
            </div>
            <div className="col-md-6 col-lg-4">
              <Partner
                src={require("../assets/images/partners/avalara.svg").default}
              />
            </div>
            <div className="col-md-6 col-lg-4">
              <Partner
                src={
                  require("../assets/images/partners/sage-intact.svg").default
                }
              />
            </div>
          </div>
          <Link to="#" className="payment-gateways-link">
            See all Payment Gateways <img src={Arrow} alt="arrow" />
          </Link>
        </div>
      </section>

      <section>
        <div className="container">
          <h1 className="my-4 heading-1 text-center mb-5">
            Solution Partners Agencies
          </h1>
          <div className="col-lg-8 mx-auto">
            <p className="text-center highlighted-desc mb-4">
              Deepline.ai's Solution Partners are a prestigious network of
              certified agencies and consultancies, committed to delivering
              strategic and operational support to businesses in the thriving
              Subscription economy. If you specialize in serving businesses that
              operate under a subscription model, we invite you to join our
              Solution Partners network and gain access to new opportunities for
              growth and success. Apply today to become a part of our vibrant
              community of solution providers.
            </p>
          </div>

          <div className="row mt-lg-5 g-0">
            <div className="col-md-6 col-lg-4">
              <Partner
                src={require("../assets/images/partners/eagle-eye.svg").default}
              />
            </div>
            <div className="col-md-6 col-lg-4">
              <Partner
                src={require("../assets/images/partners/ion.svg").default}
              />
            </div>
            <div className="col-md-6 col-lg-4">
              <Partner
                src={require("../assets/images/partners/4ng.svg").default}
              />
            </div>
            <div className="col-md-6 col-lg-4">
              <Partner
                src={
                  require("../assets/images/partners/subscription-rebels.svg")
                    .default
                }
              />
            </div>
            <div className="col-md-6 col-lg-4">
              <Partner
                src={
                  require("../assets/images/partners/torq-partners.svg").default
                }
              />
            </div>
            <div className="col-md-6 col-lg-4">
              <Partner
                src={
                  require("../assets/images/partners/black-winch.svg").default
                }
              />
            </div>
            <div className="col-md-6 col-lg-4">
              <Partner
                src={require("../assets/images/partners/recap.svg").default}
              />
            </div>
            <div className="col-md-6 col-lg-4">
              <Partner
                src={require("../assets/images/partners/turnk.svg").default}
              />
            </div>
          </div>
          <Link to="#" className="payment-gateways-link">
            See all Payment Gateways <img src={Arrow} alt="arrow" />
          </Link>
        </div>
      </section>

      <section>
        <div className="container">
          <h1 className="my-4 heading-1 text-center mb-5">
            Channel Resell Partners
          </h1>
          <div className="col-lg-8 mx-auto">
            <p className="text-center highlighted-desc mb-4">
              Deepline.ai collaborates with a diverse group of Referral Partners
              who share our vision of building a more interconnected world of
              subscriptions. We are committed to rewarding our partners for
              their contributions, and offer a competitive referral commission
              to those who successfully refer merchants to our platform. Join us
              in our mission and become a Referral Partner today.
            </p>
          </div>

          <div className="row mt-lg-5 g-0">
            <div className="col-md-6 col-lg-4">
              <Partner
                src={require("../assets/images/partners/aws.svg").default}
              />
            </div>
            <div className="col-md-6 col-lg-4">
              <Partner
                src={require("../assets/images/partners/monobunt.svg").default}
              />
            </div>
            <div className="col-md-6 col-lg-4">
              <Partner
                src={
                  require("../assets/images/partners/crm-partners.svg").default
                }
              />
            </div>
            <div className="col-md-6 col-lg-4">
              <Partner
                src={require("../assets/images/partners/ion.svg").default}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="why-sell-partner">
        <div className="container">
          <h1 className="my-4 heading-1 mb-5">Why Sell as a Partner?</h1>
          <div className="col-lg-8">
            <p className="highlighted-desc mb-4">
              As a Deepline.ai certified reseller, you have the opportunity to
              support the growth of your business customers. Our platform's
              user-friendly pricing and billing logic empowers your clients to
              scale their operations and venture into new markets with ease.
              Join us and help your clients achieve success.
            </p>
          </div>

          <div className="row mt-3 mt-lg-5">
            <div className="col-lg-4">
              <div className="mb-4">
                <img src={ServiceImage1} alt="" />
              </div>
              <h5 className="service-title mb-3">
                Partner Directory Visibility
              </h5>
              <div className="service-description mb-4">
                Enhance your visibility and reach thousands of Deepline.ai users
                as a certified reseller.
              </div>
            </div>
            <div className="col-lg-4">
              <div className="mb-4">
                <img src={ServiceImage2} alt="" />
              </div>
              <h5 className="service-title mb-3">Co-Marketing Benefits</h5>
              <div className="service-description mb-4">
                Expand your reach and connect with a wider audience through
                co-branded content, webinars, events, and other marketing
                initiatives.
              </div>
            </div>
            <div className="col-lg-4">
              <div className="mb-4">
                <img src={ServiceImage3} alt="" />
              </div>
              <h5 className="service-title mb-3">Referral Rewards</h5>
              <div className="service-description">
                Earn commissions on successful referrals and enjoy access to
                exclusive discounted pricing options."
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        {/* video section */}
        <div className="row career-row career-video-section video-intro-row bg-pink py-5rem px-4p5rem gx-4">
          <div className="col-xxl-6 col-xl-5 col-lg-12 col-md-12 career-video-descr pe-xl-5 d-flex flex-column justify-content-center">
            <span className="fs-3 font-inter fw-500 text-dark-black">
              Discover the Success Stories of Our Partners
            </span>
            <br />
            <p className="fs-14px font-inter text-blackish lh-lg">
              Our partners play a critical role in the success of Deepline.ai.
              Through their expertise and dedication, they help businesses
              across the world to succeed in the subscription economy. We are
              proud to showcase the achievements of our partners and invite you
              to explore their success stories. From increased visibility and
              reach to improved customer satisfaction and growth, our partners
              are making a real impact in the world of subscriptions. Take a
              moment to discover how they have achieved more with Deepline.ai.
            </p>
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
      </section>

      {/* Faqs sectrion */}
      <div className="faqs-section">
        <div className="w-100">
          <div className="container">
            <div className="row d-flex justify-content-center">
              <div className="col-auto">
                <div className="font-inter display-5 fs-normal fw-bold text-center d-inline-block mb-md-5">
                  Frequently Asked <br /> Questions
                </div>
              </div>
            </div>
            <div className="row d-flex justify-content-center">
              <div className="col-md-9 col-sm-11 col-12 d-flex justify-content-center p-0 px-sm-0 px-4">
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
                        How do I enroll in the Partner Portal and submit leads
                        to Deepline.ai?
                      </button>
                    </h2>
                    <div
                      id="flush-collapseOne"
                      className="accordion-collapse collapse"
                      aria-labelledby="flush-headingOne"
                      data-bs-parent="#accordionFlushExample"
                    >
                      <div className="accordion-body">
                        You can pay using Google Pay, Apple Pay, Visa,
                        Mastercard, American Express, and Diners.
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
                        What motivates Payment Processors, ISVs, and Solution
                        Partners to refer business to Deepline.ai?
                      </button>
                    </h2>
                    <div
                      id="flush-collapseTwo"
                      className="accordion-collapse collapse"
                      aria-labelledby="flush-headingTwo"
                      data-bs-parent="#accordionFlushExample"
                    >
                      <div className="accordion-body">
                        If you haven’t used your deepline.ai plan, you can
                        contact us at [help@deepline.ai] within 10 days of your
                        purchase and request a refund. <br />
                        <br />
                        If you’d like to keep your subscription, but stop future
                        payments, you can do so by accessing your account and
                        turning off the auto-renew option.
                        <br />
                        <br />
                        Please note, if you are outside the 10-day window or if
                        you have used deepline.ai, you are not entitled to a
                        refund, and canceling your subscription will not
                        generate a refund.
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
                        Is there a fee for becoming a partner with Deepline.ai?
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
                        What are the various partnership options at Deepline.ai
                        and their advantages?
                      </button>
                    </h2>
                    <div
                      id="flush-collapseFour"
                      className="accordion-collapse collapse"
                      aria-labelledby="flush-headingFour"
                      data-bs-parent="#accordionFlushExample"
                    >
                      <div className="accordion-body">
                        Yes, you can switch from monthly to annual payments at
                        any time and your payment fee will be updated with the
                        next billing cycle.
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
                        Do I have to enroll in the Partner Program for each
                        country my business operates in globally?
                      </button>
                    </h2>
                    <div
                      id="flush-collapseFour"
                      className="accordion-collapse collapse"
                      aria-labelledby="flush-headingFour"
                      data-bs-parent="#accordionFlushExample"
                    >
                      <div className="accordion-body">
                        Yes, you can switch from monthly to annual payments at
                        any time and your payment fee will be updated with the
                        next billing cycle.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Have More questions */}
      <section>
        <div className="container">
          <div className="row br-rad-14px mt-4 questions my-5p6rem mx-0">
            <div className="col-lg-8">
              <span className="fs-2 fw-500 text-white">
                Thousands, working towards one goal.
              </span>
              <p className="text-white mt-4">
                From start-ups to established enterprises, Deepline.ai partners
                with innovative companies that prioritize delivering value to
                their customers. Our partnerships with organizations that share
                our ideals enable us to bring the most advanced solutions in
                subscription management to our clients. Join us in our mission
                to drive progress and support the ever-evolving world of
                subscriptions.
              </p>
            </div>
            <div className="contact-support d-flex align-items-center col-lg-4 justify-content-lg-end jsutify-content-md-start">
              <div className="d-inline-block pr-contact-support-container">
                <a
                  href="#"
                  className="contact-support-goto text-white cursor-pointer text-decoration-none d-flex"
                >
                  Become A Partner
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
        </div>
      </section>

      <Footer />
    </div>
  );
}
