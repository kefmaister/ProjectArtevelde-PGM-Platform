import { useQuery } from "@apollo/client";
import { Link, useParams } from "react-router-dom";
import { GET_SEARCH_DATA } from "../../graphql/queries";
import styles from "./results.module.css";

const SearchResults = () => {
  const { searchTerm } = useParams();
  const { loading, error, data } = useQuery(GET_SEARCH_DATA, {
    variables: { _search: searchTerm },
  });
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :{error.message}</p>;

  const searchResults = data;
  return (
    <div className={styles.container}>
      <h1>Search Results for: {searchTerm}</h1>
      <div>
        {Object.keys(searchResults).map((key) => {
          if (searchResults[key] && searchResults[key].length > 0) {
            return (
              <div key={key}>
                {key === "programs" || key === "teamMembers" ? (
                  <Link to={key === "programs" ? "/program" : "/team"}>
                    <h2>{key}</h2>
                  </Link>
                ) : (
                  <h2>{key}</h2>
                )}
                {searchResults[key].map((item, index) => (
                  <div key={index}>
                    <h3 className={styles.title}>
                      {item.firstname} {item.lastname}
                    </h3>
                    <Link to={`/blog/${item.slug}`}>
                      <h3 className={styles.title}>{item.name}</h3>
                    </Link>
                    <h3 className={styles.title}>{item.course}</h3>
                  </div>
                ))}
              </div>
            );
          }
          return null;
        })}
      </div>
    </div>
  );
};

export default SearchResults;
