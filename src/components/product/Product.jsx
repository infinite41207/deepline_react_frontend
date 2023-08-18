import "../careers/careers&customized.css";
import { Link } from "react-router-dom";

/* Icons */
import Effeciency from "../../assets/images/customized/cust-sol-incr-effeciency.svg";
import Accur from "../../assets/images/customized/cust-sol-impr-accur.svg";
import Compete from "../../assets/images/customized/cust-sol-compet-ai.svg";
import Cube from "../../assets/images/customized/cube.svg";

import Nlp from "../../assets/images/customized/nlp.svg";
import Mind from "../../assets/images/customized/mind.svg";
import Datascience from "../../assets/images/customized/data-science.svg";
import Bigdata from "../../assets/images/customized/big-data.svg";
import Analysis from "../../assets/images/customized/speech-analysis.svg";
import Refresh from "../../assets/images/customized/settings-refresh.svg";

import Book from "../../assets/images/customized/cust-sol-book.svg";
import CEOPIC from "../../assets/images/customized/ceo.png";

import Clock from "../../assets/images/customized/colored-clock.svg";
import Customer from "../../assets/images/customized/colored-customer.svg";
import Badge from "../../assets/images/customized/colored-badge.svg";
import Hand from "../../assets/images/customized/colored-salary-hand.svg";
import Provision from "../../assets/images/customized/colored-provision.svg";
import Smallrightarrow from "../../assets/images/customized/small-right-arrow.svg";
import './product.css';

