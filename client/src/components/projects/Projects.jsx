import React from "react";
import { useQuery } from "@apollo/client";
import Carousel from "../carousel/Carousel";
import { GET_PROJECTS_DATA } from "../../graphql/queries";
import style from "./projects.module.css";
import ViewBtn from "../buttons/ViewBtn";

export default function Projects() {
  const { loading, error, data } = useQuery(GET_PROJECTS_DATA);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <div>
        <h1 className="header">Projects</h1>
      </div>
      <div className={style.container}>
        <div className={style.textContainer}>
          <h1>
            Projecten door <br /> studenten!
          </h1>

          <p className={style.content}>
            Hier zijn een aantal voorbeelden van de projecten <br /> die door
            student gemaakt werden.
          </p>
          <p className={style.content}>
            Bekijk meer<span className={style.bolder}> Projecten </span>op onze
            website!
          </p>
          <ViewBtn link={"/projects"} text={"View more"} />
        </div>
        <div>
          <Carousel projects={data.projects} />
        </div>
      </div>
    </div>
  );
}
