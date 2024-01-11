import styled, {css} from "styled-components"

import HambergerIcon from 'assets/images/common/ico/header_ham.png';
import BackIcon from 'assets/images/common/ico/header_back.png';
import HomeIcon from 'assets/images/common/ico/header_home.png';
import BagIcon from 'assets/images/common/ico/header_bag.png';
import SearchIcon from 'assets/images/common/ico/header_search.png';

const iconList = {
  hamberger : HambergerIcon,
  back : BackIcon,
  home : HomeIcon,
  bag : BagIcon,
  search : SearchIcon
}

const StyledHeaderBtn = styled.button`
  width: 55px;
  height: 55px;
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  position: relative;
  cursor: pointer;
  .count {
    display: block;
    position: absolute;
    top: 15px;
    left: 25px;
    padding: 2.5px 5px;
    font-size: 8px;
    background: #eab19f;
    color: #fff;
    text-indent: 0;
    border-radius: 1000px;
  }
  ${({ $icon }) => css`
    background-image: url(${$icon});
  `}
`;

const MobileHeaderBtn = ({icon, onClick, altText, bagCount}) => {
  return (
    <StyledHeaderBtn $icon={iconList[icon]} onClick={onClick}>
      <span className="a11yHidden">{altText}</span>
      {
        bagCount && <span className="count">{bagCount}</span>
      }
    </StyledHeaderBtn>
  );
}

export default MobileHeaderBtn;