import React from 'react';

const Select = () => {
    return (
    <div className='Select'>
        <select>
            <option>최신 개봉순</option>
            <option>과거 개봉순</option>
            <option>최고 별점순</option>
            <option>최저 별점순</option>
        </select>
    </div>
    )
}

export default React.memo(Select);