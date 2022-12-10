import styled from "styled-components";
import {timeManiaColor } from "../../constants/colors"

export const MainContainer = styled.div `
    display: flex;
    background-color: #efefef;
    width: 100%;
    min-height: 100vh;
    
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
  background: ${timeManiaColor};

  @media screen and (max-width: 900px) {
    width: 100%;
    height: 50%;
    padding-left: 0;
    align-items: center;
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

  img {
      width: 64px;
    }

  @media screen and (max-width: 900px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 0px;
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

  @media screen and (max-width: 900px) {
    align-items: center;
  }
`

export const SecondContainer = styled.div `
    width: 65%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    padding: 30px 0;

    @media screen and (max-width: 900px) {
      width: 100%;
      height: 50%;
      display: flex;
      flex-direction: column;
      align-items: center;

      p {
        text-align: center;
      }
  }

`

export const NumbersContainer = styled.div `
    display: flex;
    justify-content: center;
    align-items: center;   
    gap: 30px;
    flex-wrap: wrap;
`

export const GameNumbers = styled.h1 `
    background-color: #fff;
    padding: 25px 30px;
    border-radius: 50%;
`