import React from "react";
import styled from "styled-components";
import arrow from "../assets/images/ico-small-arrow-down.webp";
import genesis from "../assets/images/genesis-kr-overview-gv80-kv-image-11-desktop-2560x900-ko.jpg";
import Hslide from "../components/Hslide";
import Bigquote from "../components/Bigquote";
import Gallery from "../components/Gallery";
import Gallery2 from "../components/Gallery2";
import Accordion from "../components/Accordion";
import Video from "../components/Video";
import Video2 from "../components/Video2";
import Video3 from "../components/Video3";
import Performance from "../components/Performance";
import Video4 from "../components/Video4";
import General from "../components/General";
import General2 from "../components/General2";
import IconLinks from "../components/IconLinks";
import Contents2 from "../components/Contents2";
import PageLink from "../components/PageLink";
import Connect from "../components/Connect";
const Highlight = () => {
  return (
    <>
      <Head>
        <div className="left">GV80</div>
        <div className="middle">
          <ul>
            <li
              style={{
                borderBottom: "4px solid white",
                color: "white",
                paddingTop: "4px",
              }}
            >
              하이라이트
            </li>
            <li>디자인</li>
            <li>안전</li>
            <li>테크놀로지</li>
            <li>퍼포먼스</li>
            <li>갤러리</li>
            <li>Genesis Genuine Parts</li>
            <li>스펙</li>
          </ul>
        </div>
        <div className="right">
          <span>쇼핑도구</span>
          <div>
            <img src={arrow} alt="아래 화살표"></img>
          </div>
        </div>
      </Head>
      <Wrap background={genesis}>
        <div className="wrap">
          <div className="title">
            <p>GENESIS</p>
            <h2>G80</h2>
            <span>당신과 모두를 위한 디자인</span>
          </div>
          <div className="bottom">
            <div className="content">
              <div>
                <span>견적내기</span>
                <div></div>
              </div>
              <div>
                <span>시승신청</span>
                <div></div>
              </div>
            </div>
            <div className="arrow">
              <button></button>
            </div>
          </div>
        </div>
      </Wrap>
      <Quote>
              <div>
              * 본 페이지에서 소개되는 상품의 디자인, 색상, 특성, 사양 등은 참고용이며 실제 제품과 다를 수 있습니다.
              </div>
      </Quote>
      <Spec>
            <div className="title">GV80 SPECIFICATIONS</div>
            <div className="more">
              <span>전체 사양 보기</span>
              <div></div>
            </div>
      </Spec>
      <Hslide/>
      <Bigquote/>
      <Gallery/>
      <Gallery2/>
      <Accordion/>
      <Video/>
      <Video2/>
      <Video3/>
      <Performance/>
      <Video4/>
      <General/>
      <General2/>
      <IconLinks/>
      <Contents2/>
      <PageLink/>
      <Connect/>
    </>
  );
};
const Head = styled.div`
  background-color: #151515;
  border-bottom: 1px solid #1e1e1e;
  padding: 70px 120px 0 120px;
  height: 130px;
  display: flex;
  flex-direction: row;
  align-items: center;
  .left {
    color: white;
    font-weight: 700;
    margin-right: 125px;
  }
  .middle {
    width: 55%;
    ul {
      height: 100%;
      list-style: none;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      color: #bbb;
      font-size: 0.9rem;
      font-weight: 800;
      li {
        display: flex;
        align-items: center;
        height: 60px;
        cursor: pointer;
        :hover {
          color: white;
        }
      }
    }
  }
  .right {
    width: 27%;
    font-size: 1rem;
    font-weight: 800;
    color: #bbb;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    span {
      cursor: pointer;
      :hover {
        color: white;
      }
    }
    div {
      margin-left: 10px;
      width: 21px;
      height: 21px;
      border: 1px solid white;
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
    }
  }
`;
const Wrap = styled.div`
  width: 100%;
  height: 700px;
  background: url(${(props) => props.background}) no-repeat center center;
  background-size: cover;
  .wrap {
    padding: 58px 250px 0 250px;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .title {
    color: white;
    padding-top: 70px;
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
  .bottom {
    display: flex;
    flex-direction: column;
    .content {
      display: flex;
      flex-direction: row;
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
    .arrow {
      display: flex;
      justify-content: center;
      /* align-items: center; */
      margin: 55.8px 0 29.7px 0;
      height: 29px;
      @keyframes arrow {
        0% {
          
          opacity: 1;
        }
        50% {
          transform: translateY(10px) rotate(45deg);
          opacity:0.5;
        }
        100% {
          opacity: 0;
        }
      }
     
      button {
        width: 0.7rem;
        height: 0.7rem;
        background-color: transparent;
        border-bottom: 2px solid white;
        border-right: 2px solid white;
        border-top: none;
        border-left: none;
        transform: rotate(45deg);
        cursor: pointer;
        animation: 1500ms ease-out 300ms infinite normal arrow;
      }
    }
  }
`;
const Quote = styled.div`
  height: 144px;
  background-color: black;
  display: flex;
  justify-content: center;
  div{
    text-align: center;
    width: 38%;
    color: #CCCCCC;
    margin-top: 18px;
    font-size: 0.95rem;
    font-weight: 500;
  }
`
const Spec = styled.div`
height: 266px;
background-color: black;
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
.title{
  color: white;
  font-size: 1.5rem;
  margin-right: 100px;
}
.more {
    display: flex;
    flex-direction: row;
    align-items: center;
    color: white;
    cursor: pointer;
    span {
      border-bottom: 1px solid;
      margin-right: 3px;
      font-size: 0.9rem;
      font-weight: 700;
      :hover {
        border: none;
      }
      ::after {
        display: block;
        content: "";
        border-bottom: 1px solid;
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
      border-top: 2px solid;
      border-right: 2px solid;
      rotate: 45deg;
    }
  }
`
export default Highlight;
