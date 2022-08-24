import React from "react";
import styled from "styled-components";
import back from '../assets/images/genesis-kr-the-brand-lineup-10-desktop-1920x960-ko.webp'

const Image4 = () => {
  return (
    <Container>
      <Wrap back={back}>
        <div className="dec">
            <p>MODELS & LINE-UP</p>
            <span>우리는 다양하고 개성 있는 상품들을 만들고 있습니다.<br/> 제네시스의 차량들은 브랜드와 고객을 이어주는 매개체이며, 개인과 세상을 이어주는 연결고리입니다.</span>
        </div>
      </Wrap>
    </Container>
  );
};
const Container = styled.div`
  height: 936px;
  background-color: black;
  padding: 108px 0;
`;
const Wrap = styled.div`
    height: 720px;
    background: url(${(props)=>props.back}) no-repeat center center;
    background-size: cover;
    padding: 0 100px;
    display: flex;
    align-items: center;
    .dec{
        float: left;
        margin-top: 90px;
        width: 40%;
        color: white;
        display: flex;
        flex-direction: column;
        p{
            margin-bottom: 50px;
            font-size: 0.95rem;
        }
        span{
            font-size: 1.3rem;
            font-weight: 500;
        }
    }
`;
export default Image4;