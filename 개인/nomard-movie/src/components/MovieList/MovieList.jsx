import React, { useState, useEffect, useMemo } from 'react';
import MovieItem from '../MovieItem/MovieItem';
import styles from './MovieList.module.css';
// Movie List API fatch
// Map List Item

export default function MovieList() {
    const [data, setData] = useState([]);

    const getMovieData = async () => {
        try {
            const movieJSONData = await fetch(
                'https://yts.mx/api/v2/list_movies.json?sort_by=rating'
            ).then((response) => response.json());
            const initData = movieJSONData.data.movies
                .slice(0, 20)
                .map((item) => {
                    return {
                        id: item.id,
                        genres: item.genres,
                        poster: item.medium_cover_image,
                        rating: item.rating,
                        summary: item.summary,
                        title: item.title,
                        year: item.year,
                    };
                });

            setData(initData);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    useEffect(() => {
        getMovieData();
    }, []);

    const memoizedData = useMemo(() => data, [data]);

    return (
        <ul className={styles.MovieList}>
            {memoizedData.map((item) => (
                <MovieItem key={`movieID_${item.id}`} {...item} data={data} />
            ))}
        </ul>
    );
}
