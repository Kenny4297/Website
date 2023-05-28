import React, { useRef } from "react";
import Slider from "react-slick";
import Project from "./Project";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import styled from "styled-components";
import BeTethical from "../Banner/assets/BeTethicalCrop.png";
import weather from "../Banner/assets/weather-wizardCrop.png";
import quiz from '../Banner/assets/quizCrop.png'

let data = [
    {
        img: BeTethical,
        disc: "A full-stack forum that allows users to post thoughts and comments about any video game they enjoy.",
        title: "Be Tethical!",
        deployment: "https://be-tethical-production.up.railway.app/",
    },
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
];

let settings = {
    className: "center",
    centerMode: true,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    initialSlide: 0,
    arrows: false,
    responsive: [
        {
            breakpoint: 990,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                dots: false,
                centerMode: false,
            },
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2,
                centerMode: false,
            },
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                centerMode: false,
            },
        },
    ],
};
const SliderComp = () => {
    const arrowRef = useRef(null);
    let sliderProject = "";
    sliderProject = data.map((item, i) => <Project item={item} key={i} />);
    return (
        <Container aria-roledescription="slider" data-testid="slider-comp">
            <Slider ref={arrowRef} {...settings}>
                {sliderProject}
            </Slider>
            <Buttons>
                <button
                    onClick={() => arrowRef.current.slickPrev()}
                    className="back"
                    aria-label="Previous Slide"
                    data-testid="back-button"
                >
                    <IoIosArrowBack />
                </button>
                <button
                    onClick={() => arrowRef.current.slickNext()}
                    className="next"
                    aria-label="Next Slide"
                    data-testid="forward-button"
                >
                    <IoIosArrowForward />
                </button>
            </Buttons>
        </Container>
    );
};

export default SliderComp;

const Container = styled.div`
    position: relative;
`;

const Buttons = styled.div`
    button {
        width: 2rem;
        height: 2rem;
        background-color: rgba(255, 255, 255, 0.1);
        cursor: pointer;
        color: #0077b3;
        border: none;
        position: absolute;
        top: 45%;
        right: -1rem;
    }
    .back {
        left: -1rem;
    }
`;
