import styled from "styled-components";
import useMediaSize from "utils/useMediaSize";
import UpIconMo from "assets/images/common/ico/ico_quick_up.png";
import UpIconPC from "assets/images/common/ico/ico_quick_up_pc.png";
import DownIconPc from "assets/images/common/ico/ico_quick_down_pc.png";
import HeartIcon from "assets/images/common/ico/ico_quick_like.png";
import { useUIState } from "utils/useUIState";

const recentPrd = {
  path: "prd1",
  thumb: "@prd_285x285_2.jpg",
};

const StyledQuickMenu = styled.aside`
  position: fixed;
  bottom: 70px;
  right: 1.5px;
  transition: 0.4s;
  z-index: 900;
  &.scrollDown {
    bottom: 10px;
  }
  @media ${({theme}) => theme.device.pc} {
    bottom: 30px;
    right: 0;
    background-color: #fff;
    &.scrollDown {
      bottom: 30px;
    }
  }
`;
const QuickItem = styled.button`
  display: block;
  width: 13.3vw;
  height: 13.3vw;
  margin-top: 1.3vw;
  border-radius: 1000px;
  overflow: hidden;
  cursor: pointer;
  &:first-child {
    margin-top: 0;
  }
  img {
    width: 100%;
  }
  &.recent {
    border: 2px solid #ddd;
  }
  @media ${({theme}) => theme.device.pc} {
    width: 60px;
    height: 60px;
    margin-top: 0;
    border: 1px solid #ddd;
    border-top-width: 0;
    border-radius: 0;
    &.recent {
      padding: 7.5px;
      border-width: 1px;
      img {
        border-radius: 1000px;
      }
    }
  }
`;
const BgQuickItem = styled(QuickItem)`
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  @media ${({theme}) => theme.device.pc} {
    background-size: auto;
  }
  &.up {
    background-image: url(${UpIconMo});
    @media ${({theme}) => theme.device.pc} {
      background-image: url(${UpIconPC});
    }
  }
  &.down {
    background-image: url(${DownIconPc});
  }
  &.pick {
    background-image: url(${HeartIcon});
  }
`;

const QuickMenu = () => {
  const { isPc, isMobile } = useMediaSize();
  const UIState = useUIState()

  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  const scrollDown = () => {
    window.scrollTo({
      top: document.body.scrollHeight,
      left: 0,
      behavior: "smooth",
    });
  };

  return (
    <StyledQuickMenu className={isMobile && UIState.isScrollDown && "scrollDown"}>
      <QuickItem className="recent">
        <img
          src={process.env.PUBLIC_URL + "assets/images/temp/" + recentPrd.thumb}
          alt=""
        />
        <span className="a11yHidden">최근 상품 보기</span>
      </QuickItem>
      {isPc && (
        <BgQuickItem className="pick">
          <span className="a11yHidden">찜한 상품 보기</span>
        </BgQuickItem>
      )}
      <BgQuickItem className="up" onClick={() => scrollUp()}>
        <span className="a11yHidden">페이지 위로</span>
      </BgQuickItem>
      {isPc && (
        <BgQuickItem className="down" onClick={() => scrollDown()}>
          <span className="a11yHidden">페이지 아래로</span>
        </BgQuickItem>
      )}
    </StyledQuickMenu>
  );
};

export default QuickMenu;
