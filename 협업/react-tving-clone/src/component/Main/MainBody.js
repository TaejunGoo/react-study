import { useContext } from 'react';
import { MoveStateContext } from './../App';
import Slider from './slider/Slider'

import {main} from './../utils/main';
import './MainBody.scss'
const MainBody = () => {    
    const moveList = useContext(MoveStateContext);
    
    return(
        <div className={"content_wrap"}>
        {
            moveList.map((el,i)=>
                <section className={["slider",main(el).className].join(" ")} key={`${main(el).className}-${i}`}>
                    {
                        main(el).listTit && <p className={"slider_tit"}>{main(el).listTit}</p>
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
        </div>        
    )
}

export default MainBody;