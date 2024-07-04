import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Navbar from "./Components/layout-components/NavbarAfter.jsx";
import Footer from "./Components/layout-components/Footer.jsx";
import AboutUs from "./Layout-views/App-Views/AboutUs/AboutUs.jsx";
import OurGoals from "./Layout-views/App-Views/OurGoals/OurGoals.jsx";
import Quiz from "./Layout-views/App-Views/Quiz/Quiz.jsx";
import Login from "./Auth-Views/Auth-User/Login.jsx";
import Register from "./Auth-Views/Auth-User/Register.jsx";
import ResetPassword from "./Auth-Views/Auth-User/ResetPassword.jsx";
import LeaningMaterials from "./Layout-views/App-Views/LearningMaterials/LeaningMaterials.jsx";
import PageHTML from "./Layout-views/App-Views/PageHTML/PageHTML.jsx";
import PageCSS from "./Layout-views/App-Views/PageCSS/PageCSS.jsx";
import Sidebar from "./Layout-views/Admin-Views/Dashboard/Sidebar.jsx";
import Header from "./Layout-views/Admin-Views/Dashboard/Header.jsx";
import Dashboard from "./Layout-views/Admin-Views/Dashboard/Dashboard.jsx";
import UserPersonal from "./Layout-views/App-Views/UserPersonal/UserPersonal.jsx";
import QuestionOne from "./Layout-views/App-Views/QuizQuestion/QuestionOne.jsx";
import QuestionTwo from "./Layout-views/App-Views/QuizQuestion/QuestionTwo.jsx";
import HomePageBefore from "./Layout-views/App-Views/HomePage/HomePageBefore.jsx";
import HomePageAfter from "./Layout-views/App-Views/HomePageAfter/HomePageAfter.jsx";
import LoginAdmin from "./Auth-Views/Auth-Admin/LoginAdmin.jsx";
import AboutUsAfter from "./Layout-views/App-Views/AboutUsAfter/AboutUsAfter.jsx";
import OurGoalsAfter from "./Layout-views/App-Views/OurGoalsAfter/OurGoalsAfter.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/navbar",
    element: <Navbar />,
  },
  {
    path: "/footer",
    element: <Footer />,
  },
  {
    path: "/footer",
    element: <Footer />,
  },
  {
    path: "/homepageafter",
    element: <HomePageAfter />,
  },
  {
    path: "/homepagebefore",
    element: <HomePageBefore />,
  },
  {
    path: "/aboutuss",
    element: <AboutUs />,
  },
  {
    path: "/ourgoals",
    element: <OurGoals />,
  },
  {
    path: "/aboutussafter",
    element: <AboutUsAfter />,
  },
  {
    path: "/ourgoalsafter",
    element: <OurGoalsAfter />,
  },
  {
    path: "/quiz",
    element: <Quiz />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/resetpass",
    element: <ResetPassword />,
  },
  {
    path: "/materi",
    element: <LeaningMaterials />,
  },
  {
    path: "/materihtml",
    element: <PageHTML />,
  },
  {
    path: "/matericss",
    element: <PageCSS />,
  },
  {
    path: "/sidebar",
    element: <Sidebar />,
  },
  {
    path: "/header",
    element: <Header />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
  {
    path: "/login/admin",
    element: <LoginAdmin />,
  },
  {
    path: "/personal",
    element: <UserPersonal />,
  },
  {
    path: "/quissatu",
    element: <QuestionOne />,
  },
  {
    path: "/quisdua",
    element: <QuestionTwo />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
  </React.StrictMode>
);
