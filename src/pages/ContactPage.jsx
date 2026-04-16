import React from "react";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import TopNav from "./TopNav";
import ChatWhats from "../components/ChatWhats";
import FooterWeb from "../components/FooterWeb";
import "./breadcrumb.css";
import ToTopButton from "../components/ScrollDown";

const ContactPage = () => {
  return (
    <>
      <TopNav />
      <div className="breadcrumb-area">
        <div className="breadcrumb-bg">
          <div className="opcity"></div>
          <div className="contact">
            <h2>اتصال</h2>
            <h5>
              <a href="/"> بيت </a>/ اتصال
            </h5>
          </div>
        </div>
      </div>
      <ChatWhats />
      <ToTopButton />
      <FooterWeb />
    </>
  );
};

export default ContactPage;
