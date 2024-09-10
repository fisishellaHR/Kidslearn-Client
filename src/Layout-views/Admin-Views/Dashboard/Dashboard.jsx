/* eslint-disable no-undef */
import { FeedBack } from "../FeedBack/FeedBack";
import { FormMateri } from "../FromMateri/FormMateri";
import ContentKidsLearn from "../../../../src/Layout-views/Admin-Views/KidsLearn/ContentKidsLearn";
import Header from "./Header";
import Sidebar from "./Sidebar";
import { useState } from "react";
import axios from "axios";
import NilaiPengguna from "../NilaiPengguna/NilaiPengguna";
import DataPengguna from "../DataPengguna/DataPengguna";
import ViewModule from "../ViewModule/ViewModule";
import QuizCreation from "../QuizCreate/QuizCreation";
import ViewQuiz from "../ViewQuiz/ViewQuiz";

export default function Dashboard() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activePage, setActivePage] = useState("KidsLearn");
  axios.defaults.withCredentials = true;

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const renderContent = () => {
    switch (activePage) {
      case "KidsLearn":
        return <ContentKidsLearn />;
      case "MateriPengguna":
        return <FormMateri />;
      case "NilaiPengguna":
        return <NilaiPengguna />;
      case "MasukanWebsite":
        return <FeedBack />;
      case "DataPengguna":
        return <DataPengguna />;
      case "ViewModule":
        return <ViewModule />;
      case "QuizCreate":
        return <QuizCreation />;
      case "ViewQuiz":
        return < ViewQuiz/>;
      default:
        return <div>Select a page</div>;
    }
  };

  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar
        setmenu={toggleMenu}
        menu={menuOpen}
        setActivePage={setActivePage}
      />
      <div className="flex flex-col flex-1">
        <Header setmenu={toggleMenu} />
        <main className="flex-1 p-6 bg-gray-100 overflow-auto">
          {renderContent()}
        </main>
      </div>
    </div>
  );
}
