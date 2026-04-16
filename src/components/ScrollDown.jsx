import { useState, useEffect } from "react";
import "./ScrollDown.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleUp } from "@fortawesome/free-solid-svg-icons";

export default function ToTopButton() {
  const [showBtn, setShowBtn] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (document.documentElement.scrollTop > 100) {
        setShowBtn(true);
      } else {
        setShowBtn(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {showBtn && (
        <button className="scrollup active" onClick={scrollToTop}>
          <FontAwesomeIcon icon={faAngleUp} />
        </button>
      )}
    </>
  );
}
