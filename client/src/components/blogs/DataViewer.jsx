import React, { useContext, useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import {
  Box,
  Button,
  CardActionArea,
  CardActions,
  MenuItem,
  Select,
} from "@mui/material";
import { GET_ALL_BLOGS, GET_PROJECTS_DATA } from "../../graphql/queries";
import { useQuery } from "@apollo/client";
import { Link, useLocation } from "react-router-dom";
import style from "./dataViewer.module.css";
import { ThemeContext } from "../../context/ThemeContext";
import ViewBtn from "../buttons/ViewBtn";

export default function Blogs() {
  const [isDarkMode] = useContext(ThemeContext);
  const [selectedFilter, setSelectedFilter] = useState("");
  const {
    loading: blogsLoading,
    error: blogsError,
    data: blogsData,
  } = useQuery(GET_ALL_BLOGS);
  const {
    loading: projectsLoading,
    error: projectsError,
    data: projectsData,
  } = useQuery(GET_PROJECTS_DATA);
  const location = useLocation();

  if (blogsLoading || projectsLoading) return <p>Loading...</p>;
  if (blogsError || projectsError)
    return <p>Error :{blogsError.message || projectsError.message}</p>;
  let datas;
  let slug;
  let title;
  let filters;

  if (location.pathname === "/") {
    datas = blogsData.blogs.slice(0, 3);
    slug = "/blog";
    title = "Blogs";
  } else if (location.pathname === "/blog") {
    datas = blogsData.blogs;
    slug = "/blog";
    title = "Blogs";
    filters = [...new Set(datas.map((data) => data.tags.name))];
  } else if (location.pathname === "/projects") {
    datas = projectsData.projects;
    slug = "/project";
    title = "Projects";
    filters = [...new Set(datas.map((data) => data.program.course))];
  }
  console.log(datas);
  if (selectedFilter) {
    if (location.pathname === "/projects") {
      datas = datas.filter((data) => data.program.course === selectedFilter);
    } else if (location.pathname === "/blog") {
      datas = datas.filter((data) => data.tags.name === selectedFilter);
    }
  }
  return (
    <div>
      <div>
        <h1 className="header">{title}</h1>
        <div className={style.headerContainer}>
          {location.pathname !== "/" && <h2>Filter by:</h2>}

          {filters && (
            <Select
              className={`${style.select} ${
                isDarkMode ? style.selectDark : ""
              }`}
              value={selectedFilter}
              onChange={(e) => setSelectedFilter(e.target.value)}
              displayEmpty
            >
              <MenuItem value="">
                <em>All</em>
              </MenuItem>
              {filters.map((filter) => (
                <MenuItem value={filter}>{filter}</MenuItem>
              ))}
            </Select>
          )}
        </div>
      </div>
      <div className="data-container">
        {datas?.map((data) => (
          <Card
            className={`${style.cardWidth} ${isDarkMode ? style.dark : ""}`}
            sx={{ maxWidth: 345 }}
            key={data.id}
          >
            <CardActionArea>
              <Link className={style.link} to={`${slug}/${data.slug}`}>
                <CardMedia
                  component="img"
                  height="140"
                  image={data.image.url}
                  alt={data.name}
                />
                <CardContent className={style.contentContainer}>
                  <Typography gutterBottom variant="h5" component="div">
                    {data.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {data.description}
                  </Typography>
                </CardContent>
              </Link>
            </CardActionArea>
            <Box className={style.viewBtn}>
              <CardActions>
                <ViewBtn
                  text={"Lees meer"}
                  link={`${slug}/${data.slug}`}
                  border={"10px"}
                />
              </CardActions>
            </Box>
          </Card>
        ))}
      </div>
    </div>
  );
}
