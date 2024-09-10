import axios from "axios";
import { useState } from "react";

export const FormMateri = () => {
  const [judul, setJudul] = useState("");
  const [link, setLink] = useState("");
  const [desc, setDesc] = useState("");
  const [temaModule, setTemaModule] = useState("html");

  axios.defaults.withCredentials = true;

  const handlesubmit = async (e) => {
    e.preventDefault();

    let endpoint = "";
    if (temaModule === "html") {
      endpoint = "https://kidslearn-client.vercel.app//api/module/addModules";
    } else if (temaModule === "css") {
      endpoint =
        "https://kidslearn-client.vercel.app//api/moduledua/addModules";
    }
    try {
      await axios.post(endpoint, {
        judul,
        link,
        desc,
      });
      console.log("beres");
      alert("beres");
    } catch (error) {
      alert("gak bisa bodok");
    }
  };
  return (
    <>
      <h1 className="text-3xl font-bold mb-4">Masukan Materi Pembelajaran</h1>
      <form className="p-4 bg-primary shadow rounded" onSubmit={handlesubmit}>
        <div className="mb-4">
          <select
            name="select"
            id="temaModule"
            value={temaModule}
            onChange={(e) => setTemaModule(e.target.value)}
          >
            <option value="html">Html</option>
            <option value="css">CSS</option>
          </select>
          <label className="block text-base font-bold mb-2" htmlFor="judul">
            Title:
          </label>
          <input
            type="text"
            id="judul"
            name="judul"
            className="w-full p-2 border rounded"
            onChange={(e) => setJudul(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block text-base font-bold mb-2" htmlFor="link">
            Src:
          </label>
          <input
            type="text"
            id="link"
            name="link"
            className="w-full p-2 border rounded"
            onChange={(e) => setLink(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block text-base font-bold mb-2" htmlFor="desc">
            Desc:
          </label>
          <textarea
            id="desc"
            name="desc"
            className="w-full p-2 border rounded"
            type="text"
            onChange={(e) => setDesc(e.target.value)}
          />
        </div>
        <button
          type="submit"
          className="bg-white hover:bg-actionpink text-black font-bold p-2 rounded font-poppins"
        >
          Submit
        </button>
      </form>
    </>
  );
};
