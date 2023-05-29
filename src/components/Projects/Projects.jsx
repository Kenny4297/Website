import styled, { keyframes, css} from "styled-components";
import { useInView } from 'react-intersection-observer';

import SliderComp from "./Slider";
import React from 'react';

const Projects = () => {
    const { ref, inView } = useInView({
        triggerOnce: false, 
    });
    return (
        <Container id="projects" ref={ref} animate={inView}>
            <h1>
                Featured <span className="blue">Projects</span>
            </h1>
            <Slide aria-roledescription="slider">
                <SliderComp />
            </Slide>
        </Container>
    );
};

export default Projects;

const slideInFromLeft = keyframes`
  0% {
    transform: translateX(-100%);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
`;

const Container = styled.div`
    animation: ${props => props.animate ? css`${slideInFromLeft} 1s forwards` : 'none'};
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

const Slide = styled.div``;
