import "./services.css";

/* Images */
import ServiceImage1 from "../../assets/images/services/service1.svg";
import ServiceImage2 from "../../assets/images/services/service2.svg";
import ServiceImage3 from "../../assets/images/services/service3.svg";
import ServiceImage4 from "../../assets/images/services/service4.svg";
import ServiceImage5 from "../../assets/images/services/service5.svg";
import ServiceImage6 from "../../assets/images/services/service6.svg";

const Services = () => {
  return (
    <div className="services-section">
      <div className="container">
        <div className="row mx-0">
          <div className="col-12 col-md-6 col-lg-4 text-start mb-5 p-3 service-card">
            <div className="mb-4">
              <img src={ServiceImage1} alt="" />
            </div>
            <h5 className="service-title mb-3">Self-Learning AI</h5>
            <div className="service-description">
              Our AI has the ability to tailor its services to meet your
              individual needs and objectives. Providing self-learning
              capabilities.
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-4 text-start mb-5 p-3 service-card">
            <div className="mb-4">
              <img src={ServiceImage2} alt="" />
            </div>
            <h5 className="service-title mb-3">Anti Fraud</h5>
            <div className="service-description">
              Our fraud detection system is continually evolving and detects a
              wide range of ad fraud ensuring clean and high-quality clicks.
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-4 text-start mb-5 p-3 service-card">
            <div className="mb-4">
              <img src={ServiceImage3} alt="" />
            </div>
            <h5 className="service-title mb-3">Precise Targeting</h5>
            <div className="service-description">
              With our precise targeting options we offer tailored traffic to
              match the interests of your business.
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-4 text-start mb-5 p-3 service-card">
            <div className="mb-4">
              <img src={ServiceImage4} alt="" />
            </div>
            <h5 className="service-title mb-3">Save & Trackable</h5>
            <div className="service-description">
              Our user-friendly dashboard makes tracking and saving your
              generated content simple and straightforward.
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-4 text-start mb-5 p-3 service-card">
            <div className="mb-4">
              <img src={ServiceImage5} alt="" />
            </div>
            <h5 className="service-title mb-3">24/7 Support</h5>
            <div className="service-description">
              We are happy to help you with your needs. Our support team is
              always available to assist you with all your questions and
              inquiries.
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-4 text-start mb-5 p-3 service-card">
            <div className="mb-4">
              <img src={ServiceImage6} alt="" />
            </div>
            <h5 className="service-title mb-3">Lightning Fast Results</h5>
            <div className="service-description">
              With a few clicks you can create your campaign and see the first
              results in a short time after your campaign has been approved.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
