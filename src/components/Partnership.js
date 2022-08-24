import React from "react";
import styled from "styled-components";
import image from "../assets/images/genesis-kr-the-brand-experience-partnership-18-desktop-mobile-1220x660-ko.jpg";
const Partnership = () => {
  return (
    <Container>
      <div className="left">
        <img src={image} alt="제네시스 수지 차량 전시존 이미지"/>
      </div>
      <div className="right">
        <p>PARTNERSHIP</p>
        <div className="dec">
            <p>파트너십</p>
            <span>제네시스와 함께하는 다양한 파트너들을<br/>만나보세요. 철학과 방향을 공유하며 만들어가는 다양한 프로그램들을 소개합니다.</span>
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
export default Partnership;
