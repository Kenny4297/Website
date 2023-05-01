import styled from "styled-components";
import { useState, useEffect } from "react";
import Header from "./components/Banner/Header";
import ProfComponent from "./components/Banner/ProfComponent";
import Services from "./components/Service/Services";
import Projects from "./components/Projects/Projects";
import Clients from "./components/Clients/Clients";
import Footer from "./components/Footer/Footer";

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
            <Services />
            <LightColor>{/* <Projects /> */}</LightColor>
            <LightColor>
                <Clients />
            </LightColor>
            {/* <LightColor> */}
            <Footer />
            {/* </LightColor> */}
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
    @media (max-width: 640px) {
        height: 100%;
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
