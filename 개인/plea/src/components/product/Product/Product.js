import styled, {css} from "styled-components";
import { Link } from "react-router-dom";

const StyledLink = styled(Link)`
  display: block;
`


const Thumb = styled.div`
  overflow: hidden;
  border-radius: 1.3vw;
  position: relative;
  &::after {
    content: "";
    display: block;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.05);
    pointer-events: none;
  }
  @media ${({theme}) => theme.device.pc}{
    border-radius: 9px;
  }
  img{
    transition: transform .2s;
  }
  ${
    ({$direction}) => {
      if($direction === 'horizontal'){
        return css`
          width: 90px;
          @media ${({theme}) => theme.device.pc}{
            width: 100px;
          }
        `
      }
    }
  }
`;

const Info = styled.div`

`

const Brand = styled.span`
  display: block;
  font-weight: 500;
  font-size: 3.5vw;
  line-height: 1.4;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  @media ${({theme}) => theme.device.pc}{
    font-size: 16px;
  }
`

const ProductWrapper = styled.div`
  display: flex;
  width: 100%;
  &:hover{
    ${Thumb} img {
      transform: scale(1.1);
    }
  }
  ${
    ({$direction}) => {
      if($direction === 'vertical'){
        return css`
          flex-direction: column;
          gap: 2vw;
          @media ${({theme}) => theme.device.pc}{
            gap: 15px;
          }
        `
      }else if($direction === 'horizontal'){
        return css`
          flex-direction: row;
          gap: 4vw;
          align-items: center;
          @media ${({theme}) => theme.device.pc}{
            gap: 20px;
          }
        `
      }
    }
  }
`

const Name = styled.span`
  display: block;
  font-size: 3.5vw;
  font-weight: 300;
  color: #888;
  line-height: 1.4;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin-top: .4vw;
  @media ${({theme}) => theme.device.pc}{
    margin-top: 5px;
    font-size: 14px;
  }
`

const PriceWrapper= styled.div`
  margin-top: .2vw;
  display: flex;
  gap: 1vw;
  @media ${({theme}) => theme.device.pc}{
    margin-top: 3px;
    gap: 5px;
  }
`

const SalePer = styled.span`
  font-size: 3.5vw;
  font-weight: 500;
  line-height: 1.4;
  color: #f02922;
  @media ${({theme}) => theme.device.pc}{
    font-size: 16px;
  }
`

const SalePrice = styled.span`
  font-size: 3.5vw;
  font-weight: 500;
  line-height: 1.4;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  @media ${({theme}) => theme.device.pc}{
    font-size: 16px;
  }
`

const Product = ({prd, direction}) => {
  return (
    <StyledLink to={`/prd/${prd.number}`}>
      <ProductWrapper $direction={direction}>
        {
          prd.thumb && <Thumb $direction={direction}>
          <img src={prd.thumb} alt={prd.altText} />
         </Thumb>
        }
        <Info>
          {
            prd.brand && <Brand>
              {prd.brand}
            </Brand>
          }
          {
            prd.name && <Name>
              {prd.name}
            </Name>
          }
          {
            prd.originPrice && <PriceWrapper>
              <SalePer>{prd.salePer}%</SalePer>
              <SalePrice>{prd.salePrice}원</SalePrice>
            </PriceWrapper>
          }
          
        </Info>
      </ProductWrapper>
    </StyledLink>
  )
};

export default Product;

Product.defaultProps = {
  direction: 'vertical'
}