import React, { useEffect, useState } from "react";
import { GlobalStateContext } from "./GlobalStateContext";
import axios from "axios";
import { API_KEY } from "../constants/ApiKey";
import { BASE_URL } from "../constants/BaseUrl";

export const GlobalState = (props) => {


    const [popularMovies, setPopularMovies] = useState([])

    useEffect(()=>{
        getPopularMovies()
    },[])


    const getPopularMovies = () => {

        axios.get(`${BASE_URL}/movie/popular?api_key=${API_KEY}&language=en-US&page=1`)
        .then((res) => {
            setPopularMovies(res.data.results)
            console.log(res.data.results)
        })
    }


    const data = {popularMovies}

    return(
        <GlobalStateContext.Provider value={data}>
            {props.children}
        </GlobalStateContext.Provider>
    )

}