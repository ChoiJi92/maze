import React from "react";
import styled from "styled-components";
import back from "../assets/images/genesis-kr-overview-gv80-performance-22-desktop-1920x960-ko.webp";
const Performance = () => {
  return (
    <Container background={back}>
      <div className="background"></div>
      <div className="dec">
        <p> PERFORMANCE</p>
        <strong>AWD</strong>
        <span>
          AWD 시스템과 전자식 차동제한장치(e-LSD)를 통해 다양한 지형과 주행
          환경에<br/> 따라 최적의 구동력을 배분하여 안정적인 트랙션과 뛰어난 오프로드
          성능을<br/> 구현합니다.
        </span>
        <button>자세히 보기</button>
      </div>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 1000px;
  position: relative;
  background-color: black;
  .background {
    width: 100%;
    height: 80%;
    background: url(${(props) => props.background}) no-repeat center center;
    background-size: cover;
    position: absolute;
  }
  .dec {
    position: absolute;
    bottom:290px;
    padding-left: 100px;
    display: flex;
    flex-direction: column;
    width: 50%;
    * {
      color: white;
    }
    p {
      font-size: 2.7rem;
      font-weight: 400;
      width: 75%;
      margin-bottom: 30px;
    }
    strong{
        margin-bottom: 10px;
        font-size: 1.1rem;
        font-weight: 500;
    }
    span {
      width: 83%;
      font-size: 1rem;
      margin-bottom: 30px;
      font-weight: 700;
      line-height: 1.75;
    }
    button {
      width: 33%;
      height: 52px;
      background-color: transparent;
      color: white;
      border: 1px solid white;
      font-size: 0.95rem;
      font-weight: 600;
      position: relative;
      cursor: pointer;
      :hover {
        color: black;
        z-index: 1;
      }
      ::after {
        content: "";
        width: 0%;
        height: 100%;
        top: 0;
        left: 0;
        position: absolute;
        background-color: white;
        transition: all 0.4s;
      }
      :hover:after {
        width: 100%;
        z-index: -3;
      }
    }
  }
`;
export default Performance;
