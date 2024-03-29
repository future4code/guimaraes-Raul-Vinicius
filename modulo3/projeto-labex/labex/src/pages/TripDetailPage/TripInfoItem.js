import { Typography } from "@mui/material";
import React from "react";

const TripInfoItem = (props) => {
    return (
       <Typography variant="body1">
            <b>{props.infoTitle}:</b> {props.info}
       </Typography> 
    )
}

export default TripInfoItem;