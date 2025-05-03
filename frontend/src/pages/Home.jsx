import { useEffect, useState } from "react";
import { getPopularMovies, searchMovies } from "../services/api";
import MovieCard from "../components/MovieCard";
import "../css/Home.css";

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
  }, []);

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!searchQuery.trim()) return;
    if (loading) return;
    setLoading(true);
    try {
      const searchResults = await searchMovies(searchQuery);
      setMovies(searchResults);
      setError(null);
    } catch (error) {
      console.log(error);
      setError("خطایی در جستجوی فیلم ها پیش آمده");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="home">
      <form onSubmit={handleSearch} className="search-form">
        <input
          type="text"
          placeholder="نام فیلم مانند inception"
          className="search-input"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          style={{ direction: "rtl" }}
        />
        <button type="submit" className="search-button">
          جستجو
        </button>
      </form>
      {erorr && <div className="error-message">{erorr}</div>}
      {loading ? (
        <div className="loading">در حال برقراری ارتباط...</div>
      ) : (
        <div className="movies-grid">
          {movies.map(
            (movie) =>
              movie.title
                .toLocaleLowerCase()
                .startsWith(searchQuery.toLocaleLowerCase()) && (
                <MovieCard movie={movie} key={movie.id} />
              )
          )}
        </div>
      )}
    </div>
  );
}

export default Home;
