import "./careers&customized.css";

/* Icons */
import Map from "../../assets/images/careers/map.svg";
import Uploadicon from "../../assets/images/careers/upload-icon.svg";
import Place1 from "../../assets/images/careers/career-working-place-1.png";
import Place2 from "../../assets/images/careers/career-working-place-2.png";
import Place3 from "../../assets/images/careers/career-working-place-3.png";
import Place4 from "../../assets/images/careers/career-working-place-4.png";
import Place5 from "../../assets/images/careers/career-working-place-5.png";
import Place6 from "../../assets/images/careers/career-working-place-6.png";
import Place7 from "../../assets/images/careers/career-working-place-7.png";
import Place8 from "../../assets/images/careers/career-working-place-8.png";
import Magnifying from "../../assets/images/careers/career-magnifying-glass.png";
import Stetoscope from "../../assets/images/careers/career-stethoscope.png";
import CareerMsg from "../../assets/images/careers/career-msg.png";
import CareerGrowingArrow from "../../assets/images/careers/career-growing-arrow.png";
import Signal from "../../assets/images/careers/signals.svg";
import Graduate from "../../assets/images/careers/graduate.svg";
import Mic from "../../assets/images/careers/mic.svg";
import Globe from "../../assets/images/careers/globe.svg";

const Careers = () => {
  return (
    <>
      {/* Hero Section */}
      <div
        className="careers-header bg-light pb-5"
        style={{ marginBottom: "4rem", zIndex: "1", position: "relative" }}
      >
        <div
          className="hero-section-careers position-relative"
          style={{ zIndex: "1111" }}
        >
          <div
            className="container position-relative"
            style={{ zIndex: "10000" }}
          >
            <div className="row text-center pt-6p5rem pb-2rem">
              <span className="font-dm-sans display-5 page-head-black-1D1D1D fw-bold ">
                Join us at deepline.ai
              </span>
            </div>
            <div className="row text-center px-0 d-flex jsutify-content-center">
              <span className="page-sub-head-text-dar-grey font-inter fs-4 fw-normal">
                Looking to join a team where you can work on exciting new AI
                developments and make an impact? Take a look at our open
                positions.
              </span>
            </div>
            <div className="map-image-container d-flex justify-content-center mt-3p25rem mb-5rem">
              <img src={Map} className="img-fluid" alt="" />
            </div>
          </div>
          <div className="custom-shape-divider-bottom-1676372468">
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

      {/* Page content starts here */}
      <div className="container mb-5 careers-page-content">
        {/* Jobs opportunities  */}
        <div className="row career-row ">
          <p className="career-page-jobs-opportunites pb-2">
            <span className="fs-5 font-inter fst-normal fw-600">
              Job Listings
            </span>
            <span className="ms-3 font-inter fw-500 text-capitalize text-voilet">
              4 Job opportunities are available
            </span>
          </p>
        </div>

        <div className="row career-jobs d-flex gap-4 justify-content-center p-0 pt-4 px-md-0 px-sm-3 px-4">
          <div className="col-md-5 col-sm-8 col-12 ps-4rem pe-5 jobs-opportunity-card">
            <div className="description my-5">
              <div className="d-flex justify-content-between job-title">
                <span className="fs-3 fw-bold font-inter fst-normal qoute-black">
                  UX/UI Designer
                </span>
                <img src={Uploadicon} alt="" />
              </div>
              <div className="job-other-description">
                <span className="font-inter fw-400 fst-normal text-dark-gray">
                  Full time • 2 Positions
                </span>
                <p className="font-inter fw-600 text-dark-voilet mt-3 mb-2rem">
                  €1k - €2k
                </p>
                <p className="fs-14px fst-normal font-inter text-dark-gray">
                  Posted 2d ago | 7d left to apply
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-5 col-sm-8 col-12 ps-4rem pe-5 jobs-opportunity-card">
            <div className="description my-5">
              <div className="d-flex justify-content-between job-title">
                <span className="fs-3 fw-bold font-inter fst-normal qoute-black">
                  Frontend Developer
                </span>
                <img src={Uploadicon} alt="" />
              </div>
              <div className="job-other-description">
                <span className="font-inter fw-400 fst-normal text-dark-gray">
                  Full time • 1 Positions
                </span>
                <p className="font-inter fw-600 text-dark-voilet mt-3 mb-2rem">
                  €1k - €2k
                </p>
                <p className="fs-14px fst-normal font-inter text-dark-gray">
                  Posted 2d ago | 7d left to apply
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-5 col-sm-8 col-12 ps-4rem pe-5 jobs-opportunity-card">
            <div className="description my-5">
              <div className="d-flex justify-content-between job-title">
                <span className="fs-3 fw-bold font-inter fst-normal qoute-black">
                  Backend Developer
                </span>
                <img src={Uploadicon} alt="" />
              </div>
              <div className="job-other-description">
                <span className="font-inter fw-400 fst-normal text-dark-gray">
                  Full time • 3 Positions
                </span>
                <p className="font-inter fw-600 text-dark-voilet mt-3 mb-2rem">
                  €1k - €2k
                </p>
                <p className="fs-14px fst-normal font-inter text-dark-gray">
                  Posted 2d ago | 7d left to apply
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-5 col-sm-8 col-12 ps-4rem pe-5 jobs-opportunity-card">
            <div className="description my-5">
              <div className="d-flex justify-content-between job-title">
                <span className="fs-3 fw-bold font-inter fst-normal qoute-black">
                  Copywriter
                </span>
                <img src={Uploadicon} alt="" />
              </div>
              <div className="job-other-description">
                <span className="font-inter fw-400 fst-normal text-dark-gray">
                  Hourly • 1 Position
                </span>
                <p className="font-inter fw-600 text-dark-voilet mt-3 mb-2rem">
                  €8/hr
                </p>
                <p className="fs-14px fst-normal font-inter text-dark-gray">
                  Posted 2d ago | 7d left to apply
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* woking at deepline */}
        <div className="row mt-7p5rem px-md-0 px-sm-3 px-4 deepline-working-places">
          <div className="col-12">
            <div className="heading-working-deepline-ai text-center pt-4">
              <span className="display-5 font-inter fw-bold learning-cards-black">
                Working at deepline.ai
              </span>
            </div>
          </div>
          <div className="col-12 d-flex justify-content-center mt-4rem">
            <div className="row p-0 d-flex gap-4 justify-content-center">
              <div className="col-auto p-0">
                <div className="img-container">
                  <img src={Place1} className="img-fluid" alt="" />
                </div>
              </div>
              <div className="col-auto p-0 d-flex flex-column gap-4">
                <div className="d-flex gap-4">
                  <div className="img-container">
                    <img src={Place2} className="img-fluid" alt="" />
                  </div>
                  <div className="img-container">
                    <img src={Place3} className="img-fluid" alt="" />
                  </div>
                </div>
                <div className="img-container">
                  <img src={Place4} className="img-fluid" alt="" />
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 d-flex justify-content-center mt-4">
            <div className="row p-0 d-flex gap-4 justify-content-center">
              <div className="col-auto p-0">
                <div className="img-container">
                  <img src={Place5} className="img-fluid" alt="" />
                </div>
              </div>
              <div className="col-auto p-0">
                <div className="img-container">
                  <img src={Place6} className="img-fluid" alt="" />
                </div>
              </div>
              <div className="col-auto p-0">
                <div className="img-container">
                  <img src={Place7} className="img-fluid" alt="" />
                </div>
              </div>
              <div className="col-auto p-0">
                <div className="img-container">
                  <img src={Place8} className="img-fluid" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* video section */}
        <div className="row mt-7p5rem career-row career-video-section video-intro-row bg-pink py-5rem px-4p5rem gx-4">
          <div className="col-xxl-6 col-xl-5 col-lg-12 col-md-12 career-video-descr pe-xl-5 d-flex flex-column justify-content-center">
            <span className="fs-3 font-inter fw-500 text-dark-black">
              What is it like working here?
            </span>
            <br />
            <p className="fs-14px font-inter text-blackish lh-lg">
              Hear directly from our team members about their experience working
              as part of the deepline.ai team. Learn more about the work-life
              balance practiced at deepline.ai and what keeps our team inspired.
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

        {/* why you love working at deepline section */}
        <div className="row mt-7p5rem career-row">
          <div className="col-12">
            <div className="heading-why-working-deepline-ai text-center">
              <span className="display-5 font-inter fw-bold learning-cards-black">
                Why you’ll love working at deepline.ai
              </span>
              <br />
              <p className="page-sub-head-text-dar-grey font-inter fs-4 fw-normal mt-4">
                We’re very proud of our work philosophy here at deepline.ai. Our
                approach to developing and expanding AI software has always been
                about innovative solutions for our users, teamwork, and
                community. We continue to grow and learn from one another as a
                team.
              </p>
            </div>
          </div>
          <div className="col-11 mt-7p5rem why-working-deepline px-md-0 px-sm-3 px-4">
            <div className="row">
              <div className="col-lg-5 col-md-6 col-sm-12 col-12 d-flex justify-content-center mb-md-0 mb-sm-4 mb-4">
                <div className="img-container p-0 position-relative">
                  <img
                    src={Magnifying}
                    className="img-fluid position-relative"
                    alt=""
                  />
                  <div className="position-absolute career-yellow-elipse magnifying"></div>
                  <div className="position-absolute career-sm-voilet-elipse magnifying"></div>
                  <div className="position-absolute career-camel-color-elipse magnifying"></div>
                </div>
              </div>
              <div className="col-lg-7 col-md-6 col-sm-12 col-12 d-flex align-items-center pt-md-0 pt-sm-5 pt-5">
                <div className="focus-solution-description">
                  <p className="fs-1p875rem fw-600 font-inter text-dark-black ">
                    deepline.ai focuses on solutions.
                  </p>
                  <p className="fs-14px fw-300 fst-normal font-inter mt-3">
                    Our solution-based approach means our team members are
                    regularly given the opportunity to showcase their ideas,
                    grow, and challenge themselves as they engage with problems
                    and tasks. 
                  </p>
                </div>
              </div>
            </div>

            <div className="row mt-5 d-flex flex-md-row flex-sm-column flex-sm-column-reverse flex-column-reverse">
              <div className="col-lg-7 col-md-6 col-sm-12 col-12 d-flex align-items-center">
                <div className="career-stetho-description">
                  <p className="fs-1p875rem fw-600 font-inter text-dark-black ">
                    deepline.ai listens to people’s needs
                  </p>
                  <p className="fs-14px fw-300 fst-normal font-inter mt-3">
                    Here at deepline.ai, we listen to the needs of our users and
                    team members. We maintain a culture of listening and
                    dialogue, which fosters a healthy and encouraging
                    environment. Our open-dialogue philosophy gives our team
                    members the confidence they need to complete assignments and
                    take on new projects.   
                  </p>
                </div>
              </div>
              <div className="col-lg-5 col-md-6 col-sm-12 col-12 d-flex justify-content-md-end justify-content-center mb-md-0 mb-sm-4 mb-4">
                <div className="img-container p-0 position-relative">
                  <img
                    src={Stetoscope}
                    className="img-fluid position-relative"
                    alt=""
                  />
                  <div className="position-absolute career-yellow-elipse stetho"></div>
                  <div className="position-absolute career-md-voilet-elipse stetho"></div>
                  <div className="position-absolute career-blue-md-elipse stetho"></div>
                </div>
              </div>
            </div>

            <div className="row mt-5">
              <div className="col-lg-5 col-md-6 col-sm-12 col-12 d-flex justify-content-center">
                <div className="img-container p-0 position-relative">
                  <img
                    src={CareerMsg}
                    className="img-fluid position-relative"
                    alt=""
                  />
                  <div className="position-absolute career-blue-sm-elipse msg"></div>
                  <div className="position-absolute career-sm-voilet-elipse msg"></div>
                  <div className="position-absolute career-camel-color-elipse msg"></div>
                </div>
              </div>
              <div className="col-lg-7 col-md-6 col-sm-12 col-12 d-flex align-items-center">
                <div className="career-communication-description">
                  <p className="fs-1p875rem fw-600 font-inter text-dark-black ">
                    deepline.ai fosters communication.
                  </p>
                  <p className="fs-14px fw-300 fst-normal font-inter mt-3">
                    We encourage feedback and suggestions, giving team members
                    room to express themselves and contribute to the development
                    of deepline.ai  
                  </p>
                </div>
              </div>
            </div>

            <div className="row mt-5 d-flex flex-md-row flex-sm-column flex-sm-column-reverse flex-column-reverse">
              <div className="col-lg-7 col-md-6 col-sm-12 col-12 d-flex align-items-center">
                <div className="career-growing-description">
                  <p className="fs-1p875rem fw-600 font-inter text-dark-black ">
                    deepline.ai is growing and evolving.
                  </p>
                  <p className="fs-14px fw-300 fst-normal font-inter mt-3">
                    By listening to our users’ needs and our team’s proposals,
                    we are able to craft new solutions, develop new features,
                    and expand what deepline.ai has to offer.   
                  </p>
                </div>
              </div>
              <div className="col-lg-5 col-md-6 col-sm-12 col-12 d-flex justify-content-md-end justify-content-center mb-md-0 mb-sm-4 mb-4">
                <div className="img-container p-0 position-relative">
                  <img
                    src={CareerGrowingArrow}
                    className="img-fluid position-relative"
                    alt=""
                  />
                  <div className="position-absolute career-yellow-sm-elipse growing"></div>
                  <div className="position-absolute career-md-voilet-elipse growing"></div>
                  <div className="position-absolute career-sm-camel-color-elipse growing"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Perks and Benefits section */}
          <div className="col-12 p-0 px-md-0 px-sm-3 px-4 perks-benefits">
            <div className="heading-why-working-deepline-ai text-center my-5">
              <span className="display-5 font-inter fw-bold learning-cards-black">
                Perks & Benefits
              </span>
              <br />
            </div>

            <div className="row">
              <div className="col-md-6 col-sm-12 col-12 p-narrow career-perks">
                <div className="bg-grey-ligh perk-card px-4p625 py-4p w-100 h-100">
                  <div className="icon-container">
                    <img src={Signal} className="img-fluid" alt="" />
                  </div>
                  <p className="fw-600 fs-5 fst-normal font-inter template-heading-black mt-2">
                    Remote-Work Friendly
                  </p>
                  <p className="fs-14px fw-300 fst-normal font-inter text-blackish mt-2">
                    Many of our team members work from a range of different
                    countries. We welcome remote work and also welcome any of
                    our members who do decide to join us in our offices in
                    person.
                  </p>
                </div>
              </div>

              <div className="col-md-6 col-sm-12 col-12 p-narrow career-perks">
                <div className="bg-grey-ligh perk-card px-4p625 py-4p w-100 h-100">
                  <div className="icon-container">
                    <img src={Graduate} className="img-fluid" alt="" />
                  </div>
                  <p className="fw-600 fs-5 fst-normal font-inter template-heading-black mt-2">
                    Encouragement of Learning
                  </p>
                  <p className="fs-14px fw-300 fst-normal font-inter text-blackish mt-2">
                    Our team members are encouraged to develop their skills
                    further and take on courses that help them grow and
                    fine-tune their knowledge.
                  </p>
                </div>
              </div>

              <div className="col-md-6 col-sm-12 col-12 p-narrow career-perks">
                <div className="bg-grey-ligh perk-card px-4p625 py-4p w-100 h-100">
                  <div className="icon-container">
                    <img src={Mic} className="img-fluid" alt="" />
                  </div>
                  <p className="fw-600 fs-5 fst-normal font-inter template-heading-black mt-2">
                    Room for Voices
                  </p>
                  <p className="fs-14px fw-300 fst-normal font-inter text-blackish mt-2">
                    We support our team members in expressing themselves and
                    their ideas. We believe as a deepline.ai employee, your
                    voice should be heard and can contribute to how
                    deepline.ai’s future looks.
                  </p>
                </div>
              </div>

              <div className="col-md-6 col-sm-12 col-12 p-narrow career-perks">
                <div className=" bg-grey-ligh perk-card px-4p625 py-4p w-100 h-100">
                  <div className="icon-container">
                    <img src={Globe} className="img-fluid" alt="" />
                  </div>
                  <p className="fw-600 fs-5 fst-normal font-inter template-heading-black mt-2">
                    International Environment
                  </p>
                  <p className="fs-14px fw-300 fst-normal font-inter text-blackish mt-2">
                    Working at deepline.ai. involves working with international
                    businesses, and organizations. This gives you the incredible
                    opportunity to learn about different cultures, ideas, and
                    forms of thinking.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Careers;
