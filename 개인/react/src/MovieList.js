import React, { useState, useEffect } from 'react';

import MovieItem from './MovieItem';

const ratingOptionList = [
    {value: 'maximum', name: '평점 높은 순'},    
    {value: 'minimum', name: '평점 낮은 순'},
    {value: 'latest', name: '최신순'},
    {value: 'oldest', name: '오래된 순'},
]

const ControlMenu = React.memo(({ value, onChange, optionList }) => {
    
    useEffect(() => {
        console.log('ControlMenu 최적화')
    })

    return (
        <select className="ControlMenu"
            value={value}
            onChange={(e) => onChange(e.target.value)}
        >
            {optionList.map((it, idx) => <option key={idx} value={it.value}>{it.name}</option>)}
        </select>
    )
})

const MovieList = ({ movieList, isMode, getData }) => {
    const toggleHandler = () => {
        getData(!isMode);
    }

    const [ratingType, setRatingType] = useState('maximum');
    
    const getProcessMovieList = () => {

        const compare = (a,b) => {
            if (ratingType === 'maximum') {
                return parseFloat(b.rating) - parseFloat(a.rating);
            } else if (ratingType === 'minimum') {
                return parseFloat(a.rating) - parseFloat(b.rating);
            } else if (ratingType === 'latest') {
                return parseFloat(b.year) - parseFloat(a.year);
            } else if (ratingType === 'oldest') {
                return parseFloat(a.year) - parseFloat(b.year);
            }
        }        
        const sortedList = movieList.sort(compare);
        return sortedList;
    }
    
    return (
        <div className="MovieList">
            <div className="button_wrapper">
                <ControlMenu 
                    value={ratingType}
                    onChange={setRatingType}
                    optionList={ratingOptionList}
                />

                <button className="button_mode" onClick={toggleHandler}>모드 변경</button>
            </div>
            <div className="movie_wrapper">
                {getProcessMovieList().map((it) => (
                    <MovieItem key={it.id} {...it} />
                ))}
            </div>
        </div>
    )    
}

MovieList.defaultProps = {
    movieList: [],
}

export default MovieList;