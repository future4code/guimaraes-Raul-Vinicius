import React from "react";
import {TextField, Typography, Button} from "@mui/material"
import { BoxForm, PageContainer } from "./style";

const CreateTripPage = () => {
    return (
        <PageContainer>
                <Typography variant="h3" align="center">Criar viagem</Typography>
            <BoxForm>
                <TextField label={"Nome da viagem"} />
                <TextField label={"Planeta"} />
                <TextField type={"date"} />
                <TextField label={"Descrição"} />
                <TextField label={"Duração em dias"} />
                <Button type="submit" variant={'contained'} color={'primary'}>Criar</Button>
            </BoxForm>
        </PageContainer>
    )
};

export default CreateTripPage;