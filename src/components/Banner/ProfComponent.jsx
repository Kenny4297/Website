import React from 'react';
import styled, { keyframes, css } from 'styled-components';
import { FaLinkedinIn } from 'react-icons/fa'
import { FaGithub } from 'react-icons/fa'
import ProfNoBack from './assets/ProfNoBack.png'

const ProfComponent = () => {
    return (
            <Container id='home'>
                <Texts>
                    <h3>Hi, I'm</h3>
                    <h1 className="blue">Kedgard Cordero</h1>
                    <h3>Full Stack Web Developer</h3>
                    <p>My journey into web development started when a close friend introduced me to the field, and I immediately knew this was my calling. Throwing everything down, I pursued my passion by graduating from the University of Minnesota Coding Boot Camp.</p> 
                    
                    <p>This is what I was meant to do, and I love every second of it.</p>
                    <a href="#footer" data-testid="footer-link">
                        <button>Let's Create Something</button>
                    </a>
                    
                    <Social>
                        <p>Check out my</p>
                        <div className="social-icons">
                            <span><a href="https://www.linkedin.com/in/kedgard-cordero/" rel="noreferrer" target="_blank" title="LinkedIn"><FaLinkedinIn/></a></span>
                            <span><a href="https://github.com/Kenny4297" rel="noreferrer" target="_blank" title="GitHub"><FaGithub/></a></span>
                        </div>
                    </Social>
                </Texts>
                <Profile>
                    <div className='img-container'>
                        <img src={ProfNoBack} alt="Kedgard Cordero" />
                    </div>
                </Profile>
            </Container>
    )
}

export default ProfComponent;

const Container = styled.div`
    display: flex;
    gap: 2rem;
    padding-top: 1rem;
    width: 80%;
    height: 70vh;
    max-width: 1280px;
    margin: 0 auto;
    z-index: 1;
    @media (max-width: 840px) {
        width: 90%;
    }
    /* @media (max-width: 640px) {
        flex-direction: column;
    } */
`;

const pulse = keyframes`
    0% {
        background-color: blue;
    }
    50% {
        background-color: #0077b3;
    }
    100% {
        background-color: blue;
    }
`;

const Texts = styled.div`
    flex: 1;
    h4 {
        /* padding: 1rem 0; */
        font-weight: 400;
        font-size: 1rem;
    }
    h1 {
        font-size: 1.7rem;
        letter-spacing: 2px;
        cursor: pointer;
    }

    h1 {
        color: #0077b3;
        display: inline-block;
        text-decoration: none;
        font-weight: bold;
        position: relative;
        :before{
            content: "";
            position: absolute;
            left: 0;
            right: 0;
            bottom: -5px;
            height: 2px;
            background-color: #0077b3;
            transform: scale(0);
            transform-origin: right;
            transition: transform 400ms ease-in-out;
        }
        :hover:before{
            transform: scale(1);
            transform-origin: left;
        }
        :hover{
            /* opacity: 0.7; */
            cursor: pointer;
            color: white;
        }
    }
    h3 {
        font-weight: 500;
        font-size: 1.1rem;
        /* padding-bottom: 1.2rem; */
        text-transform: capitalize;
    }
    p {
        font-weight: 300;
    }
    button {
        padding: 0.7rem 2rem;
        margin-top: 1rem;
        cursor: pointer;
        background-color: #0077b3;
        border: none;
        color: white;
        font-weight: 500;
        animation-name: ${pulse};
        animation-duration: 3s;
        animation-timing-function: linear;
        animation-iteration-count: infinite;
        filter: drop-shadow(0px 10px 10px #01be9551);
        :hover {
            filter: drop-shadow(0px 10px 10px #01be9570);
        }
    }
`

const Social = styled.div`
    margin-top: 3rem;
    display: flex;
    align-items: center;
    gap: 1rem;
    p {
        font-size: 0.9rem;
        @media (max-width: 690px) {
            font-size: 0.7rem;
        }
    }
    .social-icons {
        display: flex;
        align-items: center;
        gap: 1rem;
        span {
        width: 2.3rem;
        height: 2rem;
        clip-path: polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%);
        background-color: #0077b3;
        position: relative;
        transition: transform 400ms ease-in-out;
        :hover {
            transform: rotate(360deg);
        }
        }
        a {
        color: #fff;
        position: absolute;
        top: 55%;
        left: 50%;
        transform: translate(-50%, -50%);
        }
    }
`;

const Profile = styled.div`
    img {
        width: 20rem;
        /* margin-left: 21rem; */
        filter: drop-shadow(0px 10px 10px #0077b3);
        transition: transform 400ms ease-in-out;
        margin-bottom: 5rem;
        @media (max-width: 1100px) {
            margin-left: 10rem;
        }
        @media(max-width: 970px) {
            margin-left: 8rem;
        }
        @media (max-width: 790px) {
        width: 20rem;
        margin-left: 5rem;

        }
        /* @media (max-width: 661px) {
        width: 18rem;
        margin-left: 4rem;

        } */
        @media (max-width: 650px) {
           display: none

        }
    }
    :hover img {
        transform: translateY(-10px);
    }
`;


