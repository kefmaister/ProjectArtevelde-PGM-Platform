import React from "react";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

export default function ViewBtn({ text, link, border }) {
  return (
    <Button
      variant="contained"
      component={Link}
      to={link}
      sx={{
        backgroundColor: "var(--orange)",
        color: "var(--base)",
        fontWeight: "bold",
        fontFamily: "Montserrat, sans-serif",
        borderRadius: border,
        "&:hover": {
          backgroundColor: "var(--dark-orange)",
        },
      }}
    >
      {text}
    </Button>
  );
}
