import styled from "styled-components";
import {megaColor} from "../../constants/colors"

export const MainContainer = styled.div `
    display: flex;
    background-color: #efefef;
    width: 100%;
    
    @media screen and (max-width: 900px) {
        display: flex;
        flex-direction: column;
        height: 1100px;
    }
`

export const FirstContainer = styled.div `
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 35%;
  justify-content: space-between;
  align-items: flex-start;
  color: #fff;
  background: ${megaColor};
  

  @media screen and (max-width: 900px) {
    width: 100%;
  }
`

export const SecondContainer = styled.div `
    background-color: red;
`