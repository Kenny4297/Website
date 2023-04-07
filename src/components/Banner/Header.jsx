import React, {useState} from 'react'
import styled from 'styled-components'

const Header = () => {
    const [bar, setBar] = useState(false)
    return (
        <Container>
            <Logo>
                <h1>Portfolio</h1>
            </Logo>
            <Nav>
                <span><a href="#">Home</a></span>
                <span><a href="#">Services</a></span>
                <span><a href="#">Projects</a></span>
                <span><a href="#">Testimonials</a></span>
                <span><a href="#">Portfolio</a></span>
            </Nav>
            <div className="bars">
                <div className="bar"></div>
            </div>
        </Container>
    )
}

export default Header

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 1280px;
    width: 80%;
    margin: 0 auto;
    padding: 1.5rem 0;
    @media(max-width: 763px){
        width: 90%;
    }
    @media(max-width: 640px){
        .bars {
            width: 40px;
            height: 40px;
            position: relative;
            display: flex;
            align-items: center;
            justify-content: center;
            .bar {
                position: absolute;
                width: 100%;
                height: 2px;
                background-color: white;
                :before, :after{
                    content: "";
                    width: 100%;
                    height: 2px;
                    background-color: #fff;
                    position: absolute;
                }

                :before{
                    transform: translateY(10px)
                }

                :after{
                    transform: translateY(-10px)
                }
            }
        }
    }
`
const Logo = styled.div`
    display: flex;
    align-items: center;
    gap: .5rem;   
    span {
        font-size: 1.8rem;
        color: ;
    } 
    h1 {
        font-weight: 600;
        font-size: 1.8rem;
        color: white;
    }
`
const Nav = styled.div`
    @media(max-width: 640px) {
        position: absolute;
        display: flex;
        flex-direction: column;
        background-color: #01be96;
        top: 0;
        right: 0;
        left: 0;
        bottom: 0;
        justify-content: center;
        align-items: center;
        font-size: 2rem;
        gap: 2rem;
        font-weight: 700;
        height: 0;
        overflow: hidden;
    }
    span {
        margin-left: 1rem;
        a {
            text-decoration: none;
            font-weight: 400;
            color: #fff;
            position: relative;
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
`

