import React from "react";
import styled from "styled-components";
import back from '../assets/images/genesis-kr-the-brand-journey-19-desktop-1920x960-ko.jpg'

const Image6 = () => {
  return (
    <Container>
      <Wrap back={back}>
        <div className="dec">
            <p>OUR JOURNEY</p>
            <span>우리의 여정은 이제 막 시작되었습니다. 대담한 도전과 끊임없는 진보, 그 속의 사려깊은 배려는 새로운 여행을 이끌어가는 우리만의 방식입니다.</span>
        </div>
      </Wrap>
    </Container>
  );
};
const Container = styled.div`
  height: 936px;
  background-color: #111111;
  padding: 108px 0;
`;
const Wrap = styled.div`
    height: 720px;
    background: url(${(props)=>props.back}) no-repeat center center;
    background-size: cover;
    padding: 0 100px;
    .dec{
        float: left;
        margin-top: 80px;
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
export default Image6;