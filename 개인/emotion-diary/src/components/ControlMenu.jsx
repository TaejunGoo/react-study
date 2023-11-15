import React from 'react';

export default function ControlMenu({ value, onChange, optionList }) {
    return (
        <select
            className='ControlMenu'
            value={value}
            onChange={(e) => onChange(e.target.value)}
        >
            {optionList.map((item, index) => (
                <option key={index} value={item.value}>
                    {item.name}
                </option>
            ))}
        </select>
    );
}
