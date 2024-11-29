import styled from "styled-components";

const StyledButton = styled.input`
width: 100%;
    background-color: teal;
    padding: 15px;
    border-radius: 10px;
    margin: 10px 0;
    font-size: large;
    color: white;
    font-weight: bold;
    border: none;
    &:hover{
        opacity: .9;
        cursor: pointer;
    }
`;

interface IButton {
    onClick: () => void;
}

const Button = ({ onClick }: IButton) => {
    return <StyledButton type="button" value="Entrar" onClick={onClick} />;
}

export default Button;