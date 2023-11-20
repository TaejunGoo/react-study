import React, { useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import DiaryEditor from '../components/DiaryEditor';
import { DiaryStateContext } from '../App';

export default function Edit() {
    useEffect(() => {
        const titleElement = document.getElementsByTagName('title')[0];
        titleElement.innerHTML = `EMOTION DIARY - ${id}번 일기 수정`;
    });

    const [originData, setOriginData] = useState();
    const navigate = useNavigate();
    const { id } = useParams();

    const diaryList = useContext(DiaryStateContext);

    useEffect(() => {
        if (diaryList.length >= 1) {
            const targetDiary = diaryList.find(
                (item) => parseInt(item.id) === parseInt(id)
            );
            if (targetDiary) {
                setOriginData(targetDiary);
            } else {
                navigate('/', { replace: true });
            }
        }
    }, [id, diaryList, navigate]);
    return (
        <>
            {originData && (
                <DiaryEditor isEdit={true} originData={originData} />
            )}
        </>
    );
}
