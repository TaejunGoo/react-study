import { useContext } from 'react';
import { MoveStateContext } from './../../App';
import Slider from './../Slide/Slider';

import {main} from './../../utils/main';
import './MainBody.scss'
const MainBody = () => {    
    const moveList = useContext(MoveStateContext);

    return(
        <div className={"content_wrap"}>
        {
            moveList.map((el,i)=>{
                const {className, listTit, slideItem , slideOptions} = main(el);
                return(
                    <section key={`${className}-${i}`} className={["slider",className].join(" ")}>
                        {
                            listTit && <p className={"slider_tit"}>{listTit}</p>
                        }
                        <Slider 
                            slideItem={
                                slideItem
                            }
                            slideOptions={slideOptions}>
                        </Slider>
                    </section>
                )
            }
                
            )
        }
        </div>        
    )
}

export default MainBody;