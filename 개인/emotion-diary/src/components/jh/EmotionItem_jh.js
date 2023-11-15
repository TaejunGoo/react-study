import { useState } from 'react';

const EmotionItem = ({value, name, isChked, changeActiveEmotion}) => {
    const env = process.env;
    env.PUBLIC_URL = env.PUBLIC_URL || "";

    const [isChk, setIsChk] = useState(isChked);

    const chkChange = () => {
        setIsChk(!isChk)
        changeActiveEmotion(value-1);
    }

    return(
        <div className={['EmotionItem',`${isChked?'EmotionItem-on':'EmotionItem-off'}`].join(" ")} onClick={chkChange}>
            <img src={process.env.PUBLIC_URL + `/assets/emotion${value}.png`} alt=''/>
            <span>{name}</span>
        </div>
    )
}

export default EmotionItem;