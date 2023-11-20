import React from 'react';

const Toggle = ({toggleText, onChange, isBig}) => {
    return <div className='Toggle'>
    <label>
      <span>{toggleText}</span>
      <input type='checkbox' onChange={()=>onChange(!isBig)}/>
    </label>
  </div>
}

export default React.memo(Toggle);