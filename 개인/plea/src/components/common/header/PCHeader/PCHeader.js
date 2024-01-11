import React,{ useRef, useState } from 'react';
import styled from 'styled-components'
import { Link } from 'react-router-dom';
import DropTailIcon from 'assets/images/common/bg/bg_comma.png';
import PCLogo from './PCLogo/PCLogo';
import PCSearchbar from './PCSearchbar/PCSearchbar';
import PCHeaderBtn from './PCHeaderBtn/PCHeaderBtn';
import PCHeaderNav from './PCHeaderNav/PCHeaderNav';
import { useUIState } from 'utils/useUIState';
import useClickOutside from 'utils/useClickOutside';

const StyledPCHeader = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  z-index: 100;
`

const StyledContainer = styled.div`
  border-bottom: 1px solid #efefef;
  background: #fff;
  transition: .4s;
  &.transparent{
    background: transparent;
    border-bottom-color: rgba(255, 255, 255, 0.15);
  }
`

const StyledWrapper = styled.div`
  max-width: 1240px;
  height: 90px;
  padding: 0 20px;
  margin: 0 auto;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: space-between;
  .leftArea,
  .rightArea {
    display: flex;
    align-items: center;
  }
  .leftArea {
    gap: 20px;
  }
  .rightArea {
    gap: 5px;
  }
  .dropContainer {
    position: relative;
  }
`;

const StyledLoginSet = styled.div`
  display: flex;
  align-items: center;
  gap: 35px;
  a{
    display: block;
    color: #222;
    font-size: 16px;
    position: relative;
    & + a::before{
      content: '';
      display: block;
      position: absolute;
      top: 50%;
      left: -19.5px;
      width: 1px;
      height: 16px;
      margin-top: -8px;
      background: #222;
    }
  }
`

const StyledDropdown = styled.ul`
  position: absolute;
  top: calc(100% + 10px);
  left: 50%;
  min-width: max-content;
  z-index: 99;
  background: #fff;
  border: 1px solid #ccc;
  border-radius: 9px;
  transform: translateX(-50%);
  &::before{
    content: '';
    display: block;
    position: absolute;
    width: 20px;
    height: 12px;
    background-image: url(${DropTailIcon});
    background-size: 100%;
    background-position: center;
    background-repeat: no-repeat;
    top: -12px;
    left: 50%;
    margin-left: -10px;
  }
  li{
    padding: 2px;
    border-top: 1px solid #ccc;
    &:first-child{
      border-top: 0;
    }
  }
  a,button{
    display: block;
    font-size: 16px;
    padding: 0 20px;
    width: 113px;
    height: 40px;
    line-height: 40px;
    box-sizing: border-box;
    white-space: nowrap;
    cursor: pointer;
    &:hover{
      background: #f4f4f4;
    }
  }
`

const PCHeader = ({isLogin}) => {
  const UIState = useUIState();
  const [dropVisible, setDropVisible] = useState(false);
  
  const closeDrop = () => {
    setDropVisible(false)
  }
  
  const toggleDrop = () => {
    setDropVisible(!dropVisible)
  }
  const drop = useRef();
  useClickOutside(drop, closeDrop)

  return (
    <StyledPCHeader>
      <StyledContainer className={UIState.isTransparent? "transparent" : ""}>
        <StyledWrapper>
          <div className="leftArea">
            <PCLogo />
            <PCSearchbar />
          </div>
          <div className="rightArea">
            {
              isLogin? (
                <>
                  <div className='dropContainer'>
                    <PCHeaderBtn icon={'my'} ref={drop} onClick={() => toggleDrop()}/>
                    {
                      dropVisible && <StyledDropdown>
                        <li><button type='button'>마이페이지</button></li>
                        <li><button type='button'>주문/배송</button></li>
                        <li><button type='button'>고객센터</button></li>
                        <li><button type='button'>설정</button></li>
                        <li><button type='button'>로그아웃</button></li>
                      </StyledDropdown>
                    }
                  </div>
                  <PCHeaderBtn icon={'bag'} bagCount={100}/>
                </>
              ) : (
                <StyledLoginSet>
                  <Link to='/'>로그인</Link>
                  <Link to='/'>회원가입</Link>
                </StyledLoginSet>
              )
            }
          </div>
        </StyledWrapper>
        <PCHeaderNav isScrollDown={UIState.isScrollDown} isTransparent={UIState.isTransparent}/>
      </StyledContainer>
    </StyledPCHeader>
  )
}

export default React.memo(PCHeader);

PCHeader.defaultProps = {
  isLogin: true
}