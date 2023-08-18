/* eslint-disable jsx-a11y/anchor-is-valid */
import { Link } from "react-router-dom";

/* Import Slider */
import Rangeslider from "./Rangeslider";
import Check from "../../assets/images/packages/check.svg";
import { useState } from "react";

const Packagecards = (props) => {
  const [starterIndex, setStarterIndex] = useState(1);
  const [enterIndex, setEnterIndex] = useState(1);
  const starter = [
    { price: 10, words: 10000 },
    { price: 24, words: 35000 },
    { price: 32, words: 50000 },
    { price: 52, words: 75000 },
    { price: 70, words: 100000 },
    { price: 97, words: 150000 },
    { price: 192, words: 320000 },
  ];
  const enterprise = [
    { price: 42, words: 50000 },
    { price: 84, words: 100000 },
    { price: 168, words: 200000 },
    { price: 248, words: 300000 },
    { price: 420, words: 500000 },
    { price: 504, words: 600000 },
    { price: 672, words: 800000 },
  ];
  const handleChangeStarter = (value) => {
    setStarterIndex(value);
  };
  const handleChangeEnterPrise = (value) => {
    setEnterIndex(value);
  };
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-12 col-md-6 col-lg-4 mb-5">
          <div className="package-card package-text">
            <div className="package-card-header p-4">
              <h4 className="package-heading-1">Starter</h4>
              <h5 className="my-3">For professionals and smaller teams</h5>
              <div className="divider mx-auto my-3"></div>
              <div className="px-md-3">
                Use our AI templates to create short texts, such as social media
                posts and product descriptions, or longer texts, such as blog
                posts or emails.
              </div>
            </div>
            <div className="p-4">
              <div className="plan-content">
                <h4 className="package-heading-2">{`$${
                  props.isMonthly
                    ? starter[starterIndex].price
                    : Math.ceil(
                        starter[starterIndex].price * 12 -
                        starter[starterIndex].price * 12 * 0.17
                      )
                }/${props.isMonthly ? "mo" : "yr"} estimated`}</h4>
                <div className="d-flex justify-content-between">
                  <div>10K</div>
                  <div>320K+</div>
                </div>
                <Rangeslider
                  defaultValue={1}
                  sliders={starter}
                  onChange={handleChangeStarter}
                />
                <div className="mt-2">
                  {starter[starterIndex].words.toLocaleString("en-US")}
                  <span style={{ fontWeight: "400" }}> words/mo</span>
                </div>
              </div>

              <Link
                to={
                  process.env.REACT_APP_WEB_BASE_URL +
                  `/freetrial/starter/${
                    props.isMonthly
                  }/${
                    starter[starterIndex].words
                  }`
                }
              >
                <button className="btn package-button col-12 p-2">
                  Sign up
                </button>
              </Link>
              <h6 className="package-claim my-3">
                5-day free trial with 10k credits
              </h6>
              <div className="text-start mt-4">
                <h5 className="package-info-title">
                  Your Starter plan comes with:
                </h5>
                <div className="mt-3">
                  <div className="d-flex my-3">
                    <div>
                      <img src={Check} alt="" />
                    </div>
                    <div className="ms-3">A selection of our AI templates</div>
                  </div>
                  <div className="d-flex my-3">
                    <div>
                      <img src={Check} alt="" />
                    </div>
                    <div className="ms-3">Grammarly add-on</div>
                  </div>
                  <div className="d-flex my-3">
                    <div>
                      <img src={Check} alt="" />
                    </div>
                    <div className="ms-3">Paragraph rewriting</div>
                  </div>
                  <div className="d-flex my-3">
                    <div>
                      <img src={Check} alt="" />
                    </div>
                    <div className="ms-3">Email and chat support</div>
                  </div>
                  <div className="d-flex my-3">
                    <div>
                      <img src={Check} alt="" />
                    </div>
                    <div className="ms-3">{`${starter[
                      starterIndex
                    ].words.toLocaleString()} monthly credits`}</div>
                  </div>
                  <div className="d-flex my-3">
                    <div>
                      <img src={Check} alt="" />
                    </div>
                    <div className="ms-3">Up to 5 team members</div>
                  </div>
                </div>
                <a href="#" className="see-all-btn">
                  See all features
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-6 col-lg-4 mb-5">
          <div
            className="package-card package-text position-relative"
            style={{ border: "2px solid #6F39D4" }}
          >
            <div className="position-absolute top-0 start-50 translate-middle most-popular-tag px-2 py-1">
              Most Popular
            </div>
            <div className="package-card-header p-4">
              <h4 className="package-heading-1">Enterprise Mode</h4>
              <h5 className="my-3">For entrepreneurs and smaller businesses</h5>
              <div className="divider mx-auto my-3"></div>
              <div className="px-md-2">
                Access all our AI templates for short- and long-form content
                creation in 29+ languages and use them across platforms with our
                Chrome Extension.
              </div>
            </div>
            <div className="p-4">
              <div className="plan-content">
                <h4 className="package-heading-2">{`$${
                  props.isMonthly
                    ? enterprise[enterIndex].price
                    : Math.ceil(
                        enterprise[enterIndex].price * 12 -
                        enterprise[enterIndex].price * 12 * 0.17
                      )
                }/${props.isMonthly ? "mo" : "yr"} estimated`}</h4>
                <div className="d-flex justify-content-between">
                  <div>50K</div>
                  <div>800K+</div>
                </div>
                <Rangeslider
                  defaultValue={1}
                  sliders={enterprise}
                  onChange={handleChangeEnterPrise}
                />
                <div className="mt-2">
                  {enterprise[enterIndex].words.toLocaleString("en-US")}{" "}
                  <span style={{ fontWeight: "400" }}>words/mo</span>
                </div>
              </div>

              <Link
                to={
                  process.env.REACT_APP_WEB_BASE_URL +
                  `/freetrial/enterprise/${
                    props.isMonthly
                  }/${
                    enterprise[enterIndex].words
                  }`
                }
              >
                <button className="btn package-button col-12 p-2">
                  Sign up
                </button>
              </Link>

              <h6 className="package-claim my-3">
                5-day free trial with 10k credits
              </h6>
              <div className="text-start mt-4">
                <h5 className="package-info-title">
                  Everything in Starter, plus:
                </h5>
                <div className="mt-3">
                  <div className="d-flex my-3">
                    <div>
                      <img src={Check} alt="" />
                    </div>
                    <div className="ms-3">
                      All our AI templates <br /> (+ Doc-Style Generator)
                    </div>
                  </div>
                  <div className="d-flex my-3">
                    <div>
                      <img src={Check} alt="" />
                    </div>
                    <div className="ms-3">Add-ons (29+ languages, AI Chat)</div>
                  </div>
                  <div className="d-flex my-3">
                    <div>
                      <img src={Check} alt="" />
                    </div>
                    <div className="ms-3">Chrome Extension</div>
                  </div>
                  <div className="d-flex my-3">
                    <div>
                      <img src={Check} alt="" />
                    </div>
                    <div className="ms-3">Email and chat support</div>
                  </div>
                  <div className="d-flex my-3">
                    <div>
                      <img src={Check} alt="" />
                    </div>
                    <div className="ms-3">{`${enterprise[
                      enterIndex
                    ].words.toLocaleString()} monthly credits`}</div>
                  </div>
                  <div className="d-flex my-3">
                    <div>
                      <img src={Check} alt="" />
                    </div>
                    <div className="ms-3">Up to 10 team members</div>
                  </div>
                </div>
                <a href="#" className="see-all-btn">
                  See all features
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-6 col-lg-4 mb-5">
          <div className="package-card package-text">
            <div className="package-card-header p-4">
              <h4 className="package-heading-1">Business</h4>
              <h5 className="my-3">For businesses and corporations</h5>
              <div className="divider mx-auto my-3"></div>
              <div className="px-md-3">
                Get a customized plan suited to your organization’s needs with
                tailored word and user packages, onboarding, full support, and
                an account manager assigned to you.
              </div>
            </div>
            <div className="p-4">
              <div className="plan-content">
                <h4 className="package-heading-2 py-5 fw-semibold">
                  Custom plan Tailored word package
                </h4>
              </div>
              <button className="btn package-button col-12 p-2">
                Contact Our Sales Team
              </button>
              <h6 className="package-claim my-3">
                Get a personalized demo & custom plan
              </h6>
              <div className="text-start mt-4">
                <h5 className="package-info-title">
                  Everything in Enterprise Mode, plus:
                </h5>
                <div className="mt-3">
                  <div className="d-flex my-2">
                    <div>
                      <img src={Check} alt="" />
                    </div>
                    <div className="ms-3">
                      Integrations such as SEO, Zapier, <br />
                      and more
                    </div>
                  </div>
                  <div className="d-flex mt-3 mb-2">
                    <div>
                      <img src={Check} alt="" />
                    </div>
                    <div className="ms-3">
                      API connections and personalization
                    </div>
                  </div>
                  <div className="d-flex my-3">
                    <div>
                      <img src={Check} alt="" />
                    </div>
                    <div className="ms-3">
                      Onboarding and a dedicated Account <br />
                      Manager
                    </div>
                  </div>
                  <div className="d-flex my-3">
                    <div>
                      <img src={Check} alt="" />
                    </div>
                    <div className="ms-3">Unlimited monthly credits</div>
                  </div>
                  <div className="d-flex my-3">
                    <div>
                      <img src={Check} alt="" />
                    </div>
                    <div className="ms-3">Free additional credits</div>
                  </div>
                  <div className="d-flex my-3">
                    <div>
                      <img src={Check} alt="" />
                    </div>
                    <div className="ms-3">Custom number of team members</div>
                  </div>
                </div>
                <a href="#" className="see-all-btn">
                  See all features
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Packagecards;
