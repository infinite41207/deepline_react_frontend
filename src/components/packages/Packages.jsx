import "./packages.css";

/* Components */
import Packagecards from "./Packagecards";

/* Images */
import Pen from "../../assets/images/packages/pen.svg";
import Clock from "../../assets/images/packages/clock.svg";
import Cursor from "../../assets/images/packages/cursor.svg";
import { useState } from "react";

const Packages = () => {
  const [isMonthly, setIsMonthly] = useState(true);
  const handleChangeCurrency = () => {
    setIsMonthly(!isMonthly)
  };

  return (
    <div className="text-center packages-section">
      <div className="container mb-4">
        <h1 className="package-started">Ready to get started?</h1>
        <h5 className="package-lead my-5">
          Join our happy client list writing content with deepline.ai
        </h5>
        <div className="d-sm-flex justify-content-center gap-5">
          <div className="package-text text-dark-5 mb-4 mb-sm-0">
            <div className="my-3">
              <img src={Pen} alt="" />
            </div>
            End writer's block forever
          </div>
          <div className="package-text text-dark-5 mb-4 mb-sm-0">
            <div className="my-3">
              <img src={Clock} alt="" />
            </div>
            Publish content 10x faster
          </div>
          <div className="package-text text-dark-5">
            <div className="my-3">
              <img src={Cursor} alt="" />
            </div>
            Boost sales with better copy
          </div>
        </div>

        <div className="d-flex flex-column mt-5">
          <div className="package-highlighted-text">
            Billing: Save 17% with annual
          </div>
          <div className="package-switch-text d-flex justify-content-center my-2 py-1">
            <div>Monthly</div>
            <div className="mx-2">
              <label className="switch mt-1">
                <input type="checkbox" onChange={handleChangeCurrency} />
                <span className={`${!isMonthly ? 'pink' : ''} switch-slider round`}></span>
              </label>
            </div>
            <div>Annually</div>
          </div>
        </div>
      </div>

      <div className="package-card-section mb-5">
        <Packagecards isMonthly={isMonthly} />
      </div>
    </div>
  );
};

export default Packages;
