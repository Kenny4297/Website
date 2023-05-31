import styled from "styled-components";
import { useState, useEffect } from "react";
import Header from "./components/Banner/Header";
import ProfComponent from "./components/Banner/ProfComponent";
import Services from "./components/Service/Services";
import Projects from "./components/Projects/Projects";
import Clients from "./components/Clients/Clients";
import Footer from "./components/Footer/Footer";
import Skills from "./components/Skills/Skills"

function App() {
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        setIsLoaded(true);
    }, []);

    return (
        <Container style={{ opacity: isLoaded ? 1 : 0 }}>
            <Banner>
                <Header />
                <ProfComponent />
            </Banner>
            <Skills />
            <LightColor>
                <Services />
            </LightColor>
            <Projects />

            <LightColor>
                <Clients />
            </LightColor>
            <Footer />
        </Container>
    );
}

export default App;

const Container = styled.div`
    transition: opacity 1s ease-in-out;
`;

const Banner = styled.div`
    background: linear-gradient(
        159deg,
        rgb(45, 45, 58) 0%,
        rgb(43, 43, 53) 100%
    );
    height: 100vh;
    /* @media (min-height: 650px ) {
        height
    } */


    @media (min-width: 1101px) {
        /* height: 35rem; */
        height: 100vh;
    }
    @media (max-width: 1100px) {
        /* height: 40rem; */
        height: 100vh;

    }
    @media (max-width: 821px) {
        /* height: 40rem; */
        height: 100vh;

    }
    @media (max-width: 650px) {
        /* height: 40rem; */
        padding-bottom: 1rem;
    }
    @media (max-width: 482px) {
        height: 40rem;
        padding-bottom: 1rem; 
    } 
    @media (max-width: 437px) {
        height: 35rem;
        padding-bottom: 5rem; 
    } 
    @media (max-width: 413px) {
        height: 35rem;
    }
    @media (max-width: 376px) {
        height: 40rem;
        padding-bottom: 1rem; 
    } 
    @media (max-width: 330px) {
        height: 42.5rem;
        padding-bottom: 1rem;
    }
`;

const LightColor = styled.div`
    background: linear-gradient(
        159deg,
        rgb(45, 45, 58) 0%,
        rgb(43, 43, 53) 100%
    );
`;
