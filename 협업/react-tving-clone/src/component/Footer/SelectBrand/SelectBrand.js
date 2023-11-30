import React from 'react'
import Select from 'react-select'
import './SelectBrand.scss'

const options = [
    { value: 'tvN', label: 'tvN' },
    { value: 'tvN SPORTS', label: 'tvN SPORTS' },
    { value: 'tvN STORY', label: 'tvN STORY' },
    { value: 'tvN DARAMA', label: 'tvN DARAMA' },
    { value: 'tvN SHOW', label: 'tvN SHOW' },
    { value: 'OCN', label: 'OCN' },
    { value: '중화TV', label: '중화TV' },
    { value: 'UXN', label: 'UXN' },
];



const SelectBrand = ()=>{
    return(
        <div className="react-select-wrap">
        <Select 
            className="SelectBrand"
            classNamePrefix="react-select"
            options={options}
            placeholder={'브랜드 바로가기 +'}
            isSearchable={false} // 검색기능 비활성화
            menuPlacement="top" // 드롭다운을 위로 열도록 설정
            value={null} // 처음에 아무 것도 선택되지 않도록 설정
        />
    </div>
    )
}

export default SelectBrand;