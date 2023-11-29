import {Route, Routes, BrowserRouter} from 'react-router-dom';

import React, {useEffect, useState} from 'react';
import Main from './pages/Main';
import Detail from './pages/Detail';

import './assets/css/reset.scss'
import './assets/css/global.scss'

import {itemList} from './utils/itemList';

export const MoveStateContext = React.createContext();

function App(){
  const [moveList, setMoveList] = useState(itemList);

  // useEffect(()=>{
  //   setMoveList(itemList);
  // },[])

  return(
    <MoveStateContext.Provider value={moveList}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main/>}/>
          <Route path="/detail" element={<Detail/>}/>
        </Routes>
      </BrowserRouter>
    </MoveStateContext.Provider>
  
  )
}

export default App;