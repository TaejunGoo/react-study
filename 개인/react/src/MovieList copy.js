import { useState } from 'react';

import MovieItem from './MovieItem';

const ratingOptionList = [
    {value: 'maximum', name: '평점 높은 순'},    
    {value: 'minimum', name: '평점 낮은 순'},
    {value: 'latest', name: '최신순'},
    {value: 'oldest', name: '오래된 순'},
]

const ControlMenu = ({ value, onChange, optionList }) => {
    return (
        <select className="ControlMenu"
            value={value}
            onChange={(e) => onChange(e.target.value)}
        >
            {optionList.map((it, idx) => <option key={idx} value={it.value}>{it.name}</option>)}
        </select>
    )
}

const MovieList = ({ movieList }) => {
    const [isMode, setIsMode] = useState(true);
    const toggleHandler = () => {
        setIsMode(!isMode);
    }

    const [ratingType, setRatingType] = useState('maximum');
    
    const getProcessMovieList = () => {

        const compare = (a,b) => {
            if (ratingType === 'maximum') {
                return parseInt(b.rating) - parseInt(a.rating);
            } else if (ratingType === 'minimum') {
                return parseInt(a.rating) - parseInt(b.rating);
            } else if (ratingType === 'latest') {
                return parseInt(b.year) - parseInt(a.year);
            } else if (ratingType === 'oldest') {
                return parseInt(a.year) - parseInt(b.year);
            }
        }        

        const sortedList = movieList.sort(compare);
        return sortedList;
    }
    
    return (
        <div className={["MovieList", (isMode ? 'light' : 'dark')].join(' ')}>
            <div className="button_wrapper">
                <ControlMenu 
                    value={ratingType}
                    onChange={setRatingType}
                    optionList={ratingOptionList}
                />

                <button className={["button_mode", (isMode ? 'light' : 'dark')].join(' ')} onClick={toggleHandler}>모드 변경</button>
            </div>
            <div className="movie_wrapper">
                {getProcessMovieList().map((it) => (
                    <MovieItem key={it.id} {...it} />
                ))}
            </div>
        </div>
    )    
}

export default MovieList;