import React, { useRef, useState } from "react";
import styled from "styled-components";
import video from "../assets/images/genesis-kr-the-brand-key-visual-03-1920x1080-kr.mp4";
import { IoPause } from "react-icons/io5";
import { IoPlay } from "react-icons/io5";
const BVideo = () => {
  const videoRef = useRef();
  const [play, setPlay] = useState(false);
  const [fold, setFold] = useState(false)
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
      <div className="video">
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
          <IoPlay />
        </div>
      </div>
      <Dec fold={fold}>
        <div onClick={()=>{
            setFold((prev)=>!prev)
        }}>
          <span>TWO LINES</span>
          <div></div>
        </div>
        <div className="fold">
            <p>제네시스 엠블렘의 윙을 형상화한 투라인 디자인은 제네시스의 모든 측면을 정의합니다. 세그먼트나 차종에 관계없이 투라인은 제네시스<br/>브랜드만의 강력한 아이콘이 될 것입니다.</p>
        </div>
      </Dec>
    </Container>
  );
};

const Container = styled.div`
  height: 700px;
  position: relative;
  .video {
    overflow: hidden;
    height: 100%;
    position: relative;
    video {
      width: 100%;
      object-fit: cover;
      height: 100%;
      filter: brightness(0.5);
    }
  }
  .button {
    top: 45%;
    left: 46%;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    width: 84px;
    height: 84px;
    border: 2px solid #bbbbbb;
    z-index: 1;
    color: white;
    font-size: 1.3rem;
    cursor: pointer;
    :hover {
      background-color: white;
      filter: brightness(0.8);
      color: black;
    }
  }
`;
const Dec = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  bottom: 25px;
  left: ${(props)=>props.fold ? '21%' : '46%'};
  div {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin-right: 30px;
    cursor: pointer;
    white-space: nowrap;
    font-weight: 500;
    span {
      color: white;
      margin-right: 10px;
      font-size: 0.9rem;
    }
    div {
      border-top: 2px solid white;
      border-right: 2px solid white;
      width: 8px;
      height: 8px;
      transform: rotate(${(props)=>props.fold ? '-45deg' : '135deg'});
    }
  }
  .fold{
    display: ${(props)=>props.fold ? 'block' : 'none'};
    color: white;
    text-align: center;
    margin-top: 10px;
  }
`;
export default BVideo;
