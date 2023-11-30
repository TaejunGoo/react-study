import React, { useEffect } from 'react';
import Carousel from './Carousel/Carousel';
import useBandList from '../../hooks/use-bandList';

export default function CarouselList({ carouselType, bandName }) {
    const selectedBandData = useBandList(bandName);

    // useEffect(() => {
    //     console.log(selectedBandData);
    // }, [selectedBandData]);

    return (
        <>
            <Carousel carouselType={carouselType} bandData={selectedBandData} />
        </>
    );
}
CarouselList.defaultProps = {
    type: 'bandBasic',
    bandName: '오늘의 티빙 TOP10',
};
