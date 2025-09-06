import React, { useEffect, useState, useRef } from "react";
import "./Row.css";

const Row = ({ title, fetchUrl }) => {
  const [movies, setMovies] = useState([]);
  const rowRef = useRef(null);

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

  // scroll helpers
  const scrollLeft = () => {
    rowRef.current.scrollBy({
      left: -rowRef.current.offsetWidth,
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    rowRef.current.scrollBy({
      left: rowRef.current.offsetWidth,
      behavior: "smooth",
    });
  };

  return (
    <div className="row">
      <h2>{title}</h2>

      <div className="row-container">
        {/* Left arrow */}
        <button className="row-arrow left" onClick={scrollLeft}>
          &#10094;
        </button>

        {/* Posters */}
        <div className="row-posters" ref={rowRef}>
          {movies.map((movie) => (
            <img
              key={movie.id}
              src={imageUrl(movie.poster_path)}
              alt={movie.title || movie.name}
              className="row-poster"
            />
          ))}
        </div>

        {/* Right arrow */}
        <button className="row-arrow right" onClick={scrollRight}>
          &#10095;
        </button>
      </div>
    </div>
  );
};

export default Row;
