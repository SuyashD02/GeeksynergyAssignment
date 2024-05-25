import React, { useState, useEffect } from "react";
import Navbar from "../../Components/NavBar";
import Classes from "./Home.module.css";

function Home() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [selectedLanguage, setSelectedLanguage] = useState("kannada");
  const [searchQuery, setSearchQuery] = useState("");
  const [sortOrder, setSortOrder] = useState("highest");
  const languages = ["Kannada","Marathi", "Hindi","Telugu","English","Tamil"];
  const sortOptions = [
    { value: "highest", label: "Highest Voting" },
    { value: "lowest", label: "Lowest Voting" },
  ];

  const fetchMovies = async () => {
    setLoading(true);
    try {
      const response = await fetch("https://hoblist.com/api/movieList", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          category: "movies",
          language: selectedLanguage,
          genre: "all",
          sort: "voting",
        }),
      });
      if (response.ok) {
        const data = await response.json();
        setMovies(data.result);
      } else {
        setError("Failed to fetch movies");
      }
    } catch (error) {
      setError("Failed to fetch movies");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMovies();
  }, [selectedLanguage]);

  const truncateStars = (stars, limit) => {
    if (Array.isArray(stars)) {
      stars = stars.join(",");
    }
    if (typeof stars !== "string") return stars;
    const starList = stars.split(",");
    if (starList.length > limit) {
      return starList.slice(0, limit).join(", ") + "...";
    }
    return starList.join(", ");
  };
  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };
  const handleLanguage = (e) => {
    setSelectedLanguage(e.target.value);
  };
  const handleSort = (e) => {
    setSortOrder(e.target.value);
  };

  const sortMovies = (movies) => {
    if (sortOrder === "highest") {
      return movies.sort((a, b) => b.voting - a.voting);
    } else {
      return movies.sort((a, b) => a.voting - b.voting);
    }
  };

  const filteredMovies = movies.filter(
    (movie) =>
      movie.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      movie.genre.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const sortedMovies = sortMovies(filteredMovies);
  return (
    <div className={Classes.mainDivHome}>
      <Navbar />
      
        <div className={Classes.divSort}>
          <input
            type="text"
            placeholder="Search..."
            value={searchQuery}
            onChange={handleSearch}
            className={Classes.searchBar}
          />
          <div className={Classes.sortByDiv}>
            <p className=" text-[#dbdbfb]">Select By Language: </p>
            <select
              className=" rounded-[10px] w-[40%] h-[100%]  border-[#83ccc5]  outline-none bg-[#d5d5fd]"
              value={selectedLanguage}
              onChange={handleLanguage}
            >
              {languages.map((language) => (
                <option key={language} value={language}>
                  {language}
                </option>
              ))}
            </select>
          </div>
          <div className={Classes.sortByDiv}>
            <p className=" text-[#dbdbfb]">Sort By Voting: </p>
            <select
              className="rounded-[10px] w-[40%] h-[100%] border-[#83ccc5] outline-none bg-[#d5d5fd]"
              value={sortOrder}
              onChange={handleSort}
            >
              {sortOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className={Classes.cardContainer}>
          {loading ? (
            <p className="text-center">Loading...</p>
          ) : error ? (
            <p className="text-center">Error: {error}</p>
          ) : movies.length === 0 ? (
            <p className="text-center w-[100%] flex justify-center">
              No Blog Found
            </p>
          ) : (
            sortedMovies.map((item, index) => (
              <div key={index} className={Classes.card}>
                <div className="w-[55%] h-[100%] rounded-[5px]">
                  <img
                    src={item.poster}
                    alt={item.title}
                    className="w-[100%] h-[100%] rounded-[5px]"
                  />
                </div>
                <div className="w-[43%]">
                  <h3>{item.title}</h3>
                  <div>
                    <p className=" text-[16px]">
                      <span className=" text-[#808080] text-[18px] font-semibold">
                        Genre:{" "}
                      </span>
                      {item.genre}
                    </p>
                    <p className=" text-[16px]">
                      <span className=" text-[#808080] text-[18px]  font-semibold">
                        Director:{" "}
                      </span>{" "}
                      {item.director}
                    </p>
                    <p className=" text-[16px]">
                      <span className=" text-[#808080] text-[18px]  font-semibold">
                        Starring:{" "}
                      </span>
                      {truncateStars(item.stars, 3)}
                    </p>
                    <p>
                      {item.duration} Mins | {item.language} |{" "}
                      {item.release_date}
                    </p>
                    <p>{item.voting} Votes</p>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      
    </div>
  );
}

export default Home;
