import React from 'react';
import { useNavigate } from 'react-router-dom';

const ListItem = ({...data}) => {
  const navigate = useNavigate();
  const goDetail = () =>{
    navigate(`/Detail/${data.id}`);
  }

  return (
    <li className='ListItem' onClick={goDetail}>
      <div className='item_thumb' style={{'backgroundImage':`url(${data.background_image})`}}>
        <div className='badges'>
          {
            data.genres.map((genres,idx) => 
              <span key={`badge-${idx}`} className={['badge',`badge-${genres.toLowerCase()}`].join(' ')}>{genres}</span> 
            )
          }
        </div>
      </div>
      <div className='item_info'>
        <p className="movie_name">{data.title_long}</p>
        <p className="movie_rating">{data.rating}</p>
      </div>
    </li>
  )
}

export default React.memo(ListItem);