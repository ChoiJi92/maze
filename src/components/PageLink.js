import React from "react";
import styled from "styled-components";
import design from "../assets/images/genesis-kr-overview-gv80-design-37-desktop-960x360-ko.webp";
import spec from "../assets/images/genesis-kr-overview-gv80-spec-36-desktop-960x360-ko.webp";

const PageLink = () => {
  return (
    <Container>
      <div className="left">
        <img src={spec} alt="스펙" />
        <div>
          <p>이전 페이지</p>
          <span>스펙</span>
        </div>
      </div>
      <div className="right">
        <img src={design} alt="디자인" />
        <div>
          <p>다음 페이지</p>
          <span>디자인</span>
        </div>
      </div>
    </Container>
  );
};

const Container = styled.div`
  height: 267px;
  display: flex;
  flex-direction: row;
  .left {
    width: 50%;
    height: 100%;
    overflow: hidden;
    position: relative;
    img {
      position: absolute;
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: all 0.8s;
      :hover {
        transform: scale(1.15);
        filter: brightness(0.5);
      }
    }
    div {
      position: absolute;
      margin-top: 40px;
      margin-left: 40px;
      p {
        color: #c36f51;
        margin-bottom: 5px;
        font-weight: 700;
      }
      span {
        color: white;
        font-size: 1.8rem;
      }
    }
  }
  .right {
    width: 50%;
    height: 100%;
    background-size: cover;
    overflow: hidden;
    position: relative;
    img {
      position: absolute;
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: all 0.8s;
      :hover {
        transform: scale(1.15);
        filter: brightness(0.5);
      }
    }
    div {
      position: absolute;
      margin-top: 40px;
      margin-left: 40px;
      p {
        color: #c36f51;
        margin-bottom: 5px;
        font-weight: 700;
      }
      span {
        color: white;
        font-size: 1.8rem;
      }
    }
  }
`;

export default PageLink;
