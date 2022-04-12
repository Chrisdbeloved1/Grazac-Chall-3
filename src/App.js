import { Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing/landing";
import Login from "./pages/Login/login";
import MainLayout from "./layout/MainLayout/mainLayout";
import AllCourses from "./pages/AllCourses/allCourses";
import SingleCoursePage from "./pages/SingleCoursePage/singleCoursePage";
import Preview from "./pages/Preview/preview";
import Allstudent from "./pages/Allstudent/students";

const App = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <MainLayout>
            <Landing />
          </MainLayout>
        }
      />
      <Route
        path="/all-courses"
        element={
          <MainLayout>
            <AllCourses />
          </MainLayout>
        }
      />

      <Route
        path="/single-course-page"
        element={
          <MainLayout>
            <SingleCoursePage />
          </MainLayout>
        }
      />

      <Route
        path="/preview"
        element={
          <MainLayout>
            <Preview />
          </MainLayout>
        }
      />

      <Route
        path="/Students"
        element={
          <MainLayout>
            <Allstudent />
          </MainLayout>
        }
      />

      <Route path="/login" element={<Login />} />
    </Routes>
  );
};

export default App;
