import React, { useContext } from "react";
import { GlobalStateContext } from "../../global/GlobalStateContext";
import { Container, FilterBox, FilterButton } from "./styled";

const FilterContainer = () => {

    const { genreMovies } = useContext(GlobalStateContext);

    const genreListed = genreMovies && genreMovies.map((genre) => {
        return <FilterButton>{genre.name}</FilterButton>
    })

    return (

        <Container>
            <h1>Milhões de filme, séries e pessoas para descobrir. Explore já.</h1>
            <FilterBox>
                <p>Filtre por:</p>
                <div>
                    {genreListed}
                </div>
            </FilterBox>
        </Container>
    )
}

export default FilterContainer;