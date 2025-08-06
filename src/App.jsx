import { useState } from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import chhava from "./assets/chhaava.webp";

function App() {
  const [movieArray, setMovieArray] = useState([]);
  const getData = async (MovieName) => {
    let req = await fetch(
      `https://imdb.iamidiotareyoutoo.com/search?q=${MovieName}`
    );
    let res = await req.json();
    console.log(res.description);
    setMovieArray(res.description);
  };

  return (
    <>
      <div className="bg-[rgb(47,46,46)] min-h-screen">
        <nav className="flex justify-center">
          <Navbar getMovie={getData} />
        </nav>
        <main className="flex flex-wrap justify-evenly items-center">
          {movieArray.map((item) => {
            return (
              <div className="cards h-[450px] border-[2px] border-white w-[20%] rounded-[15px] m-[12px] overflow-hidden text-white text-center">
                <img
                  src={item["#IMG_POSTER"]}
                  alt={item["TITLE"]}
                  className="w-[100%] h-[75%] object-cover"
                />
                <p className="title p-1 m-1">{item["#TITLE"]}</p>
                <button className="border-2 p-1 m-1 rounded-[6px] cursor-pointer">
                  Download
                </button>
              </div>
            );
          })}
        </main>
      </div>
    </>
  );
}

export default App;
