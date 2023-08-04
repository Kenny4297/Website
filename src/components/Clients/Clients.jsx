import styled, { keyframes, css } from "styled-components";
import React, { useRef } from "react";
import Slider from "react-slick";
import { useInView } from "react-intersection-observer";
import ClientSlider from "./ClientSlider";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

let clients = [
    {
        name: "Jay Padrnos",
        position: 'Client',
        disc: `I had the pleasure of hiring Ked to build me a learning platform to teach me C++, and it exceeded my expectations. The platform's seamless structure and flow allowed me to progress through the fundamentals of C++ effortlessly. It not only taught me syntax and language features but also instilled problem-solving skills and a logical approach to programming. The lessons, quizzes, challenges, along with the code examples and detailed explanations enhanced my learning experience and I was able to grasp these concepts quickly. Thanks to "Learn C++," I gained a solid foundation in C++ and the confidence to tackle new concepts and challenges independently. I recommend Ked to anyone looking for a talented and experienced developer who can build exceptional websites that meet their specific needs and exceed their expectations. With Ked's expertise in web development, attention to detail, and commitment to delivering high-quality results, clients can trust that their website will be thoughtfully designed, visually appealing, and user-friendly.`,
    },
    {
        name: "Jenna Richardson",
        position: "Client",
        disc: `I can't speak highly enough of Ked. My site initially was slow to load and failed to meet guidelines for color accessibility, but Ked went above and beyond to improve these issues. I don’t quite understand what he did when he told me, but the changes he made to the site's architecture led to a noticeable improvement in loading times.

        Despite our challenges to balance the guidelines and to keep the original color scheme, Ked professionally let me know that we had to modify the colors in order to meet website color guidelines. 
        
        His patience with me, technical skills, and dedication to customer satisfaction were extraordinary. I would highly recommend him to anyone in need of a web developer who doesn't just "do" the job but does it exceptionally well.
        `,
    },
    {
        name: "Gary Ahlmes",
        position: "University of Minnesota Boot Camp Instructor",
        disc: `I had the pleasure of being Ked's instructor for an intensive 12-week MERN stack bootcamp taught through the University of Minnesota. The course was full-time, and required 5+ hours per day of in-class time, plus a great deal of evening and weekend work. Lessons were fast-paced and students had to be able to learn at a brisk pace and adapt quickly.

        Ked is one of the brightest students I've ever taught, and he had no trouble absorbing most of the material at a very fast pace. When he had questions, they were insightful and showed an active mind. He also went above and beyond during the group project work, showing skills far beyond most developers at this stage. He's also an outstanding group member, and was always ready to help other students. He would be a fantastic addition to any dev team.`,
    },
    {
        name: "Samuel Jacobson",
        position: "Client",
        disc: `Our photography website was suffering from poor image resizing and slow load times after our previous developer left. Upon reaching out, Ked quickly identified and remedied these issues. He also identified the large image files as the culprits behind our slow website, optimizing them to improve loading speed. His proficiency, methodical approach, and clear communication were commendable. I highly recommend him for his skills in web development and his dedication to clear client communication.`,
    },
    
];

// Setting for the slideshow
let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
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
                dots: true,
            },
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                initialSlide: 2,
            },
        },
        {
            breakpoint: 530,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: false,
            },
        },
    ],
};

const Clients = () => {
    // useRef allows direct communication with the slider component
    const arrowRef = useRef(null);
    let clientDisc = "";
    clientDisc = clients.map((item, i) => <ClientSlider item={item} key={i} />);

    const { ref, inView } = useInView({
        triggerOnce: false,
    });

    return (
        <Container id="testimonials" ref={ref} animate={inView}>
            <h1 className="blue" aria-label="Testimonials">
                testimonials
            </h1>
            <Testimonials>
                <Slider ref={arrowRef} {...settings}>
                    {clientDisc}
                </Slider>
                <Buttons>
                    <button
                        data-testid="back-button"
                        onClick={() => arrowRef.current.slickPrev()}
                        aria-label="Previous testimonial"
                    >
                        <IoIosArrowBack />
                    </button>
                    <button
                        data-testid="forward-button"
                        onClick={() => arrowRef.current.slickNext()}
                        aria-label="Next testimonial"
                    >
                        <IoIosArrowForward />
                    </button>
                </Buttons>
            </Testimonials>
        </Container>
    );
};

export default Clients;

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
    max-width: 1270px;
    margin: 0 auto;
    padding-bottom: 5rem;

    @media (max-width: 913px) {
        height: 40rem;
    }
    @media (max-width: 840px) {
        width: 90%;
    }
    @media (max-width: 821px) {
        height: 45rem;
    }
    @media (max-width: 626px) {
        width: 90%;
        padding-bottom: 13rem;
    }
    @media (max-width: 541px) {
        padding-bottom: 20rem;
        height: 35rem;
    }
    @media (max-width: 414px) {
        width: 90%;
        padding-bottom: 5rem;
        height: 45rem;
    }
    @media (max-width: 413px) {
        padding-bottom: 20rem;
    }
    @media (max-width: 391px) {
        width: 90%;
        padding-bottom: 15rem;
    }
    @media (max-width: 376px) {
        width: 90%;
        padding-bottom: 20rem;
    }
    @media (max-width: 361px) {
        padding-bottom: 25rem;
        height: 40rem;
    }
    span {
        font-weight: 700;
        text-transform: uppercase;
    }
    h1 {
        padding-top: 2.5rem;
        text-transform: capitalize;
    }
    .slick-list,
    .slick-slider,
    .slick-track {
        padding: 0;
        @media (max-width: 526px) {
            margin-right: -0.9rem;
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
        background: linear-gradient(
            159deg,
            rgb(45, 45, 58) 0%,
            rgb(43, 43, 53) 100%
        );
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
`;

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
`;

const Buttons = styled.div`
    position: absolute;
    right: 0.7rem;
    bottom: -2rem;
    button {
        background-color: transparent;
        margin-left: 0.5rem;
        border: none;
        color: #0077b3;
        cursor: pointer;
        font-size: 1.1rem;
    }
    @media (max-width: 530px) {
        display: none;
    }
`;
