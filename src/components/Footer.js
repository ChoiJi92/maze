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
import { RiInstagramFill } from "react-icons/ri";
import { FaYoutube } from "react-icons/fa";
import { Navigation, Pagination, Autoplay } from "swiper";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import world from "../assets/images/ico-worldwide.webp";
import privacy from "../assets/images/ico-privacy-center.png";
import window from "../assets/images/ico-new-window.png";
import genesisLogo from "../assets/images/logo.webp";
import wa from "../assets/images/web_a11y_mark.webp";
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
        direction={"vertical"}
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
      <Top>
        <Card>
          <strong>모델</strong>
          <div>
            <ul>
              <li>G70</li>
              <li>G70 SHOOTING BRAKE</li>
              <li>ELECTRIFIED G80</li>
              <li>G80</li>
              <li>G90</li>
              <li>GV60</li>
              <li>ELECTRIFIED GV70</li>
              <li>GV70</li>
              <li>GV80</li>
            </ul>
          </div>
        </Card>
        <Card>
          <strong>구매</strong>
          <div>
            <ul>
              <li>견적내기</li>
              <li>구매 프로그램</li>
              <li>전기차 구매가이드</li>
              <li>구매 상담 신청</li>
              <li>제네시스 스펙트럼</li>
              <li>사양 조회하기</li>
            </ul>
          </div>
        </Card>
        <Card>
          <strong>체험</strong>
          <div>
            <ul>
              <li>스페이스</li>
              <li>시승 신청</li>
              <li>전시장 찾기</li>
              <li>제네시스 드라이빙 익스피리언스</li>
            </ul>
          </div>
        </Card>
        <Card>
          <strong>멤버스</strong>
          <div>
            <ul>
              <li>제네시스 멤버심</li>
              <li>제네시스 커넥티드 서비스</li>
              <li>디지털 서비스</li>
              <li>차량관리 서비스</li>
            </ul>
          </div>
        </Card>
        <Card>
          <strong>제네시스</strong>
          <div>
            <ul>
              <li>브랜드</li>
              <li>콘셉트카</li>
              <li>제네시스X골프</li>
              <li>모터쇼</li>
              <li>로드트립</li>
            </ul>
          </div>
        </Card>
        <Card>
          <strong>고객센터</strong>
          <div>
            <ul>
              <li>고객센터 안내</li>
              <li>공지사항</li>
              <li>이벤트</li>
              <li>자주 묻는 질문</li>
              <li>다운로드 센터</li>
              <li>PR 센터</li>
            </ul>
          </div>
        </Card>
        <Card>
          <strong>마이페이지</strong>
        </Card>
      </Top>
      <Bottom>
        <RowTop>
          <div>
            <ul>
              <li>사이트맵</li>
              <li>이용약관</li>
              <li style={{ color: "#c36f51" }}>개인정보 처리방침</li>
              <li>저작권 안내</li>
              <li>보증안내</li>
              <li>자동차 교환 및 환불 중재 규정 안내</li>
              <li style={{ border: "0" }}>하자 재발 통보 안내</li>
            </ul>
          </div>
          <div>
            <FaFacebookF style={{ fontSize: "1.5rem" }} />
            <RiInstagramFill
              style={{ fontSize: "1.6rem", marginLeft: "12px" }}
            />
            <FaYoutube style={{ fontSize: "1.7rem", marginLeft: "12px" }} />
          </div>
        </RowTop>
        <RowMiddle>
          <div className="left">
            <ul>
              <li>
                <img src={world} alt="세계"></img>제네시스 월드와이드
              </li>
              <li>
                <img src={privacy} alt="프라이버스"></img>프라이버시 센터
              </li>
              <li>
                <img src={window} alt="새로운 창"></img>제네시스 챔피언십
              </li>
              <li>
                <img src={window} alt="새로운 창"></img>제네시스 부티크
              </li>
              <li>
                <img src={window} alt="새로운 창"></img>내비게이션 업데이트
              </li>
              <li>
                <img src={window} alt="새로운 창"></img>제네시스 드라이빙
                아카데미
              </li>
              <li>
                <img src={window} alt="새로운 창"></img>윤리경영 사이버 감사실
              </li>
            </ul>
          </div>
          <div className="right">
            <p>ENG</p>
            <p className="kor">KOR</p>
          </div>
        </RowMiddle>
        <RowBottom>
          <div className="wa">
            <img src={wa} alt="wa" />
          </div>
          <div className="logo">
            <img src={genesisLogo} alt="로고" />
            <p>
              © Copyright 2022 Hyundai Motor Company. <br />
              All Rights Reserved.
            </p>
          </div>
        </RowBottom>
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
  height: 868px;
  background-color: #151515;
  padding: 0 100px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;
const Card = styled.div`
  width: 20%;
  /* height: 437px; */
  margin-right: 40px;
  margin-top: 84px;
  strong {
    color: white;
  }
  ul {
    color: #bbbbbb;
    list-style: none;
    font-size: 0.9rem;
    font-weight: 600;
    li {
      margin-top: 18px;
      cursor: pointer;
      :hover {
        color: white;
      }
    }
  }
`;
const Bottom = styled.div`
  height: 429px;
  background-color: black;
`;
const RowTop = styled.div`
  width: 100%;
  height: 90px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 0 100px;
  div {
    color: white;
    display: flex;
    align-items: center;
    ul {
      list-style: none;
      display: flex;
      flex-direction: row;
      font-size: 0.8rem;
      font-weight: 700;
      color: #bbbbbb;
      li {
        border-right: 1px solid #1e1e1e;
        padding-right: 25px;
        margin-right: 25px;
        cursor: pointer;
        :hover{
          color: white;
        }
      }
    }
  }
`;
const RowMiddle = styled.div`
  height: 135px;
  padding: 0 100px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-top: 1px solid #1e1e1e;
  border-bottom: 1px solid #1e1e1e;
  .left {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 50%;
    ul {
      list-style: none;
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      font-size: 0.8rem;
      font-weight: 700;
      color: #bbbbbb;
      li {
        margin-right: 40px;
        margin-bottom: 20px;
        cursor: pointer;
        :hover{
          color: white;
        }
      }
      img {
        margin-right: 8px;
        width: 15px;
        height: 15px;
      }
    }
  }
  .right {
    width: 160px;
    height: 36px;
    display: flex;
    flex-direction: row;
    p {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 50%;
      height: 100%;
      color: white;
      font-size: 0.9rem;
      background-color: #222;
      font-weight: 600;
      cursor: pointer;
    }
    .kor {
      background-color: white;
      color: black;
    }
  }
`;
const RowBottom = styled.div`
  height: 203px;
  position: relative;
  padding: 0 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  .wa{
    position: absolute;
    right: 100px;
    top:30px
  }
  .logo{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    img{
      margin-bottom: 26px;
      width: 133px;
      height: 27px;
    }
    p{
      font-size: 0.9rem;
      text-align: center;
      color: #ccc;
    }
  }
`;
export default Footer;
