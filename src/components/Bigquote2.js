import React from 'react';
import styled from 'styled-components';
import image1 from '../assets/images/genesis-kr-the-brand-journey-21-desktop-mobile-586x718-ko-2.webp'
import image2 from '../assets/images/genesis-kr-the-brand-journey-21-desktop-mobile-660x330-ko-2.webp'
const Bigquote2 = () => {
    return (
        <Container>
            <div className='dec'>
                <div>
                    <p>JOIN US</p>
                    <span>앞으로 더욱 다양한 국가에서 많은 사람들을 만나며<br/>끝 없이 이어질 제네시스 여정에 함께<br/>해주시기 바랍니다.</span>
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
export default Bigquote2;