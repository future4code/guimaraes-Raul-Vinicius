import { Button, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import { PageContainer,BoxTitle, BoxButton } from "./style";
import { goToLoginPage, goToApplicationPage } from "../../Routes/coordinator";

const HomePage = () => {

    const navigate = useNavigate()

    return (
        <PageContainer>
            <BoxTitle>
                <Typography variant="h1">LabeX</Typography>
                <Typography variant="h6">Conectando você ao Espaço</Typography>
            </BoxTitle>   
           
            <BoxButton>
                <Button onClick={() => goToLoginPage(navigate)} 
                variant={'contained'} color={'primary'}>Área de Login</Button>

                <Button onClick={() => goToApplicationPage(navigate)}  
                variant={'contained'} color={'primary'}>Candidate-se a viagens</Button>
            </BoxButton>
        </PageContainer>
    )
};

export default HomePage;