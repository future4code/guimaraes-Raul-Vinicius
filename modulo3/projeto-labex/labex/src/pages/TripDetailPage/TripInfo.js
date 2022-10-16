import React from "react";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import TripInfoItem from "./TripInfoItem";
import { CardContent } from "@mui/material";

const TripInfo = (props) => {

    const {name, planet, description, date, durationInDays} = props.info

    return (
        <Card>
            <CardContent>
                <Typography variant="h5">Informações da viagem</Typography>
                <TripInfoItem infoTitle={"Nome da viagem"} info={name} />
                <TripInfoItem infoTitle={"Planeta"} info={planet} />
                <TripInfoItem infoTitle={"Data"} info={date} />
                <TripInfoItem infoTitle={"Descrição"} info={description} />
                <TripInfoItem infoTitle={"Duração em dias"} info={durationInDays} />
            </CardContent>  
        </Card>
    )
}

export default TripInfo;