import styled from "styled-components";

const Wrapper = styled.div`
    padding: 2rem;
`;

const Title = styled.h1`
    text-align: center;
    font-size: 50px;
    color: white;
    font-weight: bold;
`;

const Header = () => {
    return (
        <Wrapper>
            <Title>Dio Bank</Title>
        </Wrapper>
    );
};

export default Header;
