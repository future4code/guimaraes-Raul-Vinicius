import { TextField, Button, Typography } from "@mui/material";
import axios from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "../../hooks/useForm";
import { goToTripsListPage } from "../../Routes/coordinator";
import { BoxForm, PageContainer } from "./style";

const LoginPage = () => {

    const navigate = useNavigate()

    const [form, onChangeInput] = useForm({
        email: '',
        password: ''
    })

    const onSubmitLogin = (event) => {
        event.preventDefault()
        
        const body = {
            email: form.email,
            password: form.password
        }
        axios.post(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/raul-vinicius-guimaraes/login`, body)
        .then((res) => {
            window.localStorage.setItem('token', res.data.token)
            navigate.push(goToTripsListPage(navigate))
        })
    }

    return (
        <PageContainer>
            <BoxForm onSubmit={onSubmitLogin}>
                <Typography variant="h3" align="center">LabeX</Typography>
                <TextField placeholder="email@email.com" label={'E-mail'} type={'email'} 
                    onChange={onChangeInput}
                    value={form['email']}
                    name={'email'}
                />
                <TextField placeholder="Digite a senha" label={'Senha'} type={'password'} 
                    onChange={onChangeInput}
                    value={form['password']}
                    name={'password'}
                />
                <Button type="submit" variant={'contained'} color={'primary'}>Entrar</Button>
            </BoxForm>
        </PageContainer>
    )
};

export default LoginPage;