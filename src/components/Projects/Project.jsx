import styled from "styled-components";
import React from 'react';
import BeTethical from "../Banner/assets/BeTethicalUpdated.png";
import weather from "../Banner/assets/weather-wizard.png";
import quiz from '../Banner/assets/quizSuperCrop.png'

let data = [
    {
        img: weather,
        disc: "An advanced weather dashboard that displays the current weather, the 5 day forecast, the local time of any city, and saves their previously searched city for better user experience.",
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
        disc: "A full-stack forum that allows users to post thoughts and comments about any video game they enjoy.",
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
                    <div style={{display: 'flex', justifyContent: 'center', alignItems:'center', border: '2px solid purple', margin: '0 auto'}}>
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
                    </div>
                </Container>
            ))}
        </>
    );
};

export default Project;

const ImgContainer = styled.div`
    /* border: 2px solid red; */
    /* border: 4px solid #4e5156; */
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    img {
        width: 30rem;
        height: 100%;
        transition: transform 400ms ease-in-out;
    }
    /* ${props => props.isFirst && `
        border-color: blue;
        img {
            width: 30rem;
        }
    `}

    ${props => props.isSecond && `
        border-color: green;
        img {
            width: 30rem;
        }
    `} */
`;
    
const DescContainer = styled.div`
    border: 2px solid blue;
    height: 100%;
    /* width: 40%; */
    /* display: inline; */
    /* padding-top: 1rem; */
    background-color: #4e5156;
    margin-left: 1rem;
    h3 {
        /* padding-top: 1rem; */
        font-size: 1.75rem;

    }
    p {
        width: 90%;
        padding-top: 1rem;

    }
    a {
        /* border: 2px solid red; */
        position: relative;
        top: 2rem;
        font-size: 1.5rem;
        color: #70CFFF;
        font-weight: bold;
    }
`;

const Container = styled.div`
    display: flex;
    height: 17.5rem;
    margin: 1rem 0.5rem;
    padding: 0.5rem;
    border-radius: 5px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
    gap: 2rem;

`;
