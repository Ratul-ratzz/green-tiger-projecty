import React from "react";
import FooterLogo from "./logo.png";
import "./Footer.css";

function Footer() {
  return (
    <>
      <footer>
        <div className="footer_container container">
          <div className="footer_logo">
            <img src={FooterLogo} alt="" />
          </div>
          <div className="link_lists">
            <h3>Main Links</h3>
            <ul>
              <li>Order Tracking</li>
              <li>New Order</li>
              <li>Contact Us</li>
              <li>News & Blogs</li>
            </ul>
          </div>
          <div className="link_lists">
            <h3>Support</h3>
            <ul>
              <li>About Us</li>
              <li>Privacy Policy</li>
              <li>Terms & Conditions</li>
            </ul>
          </div>
          <div className="news_letter">
            <h3>Support</h3>
            <h3>Follow Us</h3>
            <div className="icon_container">
              <div className="icon">
                <i className="fa fa-facebook"></i>
              </div>
              <div className="icon">
                <i className="fa fa-twitter"></i>
              </div>
              <div className="icon">
                <i className="fa fa-instagram"></i>
              </div>
              <div className="icon">
                <i className="fa fa-youtube"></i>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
