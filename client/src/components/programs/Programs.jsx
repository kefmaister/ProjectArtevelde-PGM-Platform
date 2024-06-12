import { useQuery } from "@apollo/client";
import React, { useContext } from "react";
import { GET_ALL_PROGRAMS } from "../../graphql/queries";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import style from "./programs.module.css";
import { ThemeContext } from "../../context/ThemeContext";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Link from "@mui/material/Link";

export default function Programs() {
  const { loading, error, data } = useQuery(GET_ALL_PROGRAMS);

  const [isDarkMode] = useContext(ThemeContext);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  let programs = data.programs;
  console.log(data.programs);

  const programsYear1 = programs.filter((program) => program.year === 1);
  const programsYear2 = programs.filter((program) => program.year === 2);

  return (
    <div className={style.Container}>
      <Grid className={style.gridContainer} spacing={2}>
        <Grid item xs s m lg xl>
          <h1 className={style.title}>Year 1 Programs</h1>
          <Paper className={`${style.paper} ${isDarkMode ? style.grid : ""}`}>
            {programsYear1.map((program) => (
              <table className={style.table} key={`key-${program.course}`}>
                <tr>
                  <td>
                    <h3 className={style.course}>{program.course}</h3>
                  </td>
                  <td className={style.semester}>
                    Semester: {program.semester}
                  </td>
                  <td className={style.points}>Points: {program.points}</td>
                </tr>
                {program.projects.length > 0 && (
                  <tr>
                    <td colSpan={3}>
                      Projects:
                      <Select
                        className={`${style.selectContainer} ${
                          isDarkMode ? style.selectDark : ""
                        }`}
                        value={program.projects[0].slug}
                      >
                        {program.projects.map((project) => (
                          <MenuItem key={project.slug} value={project.slug}>
                            <Link
                              className={style.link}
                              href={`project/${project.slug}`}
                            >
                              {project.slug}
                            </Link>
                          </MenuItem>
                        ))}
                      </Select>
                    </td>
                  </tr>
                )}
              </table>
            ))}
          </Paper>
        </Grid>
        <Grid item xs s m lg xl>
          <h1 className={style.title}>Year 2 Programs</h1>
          <Paper className={`${style.paper} ${isDarkMode ? style.grid : ""}`}>
            {programsYear2.map((program) => (
              <table className={style.table} key={`key-${program.course}`}>
                <tr>
                  <td>
                    <h3 className={style.course}>{program.course}</h3>
                  </td>
                  <td className={style.semester}>
                    Semester: {program.semester}
                  </td>
                  <td className={style.points}>Points: {program.points}</td>
                </tr>
              </table>
            ))}
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}
