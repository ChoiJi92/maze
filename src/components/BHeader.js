import React from 'react';
import styled from 'styled-components';

const BHeader = () => {
    return (
        <Wrap>
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
    );
};
const Wrap = styled.div`
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