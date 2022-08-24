import React from "react";
import styled from "styled-components";
import back from '../assets/images/w-genesis-kr-the-brand-genesis-design-05-1920x960_re.webp'

const Image3 = () => {
  return (
    <Container>
      <Wrap back={back}>
        <div className="dec">
            <p>DESIGN</p>
            <strong>ATHLETIC ELEGANCE</strong>
            <span>대담하고, 진보적이면서 가장 한국적, 이 세가지 키워드가 제네시스 디자인을<br/>정의합니다. 마치 고급 식당의 쉐프처럼 역동성과 우아함을 재료로, 각 모델에 알맞는<br/>기품있는 디자인을 선보입니다. </span>
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
    .dec{
        float: left;
        margin-top: 90px;
        width: 50%;
        color: white;
        display: flex;
        flex-direction: column;
        p{
            margin-bottom: 20px;
        }
        strong{
            font-size: 2.5rem;
            font-weight: 300;
            margin-bottom: 40px;
        }
        span{
            font-size: 1rem;
            font-weight: 700;
        }
    }
`;
export default Image3;