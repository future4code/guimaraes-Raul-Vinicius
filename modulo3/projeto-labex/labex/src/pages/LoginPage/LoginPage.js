import { TextField, Button, Typography } from "@mui/material";
import React from "react";
import { BoxForm, PageContainer } from "./style";

const LoginPage = () => {
    return (
        <PageContainer>
            <BoxForm>
                <Typography variant="h3" align="center">LabeX</Typography>
                <TextField placeholder="email@email.com" label={'E-mail'} type={'email'} />
                <TextField placeholder="Digite a senha" label={'Senha'} type={'password'}/>
                <Button type="submit" variant={'contained'} color={'primary'}>Entrar</Button>
            </BoxForm>
        </PageContainer>
    )
};

export default LoginPage;