import React from 'react';
import styled from 'styled-components';
import { FaLinkedinIn } from 'react-icons/fa'
import { FaGithub } from 'react-icons/fa'
import ProfNoBack from './assets/ProfNoBack.png'

const ProfComponent = () => {
    return (
        <Container>
            <Texts>
                <h4>Hello, <span className='green'>I'm</span></h4>
                <h1>Kedgard</h1>
                <h3>Web Developer</h3>
                <p>--Description of who I am here--</p>
                <button>Let's Create Something</button>
                <Social>
                    <p>Check out my</p>
                    <div className="social-icons">
                        <span><a href="#"><FaLinkedinIn/></a></span>
                        <span><a href="#"><FaGithub/></a></span>
                    </div>
                </Social>
            </Texts>
            <Profile>
                <img src={ProfNoBack} alt="Kedgard Cordero" />
            </Profile>
        </Container>
    )
}

export default ProfComponent;

const Container = styled.div`
    display: flex;
    gap: 2rem;
    padding: 3rem;
`
const Texts = styled.div`
    flex: 1;
    h4 {
        padding: 1rem 0;
        font-weight: 400;
    }
    h1 {
        font-size: 2rem;
        letter-spacing: 2px;
    }
`
const Social = styled.div``
const Profile = styled.div``


