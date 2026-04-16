import React from "react";
import "./FooterWeb.css";
import logo from "../assets/logo.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faPhoneFlip,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import {
  faSquareFacebook,
  faTwitter,
  faYoutube,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

const FooterWeb = () => {
  return (
    <>
      <footer className="footer-container">
        <div className="first-footer">
          <div className="rows">
            <div className="row-1">
              <div className="img-logo">
                <a href="/" title="وصلة">
                  <img src={logo} />
                </a>
              </div>
              <div className="txt-cont">
                <p>
                  في الشباسي للرحلات، نقدم مجموعة واسعة من الرحلات السياحية
                  المميزة لتلبية تطلعاتك وميزانيتك. مع سنوات من الخبرة في مجال
                  السياحة والسفر، نفخر بتقديم خدمة عملاء استثنائية، ونتأكد من أن
                  كل رحلة ننظمها تلبي أعلى معايير الجودة والراحة. سواء كنت تبحث
                  عن رحلة استرخاء، مغامرة، أو تجربة ثقافية، فإننا هنا لجعل رحلتك
                  تجربة لا تُنسى
                </p>
              </div>
            </div>

            <div className="quick_links">
              <ul>
                <h4>روابط سريعة</h4>
                <div className="list">
                  <li>
                    <a href="/" title="وصلة">
                      معلومات عنا
                    </a>
                  </li>
                  <li>
                    <a href="/" title="وصلة">
                      اتصال
                    </a>
                  </li>
                  <li>
                    <a href="/" title="وصلة">
                      التعليمات
                    </a>
                  </li>
                </div>
              </ul>
            </div>

            <div className="contact_us">
              <ul>
                <h4>اتصل بنا</h4>
                <li className="fontstyle">
                  <FontAwesomeIcon icon={faLocationDot} />
                  شها مركز المنصوره بجوار الكوبري
                </li>
                <li>
                  <FontAwesomeIcon icon={faPhoneFlip} />
                  <a href="tel:+20 10 23000520">+20 10 23000520</a>
                </li>
                <li>
                  <FontAwesomeIcon icon={faEnvelope} />
                  <a href="mailto:elshabasi@gmail.com">elshabasi@gmail.com</a>
                </li>
              </ul>
            </div>

            <div className="subescribewith_us">
              <h4>اشترك معنا</h4>
              <p>ابق على اطلاع معنا واحصل على العرض!</p>
              <form action="/">
                <div className="form-group">
                  <input
                    type="email"
                    placeholder="أدخل البريد الالكتروني هنا .."
                    required
                  />
                  <button type="submit">يشترك</button>
                </div>
              </form>
            </div>
          </div>
        </div>

        <div className="last-footer">
          <div className="social-media">
            <div className="icon">
              <a href="https://www.facebook.com/elshabasy.travel">
                <FontAwesomeIcon icon={faSquareFacebook} />
              </a>
            </div>

            <div className="icon">
              <a href="example.com">
                <FontAwesomeIcon icon={faTwitter} />
              </a>
            </div>

            <div className="icon">
              <a href="example.com">
                <FontAwesomeIcon icon={faYoutube} />
              </a>
            </div>

            <div className="icon">
              <a href="example.com">
                <FontAwesomeIcon icon={faInstagram} />
              </a>
            </div>
          </div>

          <div className="p-in_end">
            <p>حقوق النشر © 2025 الشباسي للرحلات. كل الحقوق محفوظة</p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default FooterWeb;
