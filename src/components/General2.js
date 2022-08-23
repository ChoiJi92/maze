import React from "react";
import styled from "styled-components";

const General2 = () => {
  return (
    <Container>
      <Wrap>
        <div className="title">더 알아보기</div>
        <div className="more">
          <span>GV80 견적내기</span>
          <div></div>
        </div>
        <div className="more">
          <span>이벤트 보러가기</span>
          <div></div>
        </div>
      </Wrap>
    </Container>
  );
};

const Container = styled.div`
  height: 284px;
  background-color: black;
`;
const Wrap = styled.div`
  height: 266px;
  background-color: black;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: #151515;
  .title {
    color: white;
    font-size: 1.8rem;
    margin-right: 100px;
  }
  .more {
    display: flex;
    flex-direction: row;
    align-items: center;
    color: white;
    cursor: pointer;
    margin-right: 20px;
    span {
      border-bottom: 1px solid;
      margin-right: 3px;
      font-size: 0.9rem;
      font-weight: 700;
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
      border-top: 2px solid;
      border-right: 2px solid;
      rotate: 45deg;
    }
  }
`;
export default General2;
