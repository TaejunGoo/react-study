import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  display: block;
  cursor: pointer;
`

const ImageBanner = ({mobileImg, pcImg, onClick, altText}) => {
  return (
    <StyledButton onClick={onClick}>
      <picture>
        <source media="(min-width: 768px" srcSet={pcImg}/>
        <source media="(max-width: 767px" srcSet={mobileImg}/>
        <img src={pcImg} alt={altText} />
      </picture>
    </StyledButton>
  )
}

export default React.memo(ImageBanner);