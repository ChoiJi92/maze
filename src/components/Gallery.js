import React from "react";
import styled from "styled-components";
import genesisEvent from "../assets/images/genesis-kr-overview-gv80-headlamp-11-desktop-1920x960-ko.webp";
const Gallery = () => {
  return (
    <Container background={genesisEvent}>
      <div className="background"></div>
      <div className="dec">
        <p>TAKE A CLOSER LOOK</p>
        <span>제네시스 브랜드의 혁신적 디자인과 미래 방향성을 담은 GENESIS GV80, 럭셔리의 품격과 자신감을 보여 드립니다.</span>
        <button>갤러리 보기</button>
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
    background:linear-gradient(to bottom, transparent, #111 80%),url(${(props) => props.background}) no-repeat center center;
    background-size: cover;
    position: absolute;
  }
  .dec {
    position: absolute;
    padding-top :26px;
    padding-left: 100px;
    display: flex;
    flex-direction: column;
    width: 67%;
    * {
      color: white;
    }
    p {
      font-size: 1.1rem;
      margin: 30px 0;
    }
    span {
      font-size: 2.7rem;
      font-weight: 400;
      margin-bottom: 30px;
    }
    button {
      width: 25%;
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
export default Gallery;
