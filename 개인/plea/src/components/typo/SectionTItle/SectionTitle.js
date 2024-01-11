import styled from "styled-components"
import { Link } from "react-router-dom"
import arwIcon from "assets/images/common/ico/ico_arw_viewMore_pc.png"
import useMediaSize from "utils/useMediaSize"

const TitleArea = styled.div`
  position: relative;
  margin-bottom: 6.5vw;
  @media ${({theme}) => theme.device.pc}{
    margin-bottom: 30px;
  }
`
const Title = styled.p`
  font-size: 5.9vw;
  font-weight: 300;
  letter-spacing: -0.05em;
  span{
    font-weight: 500;
  }
  @media ${({theme}) => theme.device.pc}{
    font-size: 30px;
  }
`
const Subtitle = styled.p`
  font-size: 3.9vw;
  font-weight: 300;
  margin-top: 3.9vw;
  letter-spacing: -0.05em;
  color: #888;
  @media ${({theme}) => theme.device.pc}{
    margin-top: 12px;
    font-size: 16px;
  }
`
const StyledLink = styled(Link)`
  display: block;
  position: absolute;
  bottom: 0;
  right: 0;
  font-size: 16px;
  color: #222;
  padding-right: 47px;
  background-position: right center;
  background-repeat: no-repeat;
  background-image: url(${arwIcon});
  background-size: 37px auto;
`


const SectionTitle = ({title, subTitle, url}) => {
  const {isPc} = useMediaSize()

  return (
    <TitleArea>
      <Title>{title}</Title>
      <Subtitle>{subTitle}</Subtitle>
      {isPc && <StyledLink to={url}>더보기</StyledLink>}
    </TitleArea>
  );
}

export default SectionTitle