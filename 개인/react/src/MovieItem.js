import React, { useEffect } from 'react';

const MovieItem = ({ medium_cover_image, genres, rating, summary, title, year }) => {

    const ratingClass = () => {
        if (rating >= 8) {
            return 'high';
        } else if (rating >= 5) {
            return 'medium';
        } else {
            return 'low';
        }
    } 

    useEffect(() => {
        console.log('MovieItem 최적화')
    })

    return (
        <div className="MovieItem">
            <img src={medium_cover_image} className="img" alt={title} />
            <div className="tit_wrapper">
                <h2 className="title">{title}</h2>                    
                <p className=
                    {["rating", `rating_${ratingClass()}`].join(' ')}
                >
                    {rating}
                </p>
            </div>
            <p className="genres">[{genres.join(', ')}]</p>
            <p className="summary">{summary.slice(0, 150)}</p>
            <p className="year">{year}</p>
        </div>        
    )
}

export default React.memo(MovieItem);