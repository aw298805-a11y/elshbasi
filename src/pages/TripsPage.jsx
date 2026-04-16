import React from "react";
import TopNav from "./TopNav";
import "./breadcrumb.css";
import "../pages/TripsPage.css";
import FooterWeb from "../components/FooterWeb";
import ChatWhats from "../components/ChatWhats";
import ToTopButton from "../components/ScrollDown";

const TripsPage = () => {
  return (
    <>
      <TopNav />
      <div className="breadcrumb-area">
        <div className="breadcrumb-bg">
          <div className="opcity"></div>
          <div className="contact">
            <h5>
              <a href="/"> بيت </a>
            </h5>
          </div>
        </div>
      </div>

      <main>
        <div className="scetion-overflow">
          <div className="categories-section">
            <div className="categories">
              <div className="txt_content">
                <h4>فئات</h4>
              </div>
              <div className="check">
                <input type="radio" id="all" value="الجميع" name="categorie" />
                <label htmlFor="all">الجميع</label>
              </div>

              <div className="check">
                <input
                  type="radio"
                  id="trip"
                  value="رحلات فاخرة"
                  name="categorie"
                />
                <label htmlFor="trip">رحلات فاخره</label>
              </div>

              <div className="check">
                <input
                  type="radio"
                  id="job-trip"
                  value="رحلات الأعمال"
                  name="categorie"
                />
                <label htmlFor="job-trip">رحلات الأعمال</label>
              </div>

              <div className="check">
                <input
                  type="radio"
                  id="family-trip"
                  value="رحلات عائلية"
                  name="categorie"
                />
                <label htmlFor="family-trip">رحلات عائلية</label>
              </div>

              <div className="check">
                <input
                  type="radio"
                  id="Occasion-Trips"
                  value="رحلات المناسبات"
                  name="categorie"
                />
                <label htmlFor="Occasion-Trips">رحلات المناسبات</label>
              </div>
            </div>
          </div>
        </div>
      </main>

      <ChatWhats />
      <ToTopButton />
      <FooterWeb />
    </>
  );
};

export default TripsPage;
