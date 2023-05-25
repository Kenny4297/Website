import styled from 'styled-components';
import React, { useRef } from 'react';
import Slider from 'react-slick'
import ClientSlider from './ClientSlider';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import Clay from '../Banner/assets/Clay.jpeg';
import Olu from '../Banner/assets/Olu.jpeg';
import Gary from '../Banner/assets/Gary.jpeg'
import Max from '../Banner/assets/Max.jpeg';


let clients = [
    {
        name : "Olu Akinyemi",
        position : "Web Developer",
        img : Olu,
        disc : `Ked is an exceptional programmer because he cares about learning and is always striving to get better. Ked's technical acumen, flexibility, and team spirit shone throughout our time together in the same cohort. Ked's eagerness to help others, facility with articulating intricate ideas, and commitment to development make him an invaluable team member. His leadership skills, which include planning ahead, prioritizing tasks, and actively listening, have helped him succeed in a wide range of team contexts. Ked is a rare find and an asset to any entity looking to hire a committed, skilled, and adaptable programmer. I have no doubt that he will keep growing to new heights.`
    },
    {
        name : "Gary Ahlmes",
        position : "University of Minnesota Boot Camp Instructor",
        img: Gary,
        disc : `I had the pleasure of being Ked's instructor for an intensive 12-week MERN stack bootcamp taught through the University of Minnesota. The course was full-time, and required 5+ hours per day of in-class time, plus a great deal of evening and weekend work. Lessons were fast-paced and students had to be able to learn at a brisk pace and adapt quickly.

        Ked is one of the brightest students I've ever taught, and he had no trouble absorbing most of the material at a very fast pace. When he had questions, they were insightful and showed an active mind. He also went above and beyond during the group project work, showing skills far beyond most developers at this stage. He's also an outstanding group member, and was always ready to help other students. He would be a fantastic addition to any dev team.`
    },
    {
        name : "Clay Andemar",
        position : "Web Developer",
        img: Clay,
        disc : `During my time at the University of Minnesota Coding Boot Camp, I was very fortunate to work with Ked. We were assigned into the same group for our second project. Ked was willing to step up and be the voice of our group. He kept the group organized and set an attainable goal for our app. Our group members were all at different levels of skill. Ked was able to get his own work done on time while helping other members with their tasks. Overall, Ked is an amazing teammate and I'm proud to say that I learned a lot from him in our short time of working together!`
    },
    {
        name : "Maxwell Walters",
        position : "Web Developer",
        img: Max,
        disc : `Ked is a committed and skilled collaborator who was an absolute pleasure to work with on our group project. His exceptional communication skills and ability to think creatively and problem-solve in innovative ways were instrumental in our success. Ked consistently went above and beyond what was expected of him and showed exceptional dedication and work ethic. I highly recommend him to anyone seeking a skilled and committed team member.`
    },
]
// Setting for the slideshow
let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    arrows : false,
    responsive: [
      {
        breakpoint: 990,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2
        }
      },
      {
        breakpoint: 530,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false
        }
      }
    ]}

const Clients = () => {
    // useRef allows direct communication with the slider component
    const arrowRef = useRef(null);
    let clientDisc = "";
    clientDisc = clients.map((item, i) => (
        <ClientSlider item={item} key={i} />
    ))
    return (
        <Container id="recommendation">
            <h1 className="blue" aria-label="Recommendations">recommendations</h1>
            <Testimonials>
                <Slider ref={arrowRef} {...settings}>
                    {clientDisc}
                </Slider>
                <Buttons>
                    <button data-testid="back-button" onClick={() => arrowRef.current.slickPrev()} aria-label="Previous testimonial">
                        <IoIosArrowBack />
                    </button>
                    <button data-testid="forward-button" onClick={() => arrowRef.current.slickNext()} aria-label="Next testimonial">
                        <IoIosArrowForward />
                    </button>
                </Buttons>
            </Testimonials>
        </Container>
    );
}

export default Clients;

const Container = styled.div`
    width: 80%;
    max-width: 1270px;
    margin: 0 auto;
    padding-bottom: 5rem;
    height: 100vh;

    @media (max-width: 913px) {
        height: 40rem;
    }
    @media(max-width: 840px) {
        width: 90%;
    }
    @media (max-width: 821px) {
        height: 45rem;
    }
    @media(max-width: 626px) {
        width: 90%;
        padding-bottom: 13rem;
    }
    @media (max-width: 541px) {
        padding-bottom: 20rem;
        height: 35rem;
    }
    @media(max-width: 414px) {
        width: 90%;
        padding-bottom: 5rem;
        height: 45rem;
    }
    @media (max-width: 413px) {
        padding-bottom: 20rem;
    }
    @media(max-width: 391px) {
        width: 90%;
        padding-bottom: 5rem;
    }
    @media(max-width: 376px) {
        width: 90%;
        padding-bottom: 20rem;
    }
    @media (max-width: 361px) {
        padding-bottom: 25rem;
        height: 30rem;
        /* padding-left: 2rem; */
    }

    span {
        font-weight: 700;
        text-transform: uppercase;
    }
    h1 {
        padding-top: 2.5rem;
        text-transform: capitalize;
    }
    .slick-list, .slick-slider, .slick-track {
        padding: 0;
        @media (max-width:526px) {
            margin-right: -.9rem;
        }
    }
    .slick-dots {
        text-align: left;
    }
    .slick-dots li button:before {
        content: " ";
    }
    .slick-dots li button {
        width: 9px;
        height: 4px;
        background: linear-gradient(159deg, rgb(45, 45, 58) 0%, rgb(43, 43, 53) 100%);
        padding: 0.1rem;
        margin-top: 1rem;
        transition: all 400ms ease-in-out;
        border-radius: 50px;
    }
    .slick-dots li.slick-active button {
        background: #0077b3;
        width: 15px;
    }
    .slick-dots li {
    margin: 0;
    }
`

const Testimonials = styled.div`
    margin-top: 2rem;
    position: relative;
    font-size: 3rem;
    @media (max-width: 527px) {
        width: 100%;
        position: relative;
        right: 1.7rem;
        margin-right: 0rem;
    }
`

const Buttons = styled.div`
    position: absolute;
    right: 0.7rem;
    bottom: -2rem;
    button{
        background-color: transparent;
        margin-left: 0.5rem;
        border: none;
        color: #0077b3;
        cursor: pointer;
        font-size: 1.1rem;
    }
    @media(max-width:530px){
        display: none;
    }
`


