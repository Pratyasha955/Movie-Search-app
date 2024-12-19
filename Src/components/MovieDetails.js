import React, {useEffect,useState} from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const MovieDetails =() => {
    const { id } = useParams();
    const [movie, setMovie] = useState(null);

    const API_KEY = '7217b337';

    useEffect(() => {
        const fetchMovieDetails = async () => {
            const API_URL =`https://www.omdbapi.com/?apikey=${API_KEY}&i=${id}`;

            try {
                const response = await axios.get(API_URL);
                if(response.data.Response === "True") {
                    setMovie(response.data);
                }else {
                    alert(response.data.error);
                }
            }catch (error) {
                console.error("Error fetching movie details:", error);

            }
        };
        fetchMovieDetails();
    },[id]);

    if (!movie) return <p>Loading....</p>;

    return (
        <div className="movie-details">
         <h1>{movie.Title}</h1>
         <img src={movie.poster}  alt={movie.Title}/>
         <p>{movie.Plot}</p>
         <p><strong>Director:</strong>{movie.Director}</p>
         <p><strong>Actors:</strong>{movie.Actors}</p>
         <p><strong>Year:</strong>{movie.Year}</p>
         <p><strong>IMBD Rating:</strong>{movie.imbdRating}</p>
        </div>
    );
};

export default MovieDetails;
