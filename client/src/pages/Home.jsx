import React from "react";
import Jumbotron from "../components/jumbotron/Jumbotron";
import Projects from "../components/projects/Projects";
import Datas from "../components/blogs/DataViewer";
export default function Home() {
  return (
    <div className="background-top">
      <section>
        <Jumbotron />
      </section>
      <section>
        <Projects />
      </section>
      <section>
        <Datas />
      </section>
    </div>
  );
}
