import axios from "axios";
import React, { useEffect, useState } from "react";
import lista from "../img/lista.png"
import logo from "../img/logo.png"
import styled from "styled-components";


const Card = styled.div ` 
background-color: white;
    border: 1px solid black;
    border-radius: 20px;
    padding: 30px;
    min-width: 300px;
    max-width: 300px;
    min-height: 550px;
    max-height: 550px;
`

const Header = styled.header `
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
`
const ImagemLogo = styled.img `
    height: 40px;
`

const ImagemLista = styled.img `
    height: 30px;
`


const FotoPerfil = styled.img `
    width: 100%;
    min-height: 300px;
    max-height: 300px;
    border-radius: 20px;
`

const InfoCard = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
`
export const TextoNome = styled.p`
    font-size: 25px;
    padding: 0px;
    margin: 10px 0px;
    font-weight: bold;
`

const TextoBio = styled.p`
    font-size: 15px;
    padding: 0px;
    margin: 0px;
    border-radius: 20px;
    margin-bottom: 10px;
    padding: 0 10px;
`

const ContainerBotoes = styled.div `
    display: flex;
    justify-content: space-between;
`

const InteracaoBotao = styled.button `
    background-color: #0030A1;
    color: #FFC63D;
    border-radius: 10px;
    padding: 10px;
    margin: 0 35px;
    min-width: 80px;
`

export const LimparMatchesBotao = styled.button `
    background-color: #FFC63D ;
    color: #0030A1;
    border-radius: 10px;
    padding: 10px;
    margin-top: 10px;
    width: 100%;
`

export const url = `https://us-central1-missao-newton.cloudfunctions.net/astroMatch/raul`

const TelaInicial = (props) => {

    const [perfil, setPerfil] = useState([])

    const pegaPerfil = () =>{

        

        axios.get(`${url}/person`)
        .then((response)=>{
            setPerfil(response.data.profile)
        })
        .catch((error)=>{
            alert(error)
        })
    }

    useEffect(() => pegaPerfil(), [])

    const curtirPerfil = () => {
        const body = {
            id: perfil.id,
            choice: true
        }
        axios.post(`${url}/choose-person`,body)
        .then((response)=>{
            pegaPerfil()
        })
        .catch((error)=>{
            alert(error)
        })
    }

    const descartarPerfil = () => {
        const body = {
            id: perfil.id,
            choice: false
        }
        axios.post(`${url}/choose-person`,body)
        .then((response)=>{
            pegaPerfil()
        })
        .catch((error)=>{
            alert(error)
        })
    }    

     const limparMatches = () => {
        axios.put(`${url}/clear`)
    }

  return (
    <Card>
      <Header>
        <ImagemLogo src={logo} />
        <ImagemLista src={lista} onClick={props.irParaListaMatches} />
      </Header>

      <InfoCard>
          <FotoPerfil src={perfil.photo}></FotoPerfil>
          <TextoNome>{perfil.name}, {perfil.age}</TextoNome>
          <TextoBio>{perfil.bio}</TextoBio>
      </InfoCard>

      <ContainerBotoes>
          <InteracaoBotao onClick={descartarPerfil}>Descartar</InteracaoBotao>
          <InteracaoBotao onClick={curtirPerfil}>Curtir</InteracaoBotao>
      </ContainerBotoes>  

      <LimparMatchesBotao onClick={limparMatches}>Limpar matches</LimparMatchesBotao>
    </Card>
  );
}

export default TelaInicial;
