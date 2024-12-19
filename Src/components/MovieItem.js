import React from "react";

const MovieItem = ({ movie }) => {
    return (
        <div className="movie-item">
          <img src={movie.Poster} alt={movie.Title} />
          <h3>{movie.Title}</h3>
          <p>Year: {movie.Year}</p>
        </div>
    );
};

export default MovieItem;