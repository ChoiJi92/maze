import React from "react";
import styled from "styled-components";
import genesis80 from "../assets/images/genesis80.webp";
import center from "../assets/images/genesis-kr-overview-gv80-pr-center-35-desktop-630x404-ko.webp";
import motorShow from "../assets/images/genesis-kr-overview-gv80-genesis-motor-show-33-desktop-630x404-ko.jpg";
const Contents2 = () => {
  return (
    <Container>
      <Wrap>
        <h2>연관 컨텐츠</h2>
        <CardWrap>
        <Card>
            <img src={motorShow} alt="모터쇼"></img>
            <strong>제네시스 모터쇼</strong>
            <p>
            제네시스만의 독창적인 부스에서, 가장 최신의 제네시스 라인업과 제네시스 브랜드의 럭셔리한 분위기를 직접 경험해보세요.
            </p>
            <div>
              <span>자세히 보기</span>
              <div></div>
            </div>
          </Card>
          <Card>
            <img src={genesis80} alt="제네시스 80"></img>
            <strong>이벤트</strong>
            <p>제네시스에서 진행중인 다양한 이벤트 정보를 전해 드립니다.</p>
            <div>
              <span>자세히 보기</span>
              <div></div>
            </div>
          </Card>
          <Card>
            <img src={center} alt="pr 센터"></img>
            <strong>PR센터</strong>
            <p>
            제네시스의 정확하고 다양한 최신 소식과 자료들을 만나보세요.
            </p>
            <div>
              <span>자세히 보기</span>
              <div></div>
            </div>
          </Card>
        </CardWrap>
      </Wrap>
    </Container>
  );
};
const Container = styled.div`
  height: 703px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 85%;
  h2 {
    font-size: 2.1rem;
    font-weight: 500;
    margin-bottom: 40px;
  }
`;
const CardWrap = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
`;
const Card = styled.div`
  display: flex;
  flex-direction: column;
  width: 31%;
  height: auto;
  img {
    height: 244px;
  }
  strong{
    margin-top: 27px;
  }
  p {
    font-size: 0.9rem;
    margin: 23px 0;
  }
  div {
    display: flex;
    flex-direction: row;
    align-items: center;
    cursor: pointer;
    span {
      border-bottom: 1px solid;
      margin-right: 3px;
      font-size: 0.9rem;
      font-weight: 400;
      :hover {
        border: none;
      }
      ::after {
        display: block;
        content: "";
        border-bottom: 1px solid;
        transform: scaleX(0);
        transform-origin: 0% 50%;
        transition: transform 400ms linear;
      }
      :hover:after {
        transform: scaleX(1);
      }
    }
    div {
      width: 8px;
      height: 8px;
      border-top: 1px solid;
      border-right: 1px solid;
      rotate: 45deg;
    }
  }
`;
export default Contents2;
