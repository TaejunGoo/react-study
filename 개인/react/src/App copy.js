
import './App.css';
import MovieList from './MovieList';

const dummyData = [
    {
        genres: ["Documentary", "Family"],
        id: 55493,
        poster: 'https://img.yts.mx/assets/images/movies/planet_earth_2006/medium-cover.jpg',
        rating: 9.4,
        summary: 'Each 50 minute episode features a global overview of a different biome or habitat on Earth',
        title: 'Planet Earth',
        year: 2022
    },
    {
        genres: ["Biography", "Documentary", "War"],
        id: 52164,
        poster: 'https://img.yts.mx/assets/images/movies/the_art_of_un_war_2022/medium-cover.jpg',
        rating: 9.3,
        summary: 'The Art of Un-War is an in-depth exploration of renowned artist Krzysztof Wodiczkos life',
        title: 'The Art of Un-War',
        year: 2021
    }
]


function App() {

    return (
    <div className="App">
        <MovieList movieList={dummyData}
        />
    </div>
    );

}

export default App;
