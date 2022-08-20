import React, { useState } from "react";
import styled from "styled-components";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLink } from "react-icons/fa";
import { FaChevronUp } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";
import { FaChevronLeft } from "react-icons/fa";
import { FaPause } from "react-icons/fa";
import { FaPlay } from "react-icons/fa";
import { Navigation, Pagination, Autoplay } from "swiper";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// function SlideButton() {
//   const swiper = useSwiper();
//   const [play, setPlay] = useState(true);
//   return (
//     <div
//       style={{
//         width: "8%",
//         display: "flex",
//         flexDirection: "row",
//         justifyContent: "space-around",
//       }}
//     >
//       <FaChevronLeft
//         onClick={() => swiper.slidePrev()}
//         style={{ cursor: "pointer" }}
//       />
//       {/* {play ? (
//         <FaPause
//           style={{ cursor: "pointer" }}
//           onClick={
//             () => swiper.autoplay.stop()
//             // setPlay(false);
//           }
//         />
//       ) : (
//         <FaPlay
//           style={{ cursor: "pointer" }}
//           onClick={
//             () => swiper.autoplay.start()
//             // setPlay(true);
//           }
//         />
//       )} */}
//       <FaChevronRight
//         style={{ cursor: "pointer" }}
//         onClick={() => swiper.slideNext()}
//       />
//     </div>
//   );
// }

const Footer = () => {
  const noticeList = [
    "제네시스 멤버십 제휴서비스 종료 안내 (딜카)",
    "Genesis Connected Services 이용약관 개정 공지",
    "G90 '통합바디제어장치(IBU)' 무상수리 실시 안내",
    "GENESIS CARPAY 개인정보 처리방침 개정 공지",
    "Genesis Connected Services 개인정보 처리방침 개정 공지",
  ];
  return (
    <Container>
      <Share>
        <div className="main">
          <div>
            <p>Share</p>
            <FaFacebookFStyle />
            <FaTwitterStyle />
            <FaLinkStyle />
          </div>
          <button>
            Top
            <FaChevronUp style={{ marginLeft: "8px" }} />
          </button>
        </div>
      </Share>
      {/* <Notice> */}
        <SwiperStyle
        //   direction={"vertical"}
          modules={[Navigation, Pagination, Autoplay]}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 1000 }}
          loop={true}
        >
          {noticeList.map((v, i) => (
            <SwiperSlideStyle key={i}>
              <div className="notice">
                <span>[공지사항]</span>
                <p>{v}</p>
              </div>
            </SwiperSlideStyle>
          ))}
        </SwiperStyle>
        {/* <SlideButton /> */}
      {/* </Notice> */}
      <Top></Top>
      <Bottom>
        <RowTop></RowTop>
        <RowMiddle></RowMiddle>
        <RowBottom></RowBottom>
      </Bottom>
    </Container>
  );
};
const Container = styled.footer`
  width: 100%;
`;
const Share = styled.div`
  width: 100%;
  height: 60px;
  background-color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  .main {
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 85%;
    div {
      width: 13%;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      p {
        color: white;
        font-size: 0.9rem;
        font-weight: 700;
      }
    }
    button {
      width: 5%;
      color: white;
      background-color: transparent;
      border: none;
      font-size: 0.9rem;
      font-weight: 700;
      cursor: pointer;
    }
  }
`;
const FaFacebookFStyle = styled(FaFacebookF)`
  color: #808080;
  cursor: pointer;
  :hover {
    color: white;
  }
`;
const FaTwitterStyle = styled(FaTwitter)`
  color: #808080;
  cursor: pointer;
  :hover {
    color: white;
  }
`;
const FaLinkStyle = styled(FaLink)`
  color: #808080;
  cursor: pointer;
  :hover {
    color: white;
  }
`;
const Notice = styled.div`
  height: 81px;
  display: flex;
  flex-direction: row;
  align-items: center;
  border: 1px solid;
  padding: 0 100px;
  .swiper-pagination-bullet {
    display: none;
  }
  .swiper-button-prev {
    display: none;
  }
  .swiper-button-next {
    display: none;
  }
`;
const SwiperStyle = styled(Swiper)`
  border: 1px solid;
  width: 100%;
  height: 81px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;
const SwiperSlideStyle = styled(SwiperSlide)`
  display: flex;
  align-items: center;
  .notice {
    display: flex;
    flex-direction: row;
    align-items: center;
  }
`;
const Top = styled.div`
  height: 500px;
`;
const Bottom = styled.div``;
const RowTop = styled.div``;
const RowMiddle = styled.div``;
const RowBottom = styled.div``;
export default Footer;
