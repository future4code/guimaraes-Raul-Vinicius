import React from "react";
import styled from "styled-components";

const ConteinerPrincipal = styled.div `
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
`

const FormConteiner = styled.form `
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
`

class Form2 extends React.Component {
  render() {
    return (
      <ConteinerPrincipal>
        <h1>Etapa II - Informações Escolares</h1>
        <FormConteiner action="">
          <label for="curso">
            {" "}
            Você faz qual curso?{" "}
            <input type="text" id="curso" placeholder="Digite seu curso..." />
          </label>
          <label for="escola">
            {" "}
            Você estudou em qual instituição de ensino?
            <input
              type="text"
              id="escola"
              placeholder="Digite sua instituição..."
            />
          </label>
        </FormConteiner>
      </ConteinerPrincipal>
    );
  }
}

export default Form2;