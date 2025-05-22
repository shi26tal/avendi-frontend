import React from "react";
import "../ComponentStyle/Footer.css";

export const Footer = () => {
  return (
    <div className="footer">
      <div class="footer-left">
        <div class="logo">
          <img src="/logo.svg" alt="logo" />
        </div>
        <p>Copyright © 2022 Avendi Pte. Ltd. All rights reserved</p>
      </div>
      <div class="footer-right">
        <a href="#">LinkedIn</a>
        <a href="#">Terms & Conditions</a>
        <a href="#">Privacy Policy</a>
      </div>
    </div>
  );
};
