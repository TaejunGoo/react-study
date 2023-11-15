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
            newState = state.filter((item) => item.id !== action.data.targetId);
            break;
        case 'EDIT': {
            newState = state.map((item) =>
                item.id === action.data.it ? { ...action.data } : it
            );
            break;
        }
        default:
            return state;
    }
    return newState;
};
const dummyData = [
    {
        id: 1,
        emotion: 1,
        content: '오늘의 일기 1번',
        date: 1699960194155,
    },
    {
        id: 2,
        emotion: 2,
        content: '오늘의 일기 2번',
        date: 1699960194156,
    },
    {
        id: 3,
        emotion: 3,
        content: '오늘의 일기 3번',
        date: 1699960194157,
    },
    {
        id: 4,
        emotion: 4,
        content: '오늘의 일기 4번',
        date: 1699960194158,
    },
    {
        id: 5,
        emotion: 5,
        content: '오늘의 일기 5번',
        date: 1699960194159,
    },
];
function App() {
    const [data, dispatch] = useReducer(reducer, dummyData);
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
