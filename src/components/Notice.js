import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Autoplay, Pagination } from "swiper";
import styled from "styled-components";

import { FaChevronRight } from "react-icons/fa";
import { FaChevronLeft } from "react-icons/fa";
import { IoPause } from "react-icons/io5";
import { IoPlay } from "react-icons/io5";
function SlideButton() {
  const swiper = useSwiper();
  const [play, setPlay] = useState(true);
  return (
    <div
      style={{
        width: "8%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
      }}
    >
      <FaChevronLeft
        onClick={() => swiper.slidePrev()}
        style={{ cursor: "pointer" }}
      />
      {play ? (
        <IoPause
          style={{ cursor: "pointer", fontSize: "1.3rem" }}
          onClick={() => {
            swiper.autoplay.stop();
            setPlay(false);
          }}
        />
      ) : (
        <IoPlay
          style={{ cursor: "pointer", fontSize: "1.3rem" }}
          onClick={() => {
            swiper.autoplay.start();
            setPlay(true);
          }}
        />
      )}
      <FaChevronRight
        style={{ cursor: "pointer" }}
        onClick={() => swiper.slideNext()}
      />
    </div>
  );
}

const Notice = () => {
  const noticeList = [
    "[공지사항] 제네시스 멤버십 제휴서비스 종료 안내 (딜카)",
    "[공지사항] Genesis Connected Services 이용약관 개정 공지",
    "[공지사항] G90 '통합바디제어장치(IBU)' 무상수리 실시 안내",
    "[공지사항] GENESIS CARPAY 개인정보 처리방침 개정 공지",
    "[공지사항] Genesis Connected Services 개인정보 처리방침 개정 공지",
  ];
  return (
    <Container>
      <SwiperStyle
        direction={"vertical"}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination, Autoplay]}
        autoplay={{ delay: 7000 }}
        loop={true}
        className="mySwiper"
      >
        {noticeList.map((v, i) => (
          <SwiperSlide
            style={{ display: "flex", alignItems: "center", width: "90%" }}
            key={i}
          >
            {v}
          </SwiperSlide>
        ))}
        <SlideButton />
      </SwiperStyle>
    </Container>
  );
};
const Container = styled.div`
  padding: 0 100px;
  width: 100%;
  height: 81px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: black;
  border-top: 1px solid #1e1e1e;
`;
const SwiperStyle = styled(Swiper)`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 0.95rem;
  font-weight: 700;
  .swiper-pagination-bullets {
    display: none;
  }
`;
export default Notice;
