import React, { useState } from "react";
import Select from "react-select";
import './DesignSelect.scss';

const DesignSelect = ({options, menuPlacement, placeholder, onChange, isChangeable}) => {
  const [selected, setSelected] = useState();
  const handleChange = (e) => {
    isChangeable? setSelected(e) : setSelected(null);
    onChange(e);
  };

  return (
    <div className="react-select-wrap">
        <Select 
            className="react-select"
            classNamePrefix="react-select"
            isSearchable={false}
            menuPlacement={menuPlacement}
            placeholder={placeholder}
            options={options}
            value={selected}
            onChange={(e) => {handleChange(e)}}
        />
    </div>
  );
};

DesignSelect.defaultProps = {
  menuPlacement : 'top',
  placeholder : '선택',
  options : {},
  onChange : () => {return true},
  isChangeable: true,
};

export default DesignSelect;
