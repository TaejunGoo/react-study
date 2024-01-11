import styled from "styled-components";
import { Link } from "react-router-dom";
import HamIcon from 'assets/images/common/ico/navBar_ham.png';
import SearchIcon from 'assets/images/common/ico/navBar_search.png'
import HomeIcon from 'assets/images/common/ico/navBar_home.png'
import PickIcon from 'assets/images/common/ico/navBar_pick.png'
import MyIcon from 'assets/images/common/ico/navBar_my.png'
import { useUIState } from "utils/useUIState";


const StyledNavBar = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  box-sizing: border-box;
  z-index: 900;
  height: 65px;
  transition: .4s;
  background: #fff;
  &.scrollDown{
    bottom: -80px;
  }
  .wrapper{
    background: #fff;
    box-shadow: 0 -5px 15px rgba(0, 0, 0, 0.1);
  }
  .list{
    height: 65px;
    padding: 0 20px;
    box-sizing: border-box;
    display: flex;
    align-items: center;
  }
`;

const StyledItem = styled.li`
  width: 20%;
  a,button{
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 65px;
    box-sizing: border-box;
    position: relative;
    line-height: normal;
    cursor: pointer;
    img{
      width: 32.5px;
      height: 32.5px;
    }
    span{
      display: block;
      text-align: center;
      color: #888;
      letter-spacing: -0.02em;
      font-size: 11px;
      font-weight: 300;
    }
  }
`

const NavBar = () => {
  const UIState = useUIState()

  return (
    <StyledNavBar className={UIState.isScrollDown? 'scrollDown' : ''}>
      <div className="wrapper">
        <ul className="list">
          <StyledItem>
            <button type="button">
              <img src={HamIcon} alt="" />
              <span>카테고리</span>
            </button>
          </StyledItem>
          <StyledItem>
            <button type="button">
              <img src={SearchIcon} alt="" />
              <span>검색</span>
            </button>
          </StyledItem>
          <StyledItem>
            <Link to={'/'}>
              <img src={HomeIcon} alt="" />
              <span>홈</span>
            </Link>
          </StyledItem>
          <StyledItem>
            <button type="button">
              <img src={PickIcon} alt="" />
              <span>찜한 상품</span>
            </button>
          </StyledItem>
          <StyledItem>
            <Link to={'/'}>
              <img src={MyIcon} alt="" />
              <span>마이페이지</span>
            </Link>
          </StyledItem>
        </ul>
      </div>
    </StyledNavBar>
  ) 
}

export default NavBar;