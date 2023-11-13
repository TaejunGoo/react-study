import React from 'react';
import styles from './MovieItem.module.css';

export default function MovieItem({ ...data }) {
    return (
        <li className={styles.MovieItem}>
            <img src={data.poster} alt='' />
            <div>
                <h1>
                    {data.title}
                    <span>{data.year}</span>
                </h1>
                <div>{data.genres.join(' ')}</div>
                <span className={styles.rating}>{data.rating}</span>
                <p>{data.summary}</p>
            </div>
        </li>
    );
}
