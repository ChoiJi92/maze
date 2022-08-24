import React from "react";
import styled from "styled-components";
import back from '../assets/images/w-genesis-kr-the-brand-our-way-04-1920x960_re.webp'

const Image2 = () => {
  return (
    <Container>
      <Wrap back={back}>
        <div className="dec">
            <p>OUR WAY</p>
            <span>새로운 길을 끊임없이, 그렇지만 사려 깊은 방식으로<br/>탐험하는 것이 진정으로 매력적인 것을 만들어내는 우리만의 방식입니다.</span>
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
        width: 40%;
        color: white;
        p{
            margin-bottom: 40px;
        }
        span{
            font-size: 1.3rem;
        }
    }
`;
export default Image2;