import styled from "styled-components";
import Header from "../components/Header";
import Card from "../components/Card";

const Wrapper = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: #9413dc;
    padding: 0 50px;
`;

const Home = () => {

    return (
        <Wrapper>
            <Header />
            <Card />
        </Wrapper>
    );
};

export default Home;
