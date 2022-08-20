import React from "react";
import styled from "styled-components";
import genesisEvent from "../assets/images/genesisEvent.jpg";
const GenesisEvents = () => {
  return (
    <Container background={genesisEvent}>
      <div className="background"></div>
      <div className="dec">
        <h2>GENESIS EVENTS</h2>
        <p>제네시스에서 진행중인 다양한 이벤트를 소개합니다.</p>
        <button>이벤트 보기</button>
      </div>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 1000px;
  background-color: black;
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
    top: 29%;
    padding-left: 100px;
    * {
      color: white;
    }
    h2 {
      font-size: 2.7rem;
      font-weight: 400;
    }
    p {
      font-size: 1.4rem;
      margin: 40px 0;
    }
    button {
      width: 44.3%;
      height: 52px;
      background-color: black;
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
export default GenesisEvents;
