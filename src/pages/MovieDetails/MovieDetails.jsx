import React from "react";
import { useParams } from "react-router-dom";

const MovieDetails = () => {
  const { id } = useParams();

  return (
    <div style={{ color: "white", padding: "20px" }}>
      <h2>Movie Details Page</h2>
      <p>Movie ID: {id}</p>
      {/* You can fetch movie details using axios.get(`/movie/${id}`) */}
    </div>
  );
};

export default MovieDetails;
