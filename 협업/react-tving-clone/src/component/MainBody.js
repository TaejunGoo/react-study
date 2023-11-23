import { useContext } from 'react';
import { MoveStateContext } from './../App';
import Slider from './slider/Slider'

import {main} from './../utils/main'

const MainBody = () => {    
    const moveList = useContext(MoveStateContext);
    return(
        <>
        {
            moveList.map((el)=>
                <section>
                    {
                        main(el).listTit && <p>{main(el).listTit}</p>
                    }
                    <Slider 
                        slideItem={
                            main(el).slideItem
                        }
                        slideOptions={main(el).slideOptions}>
                    </Slider>
                </section>
            )
        }
        </>        
    )
}

export default MainBody;