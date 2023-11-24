import {SwiperSlide} from 'swiper/react' ;
import classNames from 'classnames/bind';
import MainBodyStyle from './../component/MainBody.module.scss'

const cx = classNames.bind(MainBodyStyle);

export const main = (listData) => {
    const key = listData.bandType;
    let returnData = {}
    switch(key){
        case "BANNER_MAIN": 
            returnData={         
                className : "main_slider",       
                listTit : listData.bandName || undefined,
                slideItem : (
                    listData.items.map((item,i)=>(    
                    <SwiperSlide key={`item-${i}`}>
                        <div className={cx("slide_item")}>
                            <div className={cx("banner_img")}>
                                <img src={item.imageUrl} alt=''/>
                            </div>
                            <div className={cx("disc_box")}>
                                <p className={cx("tit")}>{
                                    item.titleImageUrl ? <img src={item.titleImageUrl} alt=''></img> :
                                    item.title1 || item.title2
                                }</p>
                                <p className={cx("desc")}>
                                    {
                                        (item.description || []).map((desc, index) => (
                                            <span key={index}>{desc}</span>
                                        ))
                                    }
                                </p>
                            </div>
                        </div>                    
                    </SwiperSlide>
                    ))                    
                ),
                slideOptions : ({
                    navigation : true,
                    pagination : true,
                    // autoplay: {
                    //     delay: 2500,
                    //     disableOnInteraction: false,
                    // }
                })
            }
            break;
        case "VOD_SPECIAL_BUTTON":
            returnData = {         
                className:"button_slider",       
                listTit : listData.bandName || undefined,
                slideItem : (
                    listData.items.map((item,i)=>(
                        <SwiperSlide key={`item-${i}`}>
                            <div className={cx("slide_item")}>
                                <div className={cx("banner_img")}>
                                    <img src={item.imageUrl} alt=''/>
                                </div>
                            </div>                        
                        </SwiperSlide>
                    ))
                ),
                slideOptions: ({
                    navigation : true,
                    pagination : true,
                    slidesPerView:3
                })
            }
            break;
        case "VOD_BASIC_RANKING":
            returnData = {
                className: "ranking_slider",
                listTit : listData.bandName || undefined,
                slideItem : (
                    listData.items.map((item, i)=>(
                        <SwiperSlide key={`item-${i}`}>
                            <div className={cx("slide_item")}>
                                <div className={cx("banner_img")}>
                                    <img src={item.imageUrl} alt=''/>
                                </div>
                                <p>{i+1}</p>
                            </div>                        
                        </SwiperSlide>
                    ))
                ),
                slideOptions: ({
                    navigation : true,
                    pagination : true,
                    slidesPerView:4
                })
            }
            break;
        default :
        returnData = {
            className: "default_slider",
            listTit : listData.bandName || undefined,
            slideItem : (
                listData.items.map((item, i)=>(
                    <SwiperSlide key={`item-${i}`}>
                        <div className={cx("slide_item")}>
                            <div className={cx("banner_img")}>
                                <img src={item.imageUrl} alt=''/>
                            </div>
                        </div>                        
                    </SwiperSlide>
                ))
            ),
            slideOptions: ({
                navigation : true,
                pagination : true,
                slidesPerView:4
            })
        };
    }
    return returnData
}