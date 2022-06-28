import React from "react";
import { BoxForm, PageContainer } from "./style";
import {TextField, Typography, Button, InputLabel, Select, MenuItem, FormControl} from "@mui/material"

const ApplicationPage = () => {
    return (
        <PageContainer>
                <Typography variant="h3" align="center">Candidatar-se para Viagem</Typography>
            <BoxForm>
                <TextField label={"Nome do candidato"} />
                <TextField label={"Idade"} type={"number"} />
                <TextField label={"Texto de aplicação"} helperText={"descreva o por que deve ser o escolhido."} />
                <TextField label={"Profissão"} />
                <FormControl fullWidth>
                    <InputLabel id="select-country">Nacionalidade</InputLabel>
                    <Select labelId="select-country">
                        <MenuItem value={"brasil"} >Brasil</MenuItem>
                        <MenuItem value={"usa"} >USA</MenuItem>
                        <MenuItem value={"england"} >England</MenuItem>
                    </Select>
                </FormControl>  
                <FormControl fullWidth>
                    <InputLabel id="select-trip">Viagem</InputLabel>
                    <Select labelId="select-trip">
                        <MenuItem value={"Marte"} >Marte</MenuItem>
                        <MenuItem value={"Saturno"} >Saturno</MenuItem>
                        <MenuItem value={"Mercurio"} >Mercurio</MenuItem>
                    </Select>
                </FormControl>             
                
                <Button type="submit" variant={'contained'} color={'primary'}>Enviar Candidatura</Button>
            </BoxForm>
        </PageContainer>
    )
};

export default ApplicationPage;