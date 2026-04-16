import React from "react";
import imgsection from "../assets/prefectsolution.png";
import hour from "../assets/Hour.png";
import customer from "../assets/customercomments.png";
import modernroom from "../assets/modernroom.png";
import "./PrefectSolution.css";

const PerfectSolution = () => {
  return (
    <>
      <div className="perfect-solution-container">
        <div className="perfect-solution-image">
          <img src={imgsection} alt="imageforsection" />
        </div>

        <div className="perfect-solution-content">
          <h2>الحل الأمثل لحجز لرحتلك</h2>
          <p>
            يتطلب تصميم موقع إلكتروني لحجز غرف الفنادق كل ساعة واجهة سهلة
            الاستخدام تحتوي على أقسام محددة تسهل عملية التصفح والحجز والوصول إلى
            المعلومات
          </p>

          <div className="comments">
            <div className="comment">
              <div className="card-icon">
                <img src={customer} alt="hour" />
              </div>
              <div className="comment-content">
                <div className="box"></div>
                <h3>1k+ تعليقات العملاء</h3>
                <p>عميل سعيد مسجل موثوق به</p>
              </div>
            </div>

            <div className="comment">
              <div className="card-icon">
                <img src={hour} alt="hour" />
              </div>
              <div className="comment-content">
                <div className="box"></div>
                <h3>الحجز المرن لكل ساعة</h3>
                <p>الحجز بالساعة ينفق شهريا</p>
              </div>
            </div>

            <div className="comment">
              <div className="card-icon">
                <img src={modernroom} alt="hour" />
              </div>
              <div className="comment-content">
                <div className="box"></div>
                <h3>مرافق الغرفة الحديثة</h3>
                <p>غرفة الفندق متاحة دائما كل ساعة</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PerfectSolution;
