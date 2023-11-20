import { useEffect, useState } from 'react';

import MoveList from './pages/MoveList';
import MyHeader from './component/MyHeader';

import './App.scss';


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
        <MoveList dataList={data}/>      
      }
    </div>
  );
}

export default App;
