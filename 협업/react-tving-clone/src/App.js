import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Contents from './pages/Contents';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/contents/:id" element={<Contents />}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
