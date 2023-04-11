import styled from 'styled-components'
import SliderComp from './Slider';

const Projects = () => {
    return (
        <Container>
            <h1>Recent <span className='green'>Projects</span></h1>
            <p>---Description of projects here---</p>
            <Slide>
                <SliderComp />
            </Slide>
        </Container>
    )
}

export default Projects;

const Container = styled.div`
    width: 80%;
    max-width: 1280px;
    margin: 0 auto;
    padding: 3rem 0;
    text-align: center;

    h1 {
        font-size: 1.9rem;
    }

    p {
        width: 28rem;
        margin: 0 auto;
        padding: rem 0;
        font-size: 0.9rem;
    }
`

const Slide = styled.div``