import React, { useContext, useState } from "react";
import styles from "./navigation.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import Search from "./Search";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { Link } from "react-router-dom";
import ThemeSwitcher from "../buttons/ThemeSwitcher";
import { ThemeContext } from "../../context/ThemeContext";

export default function Navigation() {
  const [isDarkMode] = useContext(ThemeContext);
  const [open, setOpen] = useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const drawerList = (
    <Box
      sx={{
        width: 250,
        background: isDarkMode ? "black" : "white",
        height: "100%",
      }}
      role="presentation"
      onClick={toggleDrawer(false)}
    >
      <List className={styles.drawer}>
        <Link to="/">
          <ListItem disablePadding>
            <ListItemButton key={"key-home"}>
              <ListItemText primary="Home" />
            </ListItemButton>
          </ListItem>
        </Link>
        <Link to="/course">
          <ListItem disablePadding>
            <ListItemButton key={"key-course"}>
              <ListItemText primary="Opleiding" />
            </ListItemButton>
          </ListItem>
        </Link>
        <Link to="/program">
          <ListItem disablePadding>
            <ListItemButton key={"key-program"}>
              <ListItemText primary="Programma" />
            </ListItemButton>
          </ListItem>
        </Link>
        <Link to="/projects">
          <ListItem disablePadding>
            <ListItemButton key={"key-projects"}>
              <ListItemText primary="Projects" />
            </ListItemButton>
          </ListItem>
        </Link>
        <Link to="/blog">
          <ListItem disablePadding>
            <ListItemButton key={"key-blogs"}>
              <ListItemText primary="Blogs" />
            </ListItemButton>
          </ListItem>
        </Link>
        <Link to="/services">
          <ListItem disablePadding>
            <ListItemButton key={"key-services"}>
              <ListItemText primary="Services" />
            </ListItemButton>
          </ListItem>
        </Link>
        <Link to="/team">
          <ListItem disablePadding>
            <ListItemButton key={"key-team"}>
              <ListItemText primary="Team" />
            </ListItemButton>
          </ListItem>
        </Link>
      </List>
      <Divider />
    </Box>
  );
  return (
    <>
      <div className={styles.flex}>
        <div className={styles.background}></div>
        <Search />
        <Button onClick={toggleDrawer(true)}>
          <FontAwesomeIcon
            color={isDarkMode ? "white" : "black"}
            size="3x"
            icon={faBars}
            className={styles.bars}
          />
        </Button>
        <ThemeSwitcher />
      </div>
      <Drawer
        className="black"
        anchor="right"
        open={open}
        onClose={toggleDrawer(false)}
      >
        {drawerList}
      </Drawer>
    </>
  );
}
