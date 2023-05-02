import styled from 'styled-components'

const Card = (props) => {
    const {Icon, disc, title} = props;
    return (
        <Container>
            <span className='blue'><Icon/></span>
            <h1>{title}</h1>
            <p>{disc}</p>
        </Container>
    )
}

export default Card;

const Container = styled.div`
    width: 100%;
    background: linear-gradient(159deg, rgb(45, 45, 58) 0%, rgb(43, 43, 53) 100%);
    text-align: center;
    padding-top: 2rem;
    span {
        font-size: 4rem;
    }
    h1 {
        font-size: 1.5rem;
        padding-bottom: 1rem;
    }

    p {
        font-size: 1.1rem;
        color: #c7d8e6;
    }

    @media (max-width: 400px) {
        margin-right: .5rem;
    }
`