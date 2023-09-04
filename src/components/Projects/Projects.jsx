import styled from "styled-components";
import { useInView } from "react-intersection-observer";
import React from "react";
import Project from './Project'

const Projects = () => {
    const { ref, inView } = useInView({
        triggerOnce: false,
    });
    return (
        <Container id="projects" ref={ref} animate={inView}>
            <h1>
                Featured <span className="blue">Projects</span>
            </h1>
            <Project />

        </Container>
    );
};

export default Projects;

const Container = styled.div`
    width: 80%;
    max-width: 1280px;
    margin: 0 auto;
    padding: 3rem 0;
    text-align: center;
    @media (max-width: 840px) {
        width: 90%;
    }
    h1 {
        font-size: 1.9rem;
    }
    p {
        width: 28rem;
        margin: 0 auto;
        padding: rem 0;
        font-size: 0.9rem;
        @media (max-width: 500px) {
            width: 90%;
        }
    }
`;

