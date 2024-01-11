import styled from "styled-components";
const StyledHeaderUtil = styled.div`
  position: relative;
  width: 100%;
  height: 55px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  .logo{
    width: 70.5px;
    height: 100%;
    order: 2;
    a{
      display: block;
      width: 100%;
      height: 100%;
      background: url('assets/images/common/logo/logo.png') no-repeat center;
      background-size: contain;
      text-indent: -9999px;
    }
  }
  .btnArea{
    display: flex;
    align-items: center;
    &.left{
      padding-left: 10px;
    }
    &.right{
      padding-right: 10px;
    }
  }
`

const MobileHeaderUtil = ({leftChildren, centerChildren, rightChildren}) => {
  return (
    <StyledHeaderUtil>
      <div className="btnArea left">
        {leftChildren}
      </div>
      <div className="center">
        {centerChildren}
      </div>
      <div className="btnArea right">
        {rightChildren}
      </div>
    </StyledHeaderUtil>
  )
}

export default MobileHeaderUtil;