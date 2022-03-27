import axios from "axios";
import React, { useEffect, useState } from "react";
import lista from "../img/lista.png"
import styled from "styled-components";

const Card = styled.div ` 
    border: 1px solid black;
    display: flex;
    flex-direction: column;
    max-width: 400px;
    max-height: 800px;
`

const FotoPerfil = styled.img `
    width: 150px;
    height: 150px;
`

const url = `https://us-central1-missao-newton.cloudfunctions.net/astroMatch/raul`

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
        const url = `https://us-central1-missao-newton.cloudfunctions.net/astroMatch/${url}/choose-person`
        const body = {
            id: perfil.id,
            choice: true
        }
        axios.post(url,body)
        .then((response)=>{
            pegaPerfil()
        })
        .catch((error)=>{
            alert(error)
        })
    }

    const descartarPerfil = () => {
        const url = `https://us-central1-missao-newton.cloudfunctions.net/astroMatch/${url}/choose-person`
        const body = {
            id: perfil.id,
            choice: false
        }
        axios.post(url,body)
        .then((response)=>{
            pegaPerfil()
        })
        .catch((error)=>{
            alert(error)
        })
    }    

  return (
    <Card>
      <header>
          <p>AstroMATCH</p>
          <img src={lista}></img>
      </header>

      <div>
          <FotoPerfil src={perfil.photo}></FotoPerfil>
          <p>{perfil.name}, {perfil.age}</p>
          <p>{perfil.bio}</p>
      </div>

      <div>
          <button onClick={descartarPerfil}>Descartar</button>
          <button onClick={curtirPerfil}>Curtir</button>
      </div>

      <button>Limpar matches</button>
    </Card>
  );
}

export default TelaInicial;
