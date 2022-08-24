import React from "react";
import styled from "styled-components";
import back from '../assets/images/w-genesis-kr-the-brand-vision-and-mission-04-1920x960_re.webp'

const Image = () => {
  return (
    <Container>
      <Wrap back={back}>
        <div className="dec">
            <p>OUR VISION AND MISSION</p>
            <span>우리는 자신만의 취향과 안목을 가진 사람들을 위해 최상의 자동차를 만들고, 그를 통해 삶의 긍정적인 변화를<br/>만들어내는 것을 목표로 하고 있습니다.</span>
        </div>
      </Wrap>
    </Container>
  );
};
const Container = styled.div`
  height: 1044px;
  background-color: black;
  padding: 216px 0 108px 0;
`;
const Wrap = styled.div`
    height: 720px;
    background: url(${(props)=>props.back}) no-repeat center center;
    background-size: cover;
    padding: 0 100px;
    .dec{
        margin-top: 90px;
        width: 39%;
        float: right;
        color: white;
        p{
            margin-bottom: 40px;
        }
        span{
            font-size: 1.3rem;
        }
    }
`;
export default Image;
