import React from "react";
import moment from "moment";
import { useState } from "react";
import { useContext } from "react";
import { CompetitionBox, FirstContainer, GameNumbers, LogoBox, MainContainer, NumbersContainer, SecondContainer } from "./styled";
import axios from "axios";
import {BASE_URL} from "../../constants/urls"
import logo from "../../assets/logo.svg"
import { useEffect } from "react";
import SelectLotto from "../../components/SelectLotto/SelectLotto";
import { GlobalStateContext } from "../../global/GlobalStateContext";

const LotoFacilPage = () => {

    const {allCompetitions, games} = useContext(GlobalStateContext)

    const [competition, setCompetition] = useState([])

    const data = moment(competition.data).format("DD/MM/YYYY");

    const numbers = competition &&
        competition.numeros && competition.numeros.map((number) => {
            return <GameNumbers key={number}>{number}</GameNumbers>;
    });

    const getCompetitionById = async() => {
        await axios.get(`${BASE_URL}/concursos/2200`)
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
                    <img src={logo} alt={"lotofacil"} />
                    <p>{games[2] && games[2].nome.toUpperCase()}</p>
                </LogoBox>

                <CompetitionBox>
                    <h1>CONCURSO</h1>
                    <p>{allCompetitions[2] && allCompetitions[2].concursoId} - {data}</p>                    
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

export default LotoFacilPage;