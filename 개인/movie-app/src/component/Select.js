import React from 'react';

const Select = ({optionList, sortChange}) => {
    
    return (
    <div className='Select'>
        <select onChange={(e)=>{sortChange(e.target.value)}}>
            {
                optionList.map((el, idx)=>(
                    <option key={`selectOption-${idx}`} value={el.value}>{el.name}</option>
                ))
            }
        </select>
    </div>
    )
}

export default React.memo(Select);