import React, { useContext, useEffect, useState } from 'react';
import MyHeader from '../components/MyHeader';
import MyButton from '../components/MyButton';
import DiaryList from '../components/DiaryList';
import { DiaryStateContext } from '../App';

export default function Home() {
    const { diaryList } = useContext(DiaryStateContext);

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
                curDate.getMonth(),
                0
            ).getTime();
            setData(
                diaryList.filter(
                    (item) => firstDay <= item.day && item.day <= lastDay
                )
            );
        }
    }, [diaryList, curDate]);
    const increaseMonth = () => {
        console.log(curDate);
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

            <DiaryList />
        </>
    );
}
