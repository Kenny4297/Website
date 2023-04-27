import styled from 'styled-components';
import { MdAlternateEmail } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { HiOutlineMailOpen } from "react-icons/hi";
import { AiFillGithub, AiFillLinkedin, AiOutlineArrowUp } from "react-icons/ai";
import { FiMail, FiPhoneCall } from "react-icons/fi";
import { Slide, Zoom, Fade } from "react-awesome-reveal";

const Footer = () => {
    const scrollUp = () => {
        window.scroll({
            top: 0,
            behavior: "smooth"
        
        })
    }
    return (
        <Container id="footer">
            <Profile>
                <h1 className='blue'>Portfolio</h1>
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
                <ArrowUp onClick={scrollUp}><AiOutlineArrowUp /></ArrowUp>

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
                    <div className="button-div">
                        <button>Submit</button>
                    </div>
                </form>



            </Form>
        </Container>
    )
}

export default Footer;

const Container = styled.div`
    margin-top: 2rem;
    position: relative;
    padding: 5rem 0;
    width: 80%;
    height: 74vh;
    max-width: 1280px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    @media(max-width: 840px) {
        width: 90%;
    }

    @media(max-width: 650px) {
        flex-direction: column;
        gap: 3rem;

    }
`;

const Profile = styled.div`
    width: 50%;
    margin-left: 15px;
    .address{
        padding: 1rem 0;
        h1 {
            font-size: 1.2rem;
        }

        p {
            width: 60%;
            padding-top: 0.5rem;
            @media(max-width: 650px) {
               width: 100%;
            }
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
        flex: 1;
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
    width: 50%;
    flex: 1;
    h1 {
        font-size: 1.3rem;
        padding-bottom: 0.7rem;
    }

    form {
        background-color: #191923;
        padding: 0.8rem;
        margin-top: 1.2rem;
        position: relative;
        right: .9rem;
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

        .button-div {
            text-align: center;
        }

        button {
            width: 5rem;
            height: 1.8rem;
            background-color: #0077b3;
            border: none;
            border-radius: 5px;
            filter: drop-shadow(0px 4px 5px #01be9);
            cursor: pointer;
            :hover {
                filter: drop-shadow(0px 6px 9px #01be9);
            }
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
    @media(max-width: 650px) {
        position: absolute;
        right: 3rem;
        top: 16rem;
    }
`;