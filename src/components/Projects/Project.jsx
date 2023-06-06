import styled from "styled-components";
import React from 'react';
import BeTethical from "../Banner/assets/BeTethicalUpdated.png";
import weather from "../Banner/assets/weather-wizard.png";
import LearnC from '../Banner/assets/LearnC++.png'
import { ReactOriginal, JavascriptPlain, TypescriptPlain, Html5PlainWordmark, Css3OriginalWordmark, NodejsOriginal, ExpressOriginal, MysqlOriginal }  from 'devicons-react';

let data = [

    {
        img: LearnC,
        disc: `"Learn C++" is an innovative, hands-on learning platform that focuses on practicality, commencing with real-world projects and dissecting them to teach users the fundamentals of C++. The platform engages users through a combination of interactive lessons, quizzes, and challenges, effectively fostering a deep understanding of C++ basics.`,
        title: "Learn C++",
        deployment: "https://learn-c-plus-plus.netlify.app/",
    },
    {
        img: BeTethical,
        disc: "Dive into our dynamic full-stack forum that elevates your gaming experiences into vibrant discussions across all genres. This isn't just a gaming forum, it's a secure community fortified with bcrypt and robust password security. Join today, share your gaming insights confidently, and transform solo adventures into shared triumphs with gamers worldwide.",
        title: "Be Tethical!",
        deployment: "https://be-tethical-production.up.railway.app/",
    },
    {
        img: weather,
        disc: "Explore the Weather Wizard, an intuitive app designed to keep you updated on the weather. Offering current conditions and a five-day forecast for any city worldwide, it also provides local time information. Tailored to provide an engaging user experience, it automatically runs the data for the last city you checked upon your return.",
        title: "Weather-Wizard",
        deployment: "https://weather-wizard4297.herokuapp.com/",
    },
];

const Project = () => {
    const openInNewTab = true;

    const logos = {
        0: [{component: ReactOriginal }, 
            {component: TypescriptPlain, color: "#007ACC"}, 
            {component: Html5PlainWordmark, color: "#E34F26"}, 
            {component: Css3OriginalWordmark}],

        1: [{component: JavascriptPlain, color: "#F7DF1E"},
            {component: Html5PlainWordmark, color: "#E34F26"},
            {component: Css3OriginalWordmark},
            {component: NodejsOriginal},
            {component: ExpressOriginal, color: "red"},
            {component: MysqlOriginal, color: "#000"}],


        2: [{component: ReactOriginal, color: "#007ACC"}, 
            {component: TypescriptPlain, color: "#007ACC"},
            {component: Html5PlainWordmark, color: "#E34F26"}, 
            {component: Css3OriginalWordmark}],
    };
    return (
        <>
            {data.map((item, index) => (
                <Container className="project" key={index}>
                    <ContentContainer>
                        <ImgContainer isFirst={index === 0} isSecond={index === 1} isThird={index === 2}>
                            <a
                                href={item.deployment}
                                target={openInNewTab ? "_blank" : "_self"}
                                rel="noreferrer"
                                aria-label="Live Site"
                            >
                                <img src={item.img} alt="project" />
                            </a>
                            
                        </ImgContainer>

                        <DescContainer >
                            <h3>{item.title}</h3>
                            <p style={{width:'90%'}}>
                                {item.disc}
                            </p>
                            <IconSection style={{paddingTop:'1rem', fontSize:'1rem'}}>
                                {logos[index]?.map((logo, i) => {
                                    const LogoComponent = logo.component;
                                    return <LogoComponent key={i} color={logo.color} size={32.5} />
                                })}
                            </IconSection>
                        </DescContainer>
                    </ContentContainer>
                </Container>
            ))}
        </>
    );
};

export default Project;

const IconSection = styled.div`
    padding-top: 1rem;
`

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
    /* border: 2px solid green; */
    img {
        width: 30rem;
        /* width: 70%; */
        height: 17.2rem;
        /* height: 100%; */
        outline: 3px solid #4e5156;
        position: relative;
        top:.105rem;
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
    /* width: 90%; */
    max-width: 35rem;
    h3 {
        font-size: 1.75rem;
    }
    p {
        /* width: 90%; */
        /* border: 2px solid green; */
        /* padding-left: 2rem; */
        /* padding-right: 3rem; */
        /* font-size: 1rem; */
        /* color: red; */
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
        height: 40rem;
        /* border: 2px solid green; */
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
        /* border: 2px solid blue; */
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
