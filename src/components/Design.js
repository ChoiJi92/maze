import React from "react";
import styled from "styled-components";
import genesisSpace from "../assets/images/genesisSpace.webp";
import beachGenesis from "../assets/images/beachGenesis.webp";
const Design = () => {
  return (
    <Container>
      <Wrap>
        <Card>
          <img src={genesisSpace} alt="제네시스" />
          <div className="dec">
            <strong>스페이스</strong>
            <p>
              제네시스의 디자인과 고유한 감각을 반영한 현대적 공간으로 여러분을
              초대합니다. 제네시스에 관한 다양한 체험으로 당신만의 제네시스를
              찾는 여정을 지원합니다.
            </p>
            <div>
              <span>자세히 보기</span>
              <div></div>
            </div>
          </div>
        </Card>
        <Card>
          <img src={beachGenesis} alt="해변 제네시스" />
          <div className="dec">
            <strong>로드트립</strong>
            <p>
              제네시스와 내셔널지오그래픽 트래블러와 함께하는 서사적 여행,
              제네시스 로드트립을 통해 자세한 정보를 확인하세요.
            </p>
            <div>
              <span>자세히 보기</span>
              <div></div>
            </div>
          </div>
        </Card>
      </Wrap>
    </Container>
  );
};

const Container = styled.div`
  height: 830px;
  background-color: black;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Wrap = styled.div`
  width: 100%;
  height: 390px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const Card = styled.div`
  width: 48.6%;
  height: 100%;
  position: relative;
  img {
    width: 100%;
    position: absolute;
    filter: brightness(50%);
  }
  .dec {
    padding: 35px 40px;
    width: 70%;
    position: absolute;
    color: white;
    display: flex;
    flex-direction: column;
    strong {
      font-size: 1.8rem;
      font-weight: 400;
    }
    p {
      font-size: 1.05rem;
      margin: 10px 0;
      font-weight: 600;
    }
    div {
      display: flex;
      flex-direction: row;
      align-items: center;
      cursor: pointer;
      span {
        border-bottom: 1px solid white;
        margin-right: 3px;
        font-size: 1rem;
        font-weight: 700;
        :hover {
          border: none;
        }
        ::after {
          display: block;
          content: "";
          border-bottom: 1px solid white;
          transform: scaleX(0);
          transform-origin: 0% 50%;
          transition: transform 400ms linear;
        }
        :hover:after {
          transform: scaleX(1);
        }
      }
      div {
        width: 8px;
        height: 8px;
        border-top: 2px solid white;
        border-right: 2px solid white;
        rotate: 45deg;
      }
    }
  }
`;
export default Design;
