import React from "react";
import styled from "styled-components";
import logo from "../assets/images/logo.webp";
import searchIcon from "../assets/images/icon-search-small.webp";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate()
  return (
    <Container>
      <Head>
        <div className="logo">
          <img src={logo} alt="로고" onClick={()=>{
            navigate('/')
          }}></img>
        </div>
        <div className="mainNav">
          <ul>
            <li style={{ marginLeft: "0" }} onClick={()=>{
              navigate('/highlight')
            }}>모델</li>
            <li>구매</li>
            <li>체험</li>
            <li>멤버스</li>
            <li>제네시스</li>
          </ul>
        </div>
        <div className="subNav">
          <div className="privateNav">
            <ul>
              <li style={{ marginLeft: "0" }}>고객센터</li>
              <li>마이 페이지</li>
            </ul>
          </div>
          <div className="image">
            <img src={searchIcon} alt="검색"></img>
          </div>
          <button>
            <span></span>
            <span></span>
          </button>
        </div>
      </Head>
    </Container>
  );
};

const Container = styled.div`
width: 100%;
  height: 70px;
  position: fixed;
  top: 0;
  border-bottom: 1px solid #1e1e1e;
  background-color: black;
  padding: 0 120px;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 3;
`;
const Head = styled.div`
  width: 100%;
  border: 1px solid red;
  height: 69px;
  display: flex;
  flex-direction: row;
  align-items: center;
  border: 1px solid;
  .logo {
    width: 15%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 5rem;
    img {
      width: 100%;
      height: auto;
      cursor: pointer;
    }
  }
  .mainNav {
    ul {
      display: flex;
      flex-direction: row;
      list-style: none;
      color: #bbb;
      font-size: 1rem;
      font-weight: 800;
      padding-left: 0px;
      word-break: keep-all;
      li {
        margin-left: 4rem;
        cursor: pointer;
        :hover{
          color: white;
        }
      }
    }
  }
  .subNav {
    float: right;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;

    button {
      width: 66px;
      height: 22px;
      background-color: transparent;
      border: none;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      align-items: center;
      cursor: pointer;
      span {
        width: 1.3rem;
        height: 2px;
        background-color: white;
        border: 1px solid white;
      }
    }
  }
  .privateNav {
    ul {
      display: flex;
      flex-direction: row;
      list-style: none;
      color: #bbb;
      font-size: 1rem;
      font-weight: 800;
      padding-left: 0px;
      word-break: keep-all;
      li {
        margin-left: 2.9rem;
        cursor: pointer;
        :hover{
          color: white;
        }
      }
    }
  }
  .image {
    margin: 0 1.8rem;
    height: 69px;
    display: flex;
    align-items: center;
    img {
      width: 20px;
      height: 20px;
      cursor: pointer;
    }
  }
`;
export default Header;
