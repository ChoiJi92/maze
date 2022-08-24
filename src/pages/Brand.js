import React from "react";
import styled from "styled-components";
import BHeader from "../components/BHeader";
import video from "../assets/images/genesis-kr-the-brand-key-visual-01-desktop-2560x900-kr.webm";
import Image from "../components/Image";
import Image2 from "../components/Image2";
import Image3 from "../components/Image3";
import BVideo from "../components/BVideo";
import BDesign from "../components/BDesign";
import BVideo2 from "../components/BVideo2";
import Image4 from "../components/Image4";
import Image5 from "../components/Image5";
import Space from "../components/Space";
import Membership from "../components/Membership";
import Partnership from "../components/Partnership";
import Image6 from "../components/Image6";
import Bigquote2 from "../components/Bigquote2";
const Brand = () => {
  return (
    <>
      <BHeader />
      <Wrap>
        <div className="video">
          <video
            autoPlay
            muted
            playsInline
            loop
            preload="none"
            disablePictureInPicture="true"
          >
            <source src={video} type="video/webm" />
          </video>
        </div>
        <div className="wrap">
          <div className="title">
            <h2>GENESIS</h2>
            <span>
              제네시스라는 이름에는 열망의 창조,
              <br />
              새로운 시작과 긍정적인 변화를 향한 우리의
              <br />
              염원이 담겨 있습니다.
            </span>
          </div>
          <div className="bottom">
            <div className="arrow">
              <button></button>
            </div>
          </div>
        </div>
      </Wrap>
      <Image />
      <Image2 />
      <Image3 />
      <Design>
        <div>GENESIS DESIGN</div>
      </Design>
      <BVideo/>
      <BDesign/>
      <Design>
        <div>TALKING DESIGN WITH<br/>GENESIS CCO LUC DONCKERWOLKE</div>
      </Design>
      <BVideo2/>
      <Image4/>
      <Image5/>
      <Space/>
      <Membership/>
      <Partnership/>
      <Image6/>
      <Bigquote2/>
    </>
  );
};
const Wrap = styled.div`
  width: 100%;
  height: 700px;
  position: relative;
  .video {
    width: 100%;
    height: 100%;
    position: absolute;
    overflow: hidden;
    video {
      height: 100%;
    }
  }
  .wrap {
    position: absolute;
    width: 100%;
    padding: 0 250px 0 250px;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .title {
    color: white;
    padding-top: 70px;
    word-break: keep-all;
    margin-bottom: 120px;
    transform-origin: 0% 50%;
    transition: transform 400ms ease-in-out;
    h2 {
      font-size: 5rem;
      font-weight: 250;
      margin-bottom: 5px;
    }
    span {
      font-size: 1.3rem;
    }
  }
  .bottom {
    display: flex;
    flex-direction: column;
    .content {
      display: flex;
      flex-direction: row;
      div {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        margin-right: 30px;
        cursor: pointer;
        white-space: nowrap;
        font-weight: 700;
        span {
          color: white;
          margin-right: 5px;
          ::after {
            display: block;
            content: "";
            border-bottom: 1px solid white;
            transform: scaleX(0);
            transform-origin: 0% 50%;
            transition: transform 400ms ease-in-out;
          }
          :hover:after {
            transform: scaleX(1);
          }
        }
        div {
          border-top: 2px solid white;
          border-right: 2px solid white;
          width: 8px;
          height: 8px;
          transform: rotate(45deg);
        }
      }
    }
    .arrow {
      display: flex;
      justify-content: center;
      /* align-items: center; */
      margin: 55.8px 0 29.7px 0;
      height: 29px;
      @keyframes arrow {
        0% {
          opacity: 1;
        }
        50% {
          transform: translateY(10px) rotate(45deg);
          opacity: 0.5;
        }
        100% {
          opacity: 0;
        }
      }
      button {
        width: 0.7rem;
        height: 0.7rem;
        background-color: transparent;
        border-bottom: 2px solid white;
        border-right: 2px solid white;
        border-top: none;
        border-left: none;
        transform: rotate(45deg);
        cursor: pointer;
        animation: 1500ms ease-out 300ms infinite normal arrow;
      }
    }
  }
`;
const Design = styled.div`
  height: 216px;
  padding: 108px 0 36px 0;
  color: white;
  display: flex;
  justify-content: center;
  background-color: #111;
  font-size: 1.5rem;
  text-align: center;
`;
export default Brand;
