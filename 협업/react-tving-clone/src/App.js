import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import './assets/css/reset.scss'
import './assets/css/common.scss'

import Header from './component/Header/Header';
import Footer from './component/Footer/Footer';
import Container from './component/Container';

import Home from './pages/Home'
import Series from './pages/Series'
import Movie from './pages/Movie'
import Live from './pages/Live'
import Paramount from './pages/Paramount'



function App(){
    return(
        <BrowserRouter>
            <div className='App'>
                <Header />
                <Container>
                    <Routes>
                        <Route path='/' element={<Home />} />
                        <Route path='/Series' element={<Series />} />
                        <Route path='/Movie' element={<Movie />} />
                        <Route path='/Live' element={<Live />} />
                        <Route path='/Paramount' element={<Paramount />} />
                    </Routes>
                </Container>
                <Footer />
            </div>
        </BrowserRouter>
    )
}

export default App;