import React, {useState} from 'react';
import styled, { keyframes } from 'styled-components';
import { FaLinkedinIn } from 'react-icons/fa'
import { FaGithub } from 'react-icons/fa'
import ProfNoBack from './assets/ProfNoBack.webp'


const ProfComponent = () => {
    // React needs this state to successfully allow "target='_blank'""
    const openInNewTab = true;

    const [isImageLoaded, setIsImageLoaded] = useState(false);

    return (
    <Container id="home">
        <Texts>
            <h3>Hi, I'm</h3>
            <h1 className="blue">Kedgard Cordero</h1>
            <h3 style={{color: '#A9A9A9'}}>Software Engineer</h3>
            <p>I'm a freelance web developer who loves helping individuals, small businesses, and startups bring their ideas to life online. Whether you're looking to showcase a personal project or launch your new business site, I've got your back. </p>
            <a href="#footer" data-testid="footer-link" aria-label="Contact me">
                <button>Hire me</button>
            </a>

            <Social>
                <p>Check out my</p>
                <div className="social-icons">
                    <span>
                        <a href="https://www.linkedin.com/in/kedgard-cordero/" rel="noreferrer" target={openInNewTab ? "_blank" : undefined} title="LinkedIn" aria-label="LinkedIn">
                            <FaLinkedinIn />
                        </a>
                    </span>
                    <span>
                        <a href="https://github.com/Kenny4297" rel="noreferrer" target="_blank" title="GitHub" aria-label="GitHub">
                            <FaGithub />
                        </a>
                    </span>
                </div>
            </Social>
        </Texts>
        <Profile>
            <div className="img-container">
                <img src={ProfNoBack} alt="Kedgard Cordero" aria-labelledby="profile-label" style={{position:'relative', top:'0rem'}} onLoad={() => setIsImageLoaded(true)}
                    className={isImageLoaded ? "loaded" : ""} />
            </div>
        </Profile>
    </Container>
);

}

export default ProfComponent;

const Container = styled.div`
    display: flex;
    gap: 2rem;
    padding-top: 1rem;
    width: 80%;
    max-width: 1280px;
    margin: 0 auto;
    z-index: 1;
    @media (max-width: 840px) {
        width: 90%;
    }
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

const fadeIn = keyframes`
  0% {
      opacity: 0;
  }
  100% {
      opacity: 1;
  }
`;

const Texts = styled.div`
    flex: 1;
    h1 {
        color: #0077b3;
        display: inline-block;
        text-decoration: none;
        font-weight: bold;
        position: relative;
        font-size: 1.5rem;
        letter-spacing: 2px;
        cursor: pointer;
        @media (min-width: 1101px) {
            font-size: 2rem;
        }
        :before{
            content: "";
            position: absolute;
            left: 0;
            right: 0;
            bottom: -15px;
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
            cursor: pointer;
            color: white;
        }
    }
    h3 {
        font-weight: 500;
        font-size: 1rem;
        text-transform: capitalize;
        line-height: .5rem;
        @media (min-width: 1101px) {
            font-size: 1.5rem;
        }
    }

    p {
        font-weight: 300;
        @media (min-width: 1101px) {
            font-size: 1.2rem;
            line-height: 2rem;
        }
    }
    button {
        padding: 0.7rem 2rem;
        font-size: 1.25rem;
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
    .img-container {
        animation: ${fadeIn} 1s ease-in forwards;
    }

    img {
        width: 18rem;
        filter: drop-shadow(0px 10px 10px #0077b3);
        transition: transform 400ms ease-in-out;
        margin-bottom: 5rem;
        position: relative;
        top: 5rem;
        opacity: 0;
        &.loaded {
            animation: ${fadeIn} 1s ease-in forwards;
        }
        
        @media (max-width: 1100px) {
            margin-left: 10rem;
        }
        
        @media(max-width: 970px) {
            margin-left: 5rem;
        }
        
        @media (max-width: 790px) {
            width: 15rem;
            margin-left: 3rem;
        }
        
        @media (max-width: 664px) {
            display: none;
        }
    }
    
    :hover img {
        transform: translateY(-10px);
    }
`;


