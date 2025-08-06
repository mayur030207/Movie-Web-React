import { React, useState } from "react";
import { MdOutlineSearch } from "react-icons/md";

function Navbar({ getMovie }) {
  const [inputVal, setInputVal] = useState("");
  const handleChange = (e) => {
    setInputVal(e.target.value);
  };

  return (
    <>
      <nav className="flex justify-between my-3 bg-[rgba(30,30,30,0.95)] text-white w-[85%] h-[85px] rounded-2xl items-center">
        <h1 className="text-3xl font-extrabold mx-[20px]">Movies.com</h1>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            getMovie(inputVal);
          }}
        >
          <input
            type="text"
            value={inputVal}
            placeholder="Enter Movie"
            className="border p-1 w-[350px] rounded-[5px]"
            onChange={handleChange}
          />
          <button
            className="border font-extrabold p-[7px] mx-[20px] rounded-[5px]"
            type="submit"
          >
            <MdOutlineSearch />
          </button>
        </form>
      </nav>
    </>
  );
}

export default Navbar;
