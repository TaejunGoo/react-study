import React from 'react';
import MainBannerItem from '../items/mainBannerItem/MainBannerItem';
import ChannelButtonItem from '../items/channelButtonItem/ChannelButtonItem';
import RankBandItem from '../items/rankBandItem/RankBandItem';
import OriginItem from '../items/originItem/OriginItem';
import BasicBandItem from '../items/basicBandItem/BasicBandItem';

export default function CarouselItem({ item, idx, itemType }) {
    const components = {
        MainBannerItem,
        ChannelButtonItem,
        RankBandItem,
        OriginItem,
        BasicBandItem,
    };

    const ItemComponent = components[itemType];

    return <>{ItemComponent && <ItemComponent item={item} idx={idx} />}</>;
}
