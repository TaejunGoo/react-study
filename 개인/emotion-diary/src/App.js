import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import RouterTest from './components/RouterTest';
import Home from './pages/Home';
import New from './pages/New';
import Edit from './pages/Edit';
import Diary from './pages/Diary';
import MyButton from './components/MyButton';
import MyHeader from './components/MyHeader';
import React, {
    // useEffect,
    useReducer,
    useRef,
    useMemo,
    useState,
    useEffect,
} from 'react';

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
            newState = state.filter((item) => item.id !== action.targetId);
            break;
        case 'EDIT': {
            newState = state.map((item) =>
                item.id === action.data.id ? { ...action.data } : item
            );
            break;
        }
        default:
            return state;
    }
    localStorage.setItem('diary', JSON.stringify(newState));
    return newState;
};
function App() {
    const [data, dispatch] = useReducer(reducer, []);
    useEffect(() => {
        const localData = localStorage.getItem('diary');
        if (localData) {
            const diaryList = JSON.parse(localData).sort(
                (a, b) => parseInt(b.id) - parseInt(a.id)
            );
            dataId.current = parseInt(diaryList[0].id) + 1;
            dispatch({ type: 'INIT', data: diaryList });
        }
    }, []);
    const dataId = useRef(0);

    // CREATE
    const onCreate = (date, emotion, content) => {
        dispatch({
            type: 'CREATE',
            data: {
                id: dataId.current,
                date: new Date(date).getTime(),
                content,
                emotion,
            },
        });
        dataId.current += 1;
    };
    // REMOVE
    const onRemove = (targetId) => {
        // dispatch({ type: 'REMOVE', data: { targetId: dataId.current } });
        dispatch({ type: 'REMOVE', targetId });
    };
    // EDIT
    const onEdit = (targetId, date, content, emotion) => {
        dispatch({
            type: 'EDIT',
            data: {
                id: targetId,
                date: new Date(date).getTime(),
                content,
                emotion,
            },
        });
    };

    // useEffect(() => onInit, []);

    // const memoizedDispatch = useMemo(() => {
    //     return { onCreate, onRemove, onEdit };
    // }, []);

    return (
        <DiaryStateContext.Provider value={data}>
            <DiaryDispatchContext.Provider
                value={{ onCreate, onRemove, onEdit }}
            >
                <BrowserRouter>
                    <div className='App'>
                        {/* <MyButton
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
                        /> */}

                        <Routes>
                            <Route path='/' element={<Home />} />
                            <Route path='/New' element={<New />} />
                            <Route path='/Edit' element={<Edit />} />
                            <Route path='/Edit/:id' element={<Edit />} />
                            <Route path='/Diary/:id' element={<Diary />} />
                            {/* <Route path='/Diary' element={<Diary />} /> */}
                        </Routes>

                        {/* <a href={''}>외부</a> 외부 사이트로 이동시에만 사용 */}

                        {/* <RouterTest /> */}
                    </div>
                </BrowserRouter>
            </DiaryDispatchContext.Provider>
        </DiaryStateContext.Provider>
    );
}

export default App;
