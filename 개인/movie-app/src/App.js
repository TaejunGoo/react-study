import React, { useEffect, useState } from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';

import MoveList from './pages/MoveList';
import Detail from './pages/Detail';
import MyHeader from './component/MyHeader';

import './App.scss';

export const MoveStateContext = React.createContext();

function App() {
  const [data, setData] = useState([]);

  const logData = async() => {
    const result = await fetch("https://yts-proxy.nomadcoders1.now.sh/list_movies.json")
    .then((response)=>response.json());       
    setData(result.data.movies);
  }

  useEffect(()=>{
    logData()
  },[])

  return (
    <div className="App">
      <MyHeader/>
      {
        data.length<1 ? <div style={{'width':`${100}%`,'textAlign' : 'center','padding':'50px','boxSizing':'border-box'}}>로딩 중</div> : 
        <MoveStateContext.Provider value={data}>
           <BrowserRouter>
            <Routes>
              <Route path='/' element={<MoveList/>}></Route>
              <Route path='/detail/:id' element={<Detail/>}></Route>
            </Routes>     
          </BrowserRouter>
        </MoveStateContext.Provider>

       
      }
    </div>
  );
}

export default App;
