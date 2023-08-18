import "./footer.css";

/* Icons */
import { FaChevronRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <div className="container my-5 footer">
        <div className="row">
          <div className="col-12 col-lg-3">
            <div className="logo-brand mb-4 text-center text-md-start">
              deepline<span className="text-warning-1">.</span>ai
            </div>
          </div>
          <div className="col-md-4 col-sm-4 col-lg-3">
            <h4 className="text-center text-md-start">
              Company
              <FaChevronRight className="ms-1" />
            </h4>
            <ul className="footer-content mt-3 text-center text-md-start">
              <li>
                <Link to="https://www.app.deepline.ai/signup">Create Account</Link>
              </li>
              <li>
                <Link to="/partners">Partners</Link>
              </li>
              <li>
                <Link to="/terms-and-conditions">Terms of service</Link>
              </li>
              <li>
                <Link to="/privacy-policy">Privacy Policy</Link>
              </li>
            </ul>
          </div>
          <div className="col-md-4 col-sm-4 col-lg-3">
            <h4 className=" text-center text-md-start">
              Resources
              <FaChevronRight className="ms-1 mb-1" />
            </h4>
            <ul className="footer-content mt-3 text-center text-md-start">
              <li>
                <Link to="/resources">Resources</Link>
              </li>
              <li>
                <Link to="/solutions">Solutions</Link>
              </li>
              <li>
                <Link to="/customers">Customers</Link>
              </li>
              <li>
                <Link to="/pricing">Pricing</Link>
              </li>
            </ul>
          </div>
          <div className="col-md-4 col-sm-4 col-lg-3">
            <h4 className="text-center text-md-start">
              Social Media
              <FaChevronRight className="ms-1 mb-1" />
            </h4>
            <ul className="footer-content mt-3 text-center text-md-start">
              <li>
                <Link to="https://www.linkedin.com/company/deepline-ai/">Linkedin</Link>
              </li>
              <li>
                <Link to="#">Facebook</Link>
              </li>
              <li>
                <Link to="https://www.youtube.com/@deepline4071">Youtube</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
