import React from "react";
import styled from "styled-components";

const ConteinerPrincipal = styled.div `
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
`

class ThankYou extends React.Component {
  render() {
    return (
        <ConteinerPrincipal>
            <h1>O formulário acabou.</h1>
            <p>Agradecemos sua disponibilidade para responder nossas perguntas!</p>
        </ConteinerPrincipal>
        
    );
  }
}

export default ThankYou;