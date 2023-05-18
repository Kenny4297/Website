import { MdDesignServices } from "react-icons/md";
import { FiCodesandbox } from "react-icons/fi";
import { CgWebsite } from "react-icons/cg";
import styled from "styled-components";
import Card from "./Card";

const Services = () => {
    return (
        <Container id="services">
            <h1 className="blue">What I Can Do</h1>
            <Cards>
                <Card
                    Icon={MdDesignServices}
                    title={"Responsive Design"}
                    disc={
                        "With the increasing diversity of devices and screen sizes, responsive web design has become more crucial than ever. I enjoy creating layouts that provide an optimal viewing and interaction experience across a wide range of devices. By using fluid layouts, flexible images, and CSS media queries, I ensure that the websites I develop are accessible and user-friendly, regardless of whether they're being viewed on a desktop, tablet, or mobile device."
                    }
                    aria-label="Responsive Design card"
                />

                <Card
                    Icon={FiCodesandbox}
                    title={"Performance Optimization"}
                    disc={
                        "In the era of instant gratification, speed and performance are paramount to any web application's success. I place a high emphasis on performance optimization to ensure websites load and run as quickly as possible. This involves a variety of techniques such as Chrome Lighthouse, React Profiler, optimizing images, leveraging browser caching, and more. Through continuous optimizations, I strive to enhance user satisfaction and improve SEO rankings."
                    }
                    aria-label="UX/UI designer card"
                />

                <Card
                    Icon={CgWebsite}
                    title={"Testing"}
                    disc={
                        "As a dedicated front end developer, I understand the critical importance of rigorous testing in the software development process. To ensure the delivery of high-quality, reliable products, I integrate testing into all stages of development. I employ a variety of testing methodologies, including unit tests, integration tests, and end-to-end tests, to verify functionality and identify any bugs or issues."
                    }
                    aria-label="Backend Developer card"
                />
            </Cards>
        </Container>
    );
};

export default Services;

const Container = styled.div`
    width: 80%;
    height: 100vh;
    max-width: 1280px;
    margin: 0 auto;
    padding: 0rem 0;
    @media (max-width: 840px) {
        width: 90%;
    }
    h1 {
        padding-top: 0rem;
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
