import React from "react";
import style from "./jumbotron.module.css";
import ViewBtn from "../buttons/ViewBtn";
import Image from "./Image";

export default function Jumbotron() {
  return (
    <div className={style.container}>
      <div>
        <h1>
          Graduaat <br /> Programmeren!
        </h1>
        <p>
          <span className={style.highlight}>Arteveldehogeschool </span>
        </p>
        <p className={style.content}>
          Leer programmeren en maak websites en applicaties! <br /> Opleiding in
          <span className={style.bolder}> Gent </span>
          met verschillende richtingen:
        </p>
        <ul>
          <li>Webshop</li>
          <li>Cloud Application Development</li>
          <li>Workplace Learning</li>
        </ul>
        <p className={style.content}>
          Bekijk <span className={style.bolder}> studentwerk </span>op onze
          website!
        </p>
        <ViewBtn link={"/projects"} text={"View more"} />
      </div>
      <Image />
    </div>
  );
}
