import styled from "styled-components";
import SearchIcon from "assets/images/common/ico/ico_header_search_pc.png";

const StyledWrapper = styled.div`
  position: relative;
  width: 340px;
`

const StyledSearchBar = styled.div`
  background: #f7f7f7;
  border-radius: 1000px;
  overflow: hidden;
  position: relative;
`

const StyledInput = styled.input`
  width: 100%;
  height: 40px;
  line-height: 40px;
  padding: 0 45px 0 20px;
  font-size: 16px;
`

const StyledSubmitBtn = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  width: 45px;
  height: 100%;
  cursor: pointer;
  text-indent: -9999px;
  background-image: url(${SearchIcon});
  background-size: 19px;
  background-repeat: no-repeat;
  background-position: 5px center;
`

// const StyledSearchLayer = styled.div`
//     position: absolute;
//     border: 1px solid #eab19f;
//     border-top: 0;
//     left: 0;
//     right: 0;
//     top: 40px;
//     background: #fff;
//     border-bottom-left-radius: 20px;
//     border-bottom-right-radius: 20px;
// `

const PCSearchbar = () => {
  return (
    <StyledWrapper>
      <form>
        <StyledSearchBar>
          <StyledInput type="search" id="search" autoComplete="off"/>
          <label htmlFor="search" className="a11yHidden">검색</label>
          <StyledSubmitBtn type="submit">
            <span className="a11yHidden">검색하기</span>
          </StyledSubmitBtn>
        </StyledSearchBar>
      </form>
    </StyledWrapper>
  )
}

export default PCSearchbar;