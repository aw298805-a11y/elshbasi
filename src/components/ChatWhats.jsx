import React from "react";
import "./ChatWhats.css";
import icon from "../assets/whatsapp.svg";

const ChatWhats = () => {
  return (
    <>
      <div className="whatsapp">
        <div className="chat-icon">
          <a target="_blank" href="https://wa.me/201023000520">
            <img src={icon} />
          </a>
        </div>
      </div>
    </>
  );
};

export default ChatWhats;
