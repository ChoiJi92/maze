import React, { useRef, useState } from "react";
import styled from "styled-components";
import back from "../assets/images/genesis-kr-the-brand-screenshot-1920x1080.webp";
import { IoPause } from "react-icons/io5";
import { IoPlay } from "react-icons/io5";
const BVideo2 = () => {
  const videoRef = useRef();
  const [play, setPlay] = useState(false);
  const [fold, setFold] = useState(false);
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
    <Container back={back}>
      <div className="image">
        <div
          className="button"
          onClick={() => {
            videoPause();
          }}
        >
          <IoPlay />
        </div>
        <span>WATCH THE FULL VIDEO</span>
      </div>
   
    </Container>
  );
};

const Container = styled.div`
  height: 908px;
  position: relative;
  padding-bottom: 108px;
  background-color: black;
  .image {
    background: url(${(props) => props.back}) no-repeat center center;
    background-size: cover;
    overflow: hidden;
    height: 100%;
    position: relative;
    cursor: pointer;
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
    background-color: #111111cc;
    z-index: 1;
    color: white;
    font-size: 1.3rem;
    cursor: pointer;
    :hover {
      background-color: white;
      filter: brightness(0.9);
      color: black;
    }
  }
  span {
    position: absolute;
    bottom: 25px;
    left: 46%;
    color: white;
    margin-right: 10px;
    font-size: 0.9rem;
  }
`;

export default BVideo2;
