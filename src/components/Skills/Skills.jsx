import styled from 'styled-components';
import { ReactOriginal, JavascriptPlain, TypescriptPlain, Html5PlainWordmark, Css3OriginalWordmark, NodejsOriginalWordmark, ExpressOriginal, MysqlOriginal, MongodbOriginal }  from 'devicons-react';

const Skills = () => {
    return (
        <Container id="skills">
                <h1 className="blue" >Skills</h1>
                <h2 className="blue" style={{textAlign: 'center'}}>Front-end</h2>
                <SkillsSection>
                    <Card>
                        <ReactOriginal size={100} />
                        <h3>React</h3>
                    </Card>

                    <Card>
                        <JavascriptPlain color="#F7DF1E" size={100} />
                        <h3>JavaScript</h3>
                    </Card>

                    <Card>
                        <TypescriptPlain color="#007ACC" size={100} />
                        <h3>TypeScript</h3>
                    </Card>

                    <Card>
                        <Html5PlainWordmark color="#E34F26" size={100} />
                        <h3>HTML5</h3>
                    </Card>

                    <Card>
                        <Css3OriginalWordmark size={100} />
                        <h3>CSS3</h3>
                    </Card>
                </SkillsSection>
                <h2 className="blue" style={{textAlign: 'center'}}>Back-end</h2>
                <SkillsSection>
                    <Card>
                        <NodejsOriginalWordmark size={100} />
                        <h2>Node.js</h2>
                    </Card>

                    <Card>
                        <ExpressOriginal color="red" size={100} />
                        <h2>Express</h2>
                    </Card>

                    <Card>
                        <MysqlOriginal size={100} />
                        <h2>MySQL</h2>
                    </Card>

                    <Card>
                        <MongodbOriginal size={100} />
                        <h2>MongoDB</h2>
                    </Card>

                </SkillsSection>
        </Container>
    )
}

export default Skills;

const Container = styled.div`
    width: 80%;
    max-width: 1280px;
    margin: 0 auto;
    padding: 0rem 0;

    h1 {
        padding-top: 2rem;
    }
    @media (min-width: 1600px) {
        h1 {
            margin: 0 auto;
        }
    }
    @media (max-width: 1400px) {
        height: 40rem;
    }
    @media (max-width: 1120px) {
        height: 40rem;
    }
    @media (max-width: 1000px) {
        height: 52.5rem;
    }
    @media (max-width: 840px) {
        height: 55rem;
    }
    @media (max-width: 800px) {
        height: 67.5rem;
    }
    @media (max-width: 599px) {
        height: 80rem;
    }
    @media (max-width: 560px) {
        height: 80rem;
    }
    @media (max-width: 400px) {
        height: 135rem;
    }
`

const Title = styled.div``;

const SkillsSection = styled.div`
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
`;


const Card = styled.div`
    display: flex;
    justify-content: center;
    min-width: 8rem;
    flex-direction: column;
    align-items: center;
    margin: 1rem 1rem;
    padding-top: 1rem;
    background: var(--lighter);
    :hover {
        transform: scale(1.1);
    }

`;