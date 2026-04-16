import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faCalendarDays,
  faClock,
  faMagnifyingGlass,
  faArrowDown,
} from "@fortawesome/free-solid-svg-icons";
import "./FirstSection.css";
import homeimg from "../assets/home screen.jpg";
import bg from "../assets/bg-shape-1.png";
import { useEffect, useState } from "react";

function updateDate(d) {
  const day = String(d.getDate()).padStart(2, "0");
  const month = String(d.getMonth() + 1).padStart(2, "0");
  const year = d.getFullYear();
  return `${month}/${day}/${year}`;
}

function updateTime(d) {
  let hours = d.getHours();
  const minutes = String(d.getMinutes()).padStart(2, "0");
  const ampm = hours >= 12 ? "PM" : "AM";

  hours = hours % 12;
  if (hours === 0) hours = 12;

  return `${ampm} ${String(hours).padStart(2, "0")}:${minutes}`;
}

const FirstSection = () => {
  const [now, setNow] = useState(new Date());

  useEffect(() => {
    const t = setInterval(() => {
      setNow(new Date());
    }, 1000);

    return () => clearInterval(t);
  }, []);
  return (
    <>
      <section>
        <div className="right">
          <div className="head">
            <h1>اكتشف حرية حجوزات الرحلات للاسترخاء</h1>
          </div>
          <div className="description">
            <p>
              عرض للرحلات الأكثر طلبًا مثل الرحلات العائلية، العروض الموسمية،
              والوجهات السياحية المميزة
            </p>
          </div>

          <div className="banner-filter-form mb-40">
            <div className="form-wrapper">
              <form action="#" method="get">
                <div className="grid">
                  <div className="item">
                    <div className="form-group">
                      <label htmlFor="address">أين?</label>
                      <div className="input">
                        <div className="icon">
                          <FontAwesomeIcon icon={faLocationDot} />
                        </div>
                        <input
                          type="text"
                          id="address"
                          name="address"
                          placeholder="أدخل العنوان"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="line"></div>

                  <div className="item">
                    <div className="form-group">
                      <label htmlFor="address">متى?</label>
                      <div className="input">
                        <div className="icon">
                          <FontAwesomeIcon icon={faCalendarDays} />
                        </div>
                        <div className="date">{updateDate(now)}</div>
                      </div>
                    </div>
                  </div>

                  <div className="line"></div>

                  <div className="item">
                    <div className="form-group">
                      <label htmlFor="address">وقت?</label>
                      <div className="input">
                        <div className="icon">
                          <FontAwesomeIcon icon={faClock} />
                        </div>
                        <div className="time">{updateTime(now)}</div>
                      </div>
                    </div>
                  </div>

                  <div className="lin"></div>

                  <div className="item text-md-end">
                    <button type="button" className="btn btn-primary radius-sm">
                      <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>

          <div className="scroll-down">
            <div className="scrolldown-icon">
              <a href="#">
                <FontAwesomeIcon className="scrollicon" icon={faArrowDown} />
              </a>
            </div>
            <h6>قم بالتمرير للأسفل</h6>
          </div>
        </div>

        <div className="left">
          <div className="img">
            <img src={homeimg} alt="homeimage" />
          </div>
        </div>

        <div className="bg">
          <img src={bg} alt="backgroundshape" />
        </div>
      </section>
    </>
  );
};

export default FirstSection;
