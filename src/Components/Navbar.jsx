import { React, useState } from "react";
import { MdOutlineSearch } from "react-icons/md";

function Navbar({ getMovie }) {
  const [inputVal, setInputVal] = useState("");
  const handleChange = (e) => {
    setInputVal(e.target.value);
  };

  return (
    <>
      <nav className="flex flex-col justify-between my-3 bg-[rgba(30,30,30,0.95)] text-white md:w-[85%] w-[100%] h-[100px] md:h-[85px] rounded-2xl items-center md:flex-row">
        <h1 className="text-3xl font-extrabold mx-[20px]">Movies4U.com</h1>
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
            className="border p-1 md:w-[350px] w-auto rounded-[5px]"
            onChange={handleChange}
          />
          <button
            className="border font-extrabold md:p-[7px] p-0.5 mx-[20px] rounded-[5px]"
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
