import { SiJest } from "react-icons/si";
import { useInView } from 'react-intersection-observer';
import { RiSpeedFill } from "react-icons/ri";
import { BiMobile } from "react-icons/bi";
import styled, { keyframes, css} from "styled-components";
import Card from "./Card";

const Services = () => {
    const { ref, inView } = useInView({
        triggerOnce: false,
    });
    return (
        <Container id="services" ref={ref} animate={inView}>
            <h1 className="blue">What I Can Do</h1>
            <Cards>
            <Card
                Icon={BiMobile}
                title="Responsive Design"
                disc={[
                    {
                    text: "Prioritize responsive design to suit the increasing diversity of devices and screen sizes."
                    },
                    {
                    text: "Implement fluid layouts, flexible images, and CSS media queries for optimal viewing and interaction."
                    },
                    {
                    text: "Create websites that are accessible and user-friendly, whether viewed on desktop, tablet, or mobile devices."
                    }
                ]}
                aria-label="Responsive Design card"
                />

                <Card
                Icon={RiSpeedFill}
                title="Performance Optimization"
                disc={[
                    {
                    text: "Prioritize speed and performance in all web applications."
                    },
                    {
                    text: "Optimize performance to ensure fast loading and smooth running of websites."
                    },
                    {
                    text: "Leverage Chrome Lighthouse, React Profiler, image optimization, and browser caching techniques."
                    }
                ]}
                aria-label="Performance card"
                />

                <Card
                Icon={SiJest}
                title="Testing"
                disc={[
                    {
                    text: "Adhere to rigorous testing standards in all stages of software development."
                    },
                    {
                    text: "Incorporate testing into every stage of development for consistent high quality and reliability."
                    },
                    {
                    text: "Apply a variety of testing methodologies, including unit tests, integration tests, and end-to-end tests, to ensure functionality and identify issues."
                    }
                ]}
                aria-label="Testing card"
                />

            </Cards>
        </Container>
    );
};

export default Services;

const slideInFromRight = keyframes`
  0% {
    transform: translateX(100%);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
`;


const Container = styled.div`
    animation: ${props => props.animate ? css`${slideInFromRight} 1s forwards` : 'none'};
    width: 80%;
    max-width: 1280px;
    margin: 0 auto;
    padding: 0rem 0;
    height: 45rem;
    h1 {
        padding-top: 2rem;
    }
    @media (max-width: 1000px) {
        padding-bottom: 5rem;
    }
    @media (max-width: 978px) {
        padding-bottom: 15rem;
        height: 57.5rem;
    }
    @media (max-width: 913px) {
        height: 57.5rem;
    }
    @media (max-width: 840px) {
        width: 90%;
    }
    @media (max-width: 821px) {
        height: 60rem;
        padding-top: 1.5rem;
    }
    @media (max-width: 728px) {
        height: 62.5rem;
    }
    @media (max-width: 686px) {
        padding-bottom: 22.5rem;
    }
    @media (max-width: 650px) {
        height: 65rem;
    }
    @media (max-width: 596px) {
        padding-bottom: 30rem;
    }
    @media (max-width: 572px) {
        padding-bottom: 40rem;
    }
    @media (max-width: 541px) {
        height: 57.5rem;
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
        padding-bottom: 43rem;
    }
    @media (max-width: 413px) {
        height: 65rem;
    }
    @media (max-width: 394px) {
        padding-bottom: 40rem;
    }
    @media (max-width: 390px) {
        padding-bottom: 45rem;
    }
    @media (max-width: 376px) {
        padding-bottom: 45rem;
    }
    @media (max-width: 361px) {
        height: 65rem;
    }
`;
const Cards = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    margin-top: 2rem;
    gap: 1rem;
`;
