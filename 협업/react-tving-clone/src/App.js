import React from 'react';
import './assets/css/reset.scss';
import { itemList } from './utils/itemList';
import { itemDetail } from './utils/itemDetail';
import Detail from './pages/Detail';

export const ListStateContext = React.createContext();
export const DetailStateContext = React.createContext();

function App(){
    return(
        <ListStateContext.Provider value={itemList}>
            <DetailStateContext.Provider value={itemDetail}>
                <div className="App">
                    <Detail />
                </div>
            </DetailStateContext.Provider>
        </ListStateContext.Provider>
    )
}

export default App;