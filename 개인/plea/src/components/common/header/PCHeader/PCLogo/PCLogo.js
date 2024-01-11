import styled from "styled-components";
import { Link } from "react-router-dom";
import LogoImg from "assets/images/common/logo/logo_pc.png";

const StyledLogo = styled.div`
  a{
    display: block;
  }
`

const PCLogo = () => {
  return  (
    <StyledLogo>
      <Link to={'/'}>
        <img src={LogoImg} alt="" />
        <span className="a11yHidden">Latem</span>
      </Link>
    </StyledLogo>
  )
}

export default PCLogo;