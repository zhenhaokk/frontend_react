import React from "react";
import { images } from "../../constants";
import { AppWrap, MotionWrap } from "../../wrapper";
import "./Footer.scss";

const Footer = () => (
  <>
    <h2 className="head-text">Take a coffee &amp; chat with me</h2>
    <div className="app__footer-cards">
      <div className="app__footer-card">
        <img src={images.email} alt="Email" />
        <a href="mailto:zhenhao.d.pro@gmail.com" className="p-text">zhenhao.d.pro@gmail.com</a>
      </div>
      <div className="app__footer-card">
        <img src={images.mobile} alt="Phone" />
        <a href="tel:+61 (0)42065011" className="p-text">+61 (0)42065011</a>
      </div>
    </div>
    <div className="app__footer-form app__flex">
      <a className="bold-text" href="mailto:zhenhao.d.pro@gmail.com?subject=Website%20enquiry">Email Frank</a>
    </div>
  </>
);

export default AppWrap(MotionWrap(Footer, "app__footer"), "contact", "app__whitebg");
