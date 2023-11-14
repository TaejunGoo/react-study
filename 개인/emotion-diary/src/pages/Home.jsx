import React from 'react';
import MyHeader from '../components/MyHeader';
import MyButton from '../components/MyButton';
import DiaryList from '../components/DiaryList';

export default function Home() {
    return (
        <>
            <MyHeader
                headText={'2023년 11월'}
                leftChild={
                    <MyButton
                        text={'이전 달'}
                        onClick={() => alert('왼쪽 클릭')}
                    />
                }
                rightChild={
                    <MyButton
                        text={'다음 달'}
                        onClick={() => alert('왼쪽 클릭')}
                    />
                }
            />

            <DiaryList />
        </>
    );
}
