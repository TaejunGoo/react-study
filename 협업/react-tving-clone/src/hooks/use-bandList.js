import { useEffect, useState } from 'react';

export default function useBandList(bandName1) {
    const [bandData, setBandData] = useState([]);

    useEffect(() => {
        const getBandData = async () => {
            try {
                const bandJSONData = await fetch(
                    '/assets/data/bandList.json'
                ).then((res) => res.json());
                setBandData(bandJSONData);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        getBandData();
    }, []);

    const selectedBand = bandData.find((item) => item.bandName === bandName1);
    return selectedBand ? selectedBand.items : [];
}
