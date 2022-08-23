import React from 'react';
import styled from 'styled-components';
import { RiInstagramFill } from "react-icons/ri";
import { FaYoutube } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
const Connect = () => {
    return (
        <Container>
            <Wrap>
                <div>CONNECT WITH GENESIS</div>
                <div className='icon'>
                    <FaFacebookF/>
                    <RiInstagramFill style={{margin:'0 50px',fontSize:'2.3rem'}}/>
                    <FaYoutube style={{fontSize:'2.3rem'}}/>
                </div>
            </Wrap>
        </Container>
    );
};
const Container = styled.div`
    height: 294px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: black;
`
const Wrap = styled.div`
    color: white;
    div{
        font-size: 1.8rem;
        margin-bottom: 40px;
    }
    .icon{
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        color: #898989;
        font-size: 2rem;
        *{
            cursor: pointer;
        }

    }
`
export default Connect;