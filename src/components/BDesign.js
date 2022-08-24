import React, { useState } from "react";
import styled from "styled-components";
import crest from "../assets/images/genesis-kr-the-brand-tab-crestgrill_w.webp";
import quad from "../assets/images/genesis-kr-the-brand-tab-quadlamp_w.webp";
import parabolic from "../assets/images/genesis-kr-the-brand-tab-parabolicline_w.webp";
import beauty from "../assets/images/genesis-kr-the-brand-tab-beatyof_w.jpg";
const BDesign = () => {
  const [brand, setBrand] = useState({ className: "crest", image: crest });
  return (
    <Container>
      <Wrap>
        <div className="title">
          <p>AT A GLANCE</p>
          <span>GENESIS DESIGN</span>
        </div>
        <img src={brand.image} alt={brand.className} />
        <Dec brand={brand.className}>
          <div className="brand">
            <div
              className="crest"
              onClick={() => {
                setBrand({ className: "crest", image: crest });
              }}
            >
              CREST GRILLE
            </div>
            <div
              className="quad"
              onClick={() => {
                setBrand({ className: "quad", image: quad });
              }}
            >
              QUAD LAMPS
            </div>
            <div
              className="parabolic"
              onClick={() => {
                setBrand({ className: "parabolic", image: parabolic });
              }}
            >
              PARABOLIC LINE
            </div>
            <div
              className="beauty"
              onClick={() => {
                setBrand({ className: "beauty", image: beauty });
              }}
            >
              BEAUTY OF WHITE SPACE
            </div>
          </div>
          <p className="crest">
            명가의 휘장에서 영감을 받은 제네시스 엠블럼은 크레스트 그릴로
            진화하여 럭셔리에 대한 진정성을 나타냅니다.
          </p>
          <p className="quad">
            승리의 염원을 담은 비상하는 날개는 쿼드램프의 TWO LINES로 적용되어
            제네시스만의 독창적이고 아이코닉한 캐릭터를 완성합니다.
          </p>
          <p className="parabolic">
            완벽한 실루엣을 완성하는 제네시스의 파라볼릭라인은 뒤로 갈수록
            부드럽게 떨어지며 클래식카와 같은 아름다운 감성을 불어넣습니다.
          </p>
          <p className="beauty">
            한국 전통의 여백의 미를 승화한 실내 공간 디자인은 사람과 첨단 기술
            사이의 완벽한 공존과 럭셔리 경험을 제공합니다.
          </p>
        </Dec>
      </Wrap>
    </Container>
  );
};

const Container = styled.div`
  height: 1133px;
  background-color: #111111;
  padding: 216px 100px 108px 100px;
`;
const Wrap = styled.div`
  .title {
    text-align: center;
    color: white;
    margin-bottom: 50px;
    p {
      margin-bottom: 10px;
    }
    span {
      font-size: 2rem;
    }
  }
  img {
    width: 100%;
  }
`;
const Dec = styled.div`
  .brand {
    width: 100%;
    height: 54px;
    border-bottom: 1px solid #808080;
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-top: 20px;
    div {
      color: #808080;
      width: 25%;
      height: 100%;
      display: flex;
      align-items: center;
      font-size: 0.9rem;
      font-weight: 700;
      cursor: pointer;
      :hover {
        color: white;
      }
    }
    .${(props) => props.brand} {
      color: white;
      border-bottom: 1px solid white;
    }
  }
  p {
    display: none;
    margin-top: 50px;
    color: #cccccc;
    font-weight: 700;
    font-size: 0.95rem;
  }
  .${(props) => props.brand} {
    display: block;
  }
`;
export default BDesign;
