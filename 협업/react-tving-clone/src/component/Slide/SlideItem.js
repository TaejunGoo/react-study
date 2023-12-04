import React from 'react';
import { useNavigate } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import {labelType} from './../../utils/labelType';
import 'react-lazy-load-image-component/src/effects/blur.css';

const RenderLabel = ({obj, direction}) => {
    const renderItem = obj.filter(item=> {return item.align === direction});
    return (
        renderItem.length>0 &&
        <div className={['label_wrap',`label_wrap-${direction}`].join(" ")}>
            {
                renderItem.map((item,i)=>{
                    return(
                        <div className='label' style={{"backgroundColor": item.bgColor || "transparent"}} key={`label-${i}`}>
                            {item.text.toLocaleUpperCase()}
                        </div>
                    )
                })
            }            
        </div>
    )
}

const SlideItem = (props) => {
    const navigate = useNavigate();
    const {slideItem, isRank, slideIdx, isMain} = props;

    const trueTypes = slideItem.label ? Object.keys(slideItem.label).filter(key => slideItem.label[key]) : '';
    const returnLabel = labelType.filter((item)=> trueTypes.includes(item.type)); 
    return(
        <div className={"slide_item"} onClick={()=>{navigate('/detail', {replace : false})}}>
            {isMain || <RenderLabel obj={returnLabel} direction={'lt'}/>}
            {isMain || <RenderLabel obj={returnLabel} direction={'rt'}/>}
            {isMain || <RenderLabel obj={returnLabel} direction={'ct'}/>}

            {isRank && <p className={"rank_num"}>{slideIdx+1}</p> }
            {isMain && 
                (<div className={"disc_box"}>
                    {returnLabel.map((item,i)=>{
                        return(
                            <div className={["label","label-main"].join(" ")} key={`label-${i}`}>
                                {item.text.toLocaleUpperCase()}
                            </div>
                        )
                    })}
                    <p className={"tit"}>{
                        slideItem.titleImageUrl ? <img src={slideItem.titleImageUrl} alt=''></img> :
                        slideItem.title1 || slideItem.title2
                    }</p>
                    <p className={"desc"}>
                        {
                            (slideItem.description || []).map((desc, index) => (
                                <span key={index}>{desc}</span>
                            ))
                        }
                    </p>
                </div>
                )
            }
                <div className={"banner_img"}>
                    <LazyLoadImage src={slideItem.imageUrl} delayTime={100} effect="blur" alt=''/>
                    {isMain || 
                    <span className='blind'>{slideItem.title}</span>}            
                </div>
            
        </div> 
    )
}

export default SlideItem;