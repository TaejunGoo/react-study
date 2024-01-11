import { Link } from "react-router-dom";
import styled from "styled-components";
import LogoImg from 'assets/images/common/logo/logo.png';
const StyledLogo = styled.div`
  width: 70.5px;
  height: 55px;
  a{
    display: block;
    width: 100%;
    height: 100%;
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
    background-image: url(${LogoImg});
  }
`

const MobileLogo = () => {
  return <StyledLogo><Link to={'/'}><span className="a11yHidden">Latem</span></Link></StyledLogo>
};

export default MobileLogo;
