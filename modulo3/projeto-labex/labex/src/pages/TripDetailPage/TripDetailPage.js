import React from "react";
import CandidatesList from "./CandidatesList";
import TripInfo from "./TripInfo";
import { PageContainer, BoxCards } from "./style";

const TripDetailPage = (props) => {

    const trip = {
        "trip": {
            "durationInDays": 540,
            "planet": "Jupiter",
            "date": "21/12/20",
            "description": "Noite mágica, com vista para as 69 luas de Jupiter",
            "name": "Multi luau em Jupiter",
            "id": "6f5ZGZNxCMALFnmPV1k6",
            "candidates": [
                {
                    "age": 22,
                    "name": "Paula Arantes",
                    "profession": "Astrofísica",
                    "applicationText": "Adoro um friozinho! Já fiz picnic em todos os planetas, só falta plutão!",
                    "country": "Mexico",
                    "id": "4HosrAeog6HsZ66XmhRt"
                },
                {
                    "age": 22,
                    "country": "Noruega",
                    "name": "Pedro Darvas",
                    "applicationText": "Sou um bom candidato porque amo luas",
                    "profession": "Fotógrafo",
                    "id": "81srknuDJ3CvqNEGBFNq"
                }
            ],
            "approved": []
        }
    }

    return (
        <PageContainer>
            <h1>Detalhes da viagem</h1>
            <BoxCards>
                <TripInfo info={trip} />
                <CandidatesList candidates={trip.candidates} />
            </BoxCards>
        </PageContainer>
    )
};

export default TripDetailPage;