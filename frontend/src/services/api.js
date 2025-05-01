// const API_KEY = "38cd68fbdc26b9959663a40873490d8d";
const BASE_URL = "https://api.themoviedb.org/3";

export const getPopularMovies = async () => {
  const res = await fetch("/api/movies/popular");
  const data = await res.json();
  return data.results;
};

export const searchMovies = async (query) => {
  const res = await fetch(`/api/movies/search?q=${encodeURIComponent(query)}`);
  const data = await res.json();
  return data.results;
};

// export const searchMovies = async (query) => {
//   const res = await fetch(
//     `${BASE_URL}/search/movie/?api_key${API_KEY}&query=${encodeURIComponent(
//       query
//     )}`
//   );
//   const data = res.json();
//   console.log(data);
// };

// export const getPopularMovies = async () => {
//   const res = await fetch(`${BASE_URL}/movie/popular?api_key${API_KEY}`);
//   const data = res.json();
//   return data.results;
// };
