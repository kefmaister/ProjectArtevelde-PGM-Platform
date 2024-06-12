import React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { GET_PROJECT_DETAIL, GET_BLOG_DETAIL, GET_SERVICE_DETAIL } from "../graphql/queries";
import Parse from "html-react-parser";
import style from "./css/detail.module.css";

export default function DetailPage({ type }) {
  const { slug } = useParams();
  let query;
  if (type === "project") {
    query = GET_PROJECT_DETAIL;
  } else if (type === "blog") {
    query = GET_BLOG_DETAIL;
  } else if (type === "service") {
    query = GET_SERVICE_DETAIL;
  }
  const { loading, error, data } = useQuery(query, {
    variables: { slug },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const detail = data[type];

  return <div className={style.container}>{Parse(detail.content.html)}</div>;
}
