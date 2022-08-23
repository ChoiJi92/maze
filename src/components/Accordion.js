import React, { useRef, useState } from "react";
import styled from "styled-components";
import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import back1 from "../assets/images/genesis-kr-overview-gv80-crest-grille-13-desktop-940x900-ko.webp";
import back2 from "../assets/images/genesis-kr-overview-gv80-quadlamps-14-desktop-940x900-ko.webp";
import back3 from "../assets/images/genesis-kr-overview-gv80-wide-stance-15-desktop-940x900-ko.jpg";
import back4 from "../assets/images/genesis-kr-overview-gv80-shift-by-transmisson-16-desktop-940x900-ko.webp";
const Accordion = () => {
  const swiper = useSwiper();
  const mySlide = useRef(null)
  const backList = [back1, back2, back3, back4];
  const [decNum, setDecNum] = useState("one");
  const decList = [
    {
      className: "one",
      title: "1 크레스트 그릴",
      dec: "가문의 문장을 의미하는 제네시스만의 디자인 시그니쳐로 럭셔리 브랜드로서의 제네시스의 자부심을 상징적으로 표현합니다.",
    },
    {
      className: "two",
      title: "2 쿼드램프",
      dec: "기술적으로 가장 슬림하게 구현된 헤드램프로 프론트에서 사이드 턴 시그널, 리어 콤비 램프까지 수평적인 레이아웃으로 차를 아우르며 연결되었습니다. 주야간 점등 시 제네시스만의 차별화된 이미지를 만들어내고 원거리에서도 제네시스임을 직관적으로 인지할 수 있습니다.",
    },
    {
      className: "three",
      title: "3 와이드 스탠스",
      dec: "그릴에서 램프로 이어지는 수평적인 레이아웃으로 낮고 넓은 프로파일로 안정적인 스탠스를 구현하였으며, 볼드하고 볼륨감 있는 후드와 강인한 범퍼 디자인으로 럭셔리 SUV로서의 웅장하고 고급스러운 이미지를 강조합니다.",
    },
    {
      className: "four",
      title: "4 전자식 변속 다이얼(SBW)",
      dec: "쥬얼리에서 영감을 받아 디자인된 센터 콘솔 내 전자식 변속 다이얼은 직관적인 조작을 지원하며 고급스러운 이미지를 연출합니다.",
    },
  ];

  return (
    <Container>
      <Wrap decNum={decNum}>
        <div className="left">
          <p>디자인</p>
          {decList.map((v, i) => (
            <div className={v.className} key={i}>
              <span
                onClick={() => {
                  setDecNum(v.className);
                  swiper.slideTo(i)
                }}
              >
                {v.title}
              </span>
              <p>{v.dec}</p>
            </div>
          ))}

          <button>자세히 보기</button>
        </div>
        <div className="right">
          <SwiperWrap
            modules={[Navigation, Pagination]}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            ref={mySlide}
          >
            {backList.map((v, i) => (
              <SwiperSlide key={i}>
                <Image background={v}></Image>
              </SwiperSlide>
            ))}
          </SwiperWrap>
        </div>
      </Wrap>
    </Container>
  );
};

const Container = styled.div`
  height: 883px;
  display: flex;
  justify-content: center;
`;
const Wrap = styled.div`
  width: 85%;
  height: 80%;
  display: flex;
  flex-direction: row;
  .left {
    width: 50%;
    padding-right: 70px;
    p {
      color: #af6249;
      font-weight: 600;
      margin-bottom: 50px;
    }
    div {
      margin-bottom: 30px;
      span {
        color: #757575;
        font-weight: 500;
        cursor: pointer;
      }
      p {
        display: none;
      }
    }
    .${(props) => props.decNum} {
      border-bottom: 1px solid #757575;
      margin-bottom: 40px;
      span {
        color: black;
        font-size: 2rem;
        font-weight: 400;
        cursor: pointer;
      }
      p {
        display: block;
        color: black;
        font-weight: 400;
        margin-top: 30px;
      }
    }
    button {
      width: 50%;
      height: 52px;
      background-color: transparent;
      border: 1px solid;
      font-size: 0.95rem;
      font-weight: 600;
      position: relative;
      cursor: pointer;
      :hover {
        color: white;
        z-index: 1;
      }
      ::after {
        content: "";
        width: 0%;
        height: 100%;
        top: 0;
        left: 0;
        position: absolute;
        background-color: black;
        transition: all 0.4s;
      }
      :hover:after {
        width: 100%;
        z-index: -3;
      }
    }
  }
  .right {
    width: 60%;
    .swiper-pagination {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
    }
    .swiper-pagination-bullet.swiper-pagination-bullet-active {
      border: 2px solid white;
      background-color: transparent;
      width: 0.7rem;
      height: 0.7rem;
      cursor: pointer;
    }
    .swiper-pagination-bullet {
      display: none;
    }
    .swiper-button-prev {
      display: none;
    }
    .swiper-button-next {
      display: none;
    }
  }
`;
const SwiperWrap = styled(Swiper)`
  width: 100%;
  height: 100%;
`;
const Image = styled.div`
  width: 100%;
  height: 100%;
  background: url(${(props) => props.background}) no-repeat center center;
  background-size: cover;
`;
export default Accordion;
