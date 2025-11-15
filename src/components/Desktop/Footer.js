// src/components/Footer.js
import React from "react";
import "./Footer.css"; // if you want to style separately

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <h2 className="footer-logo">Officespaceinterior.in</h2>
        <p className="footer-text">
          Transforming your workspace into a modern, productive, and aesthetic environment.
        </p>
        <p className="footer-contact">
          📞 Contact: <a href="tel:+919591977398">9591977398</a>
          <br />
          🌐 Website: <a href="https://officespaceinterior.in">officespaceinterior.in</a>
        </p>
        48/1, BILESHIVALE VILLAGE, KOTHANUR POST 
        BENGALURU, KARNATAKA, 560077
        <p className="footer-bottom">
          © 2025 Officespaceinterior.in — All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
