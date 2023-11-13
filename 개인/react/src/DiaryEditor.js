import React, { useState } from 'react';

const DiaryEditor = () => {

    const [state, setState] = useState({
        author: '',
        content: '',
    });

    const handleChange = (e) => {
        const {name, value} = e.target;
        console.log(e.target);
        setState({
            ...state,
            [name] : value,
        })
    }

    return (
        <div className="DiaryEditor">
            <div>
                <input
                    name="author"
                    value={state.author}
                    onChange={handleChange}
                />
            </div>
            <div>
                <textarea
                    name="content"
                    value={state.content}
                    onChange={handleChange}
                />
            </div>
            <div>
                <select>
                    
                </select>
            </div>
        </div>
    )
}

export default DiaryEditor;