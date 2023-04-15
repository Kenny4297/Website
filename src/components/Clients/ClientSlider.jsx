import styled from 'styled-components';
import {IoIosQuote} from "react-icons/io";
import {AiOutlineStar} from "react-icons/ai";

const ClientSlider = (props) => {
    const {name, position, img_url, stars, disc} = props.item;

    return (
        <Container>
            <Header>
                <span><IoIosQuote/></span>
                <span>
                    <AiOutlineStar/>
                    <AiOutlineStar/>
                    <AiOutlineStar/>
                    <AiOutlineStar/>
                    <AiOutlineStar/>
                </span>
            </Header>
            <Body>
                {disc}
            </Body>
            <Footer>
                <img src={img_url} alt={name} />
                <div className="details">
                    <h1>{name}</h1>
                </div>
            </Footer>
        </Container>
    )
};

export default ClientSlider;

const Container = styled.div``;
const Header = styled.div``;
const Body = styled.p``

