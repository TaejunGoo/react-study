import { useEffect, useState } from "react";

import styles from "./SearchLayer.module.scss"

import {itemList} from './../../../utils/itemList'
const PopularSearches = itemList.find(i=>i.idx === 2).items;
const PopularSearchesTitle = PopularSearches.map(item => item.title).slice(0,10);

const SearchLayer = ()=>{
    const [text, setText] = useState('');
    const [recentSearches, setRecentSearches] = useState([]);

    // 페이지 로드 시 localStorage에서 검색 기록 불러오기
    useEffect(()=>{
        const storedSearches  = localStorage.getItem('recentSearches');
        if(storedSearches){
            setRecentSearches(JSON.parse(storedSearches));
        }
    },[]);
    // 검색 기록이 업데이트될 때마다 localStorage에 저장
    useEffect(()=>{
        localStorage.setItem('recentSearches',JSON.stringify(recentSearches));
    },[recentSearches]);

    const handleInputChange = (e)=>{
        setText(e.target.value);
    }
    // 최근 검색어 추가
    const handleSearchClick = ()=>{
        if(text.length > 0){
            setRecentSearches([text, ...recentSearches.slice(0,9)]);
            setText('');
        }
    }
    const handleSearchEnter = (e)=>{
        if(e.key === 'Enter'){
            handleSearchClick();
        }
    }

    // 최근 검색어 삭제
    const handleDeleteClick = (idx)=>{
        setRecentSearches(recentSearches.filter((_,i)=>i !== idx));
    }
    // 최근 검색어 전체 삭제
    const AllDeleteClick = ()=>{
        setRecentSearches([]);
    }

    return(        
        <div className={styles.SearchLayer}>
            <div className={styles.isLayer}>
                <label className={styles.search__input} htmlFor="search__input">
                    <input 
                        value={text} 
                        onChange={handleInputChange} 
                        onKeyDown={handleSearchEnter}
                        id="search__input" 
                        type="text" 
                        placeholder="제목, 인물명을 입력해보세요." 
                    />
                    <button onClick={handleSearchClick}>검색</button>
                </label>
                <div className={styles.search__preview}>
                    <ul>
                        <h2>최근 검색어{recentSearches.length > 0 && <button onClick={AllDeleteClick}>모두 지우기<span>지우기</span></button>}</h2>
                        {recentSearches.length === 0? (
                            <li>검색 내역이 없습니다.</li>
                        ):(
                            recentSearches.map((item,idx)=>(
                                <li key={idx}><button className={styles.txt}>{item}</button><button className={styles.deleteBtn} onClick={()=>handleDeleteClick(idx)}>삭제</button></li>
                            ))
                        )}
                    </ul>
                    <ul className={styles.Popular}>
                        <h2>실시간 인기 검색어</h2>
                        {PopularSearchesTitle.map((tit, idx)=>(
                            <li key={idx}><button><span>{idx+1}</span><h3>{tit}</h3></button></li>
                        ))
                        }
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default SearchLayer;