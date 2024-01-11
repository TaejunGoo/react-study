import React from "react"
import styled, {css} from "styled-components"
import Product from "../Product/Product"

const StyledList = styled.ul`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  gap: 8vw 2.6vw;
  @media ${({theme}) => theme.device.pc}{
    gap: 60px 20px;
  }
`
const StyledLi = styled.li`
  ${
    ({$colMo, $colPc}) => {
      return css`
        width: calc((100% - ((${$colMo} - 1) * 2.6vw)) / ${$colMo});
        @media ${({theme}) => theme.device.pc}{
          width: calc((100% - ((${$colPc} - 1) * 20px)) / ${$colPc});
        }
      `
    }
  }
`

const PrdList = ({prdList, colMo, colPc, direction}) => {
  return (
    <StyledList>
      {
        prdList.map((it) => {
          return (
            <StyledLi $colMo={colMo} $colPc={colPc} key={it.name}>
              <Product prd={it} direction={direction}/>
            </StyledLi>
          )
        })
      }
    </StyledList>
  )
}

export default React.memo(PrdList)

PrdList.defaultProps = {
  colMo: 2,
  colPc : 4,
  direction : 'vertical'
}