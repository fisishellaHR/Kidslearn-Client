import { BrowserRouter, Route, Routes } from "react-router-dom";
import AboutUs from "./Layout-views/App-Views/AboutUs/AboutUs.jsx";
import OurGoals from "./Layout-views/App-Views/OurGoals/OurGoals.jsx";
import Login from "./Auth-Views/Auth-User/Login.jsx";
import ResetPassword from "../src/Auth-Views/Auth-User/ResetPassword.jsx";
import LeaningMaterials from "./Layout-views/App-Views/LearningMaterials/LeaningMaterials.jsx";
import PageHTML from "./Layout-views/App-Views/PageHTML/PageHTML.jsx";
import PageCSS from "./Layout-views/App-Views/PageCSS/PageCSS.jsx";
import Sidebar from "./Layout-views/Admin-Views/Dashboard/Sidebar.jsx";
import Header from "./Layout-views/Admin-Views/Dashboard/Header.jsx";
import Dashboard from "./Layout-views/Admin-Views/Dashboard/Dashboard.jsx";
import UserPersonal from "./Layout-views/App-Views/UserPersonal/UserPersonal.jsx";
import QuestionOne from "./Layout-views/App-Views/QuizQuestion/QuestionOne.jsx";
import QuestionTwo from "./Layout-views/App-Views/QuizQuestion/QuestionTwo.jsx";
import HomePageAfter from "./Layout-views/App-Views/HomePageAfter/HomePageAfter.jsx";
import LoginAdmin from "./Auth-Views/Auth-Admin/LoginAdmin.jsx";
import AboutUsAfter from "./Layout-views/App-Views/AboutUsAfter/AboutUsAfter.jsx";
import OurGoalsAfter from "./Layout-views/App-Views/OurGoalsAfter/OurGoalsAfter.jsx";
import QuizAfter from "./Layout-views/App-Views/Quiz copy/Quiz.jsx";
import NavbarBefore from "./Components/layout-components/NavbarBefore.jsx";
import ForgotPassword from "./Auth-Views/Auth-User/ForgotPassword.jsx";
import Register from "./Auth-Views/Auth-User/Register.jsx";
import RegisterAdmin from "./Auth-Views/Auth-Admin/RegisterAdmin.jsx";
import ForgotPasswordAdmin from "./Auth-Views/Auth-Admin/ForgotPasswordAdmin.jsx";
import ResetPasswordAdmin from "./Auth-Views/Auth-Admin/ResetPasswordAdmin.jsx";
import LandingPage from "./Layout-views/App-Views/LandingPage/LandingPage.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Login Admin  */}
        <Route path="/loginadmin" element={<LoginAdmin />}></Route>
        <Route path="/registeradmin" element={<RegisterAdmin />}></Route>
        <Route
          path="/forgot-passwordadmin"
          element={<ForgotPasswordAdmin />}
        ></Route>
        <Route
          path="/reset-passwordadmin/:token"
          element={<ResetPasswordAdmin />}
        ></Route>
        {/* Tampilan Admin  */}
        <Route path="/sidebar" element={<Sidebar />}></Route>
        <Route path="/header" element={<Header />}></Route>
        <Route path="/dashboardadmin" element={<Dashboard />}></Route>
        {/* bisa di akses sebelum login */}
        <Route path="/" element={<LandingPage />}></Route>
        <Route path="/navbarbefore" element={<NavbarBefore />}></Route>
        <Route path="/aboutus" element={<AboutUs />}></Route>
        <Route path="/ourgoals" element={<OurGoals />}></Route>
        {/* setelah Login user  (preview) */}
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/forgotpassword" element={<ForgotPassword />}></Route>
        <Route
          path="/reset-password/:token"
          element={<ResetPassword />}
        ></Route>
        {/*  tidak bisa di akses sebelum login dengan akun yang benar*/}
        <Route path="/navbarafter" element={<NavbarBefore />}></Route>
        <Route path="/homepageafter" element={<HomePageAfter />}></Route>
        <Route path="/aboutusafter" element={<AboutUsAfter />}></Route>
        <Route path="/ourgoalsafter" element={<OurGoalsAfter />}></Route>
        <Route path="/quizafter" element={<QuizAfter />}></Route>
        <Route path="/quizsatu" element={<QuestionOne />}></Route>
        <Route path="/quizdua" element={<QuestionTwo />}></Route>
        <Route path="/materihtml" element={<PageHTML />}></Route>
        <Route path="/matericss" element={<PageCSS />}></Route>
        <Route
          path="/userpersonal/:username"
          element={<UserPersonal />}
        ></Route>
        <Route path="/questionone" element={<QuestionOne />}></Route>
        <Route path="/questiontwo" element={<QuestionTwo />}></Route>
        <Route path="/materi" element={<LeaningMaterials />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
