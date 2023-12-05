import React from 'react'
import Select from 'react-select'

import './Selectbox.scss'

const Selectbox = ({options, placeholder})=>{

    const handleSelectLink = (selectedOption)=>{
        if(selectedOption && selectedOption.link){
            window.open(selectedOption.link, '_blank');
        }
    }
    return(
        <div className="react-select-wrap">
            <Select 
                className="Selectbox"
                classNamePrefix="react-select"
                options={options}
                placeholder={placeholder}
                isSearchable={false} // 검색기능 비활성화
                menuPlacement="top" // 드롭다운을 위로 열도록 설정
                value={null} // 처음에 아무 것도 선택되지 않도록 설정
                onChange={handleSelectLink}
            />
        </div>
    )
}

Selectbox.defaultProps = {
    options:[]
}

export default Selectbox;