import React from 'react'
import './footer.css'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <h1 className="footer__title">Kaung Zan Thaw</h1>

        <ul className="footer__list">
          <li>
            <a href="#about" className="footer__link">
              About
            </a>
          </li>

          <li>
            <a href="#portfolio" className="footer__link">
              Projects
            </a>
          </li>

          <li>
            <a href="#skills" className="footer__link">
              Skills
            </a>
          </li>
        </ul>

        <div className="footer__social">
          <a
            href="https://www.facebook.com/profile.php?id=100068118046665"
            className="home__social-icon"
            target="_blank"
          >
            <i class="bx bxl-facebook"></i>
          </a>
          <a
            href="https://www.instagram.com/hosh1d_echo"
            className="home__social-icon"
            target="_blank"
          >
            <i class="bx bxl-instagram"></i>
          </a>
          <a
            href="https://x.com/KaungZanThaw2"
            className="home__social-icon"
            target="_blank"
          >
            <i class="bx bxl-twitter"></i>
          </a>
        </div>
        <span className="footer__copy">
          © 2024 Kaung Zan Thaw. All rights reserved.
        </span>
      </div>
    </footer>
  );
}

export default Footer