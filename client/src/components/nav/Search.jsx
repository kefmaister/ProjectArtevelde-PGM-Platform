import { useQuery } from "@apollo/client";
import { GET_SEARCH_DATA } from "../../graphql/queries";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Autocomplete, TextField } from "@mui/material";
import style from "./search.module.css";
import { ThemeContext } from "../../context/ThemeContext";

const Search = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchInput, setSearchInput] = useState("");
  const { loading, error, data, refetch } = useQuery(GET_SEARCH_DATA, {
    variables: { _search: searchTerm },
    skip: true,
  });
  const navigate = useNavigate();

  useEffect(() => {
    if (searchTerm) {
      refetch({ _search: searchTerm });
    }
  }, [searchTerm]);

  const handleInputChange = (event) => {
    setSearchInput(event.target.value);
  };

  const handleKeyPress = (event) => {
    if (
      event.key === "Enter" &&
      typeof searchInput === "string" &&
      searchInput.trim() !== ""
    ) {
      setSearchTerm(searchInput);
      navigate(`/search/${searchInput.toLowerCase()}`);
    }
  };
  const [isDarkMode] = useContext(ThemeContext);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :{error.message}</p>;

  return (
    <div>
      <TextField
        className={`${isDarkMode ? style.search : ""}`}
        value={searchInput}
        onChange={handleInputChange}
        onKeyDown={handleKeyPress}
        placeholder="Search..."
      />
    </div>
  );
};

export default Search;
