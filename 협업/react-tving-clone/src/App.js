import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './assets/css/reset.scss';
import './assets/css/common.scss';
import { itemList } from './utils/itemList';
import { itemDetail } from './utils/itemDetail';
import Detail from './pages/Detail/Detail';

export const ListStateContext = React.createContext();
export const DetailStateContext = React.createContext();

function App(){
    return(
        <ListStateContext.Provider value={itemList}>
            <DetailStateContext.Provider value={itemDetail}>
                <BrowserRouter>
                    <div className="App">
                        <Detail />
                    </div>
                </BrowserRouter>
            </DetailStateContext.Provider>
        </ListStateContext.Provider>
    )
}

export default App;