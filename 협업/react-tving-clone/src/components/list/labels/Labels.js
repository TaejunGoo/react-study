import React from 'react';
import Label from '../label/Label';

export default function Labels({ item }) {
    // const LabelProps = {
    //     vOnly: '',
    //     vOriginal: '',
    //     isNew: '',
    //     isAge19: '',
    //     isAge19: '',
    //     isDub: '',
    //     isSubtitles: '',
    // }
    const labelList = item.label
        ? Object.keys(item.label).filter((key) => item.label[key])
        : [];

    return <Label labelList={labelList} />;
}
