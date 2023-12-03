import React, { useEffect } from 'react';
import Carousel from './Carousel/Carousel';
import useBandList from '../../hooks/use-bandList';

export default function CarouselList({
    carouselType,
    bandName,
    perView,
    itemType,
}) {
    const selectedBandData = useBandList(bandName);

    // useEffect(() => {
    //     console.log(selectedBandData);
    // }, [selectedBandData]);

    return (
        <>
            <Carousel
                carouselType={carouselType}
                bandData={selectedBandData}
                perView={perView}
                itemType={itemType}
            />
        </>
    );
}
CarouselList.defaultProps = {
    type: 'bandBasic',
    bandName: '오늘의 티빙 TOP10',
};
