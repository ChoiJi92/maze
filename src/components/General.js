import React from "react";
import styled from "styled-components";
import layer from "../assets/images/ico-open-layer.webp";
const General = () => {
  return (
    <Container>
      <Wrap>
        <div className="title">연비 및 타이어 등급 보기</div>
        <div className="more">
          <span>정부공인 표준연비 및 등급</span>
          <img src={layer} alt="레이어" />
        </div>
        <div className="more">
          <span>타이어 에너지 소비효율 등급 및 소음도 등급</span>
          <img src={layer} alt="레이어" />
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
  background-color: #151515;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
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
    margin-right: 20px;
    cursor: pointer;
    span {
      border-bottom: 1px solid;
      margin-right: 10px;
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
  }
`;
export default General;
