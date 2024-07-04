/* eslint-disable no-undef */
import { FeedBack } from "../FeedBack/FeedBack";
import { FormMateri } from "../FromMateri/FormMateri";
import ContentKidsLearn from "../KidsLearn/ContentKidsLearn";
import Header from "./Header";
import Sidebar from "./Sidebar";
import { useState } from "react";

export default function Dashboard() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activePage, setActivePage] = useState("KidsLearn");

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // Example feedback data
  const feedback = [
    { id: 1, user: "Hegi", masukan: "Bagus Banget kaka Websitenya" },
    {
      id: 2,
      user: "Irham",
      masukan:
        "Needs more content. Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, tenetur minus vero iure numquam doloremque sequi quam eveniet quas natus cumque itaque dicta voluptas, aut velit possimus quae non dolor!",
    },
    {
      id: 3,
      user: "Fanny",
      masukan: "sangat sangat bagus jadi ingin terus menggunakan",
    },
  ];

  const renderContent = () => {
    switch (activePage) {
      case "KidsLearn":
        return <ContentKidsLearn />;
      case "MateriPengguna":
        return <FormMateri />;
      case "NilaiPengguna":
        return <div>Content for Nilai Pengguna</div>;
      case "MasukanWebsite":
        return <FeedBack feedback={feedback} />;
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
