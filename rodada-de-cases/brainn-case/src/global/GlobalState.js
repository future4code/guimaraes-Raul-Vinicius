import axios from "axios";
import React, { useEffect, useState } from "react";
import { GlobalStateContext } from "./GlobalStateContext";
import { BASE_URL } from "../constants/urls";

export const GlobalState = (props) => {
    
    const [games, setGames] = useState([])
    const [allCompetitions, setAllCompetitions] = useState([])
    const [competition, setCompetition] = useState([])
    const [luck, setLuck] = useState({ loteriaId: 0, concursoId: "2359" });

    useEffect(() => {
        getAllGames()
        getAllCompetitions()
    }, [])

    useEffect(() => {
        getCompetitionById()
    }, []);

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

    const getCompetitionById = async() => {
        await axios.get(`${BASE_URL}/concursos/${luck.concursoId}`)
        .then((res) => {
            setCompetition(res.data)
        })
        .catch((err) => {
            alert(err)
        })
    }

    const data = {games, setGames, allCompetitions, setAllCompetitions, competition, setCompetition}

    return(
        <GlobalStateContext.Provider value={data}>
            {props.children}
        </GlobalStateContext.Provider>
    )
}