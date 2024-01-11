import React from "react";
import styled, { css } from "styled-components";

const StyledContainer = styled.div`
    padding-left: 20px;
    padding-right: 20px;
    margin-left: auto;
    margin-right: auto;
    box-sizing: border-box;
    @media ${({theme}) => theme.device.pc} {
      max-width: 1240px;
      padding-left: 20px;
      padding-right: 20px;
    }
    ${
      ({$only}) => {
        if($only === 'pc'){
          return css`
            padding-left: 0;
            padding-right: 0;
          `
        }else if($only ==='mo'){
          return css`
            @media ${({theme}) => theme.device.mo} {
              max-width: initial;
              padding-left: 0;
              padding-right: 0;
            }
          `
        }
      }
    }
`

const Container = ({children, only}) => {
  return <StyledContainer $only={only}>
    {children}
  </StyledContainer>
}

export default React.memo(Container);