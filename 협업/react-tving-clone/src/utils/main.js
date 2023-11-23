import {SwiperSlide} from 'swiper/react' ;
export const main = (listData) => {
    const key = listData.bandType;
    let returnData = {}
    switch(key){
        case "BANNER_MAIN": 
            returnData={                
                listTit : listData.bandName || undefined,
                slideItem : (
                    listData.items.map((item)=>(    
                    <SwiperSlide>
                        <div>
                            <div className='banner_img'>
                                <img src={item.imageUrl} alt=''/>
                            </div>
                            <div className="disc_box">
                                <p className='tit'>{
                                    item.titleImageUrl ? <img src={item.titleImageUrl} alt=''></img> :
                                    item.title1 || item.title2
                                }</p>
                                <p className='desc'>
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
                    autoplay: {
                        delay: 2500,
                        disableOnInteraction: false,
                    }
                })
            }
            break;
        case "VOD_SPECIAL_BUTTON":
            returnData = {                
                listTit : listData.bandName || undefined,
                slideItem : (
                    listData.items.map((item)=>(
                        <SwiperSlide>
                            <div>
                                <div className='banner_img'>
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
                listTit : listData.bandName || undefined,
                slideItem : (
                    listData.items.map((item, i)=>(
                        <SwiperSlide>
                            <div>
                                <div className='banner_img'>
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
            listTit : listData.bandName || undefined,
            slideItem : (
                listData.items.map((item)=>(
                    <SwiperSlide>
                        <div>
                            <div className='banner_img'>
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