import SlideItem from './../component/slider/SlideItem';
import {SwiperSlide} from 'swiper/react';

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
                        <SlideItem slideItem={item} isMain={true}/>
                    </SwiperSlide>
                    ))                    
                ),
                slideOptions : ({
                    navigation : true,
                    pagination : true,
                    spaceBetween:10,
                    autoplay: {
                        delay: 2500,
                        disableOnInteraction: false,
                    }
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
                            <SlideItem slideItem={item}/>
                        </SwiperSlide>
                    ))
                ),
                slideOptions: ({
                    navigation : true,
                    pagination :  {
                        el: '.swiper-pagination', 
                        clickable: true,
                    },
                    slidesPerView: 5,
                    slidesPerGroup:5,
                    spaceBetween:10,
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
                            <SlideItem slideItem={item} isRank={true} slideIdx={i}/>
                        </SwiperSlide>
                    ))
                ),
                slideOptions: ({
                    navigation : true,
                    pagination : true,
                    slidesPerView:5.5,
                    slidesPerGroup:5,
                    spaceBetween:10,
                })
            }
            break;
        case "BANNER_LINE":
            returnData = {
                className: "banner_line",
                listTit : undefined,
                slideItem : (
                    listData.items.map((item, i)=>(
                        <SwiperSlide key={`item-${i}`}>
                            <SlideItem slideItem={item}/>
                        </SwiperSlide>
                    ))
                ),
                slideOptions: ({
                    spaceBetween:10,
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
                        <SlideItem slideItem={item}/>
                    </SwiperSlide>
                ))
            ),
            slideOptions: ({
                navigation : true,
                pagination : true,
                slidesPerView:7,
                slidesPerGroup:7,
                spaceBetween:10,
            })
        };
    }
    return returnData
}