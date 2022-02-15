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

class Form3 extends React.Component {
  render() {
    return (
      <ConteinerPrincipal>
        <h1>Etapa III - Informações Escolares Complementares</h1>
        <FormConteiner>
          <label for="motivacao">
            {" "}
            Por que você não terminou seu curso de graduação?{" "}
            <input type="text" id="motivacao" placeholder="Explique aqui..." />
          </label>
          <label>
            {" "}
            Você fez algum curso complementar?{" "}
            <select>
              <option value="Curso técnico">Curso técnico</option>
              <option value="Cursos de inglês">Cursos de inglês</option>
              <option value="Não fiz curso complementar">
                Não fiz curso complementar
              </option>
            </select>
          </label>
        </FormConteiner>
      </ConteinerPrincipal>
    );
  }
}

export default Form3;