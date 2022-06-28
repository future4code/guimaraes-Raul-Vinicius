import React from "react";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import { CardContent } from "@mui/material";
import CandidateItem from "./CandidateItem";

const CandidatesList = () => {
    return (
        <Card>
            <CardContent>
                <Typography variant="h5">Candidatos para a viagem</Typography>
                <CandidateItem />
                <CandidateItem />
                <CandidateItem />
                <CandidateItem />
            </CardContent>  
        </Card>
    )
}

export default CandidatesList;