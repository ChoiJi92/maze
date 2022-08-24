import React from "react";
import styled from "styled-components";
import back from '../assets/images/genesis-kr-the-brand-genesis-special-moments-15-desktop-1920x960-ko-1.jpg'

const Image5 = () => {
  return (
    <Container>
      <Wrap back={back}>
        <div className="dec">
            <p>LIFESTYLE BRAND</p>
            <span>우리는 도로 위의 시간뿐만 아니라 일상에서도 함께할 수<br/>있는 기회를 만들고자 합니다. 이것이 우리가 관계를<br/>시작하는 방식이며, 영감을 얻고 진화해 나아가는 원천이기도 합니다.</span>
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
export default Image5;