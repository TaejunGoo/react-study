import { useState, useEffect } from 'react';

import './App.css';
// import Container from './Container';
import MovieList from './MovieList';

const App = () => {
    const [isMode, setIsMode] = useState(true);    
    const getData = (isMode) => {
        // console.log(isMode);
        setIsMode(isMode);
    }

    const [loading, setLoading] = useState(true);
    const [movies, setMovies] = useState([]);
    const getMovies = async() => {
        const response = await fetch(
            `https://yts.mx/api/v2/list_movies.json`
        );
        const json = await response.json();

        setMovies(json.data.movies);
        setLoading(false);
    }
    useEffect(() => {
        getMovies()
    }, []);

    return (
        <div className="App">
            {
                loading ? (<div className="Container"><div className="loading">Loading...</div></div>) : 
                (<div className={["Container", (isMode ? 'light' : 'dark')].join(' ')}>
                    <div className="container_wrapper">
                        <MovieList  movieList = {movies} isMode ={isMode} getData={getData} />                
                    </div>
                </div>)
            }
        </div>
    )   

}

export default App;
