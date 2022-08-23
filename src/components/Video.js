import React, { useRef, useState } from "react";
import styled from "styled-components";
import video from "../assets/images/genesis-kr-overview-gv80-parking-collision-avoidance-assist-17-desktop-1220x686-ko.mp4";
import { IoPause } from "react-icons/io5";
import { IoPlay } from "react-icons/io5";
const Video = () => {
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
        <video
          ref={videoRef}
          autoPlay
          muted
          playsInline
          loop
          preload="none"
          disablePictureInPicture="true"
        >
          <source src={video} type="video/mp4" />
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
      <div className="right">
        <p>안전</p>
        <div className="dec">
            <p>후방 교차 충돌방지 보조</p>
            <span>후진 중 좌,우측에서 다가오는 차량과 충돌 위험이 감지되면 경고를 해줍니다. 경고 후에도 충돌 위험이 높아지면 자동으로 제동을 도와줍니다.</span>
        </div>
        <button>자세히 보기</button>
      </div>
    </Container>
  );
};
const Container = styled.div`
  height: 723px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-right: 100px;
  .left {
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
  .right {
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
    button {
      width: 75%;
      height: 52px;
      background-color: transparent;
      color: black;
      border: 1px solid;
      font-size: 0.95rem;
      font-weight: 600;
      position: relative;
      cursor: pointer;
      :hover {
        color: white;
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
`;
export default Video;
