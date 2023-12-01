import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Contents from './pages/Contents';
import Lazy from './pages/Lazy.js';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/contents/:id" element={<Contents />}/>
          <Route path="/lazy" element={<Lazy />}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
