import { useReducer, useCallback, useMemo } from 'react';
import SimpleBar from 'simplebar-react';
import 'simplebar-react/dist/simplebar.min.css';
import styles from './SearchLayer.module.scss';

import SearchInput from './SearchInput/SearchInput';
import SearchHistory from './SearchHistory/SearchHistory';
import SearchRank from './SearchRank/SearchRank';

const historyList = [
    {
        keyword: '안녕'
    },
    {
        keyword: '자두야'
    },
    {
        keyword: '보노보노'
    },
];

const rankList = [
    {
        rank: 1,
        title : '운수 오진 날',
        code : 'aaa'
    },
    {
        rank: 2,
        title : '싱어게인3',
        code : 'aaa'
    },
    {
        rank: 3,
        title : '어서와~ 한국은 처음이지?',
        code : 'aaa'
    },
    {
        rank: 4,
        title : '나는 SOLO',
        code : 'aaa'
    },
    {
        rank: 5,
        title : '이재, 곧 죽습니다',
        code : 'aaa'
    },
    {
        rank: 6,
        title : '낮에 뜨는 달',
        code : 'aaa'
    },
    {
        rank: 7,
        title : '<주술회전 2기 : 시부야 사변>자막',
        code : 'aaa'
    },
    {
        rank: 8,
        title : '유 퀴즈 온 더 블럭',
        code : 'aaa'
    },
    {
        rank: 9,
        title : '스트릿댄스 걸스 파이터2',
        code : 'aaa'
    },
    {
        rank: 10,
        title : '나는 SOLO, 그후 사랑은 계속된다',
        code : 'aaa'
    },
]

const reducer = (state, action) => {
    let newState = [];
    switch(action.type){
        case 'ADD' : {
            if(state.length === 10){
                state.pop();
            };
            newState = [action.data, ...state];
            break;
        }
        case 'REMOVE': {
            newState = state.filter((item) => item.keyword !== action.data.keyword);
            break;
        }
        case 'REMOVEALL' : {
            newState = [];
            break;
        }
        default:
            return state;
    };
    return newState;
};

const SearchLayer = () => {
    const [historyData, dispatch] = useReducer(reducer, historyList);

    const onAdd = useCallback((keyword) => {
        if(keyword.length >= 1){
            if(historyData.length === 0){
                dispatch({type:'ADD', data:{
                    keyword: keyword
                }});
            }else if(keyword !== historyData[0].keyword){
                dispatch({type:'ADD', data:{
                    keyword: keyword
                }});
            };
        }else{
            alert('검색어를 입력 해 주세요');
        };
    },[historyData]);
    const onRemove = useCallback((keyword) => {
        dispatch({type:'REMOVE', data: {
            keyword: keyword
        }});
    },[]);
    const onRemoveAll = useCallback(() => {
        dispatch({type:'REMOVEALL'});
    },[]);

    const dispatches = useMemo(() => {
        return {onAdd, onRemove, onRemoveAll};
    },[onAdd, onRemove, onRemoveAll]);

    return (
        <div className={styles.searchLayer}>
            <SimpleBar>
                <div className={styles.layer}>
                    <SearchInput 
                        placeholder={'제목, 인물명을 입력해보세요.'}
                        id={'search_input'}
                        dispatches={dispatches}
                    />
                    <div className={styles.layout}>
                        <div className={styles.left}>
                            <SearchHistory history={historyData} dispatches={dispatches} />
                        </div>
                        <div className={styles.right}>
                            <SearchRank rankList={rankList} dispatches={dispatches} />
                        </div>
                    </div>
                </div>
            </SimpleBar>
        </div>
    );
};

export default SearchLayer;