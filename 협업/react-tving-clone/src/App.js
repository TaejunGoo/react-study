import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import './assets/css/reset.scss'

import Header from './assets/component/Header';
import Footer from './assets/component/Footer';
import Container from './assets/component/Container';

import Home from './assets/pages/Home'
import A from './assets/pages/A'
import B from './assets/pages/B'
import C from './assets/pages/C'
import D from './assets/pages/D'



function App(){
    return(
        <BrowserRouter>
            <div className='App'>
                <Header />
                <Container>
                    <Routes>
                        <Route path='/' element={<Home />} />
                        <Route path='/A' element={<A />} />
                        <Route path='/B' element={<B />} />
                        <Route path='/C' element={<C />} />
                        <Route path='/D' element={<D />} />
                    </Routes>
                </Container>
                <Footer />
                <div>test</div>
            </div>
        </BrowserRouter>
    )
}

export default App;