import React from "react";
import styled, {css} from "styled-components"

import MyIcon from 'assets/images/common/ico/header_my_pc.png';
import BagIcon from 'assets/images/common/ico/header_bag_pc.png';

const iconList = {
  bag : BagIcon,
  my: MyIcon
}

const StyledHeaderBtn = styled.button`
  width: 60px;
  height: 60px;
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  position: relative;
  cursor: pointer;
  .count {
    display: block;
    position: absolute;
    top: 14px;
    left: 28px;
    padding: 0 5px;
    font-size: 10px;
    line-height: 16px;
    height: 16px;
    background: #eab19f;
    color: #fff;
    text-indent: 0;
    border-radius: 1000px;
  }
  ${({ $icon }) => css`
    background-image: url(${$icon});
  `}
`;

const PCHeaderBtn = (props, ref) => {
  return (
    <StyledHeaderBtn $icon={iconList[props.icon]} onClick={props.onClick} ref={ref}>
      <span className="a11yHidden">{props.altText}</span>
      {
        props.bagCount && <span className="count">{props.bagCount}</span>
      }
    </StyledHeaderBtn>
  );
}

export default React.forwardRef(PCHeaderBtn);