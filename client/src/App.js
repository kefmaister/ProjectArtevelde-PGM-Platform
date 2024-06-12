import "./reset.css";
import "./App.css";

import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import { ROUTES } from "./routes/routes";
import {
  BlogPage,
  CoursePage,
  HomePage,
  ProgramPage,
  ProjectsPage,
  ServicesPage,
  TeamPage,
  DetailPage,
  SearchResults,
  NotFound,
} from "./pages";
import Root from "./layout/Root";
import { ThemeArea } from "./context/ThemeContext";
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />} errorElement={<NotFound />}>
      <Route path={ROUTES.home.path} element={<HomePage />} />,
      <Route path={ROUTES.team.path} element={<TeamPage />} />,
      <Route path={ROUTES.projects.path} element={<ProjectsPage />} />,
      <Route path={ROUTES.services.path} element={<ServicesPage />} />,
      <Route path={ROUTES.blog.path} element={<BlogPage />} />,
      <Route path={ROUTES.program.path} element={<ProgramPage />} />,
      <Route path={ROUTES.course.path} element={<CoursePage />} />,
      <Route path={ROUTES.searchResults.path} element={<SearchResults />} />,
      <Route
        path={ROUTES.projectDetail.path}
        element={<DetailPage type="project" />}
      />
      ,
      <Route
        path={ROUTES.BlogDetail.path}
        element={<DetailPage type="blog" />}
      />
      ,
      <Route
        path={ROUTES.serviceDetail.path}
        element={<DetailPage type="service" />}
      />
    </Route>
  )
);
function App() {
  return (
    <ThemeArea>
      <RouterProvider router={router} />
    </ThemeArea>
  );
}

export default App;
