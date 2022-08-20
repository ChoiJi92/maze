import React from "react";
import styled from "styled-components";
import { Navigation, Pagination, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import genesis1 from "../assets/images/genesis1.jpg";
import genesis2 from "../assets/images/genesis2.webp";
import genesis3 from "../assets/images/genesis3.jpg";
import genesis4 from "../assets/images/genesis4.webp";
import genesis5 from "../assets/images/genesis5.webp";
import genesis6 from "../assets/images/genesis6.jpg";
import genesis7 from "../assets/images/genesis7.webp";
import IconLinks from "../components/IconLinks";
import OurModels from "../components/OurModels";
import Design from "../components/Design";
import GenesisEvents from "../components/GenesisEvents";
import Contents from "../components/Contents";
const Main = () => {
  return (
    <>
      <Container>
        <SwiperWrap
          modules={[Navigation, Pagination, Autoplay]}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 7000 }}
          loop={true}
        >
          <SwiperSlide>
            <Wrap background={genesis1}>
              <div className="title">
                <p>GENESIS</p>
                <h2>G70 SHOOTING BRAKE</h2>
                <span>온전히 나답게</span>
              </div>
              <div className="empty"></div>
              <div className="bottom">
                <div>
                  <span>더 알아보기</span>
                  <div></div>
                </div>
                <div>
                  <span>견적내기</span>
                  <div></div>
                </div>
              </div>
            </Wrap>
          </SwiperSlide>
          <SwiperSlide>
            <Wrap background={genesis2}>
              <div className="title">
                <p>GENESIS</p>
                <h2>G70</h2>
                <span>2022년형 출시</span>
              </div>
              <div className="empty"></div>
              <div className="bottom">
                <div>
                  <span>더 알아보기</span>
                  <div></div>
                </div>
                <div>
                  <span>견적내기</span>
                  <div></div>
                </div>
              </div>
            </Wrap>
          </SwiperSlide>
          <SwiperSlide>
            <Wrap background={genesis3}>
              <div className="title">
                <p>ELECTRIFIED</p>
                <h2>G70</h2>
                <span>또 다른 감동을 충전하는 시간</span>
              </div>
              <div className="empty"></div>
              <div className="bottom">
                <div>
                  <span>더 알아보기</span>
                  <div></div>
                </div>
                <div>
                  <span>견적내기</span>
                  <div></div>
                </div>
              </div>
            </Wrap>
          </SwiperSlide>
          <SwiperSlide>
            <Wrap background={genesis4}>
              <div className="title">
                <p>GENESIS</p>
                <h2>G90</h2>
                <span>한국자동차기자협회 2022 올해의 차 수상</span>
              </div>
              <div className="empty"></div>
              <div className="bottom">
                <div>
                  <span>더 알아보기</span>
                  <div></div>
                </div>
                <div>
                  <span>견적내기</span>
                  <div></div>
                </div>
              </div>
            </Wrap>
          </SwiperSlide>
          <SwiperSlide>
            <Wrap background={genesis5}>
              <div className="title">
                <p>GENESIS</p>
                <h2>GV60</h2>
                <span>당신과의 교감을 위해</span>
              </div>
              <div className="empty"></div>
              <div className="bottom">
                <div>
                  <span>더 알아보기</span>
                  <div></div>
                </div>
                <div>
                  <span>견적내기</span>
                  <div></div>
                </div>
              </div>
            </Wrap>
          </SwiperSlide>
          <SwiperSlide>
            <Wrap background={genesis6}>
              <div className="title">
                <p>미래를 향한 대담한 비전</p>
                <h2>FUTURING GENESIS</h2>
              </div>
              <div className="empty"></div>
              <div className="bottom">
                <div>
                  <span>더 알아보기</span>
                  <div></div>
                </div>
                <div>
                  <span>영상 보기</span>
                  <div></div>
                </div>
              </div>
            </Wrap>
          </SwiperSlide>
          <SwiperSlide>
            <Wrap background={genesis7}>
              <div className="title">
                <p>ELECTRIFIED</p>
                <h2>G80</h2>
                <span>전기차 그 이상의 시작</span>
              </div>
              <div className="empty"></div>
              <div className="bottom">
                <div>
                  <span>더 알아보기</span>
                  <div></div>
                </div>
                <div>
                  <span>견적내기</span>
                  <div></div>
                </div>
              </div>
            </Wrap>
          </SwiperSlide>
        </SwiperWrap>
      </Container>
      <OurModels/>
      <IconLinks />
      <Design/>
      <GenesisEvents/>
      <Contents/>
    </>
  );
};

const Container = styled.div`
  width: 100%;
  padding-top: 70px;
  cursor: grab;
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
    background-color: gray;
    opacity: 1;
    margin: 0 10px !important;
    position: relative;
    width: 0.4rem;
    height: 0.4rem;
    bottom: 40px;
  }
  .swiper-button-prev {
    display: none;
  }
  .swiper-button-next {
    display: none;
  }
`;
const SwiperWrap = styled(Swiper)`
  height: 92vh;
`;
const Wrap = styled.div`
  width: 100%;
  height: 100%;
  background: url(${(props) => props.background}) no-repeat center center;
  background-size: cover;
  .title {
    color: white;
    padding-top: 70px;
    padding-left: 318px;
    word-break: keep-all;
    margin-bottom: 120px;
    transform-origin: 0% 50%;
    transition: transform 400ms ease-in-out;
    h2 {
      font-size: 5rem;
      font-weight: 250;
    }
    p {
      font-size: 1.2rem;
    }
    span {
      font-size: 1.3rem;
    }
  }
  .empty {
    width: 18%;
    height: 8%;
    border-top: 3px solid white;
    border-bottom: 3px solid white;
    margin-bottom: 150px;
  }
  .bottom {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding-left: 318px;
    div {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      margin-right: 30px;
      cursor: pointer;
      white-space: nowrap;
      font-weight: 700;
      span {
        color: white;
        margin-right: 5px;
        ::after {
          display: block;
          content: "";
          border-bottom: 1px solid white;
          transform: scaleX(0);
          transform-origin: 0% 50%;
          transition: transform 400ms ease-in-out;
        }
        :hover:after {
          transform: scaleX(1);
        }
      }
      div {
        border-top: 2px solid white;
        border-right: 2px solid white;
        width: 8px;
        height: 8px;
        transform: rotate(45deg);
      }
    }
  }
`;
export default Main;
