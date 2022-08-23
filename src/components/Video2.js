import React, { useRef, useState } from "react";
import styled from "styled-components";
import video from "../assets/images/genesis-kr-overview-gv80-genesis-touch-controller-18-desktop-1220xflexible-ko.webm";
import { IoPause } from "react-icons/io5";
import { IoPlay } from "react-icons/io5";
const Video2 = () => {
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
        <p>테크놀로지</p>
        <div className="dec">
            <p>제네시스 통합 컨트롤러</p>
            <span>센터 콘솔에 위치한 제네시스 통합 컨트롤러를 통해 여러 번의 터치가 필요한 복잡한 키보드 대신 간편한 손글씨 인식으로 빠르게 입력할 수 있습니다.</span>
        </div>
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
  height: 723px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-left: 100px;
  .right {
    width: 70%;
    height: 70%;
    position: relative;
    video {
      width: 100%;
      position: relative;
    }
    .button {
      right: 30px;
      bottom: 20px;
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
  .left {
    width: 20%;
    height: 72%;
    border-bottom: 1px solid #bbbbbb;
    p{
        color: #af6249;
        margin-bottom: 30px;
        font-weight: 700;
    }
    .dec{
        margin-bottom: 50px;
        p{
            font-size: 1.5rem;
            color: black;
            font-weight: 400;
        }
        span{
            font-size: 0.95rem;
        }
    }
  }
`;
export default Video2;
