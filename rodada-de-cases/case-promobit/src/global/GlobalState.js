import React, { useEffect, useState } from "react";
import { GlobalStateContext } from "./GlobalStateContext";
import axios from "axios";
import { API_KEY } from "../constants/ApiKey";
import { BASE_URL } from "../constants/BaseUrl";

export const GlobalState = (props) => {

    const [ page, setPage ] = useState([1])
    const [popularMovies, setPopularMovies] = useState([])
    const [genreMovies, setGenreMovies] = useState([])

    useEffect(()=>{
        getPopularMovies()
    },[])

    useEffect(()=>{
        GetMovieGenres()
    },[])


    const getPopularMovies = () => {

        axios.get(`${BASE_URL}/movie/popular?api_key=${API_KEY}&language=pt-BR&page=${page}`)
        .then((res) => {
            setPopularMovies(res.data.results)
            console.log(res.data.results)
        })
        .catch((error) => {
            console.log(error.message)
        })
    }

    const GetMovieGenres = () => {
        axios.get(`${BASE_URL}/genre/movie/list?api_key=${API_KEY}&language=pt-BR`)
          .then((res) => {
            setGenreMovies(res.data.genres);
          })
          .catch((error) => {
            console.log(error.message)
        })
      };

    const data = {popularMovies, genreMovies}

    return(
        <GlobalStateContext.Provider value={data}>
            {props.children}
        </GlobalStateContext.Provider>
    )

}