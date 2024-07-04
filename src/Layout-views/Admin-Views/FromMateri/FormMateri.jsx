export const FormMateri = () => {
  return (
    <>
      <h1 className="text-3xl font-bold mb-4">Masukan Materi Pembelajaran</h1>
      <form className="p-4 bg-primary shadow rounded">
        <div className="mb-4">
          <label className="block text-base font-bold mb-2" htmlFor="title">
            Title:
          </label>
          <input type="text" id="title" className="w-full p-2 border rounded" />
        </div>
        <div className="mb-4">
          <label className="block text-base font-bold mb-2" htmlFor="src">
            Src:
          </label>
          <input type="text" id="src" className="w-full p-2 border rounded" />
        </div>
        <div className="mb-4">
          <label className="block text-base font-bold mb-2" htmlFor="desc">
            Desc:
          </label>
          <textarea id="desc" className="w-full p-2 border rounded" />
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
