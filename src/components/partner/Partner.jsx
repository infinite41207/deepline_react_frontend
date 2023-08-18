import { Link } from "react-router-dom";
import Arrow from "../../assets/images/partners/arrow.svg";
import "./Partner.scss";

export default function Partner(props) {
  return (
    <div className="partner d-flex flex-column justify-content-center">
      <div className="text-center">
        <img src={props.src} alt="partner" />
        <Link to="#" className="d-block">
          <img src={Arrow} alt="arrow" className="arrow" />
        </Link>
      </div>
    </div>
  );
}
