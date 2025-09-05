import React, { useEffect, useState } from "react";
import "./Row.css";

const Row = ({ title, fetchUrl }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const options = {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjNTFiODA4ZTJmMGIzMjdhY2Y2NDJjNjFkZjlmMTQ5OCIsIm5iZiI6MTc1NzA5MTYwMy40Nywic3ViIjoiNjhiYjE3MTNhMDRjMjJmYjk3OTQ2YTRmIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.hQaVgdFyj2FFdPMy62W1PkEan9Q4XVzpdQHCVsdVnwU",
        },
      };

      try {
        const response = await fetch(fetchUrl, options);
        const data = await response.json();
        setMovies(data.results);
      } catch (err) {
        console.error(err);
      }
    }

    fetchData();
  }, [fetchUrl]);

  const imageUrl = (path) => `https://image.tmdb.org/t/p/original${path}`;

  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="row-posters">
        {movies.map((movie) => (
          <img
            key={movie.id}
            src={imageUrl(movie.poster_path)}
            alt={movie.title || movie.name}
            className="row-poster"
          />
        ))}
      </div>
    </div>
  );
};

export default Row;
