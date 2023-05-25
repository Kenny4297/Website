import styled from "styled-components";

const Card = (props) => {
    const { Icon, disc, title } = props;
    return (
        <Container>
            <span className="blue" aria-hidden="true">
                <Icon size={50} />
                    </span>
                    <h1>{title}</h1>
                    {disc.map((item, index) => (
                        <p key={index}>
                        {item.icon}
                        {item.text}
                        </p>
                    ))}
        </Container>
    );
};

export default Card;

const Container = styled.div`
    width: 100%;
    /* background: linear-gradient(
        159deg,
        rgb(45, 45, 58) 0%,
        rgb(43, 43, 53) 100%
    ); */
    background-color: var(---background);
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
        font-size: 1rem;
        margin-left: 1rem;
        margin-right: 1rem;
        color: #c7d8e6;
    }
    @media (max-width: 400px) {
        margin-right: 0.5rem;
    }
`;
