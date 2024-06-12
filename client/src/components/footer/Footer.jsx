import React from "react";
import style from "./footer.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faXTwitter,
  faLinkedin,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className={style.footer}>
      <div className={style.background}></div>
      <img className="footerLogo" src="/assets/img/full_logo.png" alt="" />
      <div className={style.contactOptions}>
        <h2>Contact</h2>
        <address>
          <p>Arteveldehogeschool Gent</p>
          <p>Campus Leeuwstraat</p>
          <p>Leeuwstraat 1, 9000 Gent</p>
        </address>
        <p>+32 9 234 72 00</p>
        <p>info.pgm@arteveldehs.be</p>
      </div>
      <div className={style.menuOptions}>
        <h2>Menu</h2>
        <div className={style.menuContainer}>
          <Link to="/course">Opleiding</Link>
          <Link to="/program">Programma</Link>
          <Link to="/projects">Portfolio</Link>
          <Link to="/blog">Blog</Link>
          <Link to="/services">Services</Link>
          <Link to="/team">Team</Link>
        </div>
      </div>
      <div className={style.socialContainer}>
        <h2>Join Us!</h2>
        <div className={style.socialOptions}>
          <a
            href="https://www.facebook.com/arteveldehogeschool"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon
              className={style.socialIcon}
              icon={faFacebook}
              size="3x"
              color="white"
            />
          </a>
          <a
            href="https://www.instagram.com/arteveldehogeschool/"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon
              className={style.socialIcon}
              icon={faInstagram}
              size="3x"
              color="white"
            />
          </a>
          <a
            href="https://twitter.com/ArteveldehsGent"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon
              className={style.socialIcon}
              icon={faXTwitter}
              size="3x"
              color="white"
            />
          </a>
          <a
            href="https://www.linkedin.com/school/arteveldehogeschool/"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon
              className={style.socialIcon}
              icon={faLinkedin}
              size="3x"
              color="white"
            />
          </a>
          <a
            href="https://www.youtube.com/user/arteveldehogeschool"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon
              className={style.socialIcon}
              icon={faYoutube}
              size="3x"
              color="white"
            />
          </a>
        </div>
      </div>
    </footer>
  );
}
