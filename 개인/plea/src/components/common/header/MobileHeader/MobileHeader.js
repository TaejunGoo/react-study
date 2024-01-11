import styled from "styled-components";
import MobileHeaderUtil from "./MobileHeaderUtil/MobileHeaderUtil";
import MobileHeaderNav from "./MobileHeaderNav/MobileHeaderNav";
import { useUIState } from "utils/useUIState";
const StyledMobileHeader = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  border-bottom: 1px solid #ddd;
  transition: .4s;
  background-color: #fff;
  z-index: 100;
  &.scrollDown{
    margin-top: -55px;
  }
  &.transparent{
    background-color: transparent;
    border-bottom-color: transparent;
  }
`
const MobileHeader = ({
  leftChildren,
  centerChildren,
  rightChildren
}) => {
  const UIState = useUIState();
  return (
    <StyledMobileHeader
      className={
        (UIState.isScrollDown ? "scrollDown" : "") +
        (UIState.isTransparent ? "transparent" : "")
      }
    >
      <MobileHeaderUtil
        leftChildren={leftChildren}
        centerChildren={centerChildren}
        rightChildren={rightChildren}
      />
      <MobileHeaderNav />
    </StyledMobileHeader>
  );
};

export default MobileHeader;

MobileHeader.defaultProps = {
  leftChildren: null,
  centerChildren: null,
  rightChildren: null,
}