import React, { useContext, useEffect, useState } from "react";
import logo from "../../assets/logo.svg"
import moment from "moment"
import SelectLotto from "../../components/SelectLotto/SelectLotto";
import { GlobalStateContext } from "../../global/GlobalStateContext";
import { CompetitionBox, FirstContainer, GameNumbers, LogoBox, MainContainer, NumbersContainer, SecondContainer } from "./styled";
import axios from "axios";
import { BASE_URL } from "../../constants/urls";

const QuinaPage = () => {

    const {allCompetitions, games} = useContext(GlobalStateContext)

    const [competition, setCompetition] = useState([])

    const data = moment(competition.data).format("DD/MM/YYYY");

    const numbers = competition &&
        competition.numeros && competition.numeros.map((number) => {
            return <GameNumbers key={number}>{number}</GameNumbers>;
    });

    const getCompetitionById = async() => {
        await axios.get(`${BASE_URL}/concursos/5534`)
        .then((res) => {
            setCompetition(res.data)
        })
        .catch((err) => {
            alert(err)
        })
    }

    useEffect(() => {
        getCompetitionById()
    }, []);

    return (
        <MainContainer>
            <FirstContainer>
                <SelectLotto />
                
                <LogoBox>
                    <img src={logo} alt={"quina"} />
                    <p>{games[1] && games[1].nome.toUpperCase()}</p>
                </LogoBox>

                <CompetitionBox>
                    <h1>CONCURSO</h1>
                    <p>{allCompetitions[1] && allCompetitions[1].concursoId} - {data}</p>                    
                </CompetitionBox>
            </FirstContainer>

            <SecondContainer>
                <div></div>
                
                <NumbersContainer>
                    {numbers}
                </NumbersContainer>
                
                <p>Esse sorteio é meremente ilustrativo e não possui nenhuma ligação com a CAIXA.</p>
            </SecondContainer>
        </MainContainer>
    )
}

export default QuinaPage;