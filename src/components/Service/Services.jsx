import { MdDesignServices } from "react-icons/md";
import { FiCodesandbox } from "react-icons/fi";
import { CgWebsite } from "react-icons/cg";
import styled from 'styled-components'
import Card from "./Card";

const Services = () => {
    return (
        <Container id="services">
            <h1 className="blue">What I Do</h1>
            <Cards>
                <Card
                Icon={MdDesignServices} 
                title={"Full Stack React developer"}
                disc={"--Put description here--"}
                />

                <Card
                Icon={FiCodesandbox} 
                title={"UX/UI designer"}
                disc={"--Put description here--"}
                />

                <Card
                Icon={CgWebsite} 
                title={"Backend Developer"}
                disc={"--Put description here--"}
                />
            </Cards>
        </Container>
    )
}

export default Services;

const Container = styled.div`
    width: 80%;
    max-width: 1280px;
    margin: 0 auto;
    padding: 3rem 0;
    @media (max-width: 840px) {
        width: 90%;
    }
    h1 {
        padding-top: 1rem;
    }
`;
const Cards = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    margin-top: 4rem;
    gap: 1rem;
`;