import React from "react";
import styled from "styled-components";
import genesisEvent from "../assets/images/genesis-kr-overview-gv80-design-09-desktop-1920x960-ko.webp";
const Gallery2 = () => {
  return (
    <Container background={genesisEvent}>
      <div className="background"></div>
      <div className="dec">
        <p> 6인승 2열 독립시트 & 센터 콘솔 </p>
        <span>
          6인승 선택 시 2열 독립시트와 고급감을 강화한 센터 콘솔을 적용하여 실내
          고급감과 편의를 높였으며 탑승자들에게 안락하고 편리한 탑승 경험을
          제공합니다.{" "}
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
  .background {
    width: 100%;
    height: 80%;
    background: url(${(props) => props.background}) no-repeat center center;
    background-size: cover;
    position: absolute;
  }
  .dec {
    position: absolute;
    padding-top: 80px;
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
    }
    span {
      width: 85%;
      font-size: 1rem;
      margin: 30px 0;
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
export default Gallery2;
