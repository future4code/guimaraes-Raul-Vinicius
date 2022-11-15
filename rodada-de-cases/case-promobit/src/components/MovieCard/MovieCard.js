import React from "react";
import { ImgCard } from "./style";

export const MovieCard = (props) => {

    return(

        <div>
            <ImgCard src={`https://image.tmdb.org/t/p/w500${props.movie.poster_path}`} />
            {/* <p>{props.index}</p>y */}
        </div>
    )
}