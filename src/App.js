import React, {useEffect, useState } from "react";
import "./index.css";

import MovieCard from './components/MovieCard';

const FEATURED_API = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=5e87ae2d66a6bcca76ece81c68d48b23&page=1";

const SEARCH_API = "http://api.themoviedb.org/3/search/movie/?api_key=5e87ae2d66a6bcca76ece81c68d48b23&query=";


const MoviesApp = () => {
    const [movies, setMovies] = useState([]);
    const [query, setQuery] = useState('');

    useEffect(() => {
       getMovies(FEATURED_API);
    
    }, []);

    const getMovies = (API) => {
         fetch(API)
            .then((res) => res.json())
            .then((data) => {
                setMovies(data.results);
            });
    }

    const handleOnSubmit = (e) => {
        
        e.preventDefault();

        if(query) {
            getMovies(SEARCH_API + query)
            
            setQuery('');
        }
    };

    const handleOnChange = (e) => {
        setQuery(e.target.value);
    }

    return (

        <>
            <header>
                <form  onSubmit={handleOnSubmit}>
                    <input className = 'search' 
                        type = 'search' 
                        placeholder = 'search... 🔎'
                        value={query}
                        onChange={handleOnChange}
                    /> 
                </form>
            </header>
            <div className='banner'>
                <h1>MOVIES</h1>
            </div>
            <div className="movie-container">
                {movies.length > 0 && movies.map((movie) =>
                    <MovieCard key={movie.id} {...movie}/>
                )}
            </div>
        </>
    );
}

export default MoviesApp;