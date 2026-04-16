import React from "react";
import TopNav from "./TopNav";
import PerfectSolution from "../components/PerfectSolution";
import ChatWhats from "../components/ChatWhats";
import FooterWeb from "../components/FooterWeb";
import "./breadcrumb.css";
import imageinfo from "../assets/aboutpage.png";
import ToTopButton from "../components/ScrollDown";

const AboutUs = () => {
  return (
    <>
      <TopNav />
      <ChatWhats />
      <div className="breadcrumb-area">
        <div className="breadcrumb-bg">
          <div className="opcity"></div>
          <div className="contact">
            <h2>معلومات عنا</h2>
            <h5>
              <a href="/"> بيت </a>/ معلومات عنا
            </h5>
          </div>
        </div>
      </div>
      <div className="img_sec">
        <img src={imageinfo} alt="..." />
      </div>
      <PerfectSolution />
      <ToTopButton/>
      <FooterWeb />
    </>
  );
};

export default AboutUs;
