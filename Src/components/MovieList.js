import React from "react";
import MovieItem from "./MovieItem";

const MovieList = ({ movies }) => {
    if (movies.length === 0){
        return <p>No Movies found. Try searching for something else!</p>
    }

    return(
        <div className="movie-list">
           {movies.map((movie) => (
            <MovieItem key={movie.imdbID} movie={movie} />
           ))}
        </div>
    );
};

export default MovieList;