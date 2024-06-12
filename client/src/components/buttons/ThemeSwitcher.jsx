import React, { useContext, useEffect } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import styles from "./themeSwitcher.module.css";

export default function ThemeSwitcher() {
  const [isDarkMode, setIsDarkMode] = useContext(ThemeContext);
  useEffect(() => {
    isDarkMode
      ? document.body.classList.add("dark")
      : document.body.classList.remove("dark");
  }, [isDarkMode]);
  const handleClick = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={styles.buttonContainer}>
      <button className={styles.button} onClick={handleClick}>
        {isDarkMode ? (
          <Brightness4Icon fontSize="large" className={styles.darkModeIcon}/>
        ) : (
          <Brightness7Icon fontSize="large" />
        )}
      </button>
    </div>
  );
}
