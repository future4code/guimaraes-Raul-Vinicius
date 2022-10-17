import styled from "styled-components";
import {quinaColor} from "../../constants/colors"

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
  width: 30%;
  justify-content: space-between;
  align-items: flex-start;
  padding-left: 70px;
  color: #fff;
  background: ${quinaColor};

  @media screen and (max-width: 900px) {
    width: 100%;
  }
`

export const LogoBox =  styled.div `
  display: flex;
  gap: 20px;

  p {
    font-size: 30px;
    font-weight: 700;
    line-height: 37px;
  }
`
export const CompetitionBox =  styled.div `
  display: flex;
  flex-direction: column;
  gap: 5px;
  margin-bottom: 50px;

  h1 {
    margin: 0;
    padding: 0;
    font-size: 14px;
    font-weight: 500;
  }

  p {
    margin: 0;
    padding: 0;
    font-size: 20px;
    font-weight: 700;
  }
`

export const SecondContainer = styled.div `
    width: 65%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    padding: 30px 0;
`

export const NumbersContainer = styled.div `
    display: flex;
    justify-content: center;
    align-items: center;   
    gap: 30px;
`

export const GameNumbers = styled.h1 `
    background-color: #fff;
    padding: 25px 30px;
    border-radius: 50%;
`