import styled from "styled-components";
import Input from "./Input";
import { useState } from "react";
import Button from "./Button";
import { login } from "../services/login";

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    background-color: white;
    padding: 20px;
    border-radius: 15px;
    gap: 15px;
`

const Text = styled.h3`
    text-align: center;
`

const Card = () => {

    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    return (
        <Wrapper>
            <Text>Faça o login</Text>
            <Input type="email" placeholder="email" setValue={setEmail} />
            <Input type="password" placeholder="password" setValue={setPassword} />
            <Button onClick={() => login(email)} />
        </Wrapper>
    )
}

export default Card;