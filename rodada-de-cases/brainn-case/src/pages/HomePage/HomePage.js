import React, { useContext } from "react";
import SelectLotto from "../../components/SelectLotto/SelectLotto";
import { GlobalStateContext } from "../../global/GlobalStateContext";
import { FirstContainer, MainContainer, SecondContainer } from "./styled";
import logo from "../../assets/logo.svg"
import NumberContainer from "../../components/NumberContainer/NumberContainer";

const HomePage = () => {

    const {allCompetitions, competition, games} = useContext(GlobalStateContext)

    return (
        <MainContainer>
            <FirstContainer>
                <SelectLotto />
                
                <div>
                    <img src={logo} alt={"mega sena"} />
                    <p>{games[0] && games[0].nome.toUpperCase()}</p>
                </div>

                <div>
                    <h1>CONCURSO</h1>
                    <p>{allCompetitions[0] && allCompetitions[0].concursoId.toUpperCase()} - {competition && competition.data}</p>
                </div>
            </FirstContainer>

            <SecondContainer>
                <div></div>

                <NumberContainer />
                
                <p>Esse sorteio é meremente ilustrativo e não possui nenhuma ligação com a CAIXA.</p>
            </SecondContainer>
        </MainContainer>
    )
}

export default HomePage;