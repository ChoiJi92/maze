import React from 'react';
import styled from 'styled-components';
import image1 from '../assets/images/genesis-kr-overview-gv80-athletic-elegance-genesis-10-desktop-568x718-ko.webp'
import image2 from '../assets/images/genesis-kr-overview-gv80-begins-a-new-journey-with-genesis-09-desktop-660x330-ko.webp'
const Bigquote = () => {
    return (
        <Container>
            <div className='dec'>
                <div>
                    <p>DISCOVER THE GENESIS GV80</p>
                    <span>제네시스 GV80, 제네시스의 첫 SUV가 새로운 여정을 시작합니다. 역동적 우아함에 진보적 철학과 비전을 더하여 프리미엄 SUV의 방향성을 제시합니다.</span>
                </div>
            </div>
            <img className='right' src={image1} alt="제네시스 GV80 주행 이미지"></img>
            <img className='left' src={image2} alt="제네시스 GV80에 탑승한 여러 사람"></img>
        </Container>
    );
};

const Container = styled.div`
    height: 1624px;
    background-color: black;
    position: relative;
    display: flex;
    justify-content: center;
    position: relative;
    .dec{
        width: 70%;
        height: 80%;
        position: relative;
        div{
            position: sticky;
            top:300px;
            color: white;
            width: 74%;
            margin-top: 280px;
            z-index: 3;
            p{
                margin-bottom: 30px;
            }
            span{
                font-size: 2.2rem;
                font-weight: 600;
            }
        }
    }
    .right{
        position: absolute;
        width: 300px;
        height: 380px;
        top:190px;
        right: 100px;
    }
    .left{
        position: absolute;
        width: 493px;
        height: 247px;
        left: 100px;
        top:530px
    }
`
export default Bigquote;