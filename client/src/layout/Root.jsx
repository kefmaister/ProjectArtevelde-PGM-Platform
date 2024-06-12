import React, { useEffect, useRef } from "react";
import { Link, Outlet } from "react-router-dom";
import Navigation from "../components/nav/Navigation";
import Footer from "../components/footer/Footer";
import style from "./root.module.css";

export default function Root() {
  const starWrapperRef = useRef(null);

  useEffect(() => {
    const starCount = 25;
    const minDistance = 10;
    const positions = [];

    if (starWrapperRef.current) {
      for (let i = 0; i < starCount; i++) {
        let position;
        do {
          position = {
            top: Math.random() * 100,
            left: Math.random() * 100,
          };
        } while (
          positions.some(
            (pos) =>
              Math.hypot(pos.top - position.top, pos.left - position.left) <
              minDistance
          )
        );

        positions.push(position);

        const star = document.createElement("div");
        star.className = `${style.star}`;
        star.style.top = `${position.top}%`;
        star.style.left = `${position.left}%`;

        star.addEventListener("click", function () {
          this.style.opacity = 1;
          const sound = new Audio("/assets/audio/star.mp3");
          sound.play();
          setTimeout(() => {
            this.style.opacity = 0.2;
          }, 2000);
        });

        starWrapperRef.current.appendChild(star);
      }
    }
  }, []);

  return (
    <main className={style.starWrapper} ref={starWrapperRef}>
      <nav>
        <Link href="/">
          <img className="logo" src="/assets/img/logo_text.png" alt="home" />
        </Link>
        <Navigation />
      </nav>
      <Outlet />
      <Footer />
    </main>
  );
}
