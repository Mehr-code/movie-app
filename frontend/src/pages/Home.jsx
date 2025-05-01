import { use, useEffect, useState } from "react";
import { getPopularMovies } from "../services/api";
import MovieCard from "../components/MovieCard";
import "../css/App.css";

function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const [erorr, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadPopularMovies = async () => {
      try {
        const popularMovie = await getPopularMovies();
        setMovies(popularMovie);
      } catch (err) {
        console.log(err);
        setError("مشکلی در دریافت داده ی فیلم ها پیش آمده");
      } finally {
        setLoading(false);
      }
    };
    loadPopularMovies();
  });

  // const movies = [
  //   {
  //     id: 1,
  //     title: "John Wick",
  //     releese_date: 2020,
  //   },
  //   {
  //     id: 2,
  //     title: "Terminator",
  //     releese_date: 2020,
  //   },
  //   {
  //     id: 3,
  //     title: "The Matrix",
  //     releese_date: 2020,
  //   },
  // ];

  const handleSearch = (e) => {
    e.preventDefault();
    alert(searchQuery);
    searchQuery("");
    return true;
  };

  return (
    <div className="home">
      <form onSubmit={handleSearch} className="search-form">
        <input
          type="text"
          placeholder="Search for Movies..."
          className="search-input"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>

      <div className="movies-grid">
        {movies.map(
          (movie) =>
            movie.title.toLocaleLowerCase().startsWith(searchQuery) && (
              <MovieCard movie={movie} key={movie.id} />
            )
        )}
      </div>
    </div>
  );
}

export default Home;
