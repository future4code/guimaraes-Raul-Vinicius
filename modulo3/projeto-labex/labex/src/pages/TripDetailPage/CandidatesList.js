import React from "react";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import { CardContent } from "@mui/material";
import CandidateItem from "./CandidateItem";

const CandidatesList = (props) => {
    return (
        <Card>
            <CardContent>
                <Typography variant="h5">Candidatos para a viagem</Typography>
                {props.candidates.map((candidate) => {
                    return <CandidateItem candidate={candidate} />
                })}
                
            </CardContent>  
        </Card>
    )
}

export default CandidatesList;