import React from "react";
import styled from "styled-components";

const ColumnedDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
const FormConteiner = styled.form `
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
`

class Form1 extends React.Component {
  render() {
    return (
      <ColumnedDiv>
        <h1>Etapa I - Dados Gerais</h1>
        <FormConteiner>
          <label for="nome">
            {" "}
            Qual seu nome?{" "}
            <input
              type="text"
              id="nome"
              placeholder="Digite seu primeiro nome..."
            />
          </label>
          <label for="idade">
            {" "}
            Qual sua idade?
            <input type="text" id="idade" placeholder="Digite sua idade..." />
          </label>

          <label for="email">
            {" "}
            Qual seu e-mail?
            <input type="text" id="email" placeholder="Digite seu e-mail..." />
          </label>

          <label>
            {" "}
            Qual sua escolaridade?{" "}
            <select>
              <option value="Ensino médio incompleto">
                Ensino médio incompleto
              </option>
              <option value="Ensino médio completo">
                Ensino médio completo
              </option>
              <option value="Ensino superior completo">
                Ensino superior completo
              </option>
              <option value="Ensino superior incompleto">
                Ensino superior incompleto
              </option>
            </select>
          </label>
        </FormConteiner>
      </ColumnedDiv>
    );
  }
}
export default Form1;