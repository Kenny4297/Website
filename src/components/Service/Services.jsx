import { useInView } from "react-intersection-observer";
import styled, { keyframes, css } from "styled-components";
import Card from "./Card";
import { AiFillTool } from 'react-icons/ai';
import { DiDatabase} from 'react-icons/di';
import { FaDesktop } from 'react-icons/fa'; 

const Services = () => {
    const { ref, inView } = useInView({
        triggerOnce: false,
    });
    return (
        <Container id="services" ref={ref} animate={inView}>
            <h1 className="blue">What I Can Do</h1>
            <Cards>
                <Card
                    Icon={FaDesktop}
                    title="Front End"
                    disc={[
                        {
                            text: "Craft visually appealing and intuitive user interfaces using modern front-end technologies.",
                        },
                        {
                            text: "Optimize website performance by leveraging best practices in front-end development.",
                        },
                        {
                            text: "Stay up-to-date with the latest front-end trends and technologies to deliver cutting-edge web experiences.",
                        },
                    ]}
                    aria-label="Responsive Design card"
                />

                <Card
                    Icon={DiDatabase}
                    title="Back end"
                    disc={[
                        {
                            text: "Develop scalable and efficient server-side applications to handle complex business logic and data processing.",
                        },
                        {
                            text: "Implement secure authentication and authorization mechanisms to protect sensitive user data.",
                        },
                        {
                            text: "Integrate with databases and external APIs to seamlessly retrieve and manipulate data as required.",
                        },
                    ]}
                    aria-label="Performance card"
                />

                <Card
                    Icon={AiFillTool}
                    title="Maintenance Services"
                    disc={[
                        {
                            text: "Offer ongoing website maintenance to ensure smooth performance, security updates, and bug fixes.",
                        },
                        {
                            text: "Offer timely content updates, feature enhancements, and technical support to meet evolving client needs.",
                        },
                        {
                            text: "Implement search engine optimization (SEO) strategies to improve the website's visibility in search engine rankings.",
                        },
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
    animation: ${(props) =>
        props.animate
            ? css`
                  ${slideInFromRight} 1s forwards
              `
            : "none"};
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
