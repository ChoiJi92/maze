import React, { useRef, useState } from "react";
import styled from "styled-components";
import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { IoPause } from "react-icons/io5";
import { IoPlay } from "react-icons/io5";
import video from "../assets/images/genesis-kr-overview-gv80-active-road-noise-control-19-desktop-940x900-ko.webm";
import back from "../assets/images/genesis-kr-overview-gv80-quadlamps-14-desktop-940x900-ko.webp";
const Accordion = () => {
  const swiper = useSwiper();
  const mySlide = useRef(null);
  const videoRef = useRef();
  const [play, setPlay] = useState(true);
  const videoPause = () => {
    if (play) {
      videoRef.current.pause();
      setPlay(false);
    } else {
      videoRef.current.play();
      setPlay(true);
    }
  };
  const [decNum, setDecNum] = useState("one");
  const decList = [
    {
      className: "one",
      title: "1 액티브 로드 노이즈 컨트롤",
      dec: "세계 최초를 자랑하는 액티브 로드 노이즈 컨트롤 기술은 노면으로부터 차량 실내로 유입되는 로드 노이즈가 발생할 때 소음과 반대되는 위상의 제어음을 스피커로 출력, 조용한 실내 환경을 조성합니다. 외부의 소음에 방해 받지 않는 편안하고 품격 있는 드라이빙의 즐거움을 드립니다.",
    },
    {
      className: "two",
      title: "2 제네시스 디지털 키",
      dec: "스마트폰의 제네시스 디지털 키를 이용해 손쉽게 차량 문을 여닫고 시동을 걸 수 있습니다. 필요한 경우, 가족이나 지인에게 디지털 키를 공유할 수도 있습니다.",
    },
  ];

  return (
    <Container>
      <Wrap decNum={decNum}>
        <div className="left">
          <SwiperWrap
            modules={[Navigation, Pagination]}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            ref={mySlide}
          >
            <SwiperSlide>
              <Image>
                <video
                  ref={videoRef}
                  autoPlay
                  muted
                  playsInline
                  loop
                  preload="none"
                  disablePictureInPicture="true"
                >
                  <source src={video} type="video/webm" />
                </video>
                <div
                  className="button"
                  onClick={() => {
                    videoPause();
                  }}
                >
                  {play ? <IoPause /> : <IoPlay />}
                </div>
              </Image>
            </SwiperSlide>
            <SwiperSlide>
              <Image background={back}></Image>
            </SwiperSlide>
          </SwiperWrap>
        </div>
        <div className="right">
          <p>테크놀러지</p>
          {decList.map((v, i) => (
            <div className={v.className} key={i}>
              <span
                onClick={() => {
                  setDecNum(v.className);
                  swiper.slideTo(i);
                }}
              >
                {v.title}
              </span>
              <p>{v.dec}</p>
            </div>
          ))}

          <button>자세히 보기</button>
        </div>
      </Wrap>
    </Container>
  );
};

const Container = styled.div`
  height: 883px;
  display: flex;
  justify-content: center;
  padding: 0 90px;
`;
const Wrap = styled.div`
  width: 100%;
  height: 80%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  .left {
    width: 57%;
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
  .right {
    width: 32%;
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
        font-size: 0.95rem;
        font-weight: 400;
        margin-top: 30px;
        line-height: 1.72;
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
  .button {
      right: 30px;
      bottom: 20px;
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
      position: absolute;
      width: 50px;
      height: 50px;
      background-color: black;
      z-index: 1;
      color: white;
      font-size: 1.3rem;
      cursor: pointer;
      :hover {
        background-color: white;
        color: black;
      }
    }
`;
export default Accordion;
