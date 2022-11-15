import React, { useContext } from "react";
import Header from "../../components/Header/Header";
import { MovieCard } from "../../components/MovieCard/MovieCard";
import { GlobalStateContext } from "../../global/GlobalStateContext";
import { MoviesContainer } from "./styled";

const HomePage = () => {

    const { popularMovies } = useContext(GlobalStateContext)

    return (

        <div>
            <Header />

            <MoviesContainer>
                {popularMovies.map((movie) => {
                    return (
                        <MovieCard movie={movie} />
                    )
                })}
            </MoviesContainer>
        </div>
    )
}

export default HomePage;