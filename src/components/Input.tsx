import styled from "styled-components";

const StyledInput = styled.input`
    font-size: large;
    padding: 10px;
`;

interface IInput {
    placeholder: string,
    type: string,
    setValue: (value: string) => void
}

const Input = ({ placeholder, type, setValue }: IInput) => {
    return <StyledInput placeholder={placeholder} type={type} onChange={(event) => setValue(event.target.value)} />;
}

export default Input;