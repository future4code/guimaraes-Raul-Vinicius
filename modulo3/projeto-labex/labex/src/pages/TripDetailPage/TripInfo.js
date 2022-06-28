import React from "react";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import TripInfoItem from "./TripInfoItem";
import { CardContent } from "@mui/material";

const TripInfo = () => {
    return (
        <Card>
            <CardContent>
                <Typography variant="h5">Informações da viagem</Typography>
                <TripInfoItem infoTitle={"Nome da viagem"} info={"Viagem para Marte"} />
                <TripInfoItem infoTitle={"Planeta"} info={"Marte"} />
                <TripInfoItem infoTitle={"Data"} info={"05/06/2022"} />
                <TripInfoItem infoTitle={"Descrição"} info={"Viagem para colonizar Marte"} />
                <TripInfoItem infoTitle={"Duração em dias"} info={205} />
            </CardContent>  
        </Card>
    )
}

export default TripInfo;