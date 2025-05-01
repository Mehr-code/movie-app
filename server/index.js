import express from "express";
import fetch from "node-fetch";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = 6000;

app.get("/api/movies/popular", async (req, res) => {
  const apiKey = process.env.API_KEY;
  const url = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: "خطا در دریافت اطلاعات از TMDB" });
  }
});

app.get("/api/movies/search", async (req, res) => {
  const apiKey = process.env.API_KEY;
  const query = req.query.q; // گرفتن پارامتر جست‌وجو از URL

  if (!query) {
    return res.status(400).json({ error: "query is required" });
  }

  const url = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${encodeURIComponent(
    query
  )}`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: "خطا در دریافت اطلاعات از TMDB" });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
