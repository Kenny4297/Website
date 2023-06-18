import styled, { keyframes, css} from "styled-components";
import { CgProfile } from "react-icons/cg";
import { useInView } from 'react-intersection-observer';
import { AiFillGithub, AiFillLinkedin, AiOutlineArrowUp } from "react-icons/ai";
import emailjs from "@emailjs/browser";
import { FiMail} from "react-icons/fi";
import { FaComment } from 'react-icons/fa'
import React, { useRef, useState } from "react";


const Footer = () => {
    const scrollUp = () => {
        window.scroll({
            top: 0,
            behavior: "smooth",
        });
    };

    const form = useRef();

    const [showConfirmation, setShowConfirmation] = useState(false);

    const [formData, setFormData] = useState({
        from_name: "",
        reply_to: "",
        message: "",
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const onSubmit = (event) => {
        event.preventDefault();
        emailjs.sendForm(
            process.env.REACT_APP_EMAILJS_SERVICE_ID,
            process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
            form.current,
            process.env.REACT_APP_EMAILJS_USER_ID
        );

        setShowConfirmation(true);
        form.current.reset();
        setTimeout(() => {
            setShowConfirmation(false);
        }, 20000);

        // Clear the input fields after the email is sent
        form.current.elements.from_name.value = "";
        form.current.elements.reply_to.value = "";
        form.current.elements.message.value = "";
    };

    const { ref, inView } = useInView({
        triggerOnce: false,
    });

    return (
        <Container id="footer" ref={ref} animate={inView}>
            <Profile>
                <h1 className="blue">Connect</h1>
                <div className="links">
                    <h1>Based in </h1>
                    <div>
                        <p>Minneapolis, Minnesota</p>
                    </div>

                    <HireMeDescription>
                        <div>
                            <p>Self-taught full stack web developer with experience in building websites for individuals, small businesses, sole proprietorships, and start-ups. I enjoy helping others achieve their dreams by creating the best possible content for all my clients.</p> 
                            
                            <RateParagraph>$30 - $50 an hour</RateParagraph>
                        </div>
                    </HireMeDescription>

                    <div className="profiles">
                        <span className="icons">
                            <a
                                href="https://github.com/Kenny4297"
                                rel="noreferrer"
                                target="_blank"
                                aria-label="GitHub"
                            >
                                <AiFillGithub size={50} />
                            </a>
                        </span>
                        <span className="icons">
                            <a
                                href="https://www.linkedin.com/in/kedgard-cordero/"
                                rel="noreferrer"
                                target="_blank"
                                aria-label="LinkedIn"
                            >
                                <AiFillLinkedin size={50} />
                            </a>
                        </span>
                    </div>
                </div>
                <ArrowUp className="scroll-up-arrow" onClick={scrollUp} data-testid="scroll-up-arrow">
                    <AiOutlineArrowUp />
                </ArrowUp>
            </Profile>
            <Form>
                <form onSubmit={onSubmit} ref={form}>
                    <div className="name">
                        <span>
                            <CgProfile />
                        </span>
                        <input
                            type="text"
                            id="name-input"
                            name="from_name"
                            value={formData.from_name}
                            data-testid="name-input"
                            onChange={handleChange}
                            placeholder="Fullname..."
                        />
                    </div>

                    <div className="email">
                        <span>
                            <FaComment/>
                        </span>
                        <input
                            type="text"
                            id="email-input"
                            name="reply_to"
                            data-testid="email-input"
                            value={formData.reply_to}
                            onChange={handleChange}
                            placeholder="Email or Phone..."
                        />
                    </div>

                    <div className="message">
                        <span className="messageIcon">
                            <FiMail />
                        </span>
                        <textarea
                            id="message-input"
                            name="message"
                            cols="30"
                            data-testid="message-input"
                            value={formData.message}
                            onChange={handleChange}
                            rows="10"
                            placeholder="Message..."
                        />
                    </div>
                    {showConfirmation ? (
                        <div className="button-div">
                            <p className="blue">
                                Thanks for reaching out! You'll hear back as
                                soon as possible!
                            </p>
                        </div>
                    ) : (
                        <div className="button-div">
                            <button
                                type="submit"
                                data-testid="submit-button"
                                aria-label="Submit"
                            >
                                Submit
                            </button>
                        </div>
                    )}
                </form>
            </Form>
        </Container>
    );
};

export default Footer;

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
    margin-top: 2rem;
    position: relative;
    padding: 5rem 0;
    width: 80%;
    max-width: 1280px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    @media (min-width: 995px) {
        padding-bottom: 10rem;
    }
    @media (max-width: 840px) {
        width: 90%;
        height: 30rem;
    }
    @media (max-width: 821px) {
        height: 25rem;
    }
    @media (max-width: 810px) {
        margin-bottom: 10rem;
        height: 25rem;
    }
    @media (max-width: 651px) {
        flex-direction: column;
        gap: 3rem;
        align-items: center;
        margin-right: 0rem;
        padding-right: 4rem;
        padding-bottom: 10rem;
        height: 35rem;
    }
    @media (max-width: 541px) {
        margin-bottom: 5rem;
        .scroll-up-arrow {
        display: none;
        }
    }
    @media (max-width: 500px) {
        marin-right: 0rem;
        padding-right: -1rem;
            .scroll-up-arrow {
            display: none;
        }
        
    }
    @media (max-width: 376px) {
        width: 100%;
        margin-bottom: 6rem;
    }
`;

const HireMeDescription = styled.div`
    margin-right: 2rem;
    line-height: 1.5rem;
    /* border: 2px solid red; */

    div {
      width: 100%;
      text-align: left;
      display: flex;
      flex-direction: column;
      align-items: left;
    }

    p {
        color: #A9A9A9;
        /* border: 2px solid green; */
        width: 100%;
    }
`

const RateParagraph = styled.p`
    margin-bottom: 1.5rem;
    /* border: 2px solid blue; */
    margin-top: -.5rem;
`

const Profile = styled.div`
    width: 50%;
    margin-left: 15px;
    .address {
        padding: 1rem 0;
        h1 {
            font-size: 1.2rem;
        }
        p {
            width: 60%;
            padding-top: 0.5rem;
            @media (max-width: 650px) {
                width: 100%;
            }
        }
    }
    .links {
        h1 {
            font-size: 1.2rem;
            margin-bottom: 0.5rem;
        }
        div {
            display: flex;
            align-items: center;
            gap: 0.5rem;
            a {
                text-decoration: none;
                color: white;
                width: 100px;
                :hover {
                    color: orange;
                }
            }
        }
    }
    .profile {
        flex: 1;
        h1 {
            font-size: 1.2rem;
            padding: 1rem 0;
        }
        .icons {
            display: flex;
            align-items: center;
            span {
                display: flex;
                align-items: center;
                justify-content: center;
                background-color: #000;
                margin-right: 0.5rem;
                border-radius: 50px;
                :hover {
                    background-color: orange;
                }
                a {
                    margin-top: 0.2rem;
                    color: blue;
                }
            }
        }
    }
`;

const Form = styled.div`
    width: 50%;
    flex: 1;
    h1 {
        font-size: 1.3rem;
        padding-bottom: 0.7rem;
    }
    form {
        /* background-color: #191923; */
        padding: 0.8rem;
        margin-top: 1.2rem;
        position: relative;
        right: 0.9rem;
        border-radius: 5px;
        @media (max-width: 650px) {
            width: 60vw;
            text-align: left;
            padding: 0;
            margin: 0 auto;
            margin-right: -10rem;
            margin-right: 10px; 
            margin-bottom: 5rem;
        }
        .name,
        .email,
        .message {
            display: flex;
            border: 1px solid white;
            margin-bottom: 0.5rem;
            input,
            textarea {
                border: none;
                width: 100%;
                outline: none;
                color: #fff;
                background-color: transparent;
                padding: 1rem;
            }
            span {
                background-color: #3e3e3e;
                width: 3rem;
                display: flex;
                align-items: center;
                justify-content: center;
            }
            .messageIcon {
                align-items: flex-start;
                padding-top: 0.5rem;
            }
        }
        .button-div {
            text-align: center;
        }
        button {
            width: 5rem;
            height: 1.8rem;
            background-color: #0077b3;
            border: none;
            border-radius: 5px;
            cursor: pointer;
        }
    }
`;

const ArrowUp = styled.div`
    width: 2rem;
    height: 2rem;
    background-color: #0077b3;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    font-size: 1.3rem;
    font-weight: 700;
    margin-top: 2rem;
    @media (max-width: 810px) {
        margin-bottom: 10rem;
    }
    @media (max-width: 650px) {
        position: absolute;
        right: 3rem;
        top: 16rem;
        margin-bottom: 5rem;
    }
`;
