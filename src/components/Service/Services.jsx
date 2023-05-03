import { MdDesignServices } from "react-icons/md";
import { FiCodesandbox } from "react-icons/fi";
import { CgWebsite } from "react-icons/cg";
import styled from 'styled-components'
import Card from "./Card";
import GoogleAnalytics from "../GoogleAnalytics";


const Services = () => {
    return (
        <Container id="services">
            <GoogleAnalytics />
            <h1 className="blue">What I Do</h1>
            <Cards>
                <Card
                Icon={MdDesignServices} 
                title={"Full Stack React developer"}
                disc={"I thoroughly enjoy the development process, building scalable and user-friendly web applications. My expertise in React, HTML, CSS, and JavaScript enables me to create intuitive applications that are easy to maintain and update."}
                />

                <Card
                Icon={FiCodesandbox} 
                title={"UX/UI designer"}
                disc={"I am passionate about creating visually appealing and user-centered designs. I enjoy leveraging my knowledge of user psychology to develop interfaces that are engaging and intuitive. Information architecture, usability testing, and visual design are key to bringing ideas to life."}
                />

                <Card
                Icon={CgWebsite} 
                title={"Backend Developer"}
                disc={"I enjoy building scalable and secure web applications that can handle high traffic and user demand. I enjoy staying up-to-date with the latest trends in backend development, and you'll find me continuously optimizing and troubleshooting to ensure the backend runs smoothly and efficiently."}
                />
            </Cards>
        </Container>
    )
}

export default Services;

const Container = styled.div`
    width: 80%;
    height: 100vh;
    max-width: 1280px;
    margin: 0 auto;
    padding: 1rem 0;
    @media (max-width: 840px) {
        width: 90%;
    }
    h1 {
        padding-top: 1rem;
    }
    @media (max-width: 978px) {
        padding-bottom: 20rem;
    }
    @media (max-width: 913px) {
        height: 60vh;
    }
    @media (max-width: 821px) {
        height: 60vh;
    }
    @media (max-width: 763px) {
        padding-bottom: 25rem;
    }
    @media (max-width: 680px) {
        padding-bottom: 25rem;
    }
    @media (max-width: 650px) {
        padding-bottom: 30rem;
    }
    @media (max-width: 596px) {
        padding-bottom: 30rem;
    }
    @media (max-width: 572px) {
        padding-bottom: 40rem;
    }
    @media (max-width: 541px) {
        padding-bottom: 50rem;
    }
    @media (max-width: 506px) {
        padding-bottom: 40rem;
    }
    @media (max-width: 495px) {
        padding-bottom: 45rem;
    }
    @media (max-width: 426px) {
        padding-bottom: 45rem;
    }
    @media (max-width: 424px) {
        padding-bottom: 25rem;
    }
    @media (max-width: 413px) {
        padding-bottom: 50rem;
    }
    @media (max-width: 394px) {
        padding-bottom: 35rem;
    }
    @media (max-width: 376px) {
        padding-bottom: 45rem;
    }
    @media (max-width: 361px) {
        padding-bottom: 55rem;
    }
`;
const Cards = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    margin-top: 2rem;
    gap: 1rem;
`;