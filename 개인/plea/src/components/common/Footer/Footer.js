import React from "react";
import styled from "styled-components";
import useMediaSize from "utils/useMediaSize";
import Container from "../container/Container/Container";

const StyledFooter = styled.footer`
  background: #f7f7f7;
  padding: 9.3vw 0 24.3vw;
  @media ${({theme}) => theme.device.pc} {
    padding: 40px 0;
    &>div{
      display: flex;
      justify-content: space-between;
    }
  }
`

const CallWrapper = styled.div`
  @media ${({theme}) => theme.device.pc} {
 }
`

const CallNumber = styled.p`
  font-size: 4.8vw;
  strong{
    font-weight: 500;
    letter-spacing: -0.07em;
  }
  @media ${({theme}) => theme.device.pc} {
    font-size: 24px;
  }
`

const CallTime = styled.p`
  font-size: 3.5vw;
  font-weight: 300;
  color: #888;
  line-height: 1.5;
  margin-top: 1vw;
  span{
    display: inline-block;
    position: relative;
    & + &{
      padding-left: 4.5vw;
      &::before{
        content: '';
        display: block;
        width: 1px;
        height: 3.1vw;
        background: #ccc;
        position: absolute;
        top: 50%;
        margin-top: -1.55vw;
        left: 2.25vw;
      }
    }
  }
  @media ${({theme}) => theme.device.pc} {
    margin-top: 14px;
    font-size: 14px;
    line-height: 1.6;
    span{
      & + &{
        padding-left: 20px;
        &::before{
          left: 9.5px;
          height: 14px;
          margin-top: -7px;
        }
      }
    }
  }
`

const InfoWrapper = styled.div`
  margin-top: 5vw;
  @media ${({theme}) => theme.device.pc} {
    margin-top: 0;
  }
`

const Links = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1vw 2vw;
  button{
    display: block;
    font-size: 3.7vw;
    font-weight: 500;
    position: relative;
    letter-spacing: -0.05em;
    width: calc((100% -  4vw) / 3);
    white-space: nowrap;
    text-align: left;
    cursor: pointer;
    strong{
      font-weight: 700;
    }
    &::before{
      content: '';
      display: block;
      width: 1px;
      height: 3.5vw;
      background: #888;
      position: absolute;
      top: 50%;
      margin-top: -1.55vw;
      left: -2vw;
    }
    &:first-child::before, &:last-child::before{
      display: none;
    }
  }
  @media ${({theme}) => theme.device.pc} {
    gap: 0 18px;
    button{
      font-size: 14px;
      width: auto;
      &::before{
        height: 14px;
        margin-top: -6.5px;
        left: -9.5px;
      }
      &:last-child::before{
        display: block;
      }
    }
  }
`

const Infos = styled.div`
  margin-top: 2.7vw;
  span{
    display: inline-block;
    font-size: 3.5vw;
    color: #888;
    font-weight: 300;
    line-height: 1.55;
    position: relative;
    vertical-align: middle;
  }
  i{
    margin: 0 2vw;
    display: inline-block;
    vertical-align: middle;
    width: 1px;
    height: 3.5vw;
    background-color: #ccc;
  }
  @media ${({theme}) => theme.device.pc} {
    margin-top: 25px;
    span{
      font-size: 14px;
      line-height: 1.74;
    }
    i{
      margin: 0 8px;
      height: 12px;
    }
  }
`

const Copyright = styled.p`
    margin-top: 4vw;
    font-size: 3.5vw;
    font-weight: 300;
    color: #888;
    @media ${({theme}) => theme.device.pc} {
      margin-top: 17px;
      font-size: 14px;
    }
`

const Footer = () => {
  const {isPc} = useMediaSize();

  return (
    <StyledFooter>
      <Container>
        <CallWrapper>
          <CallNumber>고객센터 <strong>1600 - 0455</strong></CallNumber>
          <CallTime>
            <span>평일 09:00 ~ 18:00</span>
            <span>점심시간 12:00 ~ 13:00</span>
            <br />(주말 & 공휴일 휴무)
          </CallTime>
        </CallWrapper>
        <InfoWrapper>
          <Links>
            <button type="button"><strong>개인정보처리방침</strong></button>
            <button type="button">이용약관</button>
            <button type="button">고객센터</button>
            <button type="button">about LATEM</button>
          </Links>
          <Infos>
           <span>상호명 : ㈜이월드 쥬얼리사업부</span>
           <i/>
           <span>대표이사 : 이수원</span>
           {isPc && <br/>}
           <span>사업자등록번호 : 678-85-01134</span>
           {isPc && <i/>}
           <span>통신판매업신고번호 : 제2019-서울금천-0098</span>
           {isPc && <br/>}
           <span>주소 : 서울특별시 금천구 가산디지털1로 159</span>
           {isPc && <i/>}
           <span>개인정보 보호책임자 : 이수원(LATEM_ONLINE@eland.co.kr)</span>
          </Infos>
          <Copyright>Copyright © LATEM. All right Reserved.</Copyright>
        </InfoWrapper>
      </Container>
    </StyledFooter>
  )
}

export default React.memo(Footer);