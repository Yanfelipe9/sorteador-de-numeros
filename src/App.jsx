import styled from "styled-components";
import image from "./assets/images/mega-sena-img.svg";
import { useState } from "react";

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Logo = styled.img`
    width: 30rem;

    @media (max-width: 768px) {
        width: 20rem;
    }
`;

const Title = styled.h1`
    font-family: sans-serif;
    font-size: 4rem;
    font-weight: lighter;
    color: black;

    @media (max-width: 768px) {
        font-size: 2rem;
    }
`;
const Button = styled.button`
    margin: 1rem;
    width: 10rem;
    height: 3rem;
    border: 0.2rem green solid;
    border-radius: 1rem;
    background-color: white;
    color: black;
    font-size: 1rem;

    &:hover {
        transition: 0.5s;
        background-color: green;
        color: white;
    }

    &:active {
        transition: 0.1s;
        scale: 0.9;
    }
`;

const Resultado = styled.p`
    font-size: 3rem;

    @media (max-width: 768px) {
        font-size: 2rem;
    }
`;

function App() {
    const [numerosSorteados, setNumerosSorteados] = useState([]);

    const gerarNumeros = () => {
        let numeros = [];

        while (numeros.length < 6) {
            const novoNumero = Math.floor(Math.random() * 60) + 1;
            if (!numeros.includes(novoNumero)) {
                numeros.push(novoNumero);
            }
        }
        setNumerosSorteados(numeros);
    };

    return (
        <Wrapper>
            <Logo src={image} />
            <Title>Sorteador de números</Title>
            <Button onClick={gerarNumeros}>Gerar números</Button>
            <Resultado>{numerosSorteados.join("-")}</Resultado>
        </Wrapper>
    );
}

export default App;
