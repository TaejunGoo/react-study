import React, { useState } from 'react';


const Counter = ({ initialValue }) => {
    console.log(initialValue)
    const [count, setCount] = useState(initialValue);
    const onIncrease = () => {
        setCount(count + 1);
        if ( count > 5) {
        }
    }

    const onDecrease = () => {
        setCount(count - 1);
        if (count < 0) {
            
        }
    }

    return (
        <div className="Counter">
            <h2>{count}</h2>
            <button onClick={onIncrease}>+</button>
            <button onClick={onDecrease}>-</button>
        </div>
    )

}

Counter.defaultProps = {
    initialValue: 0,
}

export default Counter;