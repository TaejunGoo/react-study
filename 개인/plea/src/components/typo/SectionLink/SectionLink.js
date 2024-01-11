import styled from "styled-components"
import { Link } from "react-router-dom"
import arwIcon from "assets/images/common/ico/ico_arw_viewMore.png"

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  margin-top: 12vw;
`

const StyledLink = styled(Link)`
  display: block;
  font-size: 4vw;
  background-repeat: no-repeat;
  background-size: 9.2vw 2.7vw;
  background-position: right 0.7vw;
  background-image: url(${arwIcon});
  padding: 0 13.1vw 3.4vw 0;
  border-bottom: 1px solid #888;
  color: #222;
`

const SectionLink = ({url}) => {
  return (
    <Wrapper>
      <StyledLink to={url}>더보기</StyledLink>
    </Wrapper>
  )
}

export default SectionLink;