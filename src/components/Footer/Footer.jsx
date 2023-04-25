import styled from 'styled-components';
import { MdAlternateEmail } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { HiOutlineMailOpen } from "react-icons/hi";
import { AiFillGithub, AiFillLinkedin, AiOutlineArrowUp } from "react-icons/ai";
import { FiMail, FiPhoneCall } from "react-icons/fi";
import { Slide, Zoom, Fade } from "react-awesome-reveal";

const Footer = () => {
    return (
        <Container>
            <Profile>
                <h1>Portfolio</h1>
                <div className='address'>
                    <h1>Address:</h1>
                    <p>--Enter Address here--</p>

                </div>

                <div className="links">
                    <h1>Contact me directly: </h1>
                    <div>
                        <span><FiPhoneCall/></span>
                        <p>Skip phone section</p>
                    </div>
                    <div>
                        <span><HiOutlineMailOpen/></span>
                        <a href="mailto:geckob4i@gmail.com">geckob4i@gmail.com</a>
                    </div>
                    <div className="profiles">
                        <span className="icons"><a href="#"><AiFillGithub/></a></span>
                        <span className="icons"><a href="#"><AiFillLinkedin/></a></span>
                    </div>

                </div>
                <ArrowUp><AiOutlineArrowUp /></ArrowUp>

            </Profile>
            <Form>

                <form>
                    <div className="name">
                        <span><CgProfile /></span>
                        <input type='text' placeholder='Fullname...' />
                    </div>

                    <div className="email">
                        <span><MdAlternateEmail /></span>
                        <input type='email' placeholder='Email...' />
                    </div>

                    <div className="message">
                        <span className="messageIcon"><FiMail /></span>
                        <textArea cols='30' rows='10' placeholder='Message...' />
                    </div>

                    <button>Submit</button>
                </form>



            </Form>
        </Container>
    )
}

export default Footer;

const Container = styled.div`
    margin-top: 2rem;
    position: relative;
    padding: 2rem 0;
    width: 80%;
    max-width: 1280px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    @media(max-width: 840px) {
        width: 90%;
    }
`;

const Profile = styled.div`

    .address{
        padding: 1rem 0;
        h1 {
            font-size: 1.2rem;
        }

        p {
            width: 60%;
            padding-top: 0.5rem;
        }
    }

    .links {
        h1 {
            font-size: 1.2rem;
            margin-bottom: .5rem;
        }

        div{
            display: flex;
            align-items: center;
            gap: 0.5rem;
            a {
                text-decoration: none;
                color: lightgray;
                :hover {
                    color: orange;
                }
            }
        }
    }

    .profile {
        h1 {
            font-size: 1.2rem;
            padding: 1rem 0;
        }

        .icons{
            display: flex;
            align-items: center;

            span {
                display: flex;
                align-items: center;
                justify-content: center;
                background-color: #000;
                width: 2rem;
                height: 2rem;
                margin-right: 0.5rem;
                border-radius: 50px;

                :hover {
                    background-color: orange;
                }

                a {
                    margin-top: 0.2rem;
                    color: white;
                }
            }
        }
    }
`;

const Form = styled.div`

    flex: 1;
    h1 {
        font-size: 1.3rem;
        padding-bottom: 0.7rem;
    }

    form {
        background-color: #191923;
        padding: 0.8rem;
        border-radius: 5px;
        .name, .email, .message {
            display: flex;
            border: 1px solid gray;
            margin-bottom: .5rem;
            input, textarea {
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
                padding-top: .5rem;
            }
        }
    }
`;

const ArrowUp = styled.div`
    width: 2rem;
    height: 2rem;
    background-color: #01be96;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    font-size: 1.3rem;
    font-weight: 700;
    margin-top: 2rem;
`;