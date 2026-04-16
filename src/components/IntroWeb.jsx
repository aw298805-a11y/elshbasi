import React from "react";
import "./IntroWeb.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser,faEnvelope } from "@fortawesome/free-solid-svg-icons";

const IntroWeb = () => {
  return (
    <>
      <div className="intro-web">
        <div className="e-mail">
          <a href="mailto:elshabasi@gmail.com">
           <FontAwesomeIcon className="icon" icon={faEnvelope} />elshabasi@gmail.com
            </a>
        </div>
        <div className="line"></div>
        <div className="telephone">
          <a href="tel:20 10 23000520">
            <FontAwesomeIcon className="icon" icon={faUser} />+20 10 23000520
            </a>
        </div>
      </div>
    </>
  );
};

export default IntroWeb;
