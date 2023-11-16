import React from 'react';

export default React.memo(function ControlMenu({
    value,
    onChange,
    optionList,
}) {
    console.log('constrolMenu');
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
});
