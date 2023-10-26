import { useEffect, useState } from "react";
import "./App.css";
import Searchicon from "./Search.svg";
import MovieCard from "./MovieCard";
// 1df2ff42 api key
 
const API_URL = "http://omdbapi.com?apikey=1df2ff42";
export const App = () => {
  const [movieName, setMovie] = useState("");
  const [initialMovie, setInitialMovie] = useState([]);
  const SearchAboutMovie = async (title) => {
    const apiRespone = await fetch(`${API_URL}&s=${title}`);
    const data = await apiRespone.json();
    setInitialMovie(data.Search);
  }; 
  console.log(initialMovie);  
  useEffect(() => {
    SearchAboutMovie("batman");
  }, []);
  let link = "https://via.placeholder.com/400";
  return ( 
    
    <div className="app">
      <h1>Movie App</h1>
      <div className="search">
        <input
          placeholder="Search About Movie"
          value={movieName}
          onChange={(e) => setMovie(e.target.value)}
        ></input>
        <img src={Searchicon} alt="search icon" onClick={() => {SearchAboutMovie(movieName)}} />
      </div>
      {initialMovie.length > 0 ? (
        <div className="container">
          {/* <MovieCard film={movie1} notfound={link}/> */}
          {initialMovie.map((movie) => {
            return <MovieCard film={movie} notfound={link} />;
          })}
        </div>
      ) : (
        <div className="empty">
          <h2>no movies found</h2>
        </div>
      )}
    </div>
  );
};
 