import React, { useContext } from "react";
import SelectLotto from "../../components/SelectLotto/SelectLotto";
import { GlobalStateContext } from "../../global/GlobalStateContext";
import { FirstContainer, MainContainer, SecondContainer } from "./styled";
import logo from "../../assets/logo.svg"

const HomePage = () => {

    const {competition, concursoId} = useContext(GlobalStateContext)

    return (
        <MainContainer>
            <FirstContainer>
                <SelectLotto />

                <div>
                    <img src={logo} />
                    <p>MEGA-SENA</p>
                </div>

                <div>
                    <h1>CONCURSO</h1>
                    <p> {competition[0] && competition[0].concursoId}</p>
                </div>
            </FirstContainer>
            <SecondContainer>
                SegundoContainer
            </SecondContainer>
        </MainContainer>
    )
}

export default HomePage;