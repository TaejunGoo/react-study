import {labelType} from './../../utils/labelType';

const SlideItem = ({slideItem, isRank, slideIdx, isMain}) => {
    const trueTypes = slideItem.label ? Object.keys(slideItem.label).filter(key => slideItem.label[key]) : '';
    const returnLabel = labelType.filter((item)=> trueTypes.includes(item.type))
    return(
        <div className={"slide_item"}>
            {trueTypes.length > 0 && 
                returnLabel.map((item, i)=>{
                return(
                    <div className={["label",`label-${item.align}`].join(" ")} style={{"backgroundColor": item.bgColor || "transparent", "display" : isMain && "block"}} key={`label-${i}`}>{item.text.toLocaleUpperCase()}</div>
                )
            })}
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
                <img src={slideItem.imageUrl} alt=''/>
            </div>            
        </div> 
    )
}

export default SlideItem;