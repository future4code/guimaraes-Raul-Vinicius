import React from "react";
import logo from "../../images/logo-tmdb.svg"
import { ContainerHeader } from "./styled";

const Header = () => {
    return (
        <ContainerHeader>
            <img src={logo} alt="logo-the-movie-database" />
        </ContainerHeader>
    )
}

export default Header;