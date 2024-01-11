import React from "react";
import styled,{css} from "styled-components";
const StyledWrapper = styled.div`
  position: relative;
  min-height: 100vh;
  box-sizing: border-box;
  padding-top: 106px;
  @media ${({theme}) => theme.device.pc} {
    padding-top: 150px;
  }
  ${
    ({$isMain}) => {
      if($isMain){
        return css`
          padding-top: 0;
          @media ${({theme}) => theme.device.pc} {
            padding-top: 0;
          }
        `
      }
    }
  }
`

const Wrapper = ({children, isMain}) => {
  return (
    <StyledWrapper $isMain={isMain}>
      {children}
    </StyledWrapper>
  )
}

export default React.memo(Wrapper); 