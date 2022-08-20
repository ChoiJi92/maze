import React, { useState } from "react";
import styled from "styled-components";
import carIcon from "../assets/images/carIcon.gif";
import priceIcon from "../assets/images/priceIcon.gif";
import driveIcon from "../assets/images/driveIcon.gif";
import catalogIcon from "../assets/images/catalogIcon.gif";

const IconLinks = () => {
  return (
    <Container>
      <Wrap>
        <div>
          <img src={carIcon} alt="자동차 아이콘" className= 'static' ></img>
          <img src={carIcon} alt="자동차 아이콘" className="animated"></img>
          <span>견적내기</span>
        </div>
        <div>
          <img src={priceIcon} alt="견적서 아이콘"></img>
          <span>구매 상담 신청</span>
        </div>
        <div>
          <img src={driveIcon} alt="핸들 아이콘"></img>
          <span>시승 신청</span>
        </div>
        <div>
          <img src={catalogIcon} alt="카탈로그 아이콘"></img>
          <span>카탈로그</span>
        </div>
      </Wrap>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 410px;
  background-color: black;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
const Wrap = styled.div`
width: 58%;
display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    cursor: pointer;
    .animated{
        display: none;
    }
    :hover{
      .static{
        display: none;
      }
      .animated{
        display: inline;
      }
    }
    span {
        margin-top: 20px;
      color: white;
      font-weight: 700;
    }
  }
`;
export default IconLinks;
