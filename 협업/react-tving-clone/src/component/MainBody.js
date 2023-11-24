import { useContext } from 'react';
import { MoveStateContext } from './../App';
import Slider from './slider/Slider'

import {main} from './../utils/main';

import classNames from 'classnames/bind';
import MainBodyStyle from './MainBody.module.scss'
const cx = classNames.bind(MainBodyStyle);

console.log(MainBodyStyle);

const MainBody = () => {    
    const moveList = useContext(MoveStateContext);
    
    return(
        <div className={cx("content_wrap")}>
        {
            moveList.map((el,i)=>
                <section className={cx([main(el).className])} key={`${main(el).className}-${i}`}>
                    {
                        main(el).listTit && <p className={cx("slider_tit")}>{main(el).listTit}</p>
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