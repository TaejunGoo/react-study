import React, { useContext, useEffect, useState } from 'react';
import MyHeader from '../components/MyHeader';
import MyButton from '../components/MyButton';
import DiaryList from '../components/DiaryList';
import { DiaryStateContext } from '../App';

export default function Home() {
    useEffect(() => {
        const titleElement = document.getElementsByTagName('title')[0];
        titleElement.innerHTML = `EMOTION DIARY`;
    });
    const diaryList = useContext(DiaryStateContext);
    const [data, setData] = useState([]);
    const [curDate, setCurDate] = useState(new Date());
    const headText = `${curDate.getFullYear()}년 ${curDate.getMonth() + 1}월`;

    useEffect(() => {
        if (diaryList.length >= 1) {
            const firstDay = new Date(
                curDate.getFullYear(),
                curDate.getMonth(),
                1
            ).getTime();

            const lastDay = new Date(
                curDate.getFullYear(),
                curDate.getMonth() + 1,
                0,
                23,
                59,
                59
            ).getTime();
            setData(
                diaryList.filter(
                    (item) => firstDay <= item.date && item.date <= lastDay
                )
            );
        }
    }, [diaryList, curDate]);

    // useEffect(() => {
    //     console.log(data);
    // });

    const increaseMonth = () => {
        setCurDate(
            new Date(
                curDate.getFullYear(),
                curDate.getMonth() + 1
                // curDate.getDate()
            )
        );
    };
    const decreaseMonth = () => {
        setCurDate(
            new Date(
                curDate.getFullYear(),
                curDate.getMonth() - 1
                // curDate.getDate()
            )
        );
    };
    return (
        <>
            <MyHeader
                headText={headText}
                leftChild={
                    <MyButton text={'<'} onClick={() => decreaseMonth()} />
                }
                rightChild={
                    <MyButton text={'>'} onClick={() => increaseMonth()} />
                }
            />

            <DiaryList diaryList={data} />
        </>
    );
}
