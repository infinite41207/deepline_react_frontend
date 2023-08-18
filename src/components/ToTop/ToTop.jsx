import { useEffect, useState, useRef } from "react";

import Arrow from "../../assets/images/to-top/top.svg";

import "./ToTop.scss";

export default function ToTop() {
  const [showTopBtn, setShowTopBtn] = useState(false);
  const toTopBtnRef = useRef(null);

  const handleScroll = () => {
    if (window.scrollY > 700) {
      setShowTopBtn(true);
    } else {
      let timer;
      if (!toTopBtnRef.current) return;
      toTopBtnRef.current.style.animationName = "showOut";
      clearTimeout(timer);
      timer = setTimeout(() => {
        setShowTopBtn(false);
      }, 200);
    }
  };

  const toTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {showTopBtn && (
        <button
          onClick={toTop}
          ref={toTopBtnRef}
          className="to-top d-flex align-items-center justify-content-center"
        >
          <img src={Arrow} alt="Up" />
        </button>
      )}
    </>
  );
}
