import React, { useContext } from "react";
import { GlobalStateContext } from "../../global/GlobalStateContext";
import { Container, GameNumbers } from "./styled";

const NumberContainer = () => {
    
    const {competition} = useContext(GlobalStateContext)

    const numbers = competition &&
        competition.numeros && competition.numeros.map((number) => {
            return <GameNumbers key={number}>{number}</GameNumbers>;
    });

    return (
        <Container>
            {numbers}
        </Container>
    )
}

export default NumberContainer;