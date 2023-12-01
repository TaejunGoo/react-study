import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import 'react-lazy-load-image-component/src/effects/blur.css';


const LazyImg = ({image, placeholder}) => {
    return (
        <div>
            <LazyLoadImage 
                src={image}
                effect={"blur"}
                placeholder={placeholder}
                threshold={0}
                afterLoad={() => {
                    console.log('after')
                }}
                beforeLoad={() => {
                    console.log('before')
                }}
            />
        </div>
    );
};

export default LazyImg;