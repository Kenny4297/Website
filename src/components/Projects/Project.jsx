import styled from "styled-components";
import React from 'react';
import BeTethical from "../Banner/assets/BeTethicalUpdated.png";
import weather from "../Banner/assets/weather-wizard.png";
import quiz from '../Banner/assets/quizSuperCrop.png'

let data = [
    {
        img: weather,
        disc: "Explore the Weather Wizard, an intuitive app designed to keep you updated on the weather. Offering current conditions and a five-day forecast for any city worldwide, it also provides local time information. Tailored to provide an engaging user experience, it automatically runs the data for the last city you checked upon your return.",
        title: "Weather-Wizard",
        deployment: "https://weather-wizard4297.herokuapp.com/",
    },
    {
        img: quiz,
        disc: "Take on this riveting JavaScript quiz, testing your skills with five questions in 60 seconds, where each wrong answer deducts 10 seconds, yet high scorers earn the honor of landing on our high scores board.",
        title: "JavaScript Quiz",
        deployment: "https://kenny4297.github.io/JavaScript-Quiz/",
    },
    {
        img: BeTethical,
        disc: "Dive into our dynamic full-stack forum that elevates your gaming experiences into vibrant discussions across all genres. This isn't just a gaming forum, it's a secure community fortified with bcrypt and robust password security. Join today, share your gaming insights confidently, and transform solo adventures into shared triumphs with gamers worldwide.",
        title: "Be Tethical!",
        deployment: "https://be-tethical-production.up.railway.app/",
    },
];

const Project = () => {
    const openInNewTab = true;
    return (
        <>
            {data.map((item, index) => (
                <Container className="project" key={index}>
                    <ContentContainer>
                        <ImgContainer isFirst={index === 0} isSecond={index === 1} isThird={index === 2}>
                            <img src={item.img} alt="project" />
                        </ImgContainer>

                        <DescContainer >
                            <h3>{item.title}</h3>
                            <p>
                                {item.disc}
                            </p>
                            <a
                                href={item.deployment}
                                target={openInNewTab ? "_blank" : "_self"}
                                rel="noreferrer"
                                aria-label="Live Site"
                            >
                                Live Site
                            </a>
                        </DescContainer>
                    </ContentContainer>
                </Container>
            ))}
        </>
    );
};

export default Project;

const ContentContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    @media (max-width: 1174px) {
        flex-direction: column;
        height: 37.5rem;
    }
`

const ImgContainer = styled.div`
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    img {
        width: 30rem;
        height: 100%;
        border: 3px solid #4e5156;
        &:hover {
            transform: scale(1.05);
        }
        @media (max-width: 570px) { 
            display: none;
            height: 0%;
        }
    }
    @media (max-width: 570px) { 
        height: 0%;
    }
`;
    
const DescContainer = styled.div`
    height: 100%;
    background-color: #4e5156;
    margin-left: 1rem;
    width: 100%;
    max-width: 35rem;
    h3 {
        font-size: 1.75rem;
        padding-top: .5rem;
    }
    p {
        width: 90%;
        font-size: 1rem;
        @media (max-width: 570px) {
            width: 90%;
        }
    }
    a {
        position: relative;
        top: 1rem;
        font-size: 1.5rem;
        color: #70CFFF;
        font-weight: bold;
        @media (max-width: 405px) {
            padding-bottom: 2rem;
        }
    }
    @media (max-width: 1174px) {
        width: 30rem;
        margin: 0 auto;
        margin-top: 2rem;
    }
    @media (max-width: 570px) {
        margin: 0 auto;
        width: 100%;
    }
`;

const Container = styled.div`
    display: flex;
    height: 17.5rem;
    margin: 1rem 0.5rem;
    padding: 0.5rem;
    border-radius: 5px;
    position: relative;
    overflow: hidden;
    gap: 2rem;
    @media (max-width: 1174px) { 
        height: 40rem;
        border: 2px solid blue;
    }
    @media (max-width: 570px) {
        height: 20rem;
        margin: 1rem 1rem;
        padding: 0rem;
    }
    @media (max-width: 405px) {
        height: 22.5rem;
    }
    @media (max-width: 380px) {
        height: 25rem;
    }
`;
