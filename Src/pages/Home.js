import MovieList from "../components/MovieList";
import React, {useState, useEffect} from "react";
import axios from "axios";

const Home = () => {
    const [movies, setMovies] = useState([]);
    const [query, setQuery] = useState('');
    const [loading, setLoading] = useState(false);

    const API_KEY = '7217b337';

    const searchMovies = async (e) => {
        e.preventDefault();
        setLoading(true);

        const API_URL =  `https://www.omdbapi.com/?apikey=${API_KEY}&s=${query}`;
        try {
            const response = await axios.get(API_URL);
            if(response.data.Response === "True") {
                setMovies(response.data.Search);
            }else {
                setMovies([]);
                alert(response.data.Error);
            }
        }catch (error) {
            console.error("Error fetching data:",error);
        } finally{
            setLoading(false);
        }
    };
    const fetchRecentMovies = async () => {
        setLoading(true);

        const API_URL = `https://www.omdbapi.com/?apikey=${API_KEY}&s=latest`;

        try {
            const response = await axios.get(API_URL);
            if(response.data.Response === "True"){
                setMovies(response.data.Search);
            } else {
                setMovies([]);
                alert(response.data.Error);
            }
        }catch (error) {
            console.error("Error fetching recent movies:", error);
        } finally {
            setLoading(false);
        }
    };
    useEffect(() => {
        if (!query) {
            fetchRecentMovies();
        }
        },[query]);

        return (
            <div>
               <h1> Movie Searching App</h1>
               <form onSubmit={searchMovies}>
                <input 
                   type="text"
                   value={query}
                   onChange={(e) => setQuery(e.target.value)}
                   placeholder="Search for a movie..."
                   />
                <button type="submit">Search</button>   
               </form>

               {loading ? (
                <p>Loading...</p>
               ) : (
                <MovieList movies={movies} />
               )}
            </div>
        );
};

export default Home;
