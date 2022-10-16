import { Button } from "@mui/material";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import React from "react";
import { useNavigate } from "react-router-dom";
import { useTripsList } from "../../hooks/useTripsList";
import { goToTripDetailPage, goToHomePage, goToCreateTripPage } from "../../Routes/coordinator";


const TripsListPage = () => {

    const navigate = useNavigate()
    const trips = useTripsList()

    return (
        <div>
            <div>
                <Button onClick={() => goToHomePage(navigate)}
                variant={'outlined'} color={'primary'}>Voltar</Button>
                <Button onClick={() => goToCreateTripPage(navigate)}
                variant={'contained'} color={'primary'}>Criar viagem</Button>
            </div>

            <List component="nav">
                {trips.map((trip) => {
                    return (
                        <ListItem onClick={() => goToTripDetailPage(navigate)} button>
                            <ListItemText primary={trip.name} />
                        </ListItem>
                    )
                })}
            </List>
        </div>
    )
};

export default TripsListPage;