import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Header from "./Header";

const BHeader = () => {
  const [isScroll, setIsScroll] = useState(false);
  const throttle = (callback, delay) => {
    let timer = null;
    return () => {
      if (timer) return;
      timer = setTimeout(() => {
        callback();
        timer = null;
      }, delay);
    };
  };
  const updateScroll = () => {
    const { scrollY } = window;
    const isScrolled = scrollY > 0;
    setIsScroll(isScrolled);
  };
  const handleScroll = throttle(updateScroll, 100);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <Header top={false} />
      <Wrap isScroll={isScroll}>
        <div className="left">브랜드</div>
        <div className="middle">
          <ul>
            <li
              style={{
                borderBottom: "4px solid white",
                color: "white",
                paddingTop: "4px",
              }}
            >
              브랜드 소개
            </li>
            <li>비전</li>
          </ul>
        </div>
      </Wrap>
    </>
  );
};
const Wrap = styled.div`
  width: 100%;
  background-color: #151515;
  border-bottom: 1px solid #1e1e1e;
  padding: 0 120px;
  height: 60px;
  display: flex;
  flex-direction: row;
  align-items: center;
  top: 0;
  position: ${(props) => (props.isScroll ? "fixed" : "none")};
  z-index: ${(props) => (props.isScroll ? "6" : "0")};
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
      align-items: center;
      color: #bbb;
      font-size: 0.9rem;
      font-weight: 800;
      li {
        display: flex;
        align-items: center;
        height: 60px;
        margin-right: 30px;
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
export default BHeader;
