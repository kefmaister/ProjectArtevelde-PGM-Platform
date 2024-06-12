import React, { useContext, useState } from "react";
import {
  Card,
  CardMedia,
  Button,
  Slide,
  Box,
  CardContent,
  Typography,
  CardActions,
} from "@mui/material";
import { Link } from "react-router-dom";
import styles from "./carousel.module.css";
import { ThemeContext } from "../../context/ThemeContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleLeft,
  faCircleRight,
} from "@fortawesome/free-regular-svg-icons";
import ViewBtn from "../buttons/ViewBtn";

export default function Carousel({ projects }) {
  const [isDarkMode] = useContext(ThemeContext);
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((oldSlide) => {
      let newSlide = oldSlide + 1;
      if (newSlide >= projects.slice(0, 3).length) {
        newSlide = 0;
      }
      return newSlide;
    });
  };

  const prevSlide = () => {
    setCurrentSlide((oldSlide) => {
      let newSlide = oldSlide - 1;
      if (newSlide < 0) {
        newSlide = projects.slice(0, 3).length - 1;
      }
      return newSlide;
    });
  };
  return (
    <Box>
      <Box display="flex" justifyContent="center" alignItems="center">
        <FontAwesomeIcon
          className={styles.cursorPointer}
          icon={faCircleLeft}
          color="var(--orange)"
          onClick={prevSlide}
          size="2x"
        />

        <div className={styles.hiddenOverflow}>
          <div className={styles.flex}>
            {projects.slice(0, 3).map((project, index) => (
              <Slide
                direction="left"
                in={currentSlide === index}
                mountOnEnter
                unmountOnExit
              >
                <Card
                  className={isDarkMode ? styles.dark : ""}
                  key={`project-${index}`}
                >
                  <CardMedia
                    component="img"
                    className={styles.cardImage}
                    image={project.image.url}
                  />
                  <CardContent>
                    <Typography variant="h5" component="div">
                      {project.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {project.description}
                    </Typography>
                  </CardContent>
                  <CardContent className={styles.bottomContainer}>
                    <Box>
                      <Typography variant="subtitle1" color="text.secondary">
                        Created by: {project.creator}
                      </Typography>
                      <Typography variant="subtitle2" color="text.secondary">
                        Tags:{" "}
                        {project.program.course ? project.program.course : ""}
                      </Typography>
                    </Box>
                    <CardActions>
                      <ViewBtn
                        text={"lees meer"}
                        link={`/project/${project.slug}`}
                        border={"20px"}
                      />
                    </CardActions>
                  </CardContent>
                </Card>
              </Slide>
            ))}
          </div>
        </div>
        <FontAwesomeIcon
          className={styles.cursorPointer}
          icon={faCircleRight}
          color="var(--orange)"
          onClick={nextSlide}
          size="2x"
        />
      </Box>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        flexDirection="row"
      >
        {projects.slice(0, 3).map((_, index) => (
          <Box
            key={index}
            onClick={() => setCurrentSlide(index)}
            sx={{
              width: 10,
              height: 10,
              borderRadius: "50%",
              backgroundColor: currentSlide === index ? "orange" : "grey",
              margin: "0 5px",
              cursor: "pointer",
            }}
          />
        ))}
      </Box>
    </Box>
  );
}
