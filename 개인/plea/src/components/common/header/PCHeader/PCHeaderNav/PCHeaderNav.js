import styled, { css } from "styled-components";
import { navList } from "tempData/navList";
import hamIcon from "assets/images/common/ico/ico_header_ham_pc.png";
import { useLocation, Link } from "react-router-dom";

const StyledNav = styled.nav`
  position: fixed;
  top: 90px;
  left: 0;
  right: 0;
  width: 100%;
  height: 60px;
  transition: 0.4s;
  background: #f7f7f7;
  z-index: -1;
  &.scrollDown{
    margin-top: -62px;
  }
  &.transparent{
    background: transparent;
  }
`;

const StyledWrapper = styled.div`
  max-width: 1240px;
  height: 60px;
  padding: 0 20px;
  margin: 0 auto;
  position: relative;
  box-sizing: border-box;
  display: flex;
  align-items: center;
`;

const StyledHamBtn = styled.button`
  width: 36px;
  height: 36px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: 24px;
  background-image: url(${hamIcon});
  cursor: pointer;
  margin-left: -7px;
`;

const StyledList = styled.ul`
  display: flex;
  align-items: center;
  gap: 38px;
  margin-left: 40px;
`;

const StyledLink = styled(Link)`
  display: block;
  font-size: 16px;
  position: relative;
  &:hover{
    font-weight: 500;
  }
  ${({ $isNow }) => {
    return (
      $isNow &&
      css`
        font-weight: 500;
        &::after {
          content: "";
          display: block;
          position: absolute;
          width: calc(100% + 2px);
          height: 1px;
          background: #222;
          bottom: -5px;
          left: -1px;
        }
      `
    );
  }}
  ${({ $isDot }) => {
    return (
      $isDot &&
      css`
        &::after {
          content: "";
          display: block;
          width: 8px;
          height: 8px;
          border-radius: 100vw;
          background: #eab19f;
          position: absolute;
          top: -5px;
          right: -9px;
        }
      `
    );
  }}
`;

const PCHeaderNav = ({isScrollDown, isTransparent}) => {
  const location = useLocation();
  return (
    <StyledNav className={(isScrollDown? 'scrollDown' : '') + (isTransparent? 'transparent' : '')}>
      <StyledWrapper>
        <StyledHamBtn>
          <span className="a11yHidden">카테고리</span>
        </StyledHamBtn>
        <StyledList>
          {navList.map((it) => {
            const isNow = it.path === location.pathname;
            return (
              <li key={it.path}>
                <StyledLink to={it.path} $isDot={it.dot} $isNow={isNow}>
                  {it.title}
                </StyledLink>
              </li>
            );
          })}
        </StyledList>
      </StyledWrapper>
    </StyledNav>
  );
};

export default PCHeaderNav;
