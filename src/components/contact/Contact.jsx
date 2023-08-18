import "./contact.css";

/* Images */
import CEO from "../../assets/images/contact/ceo.svg";
import Contactquote from "../../assets/images/contact/contact-quote.svg";

const Contact = () => {
  return (
    <div className="contact-section position-relative">
      <div className="container">
        <div className="row">
          <div className="col-lg-7 order-2 order-lg-1">
            <div className="contact-title">
              Discover how the power of AI can transform your business
              today.
            </div>
            <form
              action="#"
              className="mt-4 position-relative d-flex justify-content-lg-start justify-content-center col-lg-9"
            >
              <input
                type="email"
                className="form-control get-demo-input"
                required
                placeholder="email@company.com"
              />
              <button type="submit" className="btn">
                Get a Demo
              </button>
            </form>
          </div>

          <div className="col-lg-4 order-1 order-lg-2">
            {/* Ceo Card On Large Screen */}
            <div className="ceo-card d-sm-flex flex-lg-column gap-4 gap-lg-0">
              <div className="d-flex justify-content-between">
                <div>
                  <img className="ceo-image" src={CEO} alt="" />
                </div>
                <div>
                  <img src={Contactquote} alt="" />
                </div>
              </div>
              <div>
                <div className="ceo-thoughts ceo-thoughts-text1 mt-3">
                  Discover the future of business growth with deepline.ai, an
                  innovative solution designed to handle whatever challenges
                  come your way – now and in the years ahead!
                </div>
                <div className="mt-4">
                  <div className="ceo-name">Demetris Nikolaou</div>
                  <div className="ceo-designation">
                    Founder & CEO,{" "}
                    <a href="#" className="text-decoration-none">
                      Deep Line Ai
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
