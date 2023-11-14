import React, { useState } from 'react';

export default function Selector({ optionList }) {
    const [selectValue, setSelectValue] = useState('');
    const handleChange = (e) => {
        setSelectValue(e.target.value);
    };
    return (
        <select value={selectValue} onChange={handleChange}>
            {optionList.map((option) => (
                <option value={option}>{option}</option>
            ))}
        </select>
    );
}
