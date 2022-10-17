import axios from "axios";
import React, { useEffect, useState } from "react";
import { GlobalStateContext } from "./GlobalStateContext";
import { BASE_URL } from "../constants/urls";

export const GlobalState = (props) => {
    
    const [games, setGames] = useState([])
    const [allCompetitions, setAllCompetitions] = useState([])
    

    useEffect(() => {
        getAllGames()
        getAllCompetitions()
    }, [])

    const getAllGames = async () => {
        await axios.get(`${BASE_URL}/loterias`)
        .then((res) => {
            setGames(res.data)
        })
        .catch((err) => {
            alert(err)
        })
    }

    const getAllCompetitions = async() => {
        await axios.get(`${BASE_URL}/loterias-concursos`)
        .then((res) => {
            setAllCompetitions(res.data)
        })
        .catch((err) => {
            alert(err)
        })
    }

    

    const data = {games, setGames, allCompetitions, setAllCompetitions}

    return(
        <GlobalStateContext.Provider value={data}>
            {props.children}
        </GlobalStateContext.Provider>
    )
}