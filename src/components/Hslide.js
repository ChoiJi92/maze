import React, { useState } from "react";
import styled from "styled-components";
import { Navigation, Pagination, Autoplay } from "swiper";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import back1 from "../assets/images/genesis-kr-overview-gv80-exterior-gallery-image-06-desktop-1920x1080-ko.jpg";
import back2 from "../assets/images/genesis-kr-overview-gv80-exterior-gallery-image-07-desktop-1920x1080-ko.webp";
import back3 from "../assets/images/genesis-kr-overview-gv80-interior-gallery-image-08-desktop-1920x1080-ko.jpg";
import back4 from "../assets/images/genesis-kr-overview-gv80-interior-gallery-image-11-desktop-1920x1080-ko.webp";
import back5 from "../assets/images/genesis-kr-overview-gv80-interior-gallery-image-06-desktop-1920x1080-en.jpg";
import { TiArrowForward } from "react-icons/ti";
import { IoPause } from "react-icons/io5";
import { IoPlay } from "react-icons/io5";
function SlideButton() {
  const swiper = useSwiper();
  const [play, setPlay] = useState(true);
  return (
    <div
      style={{
        width: "100%",
        position: 'absolute',
        display: 'flex',
        justifyContent:'center',
        bottom:'35px',
        left: '6%',
        color:'white',
        zIndex:'3'
      }}
    >
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
    </div>
  );
}


const Hslide = () => {
  const backList = [
    {
      back: back1,
      dec: "GV80 EXTERIOR",
    },
    {
      back: back2,
      dec: "GV80 EXTERIOR",
    },
    {
      back: back3,
      dec: "GV80 INTERIOR",
    },
    {
      back: back4,
      dec: "GV80 INTERIOR",
    },
    {
      back: back5,
      dec: "GV80 INTERIOR",
    },
  ];
  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return (
        '<span class="' + className + '">' + "</span>"
      );
    },
  };
  return (
    <Container>
      <SwiperWrap
        modules={[Navigation, Pagination, Autoplay]}
        slidesPerView={1}
        navigation
        pagination={pagination}
        autoplay={{ delay: 7000 }}
        loop={true}
      >
        {backList.map((v, i) => (
          <SwiperSlide>
            <Wrap background={v.back}>
              <div className="title">{v.dec}</div>
              <button>
                <TiArrowForward />
              </button>
            </Wrap>
          </SwiperSlide>
        ))}
        <SlideButton/>
      </SwiperWrap>
    </Container>
  );
};
const Container = styled.div`
  height: 800px;
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
    bottom: 30px;
  }
  .swiper-button-prev {
    display: none;
  }
  .swiper-button-next {
    display: none;
  }
`;
const SwiperWrap = styled(Swiper)`
  width: 100%;
  height: 100%;
`;
const Wrap = styled.div`
  border: 1px solid;
  width: 100%;
  height: 100%;
  background: linear-gradient(to right, rgba(0, 0, 0, 0.35), transparent),
    url(${(props) => props.background}) no-repeat center center;

  background-size: cover;
  display: flex;
  justify-content: center;
  position: relative;
  .title {
    color: white;
    width: 65%;
    margin-top: 40px;
    font-weight: 400;
  }
  button {
    width: 42px;
    height: 42px;
    border-radius: 50%;
    border: none;
    background-color: black;
    color: white;
    position: absolute;
    bottom: 30px;
    right: 30px;
    font-size: 1.4rem;
    cursor: pointer;
  }
`;
export default Hslide;
