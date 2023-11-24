import React, { useEffect, useState } from 'react';
import Carousel from './Carousel/Carousel';
import { getBandData } from './bands';

export default function CarouselList({ type, bandName }) {
    // const type
    // const bandData = bands.todayTop10List;
    // const bandNames = {
    //     '오늘의 티빙 TOP10': todayTop10List,
    //     '지금 방영중인 인기 콘텐츠': PopularList,
    // };
    const [selectedBandData, setSelectedBandData] = useState(
        getBandData(bandName)
    );
    useEffect(() => {
        console.log(getBandData(bandName));
        setSelectedBandData(getBandData(bandName));
    }, [bandName]);

    // const selectedBand = bandNames[bandName];

    // useEffect(() => {
    //     console.log(selectedBand);
    //     console.log(todayTop10List());
    // }, []);

    return (
        <>
            <Carousel type={type} bandData={selectedBandData} />
        </>
    );
}
