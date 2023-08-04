import styled from "styled-components";
import React from 'react';
import Nile from "../Banner/assets/NileWebsite.png";
import JoystickJunction from '../Banner/assets/JoystickJunctionWebsite.png'
import LearnC from '../Banner/assets/LearnC++.png'
import { ReactOriginal, JavascriptPlain, TypescriptPlain, Html5PlainWordmark, Css3OriginalWordmark, NodejsOriginal, ExpressOriginal, MysqlOriginal  , JestPlain, MongodbOriginal   }  from 'devicons-react';

let data = [
    {
        img: Nile,
        disc: "Nile is an immersive, simulated full stack e-commerce platform specializing in book retail. It offers a realistic user experience, including the ability to conduct mock credit card transactions using Stripe. Users can also explore their purchase history, allowing them to revisit previous orders with ease, and sift through books using a classic search feature or by book categories. ",
        title: "Nile",
        deployment: "https://nile-e-commerce-72580838be73.herokuapp.com/",
    },

    {
        img: JoystickJunction,
        disc: "Joystick Junction is a full stack interactive video game blog and community hub where users can post, comment, and engage in discussions with other users. The platform stands out with an advanced search feature employing debouncing, a unique game type filter, and simulated users that help facilitate a seamless user experience.",
        title: "Joystick Junction",
        deployment: "https://weather-wizard4297.herokuapp.com/",
    },

    {
        img: LearnC,
        disc: `"Learn C++" is an innovative, hands-on learning platform that focuses on practicality, beginning with real-world projects and dissecting them to teach users the fundamentals of C++. The platform engages users through a combination of interactive lessons, quizzes, and challenges, effectively creating a deep understanding of C++ basics.`,
        title: "Learn C++",
        deployment: "https://learn-c-plus-plus.netlify.app/",
    },
];

const Project = () => {
    const openInNewTab = true;

    const logos = {
        // Nile
        0: [{component: ReactOriginal, color: "#007ACC"},
            {component: JavascriptPlain, color: "#F7DF1E"},
            {component: Html5PlainWordmark, color: "#E34F26"},
            {component: Css3OriginalWordmark},
            {component: NodejsOriginal},
            {component: ExpressOriginal, color: "red"},
            {component: MongodbOriginal }
        ],

        // Joystick Junction
        1: [{component: ReactOriginal, color: "#007ACC"},
            {component: JavascriptPlain, color: "#F7DF1E"},
            {component: Html5PlainWordmark, color: "#E34F26"}, 
            {component: Css3OriginalWordmark},
            {component: NodejsOriginal},
            {component: ExpressOriginal, color: "red"},
            {component: MysqlOriginal , color: "#000000"},

        ],

            //  Learn C++
        2: [{component: ReactOriginal }, 
            {component: TypescriptPlain, color: "#007ACC"}, 
            {component: Html5PlainWordmark, color: "#E34F26"}, 
            {component: Css3OriginalWordmark},
            {component: JestPlain}],
    };
    return (
        <>
            {data.map((item, index) => (
                <Container className="project" key={index}>
                    <ContentContainer>
                        <ImgContainer isFirst={index === 0} isSecond={index === 1} isThird={index === 2}>
                            <img src={item.img} alt="project" />
                            
                            
                        </ImgContainer>

                        <DescContainer >
                            <a
                                href={item.deployment}
                                target={openInNewTab ? "_blank" : "_self"}
                                rel="noreferrer"
                                aria-label="Live Site"
                            >
                            <h3>{item.title}</h3>
                            </a>
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
        height: 17.18rem;
        outline: 3px solid #4e5156;
        /* position: relative; */
        /* top:.105rem; */
        /* top: 0rem; */
        /* &:hover {
            transform: scale(1.05);
        } */
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
    max-width: 35rem;
    h3 {
        font-size: 1.75rem;
        /* outline: 2px solid blue; */
        display: inline-block;
        text-decoration: underline;
    }
    p {
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
