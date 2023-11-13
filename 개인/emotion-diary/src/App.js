import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import RouterTest from './components/RouterTest';
import Home from './pages/Home';
import New from './pages/New';
import Edit from './pages/Edit';
import Diary from './pages/Diary';
import MyButton from './components/MyButton';
import MyHeader from './components/MyHeader';
import React, { useEffect, useReducer, useRef, useMemo } from 'react';

export const DiaryStateContext = React.createContext();
export const DiaryDispatchContext = React.createContext();

const reducer = (state, action) => {
    let newState = [];
    switch (action.type) {
        case 'INIT':
            return action.data;
        case 'CREATE': {
            newState = [action.data, ...state];
            break;
        }
        case 'REMOVE':
            newState = state.filter((item) => item.id !== action.data.targetId);
            break;
        case 'EDIT':
            return action.data;
        default:
            return state;
    }
    return newState;
};
function App() {
    const [data, dispatch] = useReducer(reducer, []);
    const dataId = useRef(0);

    const onInit = () => {
        dispatch({ type: 'INIT', data });
    };

    const onCreate = ({ date, emotion, content }) => {
        dispatch({
            type: 'CREATE',
            data: {
                id: dataId.current,
                date: new Date(date).getTime(),
                emotion,
                content,
            },
        });
        dataId.current += 1;
        console.log(data);
    };

    const onRemove = ({ dataId }) => {
        dispatch({ type: 'REMOVE', data: { targetId: dataId.current } });
        console.log(data);
    };

    const onEdit = () => {
        const newContent = {};
        dispatch({ type: 'EDIT', data: newContent });
        console.log(data);
    };

    useEffect(() => onInit, []);

    const memoizedDispatch = useMemo(() => {
        return { onCreate, onRemove, onEdit };
    }, []);

    return (
        <DiaryStateContext.Provider value={data}>
            <DiaryDispatchContext value={memoizedDispatch}>
                <BrowserRouter>
                    <div className='App'>
                        <MyHeader
                            headText={'App'}
                            leftChild={
                                <MyButton
                                    text={'왼쪽버튼'}
                                    onClick={() => alert('왼쪽 클릭')}
                                />
                            }
                            rightChild={
                                <MyButton
                                    text={'오른쪽버튼'}
                                    onClick={() => alert('오른쪽클릭')}
                                />
                            }
                        />
                        <h1>App.js</h1>

                        <MyButton
                            text={'버튼'}
                            onClick={() => alert('버튼 클릭')}
                            type={'positive'}
                        />
                        <MyButton
                            text={'버튼'}
                            onClick={() => alert('버튼 클릭')}
                            type={'negative'}
                        />
                        <MyButton
                            text={'버튼'}
                            onClick={() => alert('버튼 클릭')}
                            type={'d'}
                        />

                        <Routes>
                            <Route path='/' element={<Home />} />
                            <Route path='/New' element={<New />} />
                            <Route path='/Edit' element={<Edit />} />
                            <Route path='/Diary/:id' element={<Diary />} />
                            {/* <Route path='/Diary' element={<Diary />} /> */}
                        </Routes>

                        {/* <a href={''}>외부</a> 외부 사이트로 이동시에만 사용 */}

                        {/* <RouterTest /> */}
                    </div>
                </BrowserRouter>
            </DiaryDispatchContext>
        </DiaryStateContext.Provider>
    );
}

export default App;
