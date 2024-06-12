import React from "react";
import Button from "../components/buttons/ViewBtn";

export default function NotFound() {
  return (
    <section className="notFound-container">
      <Button text={"Go back home"} link="/"></Button>
      <img className="notFound" src="/assets/error.gif" alt="" />
    </section>
  );
}