const Resources = () => {
  return (
    <>
      <div
        className="customized-sol-header bg-light pb-4"
        style={{ zIndex: "1", position: "relative" }}
      >
        <div
          className="hero-section-customized-sol position-relative"
          style={{ zIndex: "1111" }}
        >
          <div
            className="container position-relative d-flex flex-column-reverse flex-lg-column flex-md-column flex-sm-column"
            style={{ zIndex: "10000" }}
          >
            <div className="row text-center pt-6p5rem pb-2rem order-5 order-lg-0 order-sm-0 order-md-0">
              <span className="font-dm-sans display-5 fw-bold fst-normal text-dark-voilet">
                Products
              </span>
            </div>
            <div className="row text-center d-flex jsutify-content-center px-md-2 px-sm-4 px-4 mt-4 mt-lg-0 mt-md-0 mt-sm-0">
              <span className="page-sub-head-text-dar-grey font-inter fs-4 fw-normal">
                We Enhance Your Data Insights, Showcasing the Power of
                <span className="fw-bold ms-2">
                  Artificial Intelligence{" "}
                </span>{" "}
                to Drive Your Company's Success.
              </span>
            </div>
            <div className="map-image-container d-flex justify-content-center mb-5 mb-lg-0 mb-md-0 mb-sm-0 position-relative">
              <img src={Cube} className="img-fluid position-relative" alt="" />

              <div className="custom-sol-yellow-elipse setting position-absolute"></div>
              <div className="custom-sol-orange-elipse setting position-absolute"></div>
            </div>
          </div>

          <div
            className="custom-shape-divider-bottom-1675407005"
            style={{ marginTop: "-344px" }}
          >
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

      {/* Customized solution page content  */}
      <div className="container custom-solut-page-content">
        <div className="row mt-md-0 mt-sm-5 mt-5">
          <p className="font-inter fw-500 fs-6 lh-lg fst-normal text-voilet text-center">
            The perfect way to make everyday conversations more productive and
            engaging!
          </p>
        </div>

        {/* Customized page cards  */}
        <div className="row justify-content-center mt-7p5rem">
          <div className="col-lg-4 col-md-6">
            <div className="py-2p37rem px-1p8rem custom-sol-downToHero-cards text-center h-100 mx-auto mb-3 mb-lg-0">
              <div className="w-auto">
                <img src={Effeciency} alt="" />
              </div>
              <p className="fs-5 font-inter fw-600 text-dark my-1p6rem dark-black-text">
                Increased Efficiency and Productivity
              </p>
              <span className="text-light-grey fs-6">
                Custom AI solutions are tailored to the specific needs and
                processes of your business, allowing for streamlined and
                automated tasks, freeing up valuable time and resources.
              </span>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 mt-4 mb-md-0">
            <div className="py-2p37rem px-1p8rem custom-sol-downToHero-cards text-center h-100 mx-auto mb-3 mb-lg-0">
              <div className="w-auto">
                <img src={Accur} alt="" />
              </div>
              <p className="fs-5 font-inter fw-600 text-dark my-1p6rem dark-black-text">
                Improved Data Accuracy and Insights
              </p>
              <span className="text-light-grey fs-6">
                By leveraging AI algorithms, your business can gain deeper and
                more accurate insights into complex data sets, enabling informed
                decision-making.
              </span>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 mt-3 mt-md-5 mt-lg-0">
            <div className="py-2p37rem px-1p8rem custom-sol-downToHero-cards text-center h-100 mx-auto">
              <div className="w-auto mt-3">
                <img src={Compete} className="" alt="" />
              </div>
              <p className="fs-5 font-inter fw-600 text-dark my-1p6rem dark-black-text">
                Competitive Edge with Custom AL Solutions
              </p>
              <span className="text-light-grey fs-6">
                With a custom AI solution, your business can differentiate
                itself from competitors by offering unique and innovative
                products and services.
              </span>
            </div>
          </div>
        </div>

        {/* Custom ML services and Video saection */}
        <div className="row mt-7p5rem d-flex justify-content-center cust-sol-ml-service">
          <div className="ml-service-heading col-12">
            <p className="font-dm-sans display-5 page-head-black-1D1D1D fw-bold fst-normal text-center">
              Our Custom ML <span className="text-dark-voilet">Services</span>
            </p>
          </div>

          {/* Cards Container */}
          <div className="cust-sol-ml-service-content bg-light col-11 mt-3p5rem">
            <div className="row">
              {/* Card for ML service */}
              <div className="col-lg-6 ml-service-card">
                <div className="ml-serv-icon-container d-flex justify-content-center">
                  <img src={Nlp} className="img-fluid" alt="" />
                </div>
                <div className="ml-serv-card-heading mt-1p25rem">
                  <p className="fw-600 font-inter fs-5 fst-normal heading-black text-center">
                    NLP
                  </p>
                </div>
                <div className="ml-service-card-descr">
                  <ol>
                    <li>
                      Deepline.ai's NLP technology can automate customer service
                      inquiries, freeing up time for customer support teams to
                      focus on more complex issues.
                    </li>
                    <li>
                      Natural language processing can be used to extract
                      valuable insights from large volumes of unstructured
                      customer feedback, helping companies make informed
                      decisions.
                    </li>
                    <li>
                      Our NLP solutions can analyze customer sentiment in
                      real-time, allowing businesses to respond quickly to
                      negative experiences and maintain a positive brand image.
                    </li>
                    <li>
                      Our NLP capabilities can also be used for language
                      translation, enabling companies to effectively communicate
                      with customers in different countries and expand their
                      global reach.
                    </li>
                  </ol>
                </div>
              </div>
              {/* Card for ML service */}
              <div className="col-lg-6 ml-service-card">
                <div className="ml-serv-icon-container d-flex justify-content-center">
                  <img src={Mind} className="img-fluid" alt="" />
                </div>
                <div className="ml-serv-card-heading mt-1p25rem">
                  <p className="fw-600 font-inter fs-5 fst-normal heading-black text-center">
                    Computer Vision
                  </p>
                </div>
                <div className="ml-service-card-descr">
                  <ol>
                    <li>
                      Custom AI services from Deepline.ai using computer vision
                      can revolutionize the way businesses process images,
                      analyze patterns and trends, and make better decisions.
                    </li>
                    <li>
                      With computer vision, Deepline.ai can provide real-time
                      image recognition, object detection and image
                      classNameification to help businesses stay ahead of their
                      competition.
                    </li>
                    <li>
                      Our custom AI services using computer vision can help in
                      areas such as quality control, logistics, and inventory
                      management, allowing businesses to improve their
                      operational efficiency and reduce costs.
                    </li>
                    <li>
                      The use of computer vision in Deepline.ai's custom AI
                      services can provide businesses with greater insights,
                      enabling them to make data-driven decisions, reduce human
                      error and streamline processes.
                    </li>
                  </ol>
                </div>
              </div>

              {/* Card for ML service */}
              <div className="col-lg-6 ml-service-card">
                <div className="ml-serv-icon-container d-flex justify-content-center">
                  <img src={Datascience} className="img-fluid" alt="" />
                </div>
                <div className="ml-serv-card-heading mt-1p25rem">
                  <p className="fw-600 font-inter fs-5 fst-normal heading-black text-center">
                    Data Science
                  </p>
                </div>
                <div className="ml-service-card-descr">
                  <ol>
                    <li>
                      Data science can be used to analyze customer behavior and
                      predict future trends, helping businesses make informed
                      decisions.
                    </li>
                    <li>
                      With data science, businesses can gain a comprehensive
                      understanding of their data, allowing them to optimize
                      processes and improve performance.
                    </li>
                    <li>
                      Custom ai services can use data science to identify
                      patterns and relationships within large datasets, making
                      it easier to extract valuable insights.
                    </li>
                    <li>
                      By leveraging data science, custom ai services can help
                      businesses turn raw data into actionable information,
                      leading to better outcomes and increased profitability.
                    </li>
                  </ol>
                </div>
              </div>

              {/* Card for ML service */}
              <div className="col-lg-6 ml-service-card">
                <div className="ml-serv-icon-container d-flex justify-content-center">
                  <img src={Bigdata} className="img-fluid" alt="" />
                </div>
                <div className="ml-serv-card-heading mt-1p25rem">
                  <p className="fw-600 font-inter fs-5 fst-normal heading-black text-center">
                    Big Data
                  </p>
                </div>
                <div className="ml-service-card-descr">
                  <ol>
                    <li>
                      Big data analytics can be leveraged to identify patterns
                      and trends in vast amounts of data, enabling organizations
                      to make data-driven decisions.
                    </li>
                    <li>
                      Custom AI services powered by big data technologies can
                      help organizations harness their data to improve business
                      processes and drive growth.
                    </li>
                    <li>
                      Deepline.ai's big data solutions can help organizations
                      extract meaningful insights from structured and
                      unstructured data, including social media and IoT data.
                    </li>
                    <li>
                      By integrating big data technologies into custom AI
                      services, organizations can gain a competitive edge and
                      drive innovation in their respective industries.
                    </li>
                  </ol>
                </div>
              </div>

              {/* Card for ML service */}
              <div className="col-lg-6 ml-service-card">
                <div className="ml-serv-icon-container d-flex justify-content-center">
                  <img src={Analysis} className="img-fluid" alt="" />
                </div>
                <div className="ml-serv-card-heading mt-1p25rem">
                  <p className="fw-600 font-inter fs-5 fst-normal heading-black text-center">
                    Speech Analysis
                  </p>
                </div>
                <div className="ml-service-card-descr">
                  <ol>
                    <li>
                      With speech analysis, organizations can improve customer
                      service by quickly and accurately transcribing customer
                      feedback and sentiment.
                    </li>
                    <li>
                      Custom AI solutions for speech analysis can also help
                      companies analyze and respond to large volumes of customer
                      service calls.
                    </li>
                    <li>
                      Using advanced speech recognition techniques, businesses
                      can automate complex tasks, saving time and money.
                    </li>
                    <li>
                      AI-powered speech analysis can also enhance the accuracy
                      of insights and decision-making by providing an in-depth
                      understanding of customer needs and behaviors.
                    </li>
                  </ol>
                </div>
              </div>

              {/* Card for ML service */}
              <div className="col-lg-6 ml-service-card">
                <div className="ml-serv-icon-container d-flex justify-content-center">
                  <img src={Refresh} className="img-fluid" alt="" />
                </div>
                <div className="ml-serv-card-heading mt-1p25rem">
                  <p className="fw-600 font-inter fs-5 fst-normal heading-black text-center">
                    MLOps
                  </p>
                </div>
                <div className="ml-service-card-descr">
                  <ol>
                    <li>
                      MLOps helps to automate the deployment, scaling and
                      management of machine learning models with the goal of
                      improving the speed and accuracy of AI predictions.
                    </li>
                    <li>
                      With MLOps, the time it takes to develop and deploy new
                      models is significantly reduced, allowing organizations to
                      bring new AI solutions to market faster.
                    </li>
                    <li>
                      By integrating MLOps into custom AI services, deepline.ai
                      ensures that machine learning models are reliable,
                      efficient and scalable, while maintaining the highest
                      level of security.
                    </li>
                    <li>
                      The use of MLOps enables organizations to monitor, analyze
                      and optimize their AI models, ensuring that they continue
                      to deliver high-quality results in real-world
                      applications.
                    </li>
                  </ol>
                </div>
              </div>
            </div>
          </div>

          {/* Video and content section */}
          <div className="col-12 custom-sol-video-section video-intro-row gx-4 mx-md-0 mx-sm-2 mx-3 mt-md-5">
            <div className="row">
              <div className="col-xxl-6 col-xl-5 col-lg-12 col-md-12 custom-sol-video-descr d-flex flex-column px-md-2 px-sm-4 px-4 text-center text-lg-start">
                <p className="text-decoration-none font-inter fw-500 fst-normal text-voilet">
                  See for yourself
                </p>
                <span className="fs-47px font-dm-sans fw-bold fst-normal learning-cards-black lh-sm">
                  Watch our happy customers
                </span>
                <br />
                <span className="fs-18px font-inter learning-cards-blac fw-normal lh-lg">
                  Our customers are the reason we exist. It is a privilege to
                  serve such a dedicated and hard-working group of individuals
                  and businesses. We are committed to providing them with
                  exceptional service and innovative solutions that help them
                  grow and succeed. Thank you to all of our customers for
                  choosing deepline.ai.
                </span>
                <div className="my-1p6rem">
                  <Link to="/partners" className="text-decoration-none rounded-pill px-5 py-2 text-white justify-content-center justify-content-lg-start jusfify-content-md-start d-flex align-items-center fw-600 fst-normal font-inter border-0 outline-0 shadow-none bg-gradient-voilet-2 cust-sol-cntct-btn mx-auto mx-lg-0">
                    Contact Us
                    <img src={Smallrightarrow} className="ms-3" alt="" />
                  </Link>
                </div>
              </div>
              <div className="col-xxl-6 col-xl-7 col-lg-12 col-md-12 d-flex pricing-video-container pt-xxl-0 pt-xl-3 pt-lg-3 pt-md-3 pt-sm-3 pt-3 px-md-4 px-sm-3 px-4">
                <div className="ratio ratio-16x9 w-100 video-frame">
                  <div className="video-base"></div>
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
          </div>

          {/* Beneifts of customized Ai Sloutions */}
          <div className="cust-ai-sol-heading col-12 mt-7p5rem mb-5rem">
            <p className="font-dm-sans display-5 page-head-black-1D1D1D fw-bold fst-normal text-center">
              <span className="text-dark-voilet me-2 me-sm-3">Benefits</span>of customized AI
              Solutions
            </p>
          </div>

          <div className="col-12">
            <div className="row px-md-2 px-sm-4 px-4">
              <div className="col-12 bg-light d-flex align-items-center benf-ai-solu-row benf-ai-solu-row111">
                <div className="d-sm-flex my-auto px-3 px-sm-0">
                  <div className="cust-ai-sol-heading mb-2 mb-sm-0">
                    <img src={Clock} className="" alt="" />
                  </div>
                  <div className="cust-ai-sol-row-descr ps-sm-4">
                    <span className="fs-2 fw-500 font-inter fst-normal text-blur-grey">
                      Increased Efficiency and Productivity
                    </span>
                    <p className="fs-1p375 fw-normal font-inter fst-normal text-blur-grey mt-3">
                      Customizing AI responses for your business will streamline
                      your customer service process, resulting in faster
                      response times and increased efficiency. This will free up
                      valuable time and resources for your employees to focus on
                      more pressing matters.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-12 bg-light d-flex align-items-center benf-ai-solu-row">
                <div className="d-sm-flex my-auto px-3 px-sm-0">
                  <div className="cust-ai-sol-heading mb-2 mb-sm-0">
                    <img src={Customer} className="" alt="" />
                  </div>
                  <div className="cust-ai-sol-row-descr ps-sm-4">
                    <span className="fs-2 fw-500 font-inter fst-normal text-blur-grey">
                      Personalized Customer Experiences
                    </span>
                    <p className="fs-1p375 fw-normal font-inter fst-normal text-blur-grey mt-3">
                      Customized AI responses allow you to tailor your responses
                      to your customers' specific needs and preferences,
                      creating a more personalized experience. This leads to
                      increased customer satisfaction and loyalty, as well as a
                      positive brand image.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-12 bg-light d-flex align-items-center benf-ai-solu-row">
                <div className="d-sm-flex my-auto">
                  <div className="cust-ai-sol-heading mb-2 mb-sm-0">
                    <img src={Badge} className="" alt="" />
                  </div>
                  <div className="cust-ai-sol-row-descr ps-sm-4">
                    <span className="fs-2 fw-500 font-inter fst-normal text-blur-grey">
                      Competitive Advantage
                    </span>
                    <p className="fs-1p375 fw-normal font-inter fst-normal text-blur-grey mt-3">
                      By offering personalized and efficient customer service,
                      you will set your business apart from the competition.
                      This can give you a significant advantage in attracting
                      and retaining customers, as well as building brand
                      recognition.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-12 py-5 bg-light d-flex align-items-center benf-ai-solu-row">
                <div className="d-sm-flex my-auto px-3 px-sm-0">
                  <div className="cust-ai-sol-heading mb-2 mb-sm-0">
                    <img src={Hand} className="" alt="" />
                  </div>
                  <div className="cust-ai-sol-row-descr ps-sm-4">
                    <span className="fs-2 fw-500 font-inter fst-normal text-blur-grey">
                      Cost Savings
                    </span>
                    <p className="fs-1p375 fw-normal font-inter fst-normal text-blur-grey mt-3">
                      Implementing customized AI responses can result in cost
                      savings for your business. Automated responses can handle
                      repetitive tasks and queries more efficiently, freeing up
                      your employees to focus on more complex issues.
                      Additionally, the faster response times and increased
                      efficiency can lead to increased sales and customer
                      satisfaction.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-12 bg-light d-flex align-items-center benf-ai-solu-row">
                <div className="d-sm-flex my-auto px-3 px-sm-0">
                  <div className="cust-ai-sol-heading mb-2 mb-sm-0">
                    <img src={Provision} className="" alt="" />
                  </div>
                  <div className="cust-ai-sol-row-descr ps-sm-4">
                    <span className="fs-2 fw-500 font-inter fst-normal text-blur-grey">
                      Scalability and Flexibility
                    </span>
                    <p className="fs-1p375 fw-normal font-inter fst-normal text-blur-grey mt-3">
                      Customized AI responses can be scaled and adapted as your
                      business grows, making it an ideal solution for businesses
                      of all sizes. Additionally, AI responses can be updated
                      and adjusted as needed, providing your business with the
                      flexibility to adapt to changing customer needs
                      and market trends
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Why Us section */}
          <div className="why-us-heading col-12 my-5">
            <p className="font-dm-sans display-5 page-head-black-1D1D1D fw-bold fst-normal text-center">
              <span className="text-dark-voilet">Why</span> Us?
            </p>
          </div>
          <div className="col-12 d-flex flex-column align-items-center">
            <div className="book-container position-relative d-flex justify-content-center ">
              <img src={Book} className="img-fluid position-relative" alt="" />
              <div className="book-orange-elipse styling position-absolute d-md-block d-sm-none d-none"></div>
              <div className="book-yellow-elipse styling position-absolute d-md-block d-sm-none d-none"></div>
              <div className="book-voilet-elipse styling position-absolute d-md-block d-sm-none d-none"></div>
            </div>
            <div className="why-us-in-heading pt-2p6rem row d-flex justify-content-center">
              <div className="col-md-8 col-sm-12 col-12">
                <p className="text-center fs-47px font-dm-sans learning-cards-black fst-normal">
                  At deepline.ai, we streamline your learning process
                </p>
              </div>
            </div>

            <div className="why-us-content mt-3p5rem px-md-2 px-sm-4 px-4">
              <p className="fs-1p375 fw-normal font-inter fst-normal text-center text-blur-grey">
                With a team of seasoned machine learning experts, we have a deep
                understanding of the industry and are equipped to tackle any
                project. Our expertise enables us to hit the ground running,
                saving you time and resources that would have otherwise gone
                towards learning and upskilling. <br />
                <br />
                We have a well-established network of top-notch experts,
                allowing us to assemble the ideal team for your project. Whether
                you need a specialist for a day or half a year, we have the
                connections to ensure the successful delivery of your project.
              </p>
            </div>
          </div>

          {/* CEO Qoute */}
          <div className="row mt-md-5 pt-md-3 d-flex justify-content-center mx-md-0 mx-sm-3 mx-2">
            <div className="col-lg-11 col-md-10 col-sm-12 col-12">
              <div className="row">
                <div className="col-lg-4 col-md-5 col-sm-12 col-12 py-5 text-center">
                  <div className="ceo-img-ellipse w-auto">
                    <img src={CEOPIC} alt="" />
                  </div>
                </div>
                <div className="col-lg-8 col-md-7 col-sm-12 col-12 ceo-qoute-container d-flex justify-content-center flex-column py-5 ps-lg-0 ps-md-2 px-sm-5 ps-5">
                  <p className="fs-5 qoute-black fw-500 fst-italic px-lg-5 px-md-4 px-sm-2 px-2 position-relative qoute-text ps-lg-1 ps-md-1 ps-sm-2 ps-4">
                    Our AI-powered platform enables users to quickly craft
                    high-quality content, freeing up valuable time for other
                    activities for both individuals and businesses alike!
                  </p>
                  <p className="mt-2">
                    <span className="font-inter fw-bold fs-6 text-blue text-left">
                      Demetris Nikolaou{" "}
                    </span>{" "}
                    <span className="fw-300 fs-6 fw-300 font-inter text-blue">
                      - CEO at deepline.ai
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

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
                        How do I know that I need AI to solve my problem?
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
                        Who is responsible for data collection and labeling?
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
                        How much times does it take to execute an AI project?
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
                        Do you guarantee the success of the project?
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
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
        </div>
      </div>
    </>
  );
};

export default Resources;
