import React, { useState, useRef } from "react";
import styled from "styled-components";

const Header = () => {
    const [bar, setBar] = useState(false);
    const navRef = useRef(null);

    // Creating my own hamburger
    const handleClick = (event) => {

        //  When the user clicks on an element with the class "bars", the navigation screen visibility is toggled.
        if (event.target.closest('.bars')) {
            setBar(!bar);
            navRef.current.style.height = bar ? '0' : '100vh';

            //  When the user clicks on a navigation link that contains a '#' symbol in its href attribute, the code logs a message and creates a media query object that checks if the viewport width is less than or equal to 640 pixels.
        } else if (event.target.href && event.target.href.includes('#')) {
            const mediaQuery = window.matchMedia('(max-width: 640px)');

            //  If the media query matches and the navigation screen is currently visible, the code hides the navigation screen by setting its height to '0' and updates the 'bar' state
            if (mediaQuery.matches && navRef.current.style.height !== '0') {
                navRef.current.style.height = '0';
                setBar(false);
            }
        }
    }

    return (
        <Container bar={bar}>
            <Logo>
                {/* <RotatingReact data-testid="rotating-react" size={30} /> */}
                <h1 className="blue">Portfolio</h1>
            </Logo>
            <Nav ref={navRef} bar={bar} data-testid="nav" role="navigation">
                <span>
                    <a href="#skills" data-testid="skills-link" onClick={handleClick}>
                        Skills
                    </a>
                </span>
                <span>
                    <a href="#services" data-testid="services-link" onClick={handleClick}>
                        Services
                    </a>
                </span>
                <span>
                    <a href="#projects" data-testid="projects-link" onClick={handleClick}>
                        Projects
                    </a>
                </span>
                <span>
                    <a href="#testimonials" onClick={handleClick}>
                        Testimonials
                    </a>
                </span>
                <span>
                    <a href="#footer" onClick={handleClick}>
                        Connect
                    </a>
                </span>
            </Nav>
            <div className="bars" data-testid="bars" onClick={handleClick} role="button" aria-label="Toggle Menu">
                <div className="bar"></div>
            </div>
        </Container>
    );
};

export default Header;

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 1280px;
    width: 80%;
    margin: 0 auto;
    padding: .5rem 0;
    position: relative;
    animation: header 500ms ease-in-out;
    /* border: 2px solid red; */
    @media (max-width: 763px) {
        width: 90%;
    }
    .bars {
        display: none;
    /* border: 2px solid red; */

    }
    @media (max-width: 640px) {
    /* border: 2px solid red; */

        .bars {
            width: 40px;
            height: 40px;
            position: relative;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 0.5rem;
            z-index: 100;
            /* border: 2px solid red; */

            .bar {
                position: absolute;
                /* border: 2px solid red; */
                width: 100%;
                height: 2px;
                /* Change the bar color based on it's props */
                background-color: ${(props) =>
                    props.bar ? "transparent" : "#fff"};
                transition: all 400ms ease-in-out;
                :before,
                :after {
                    content: "";
                    width: 100%;
                    height: 2px;
                    background-color: #fff;
                    position: absolute;
                }
                :before {
                    transform: ${(props) =>
                        props.bar ? "rotate(45deg)" : "translateY(10px)"};
                    transition: all 400ms ease-in-out;
                }
                :after {
                    transform: ${(props) =>
                        props.bar ? "rotate(-45deg)" : "translateY(-10px)"};
                    transition: all 400ms ease-in-out;
                }
            }
        }
    }
`;

const Logo = styled.div`
    display: flex;
    align-items: center;
    gap: 0.5rem;
    /* border: 2px solid red; */
    span {
        font-size: 1.8rem;
        /* border: 2px solid red; */
    }
    h1 {
        font-weight: 600;
        font-size: 1.8rem;
        /* border: 2px solid red; */
    }
`;

const Nav = styled.div`
    /* border: 2px solid red; */
    @media (max-width: 640px) {
        /* border: 2px solid green; */
        position: fixed;
        display: flex;
        flex-direction: column;
        background-color: #0077b3;
        inset: 0;
        justify-content: center;
        align-items: center;
        font-size: 2rem;
        gap: 2rem;
        width: 90%;
        /* height: 5rem; */
        font-weight: 700;
        height: ${(props) => (props.bar ? "100vh" : 0)};
        transition: height 400ms ease-in-out;
        overflow: hidden;
        z-index: 100;
    }
    span {
        margin-left: 1rem;
        /* border: 2px solid red; */
        a {
            color: #fff;
            text-decoration: none;
            font-weight: 400;
            position: relative;
            /* border: 2px solid red; */
            :before {
                content: "";
                position: absolute;
                left: 0;
                right: 0;
                bottom: -5px;
                height: 2px;
                background-color: #fff;
                transform: scale(0);
                transform-origin: right;
                transition: transform 400ms ease-in-out;
            }
            :hover:before {
                transform: scale(1);
                transform-origin: left;
            }
            :hover {
                opacity: 0.7;
            }
        }
    }
`;