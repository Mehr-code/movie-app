import MovieCard from "../components/MovieCard";

function Home() {
  const movies = [
    {
      id: 1,
      title: "John Wick",
      releese_date: 2020,
    },
    {
      id: 2,
      title: "John Doe",
      releese_date: 2020,
    },
    {
      id: 3,
      title: "John Cena",
      releese_date: 2020,
    },
  ];

  const handleSearch = () => {
    return true;
  };

  return (
    <div className="home">
      <form onSubmit={handleSearch} className="search-form">
        <input
          type="text"
          placeholder="Search for Movies..."
          className="search-input"
        />
        <button type="submit">Search</button>
      </form>

      <div className="movies-grid">
        {movies.map((movie) => (
          <MovieCard movie={movie} key={movie.id} />
        ))}
      </div>
    </div>
  );
}

export default Home;
