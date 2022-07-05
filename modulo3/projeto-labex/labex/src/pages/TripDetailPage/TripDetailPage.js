import React from "react";
import CandidatesList from "./CandidatesList";
import TripInfo from "./TripInfo";
import { PageContainer, BoxCards } from "./style";

const TripDetailPage = () => {
    return (
        <PageContainer>
            <h1>Detalhes da viagem</h1>
            <BoxCards>
                <TripInfo />
                <CandidatesList/>
            </BoxCards>
        </PageContainer>
    )
};

export default TripDetailPage;