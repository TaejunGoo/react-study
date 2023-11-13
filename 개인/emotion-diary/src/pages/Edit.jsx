import React from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';

export default function Edit() {
    const navigate = useNavigate();
    const [searchParams, setSearchParams] = useSearchParams();
    const id = searchParams.get('id');
    console.log('id:', id);
    const mode = searchParams.get('mode');
    console.log('id:', mode);

    return (
        <div>
            <h1>Edit</h1>
            <p>이곳은 일기 수정 페이지 입니다.</p>
            <button onClick={() => setSearchParams({ who: 'winterlood' })}>
                QS바꾸기
            </button>

            <button onClick={() => navigate('/home')}>HOME으로 가기</button>
            <button onClick={() => navigate(-1)}>뒤로 가기</button>
        </div>
    );
}
