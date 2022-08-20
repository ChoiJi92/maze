import React from "react";
import styled from "styled-components";
import genesis80 from "../assets/images/genesis80.webp";
import digitalKey from "../assets/images/digitalKey.webp";
import smartKey from "../assets/images/smartKey.webp";
const Contents = () => {
  return (
    <Container>
      <Wrap>
        <h2>연관 컨텐츠</h2>
        <CardWrap>
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
            <img src={digitalKey} alt="디지털 키"></img>
            <strong>디지털 서비스</strong>
            <p>
              제네시스의 디지털 서비스는 첨단 신기술로 당신과 차가 함께 하는
              일상에 편리함을 한층 더해줍니다.
            </p>
            <div>
              <span>자세히 보기</span>
              <div></div>
            </div>
          </Card>
          <Card>
            <img src={smartKey} alt="스마트 키"></img>
            <strong>멤버스</strong>
            <p>
              제네시스 오너분들께만 주어지는 특별한 혜택과 이상적인 경험을
              선사합니다.
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
export default Contents;
