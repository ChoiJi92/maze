import React, { useState } from "react";
import styled from "styled-components";
import openIcon from "../assets/images/openIcon.png";
import closeIcon from "../assets/images/closeIcon.png";
import { Autoplay, Navigation, Pagination, Scrollbar } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import ourmodels1 from "../assets/images/ourmodels1.webp";
import ourmodels2 from "../assets/images/ourmodels2.webp";
import ourmodels3 from "../assets/images/ourmodels3.webp";
import ourmodels4 from "../assets/images/ourmodels4.webp";
import ourmodels5 from "../assets/images/ourmodels5.webp";
import ourmodels6 from "../assets/images/ourmodels6.webp";
import ourmodels7 from "../assets/images/ourmodels7.webp";
import ourmodels8 from "../assets/images/ourmodels8.webp";
import ourmodels9 from "../assets/images/ourmodels9.webp";
import evIcon from "../assets/images/evIcon.webp";

const OurModels = () => {
  const [models, setModels] = useState("ALL");
  const [isOpened, setIsOpened] = useState(false);
  const ourmodelsList = [
    {
      elec: "",
      name: "G70",
      brandTitle: "SHOOTING BRAKE",
      image: ourmodels1,
      ev: "",
    },
    {
      elec: "",
      name: "G70",
      brandTitle: "",
      image: ourmodels2,
      ev: "",
    },
    {
      elec: "ELECTRIFIED",
      name: "G80",
      brandTitle: "",
      image: ourmodels3,
      ev: evIcon,
    },
    {
      elec: "",
      name: "G80",
      brandTitle: "",
      image: ourmodels4,
      ev: "",
    },
    {
      elec: "",
      name: "G90",
      brandTitle: "",
      image: ourmodels5,
      ev: "",
    },
    {
      elec: "",
      name: "GV60",
      brandTitle: "",
      image: ourmodels6,
      ev: evIcon,
    },
    {
      elec: "ELECTRIFIED",
      name: "G70",
      brandTitle: "",
      image: ourmodels7,
      ev: evIcon,
    },
    {
      elec: "",
      name: "GV70",
      brandTitle: "",
      image: ourmodels8,
      ev: "",
    },
    {
      elec: "",
      name: "GV80",
      brandTitle: "",
      image: ourmodels9,
      ev: "",
    },
  ];
  return (
    <Container>
      <Wrap isOpened={isOpened}>
        <h2>OUR MODELS</h2>
        <p>
          역동적이면서도 우아한 디자인과 최첨단 기술을 탑재한 제네시스 브랜드의
          라인업을 살펴보세요.
        </p>
        <div
          className="select"
          onClick={() => {
            setIsOpened((prev) => !prev);
          }}
        >
          <p>{models}</p>
          {isOpened ? (
            <img src={closeIcon} alt="닫기" />
          ) : (
            <img src={openIcon} alt="열기" />
          )}
        </div>
        <div className="option">
          <ul>
            <li
              onClick={() => {
                setModels("ALL");
                setIsOpened(false);
              }}
            >
              ALL
            </li>
            <li
              onClick={() => {
                setModels("SEDAN");
                setIsOpened(false);
              }}
              style={{
                borderTop: "1px solid #bbb",
                borderBottom: "1px solid #bbb",
              }}
            >
              SEDAN
            </li>
            <li
              onClick={() => {
                setModels("SUV");
                setIsOpened(false);
              }}
            >
              SUV
            </li>
          </ul>
        </div>
        <SwiperStyle
          modules={[Navigation, Pagination, Scrollbar]}
          slidesPerView={3}
          navigation
          pagination={{ clickable: true }}
        >
          {(models==="ALL" ? ourmodelsList : models==="SEDAN" ? ourmodelsList.slice(0,5) : ourmodelsList.slice(5)).map((v,i) => (
            <SwiperSlide style={{ padding: " 0 20px" }} key={i}>
              <Card>
                <div className="title">
                  <p>{v.elec}</p>
                  <div>
                    <strong>{v.name}</strong>
                    {v.ev ? <img src={v.ev} alt="ev"></img> : ""}
                  </div>
                  <p>{v.brandTitle}</p>
                </div>
                <img src={v.image} alt="g70"></img>
                <button>자세히 보기</button>
              </Card>
            </SwiperSlide>
          ))}
        </SwiperStyle>
      </Wrap>
    </Container>
  );
};

const Container = styled.div`
  height: 821px;
  display: flex;
  padding-left: 200px;
  align-items: center;
  background-color: black;
`;
const Wrap = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  .swiper-pagination {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    height: 18px;
  }
  .swiper-pagination-bullet.swiper-pagination-bullet-active {
    border: 2px solid white;
    background-color: transparent;
    width: 0.6rem;
    height: 0.6rem;
    cursor: pointer;
  }
  .swiper-pagination-bullet {
    background-color: gray;
    width: 0.4rem;
    height: 0.4rem;
    opacity: 1;
    margin: 0 7px !important;
    position: relative;
  }
  .swiper-button-prev {
    display: none;
  }
  .swiper-button-next {
    display: none;
  }
  h2 {
    color: white;
    font-size: 2.5rem;
    font-weight: 300;
    margin-bottom: 10px;
  }
  p {
    color: white;
  }
  .select {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 300px;
    border-bottom: 1px solid white;
    padding: 10px 0 10px 10px;
    font-weight: 700;
    margin-top: 20px;
    cursor: pointer;
  }
  .option {
    display: ${(props) => (props.isOpened ? "block" : "none")};
    width: 300px;
    ul {
      color: white;
      list-style: none;
      li {
        font-size: 0.9rem;
        font-weight: 700;
        padding: 15px 20px;
        color: #bbb;
        cursor: pointer;
        :hover {
          color: white;
        }
      }
    }
  }
`;
const SwiperStyle = styled(Swiper)`
  width: 100%;
  height: 400px;
  margin-top: 50px;
`;
const Card = styled.div`
  width: 100%;
  height: 85%;
  display: flex;
  flex-direction: column;
  color: #bbb;
  padding: 28px 20px;
  .title {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    height: 55px;
    div {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      img {
        width: 15px;
        margin: 0;
      }
    }
  }
  strong {
    font-size: 1.3rem;
    margin: 8px 0;
    font-weight: 300;
  }
  p {
    font-size: 0.9rem;
    color: #bbb;
  }
  img {
    margin: 30px 0;
  }
  button {
    height: 52px;
    background-color: black;
    color: white;
    border: 1px solid white;
    font-size: 0.95rem;
    font-weight: 800;
    position: relative;
    cursor: pointer;
    :hover{
        color: black;
    }
    :after {
      content: "";
      width: 0%;
      height: 100%;
      top: 0;
      position: absolute;
      left: 0;
      background-color: white;
      transition: all 0.4s;
    }
    :hover:after {
      width: 100%;
      z-index: -3;
    }
  }
  :hover {
    background: #111111;
    strong {
      color: white;
    }
    p {
      color: white;
    }
    button {
      transition: all 1s;
      transform: translateY(-10px);
    }
  }
`;
export default OurModels;
