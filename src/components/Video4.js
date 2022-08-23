import React, { useRef, useState } from "react";
import styled from "styled-components";
import video from "../assets/images/genesis-kr-overview-gv80-360-view-23-desktop-1220xflexible-ko.webm";
import { IoPause } from "react-icons/io5";
import { IoPlay } from "react-icons/io5";
const Video4 = () => {
  const videoRef = useRef();
  const [play, setPlay] = useState(true);
  const videoPause = () => {
    if (play) {
      videoRef.current.pause();
      setPlay(false);
    } else {
      videoRef.current.play();
      setPlay(true);
    }
  };
  return (
    <Container>
      <div className="left">
        <p>GENESIS GV80 견적내기</p>
        <div className="dec">
          <p>BUILD YOUR GENESIS</p>
          <span>
            고객 개인의 니즈와 성향에 맞는 차량을 구매하실 수 있는 YOUR
            GENESIS를 소개합니다. 고급 정장을 맞추듯 엔진의 기본 트림을 베이스로
            외관, 인테리어, 다양한 첨단 편의 사양을 고객의 선호에 맞게 선택할 수
            있는 특별한 경험을 제공합니다.
          </span>
        </div>
        <button>견적내기</button>
      </div>
      <div className="right">
        <video
          ref={videoRef}
          autoPlay
          muted
          playsInline
          loop
          preload="none"
          disablePictureInPicture="true"
        >
          <source src={video} type="video/webm" />
        </video>
        <div
          className="button"
          onClick={() => {
            videoPause();
          }}
        >
          {play ? <IoPause /> : <IoPlay />}
        </div>
      </div>
    </Container>
  );
};
const Container = styled.div`
  height: 700px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-left: 100px;
  background-color: black;
  .left {
    width: 30%;
    height: 72%;
    p {
      color: #af6249;
      margin-bottom: 30px;
      font-weight: 700;
    }
    .dec {
      margin-bottom: 50px;
      p {
        font-size: 2.3rem;
        color: white;
        font-weight: 400;
      }
      span {
        font-size: 0.95rem;
        color: white;
      }
    }
    button {
      width: 50%;
      height: 52px;
      background-color: transparent;
      border: 1px solid white;
      font-size: 0.95rem;
      font-weight: 600;
      position: relative;
      color: white;
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
        background-color: black;
        transition: all 0.4s;
      }
      :hover:after {
        width: 100%;
        z-index: -3;
      }
    }
  }
  .right {
    width: 60%;
    height: 70%;
    position: relative;
    video {
      width: 100%;
      position: relative;
    }
    .button {
      right: 30px;
      bottom: 90px;
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
      position: absolute;
      width: 50px;
      height: 50px;
      border: 2px solid #bbbbbb;
      z-index: 1;
      color: white;
      font-size: 1.3rem;
      cursor: pointer;
      :hover {
        background-color: white;
        color: black;
      }
    }
  }
 
`;
export default Video4;
