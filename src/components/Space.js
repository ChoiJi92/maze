import React from "react";
import styled from "styled-components";
import image from "../assets/images/genesis-kr-the-brand-experience-space-16-desktop-mobile-1220x660-ko.webp";
const Space = () => {
  return (
    <Container>
      <div className="left">
        <img src={image} alt="제네시스 수지 차량 전시존 이미지"/>
      </div>
      <div className="right">
        <p>SPACE</p>
        <div className="dec">
            <p>스페이스</p>
            <span>제네시스만의 철학을 경험할 수 있는 전용 공간을 방문해보세요. 차량 전시 및 시승과 다양한 경험 프로그램들을 제공합니다.</span>
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
  padding:108px 100px 108px 0;
  background-color: #111111;
  .left {
    width: 69%;
    height: 70%;
    position: relative;
   img{
    width: 100%;
   }
  }
  .right {
    width: 22%;
    height: 90%;
    border-bottom: 1px solid #4d4d4d;
    p{
        color: #af6249;
        margin-bottom: 30px;
        font-weight: 700;
    }
    .dec{
        margin-bottom: 50px;
        p{
            font-size: 1.5rem;
            color: white;
            font-weight: 400;
        }
        span{
            color: #CCCCCC;
            font-size: 0.95rem;
        }
    }
    button {
      width: 75%;
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
export default Space;
