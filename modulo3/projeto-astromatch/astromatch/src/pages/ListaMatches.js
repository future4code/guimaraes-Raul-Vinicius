import axios from "axios";
import React, { useState, useEffect } from "react";
import { TextoNome, url } from "./TelaInicial";
import styled from "styled-components";

const Conteiner = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;
`

const CardMatches = styled.div `
    display: flex;
    background-color: white;
    justify-content: space-between;
    align-items: center;
    border: 1px solid black;
    border-radius: 20px;
    width: 300px;
    padding: 20px;
    margin: 10px;
`

const ImagemCard = styled.img `
    width: 80px;
    height: 80px;
    border-radius: 50px;
`

const BotaoVoltar = styled.button `
    background-color: #FFC63D ;
    color: #0030A1;
    border-radius: 10px;
    padding: 10px;
    margin-top: 10px;
    width: 100%;
`

const ListaMatches = (props) => {

    const [lista, setLista] = useState([])

    const pegaMatches = () => {
        axios.get(`${url}/matches`)
        .then((response)=>{
            setLista(response.data.matches)
        })
        .catch((error)=>{
            alert(error)
        })
    }

    useEffect(() => pegaMatches(), [lista])

  return (
    <Conteiner>
        <div>
            {lista.map((match) => {
                return (
                    <CardMatches>
                        <ImagemCard src={match.photo} />
                        <TextoNome>{match.name}, {match.age}</TextoNome>
                    </CardMatches>
                )
            })}
        </div> 

        <BotaoVoltar onClick={props.irParaTelaInicial}>Voltar</BotaoVoltar>      
    </Conteiner>
  );
}

export default ListaMatches;
