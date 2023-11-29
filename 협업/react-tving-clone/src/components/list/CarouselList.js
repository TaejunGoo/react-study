import React, { useEffect } from 'react';
import Carousel from './Carousel/Carousel';
import useBandList from '../../hooks/use-bandList';

export default function CarouselList({ type, bandName }) {
    const selectedBandData = useBandList(bandName);

    // useEffect(() => {
    //     console.log(selectedBandData);
    // }, [selectedBandData]);

    return (
        <>
            <Carousel type={type} bandData={selectedBandData} />
        </>
    );
}
CarouselList.defaultProps = {
    type: 'bandBasic',
    bandName: '오늘의 티빙 TOP10',
};
