import React from "react";
import axios from "axios";
import { BoxForm, PageContainer } from "./style";
import {TextField, Typography, Button, InputLabel, Select, MenuItem, FormControl} from "@mui/material"
import { useForm } from "../../hooks/useForm";
import { useTripsList } from "../../hooks/useTripsList";

const ApplicationPage = () => {

    const trips = useTripsList()
    const [form, onChangeInput] = useForm({
        name: '',
        age: 0,
        applicationText: '',
        profession: '',
        country: '',
        trip: null
    })

    const onSubmitApplication = (event) => {
        event.preventDefault()
        console.log(form)
        const body = {
            name: form.name,
            age: form.age,
            applicationText: form.applicationText,
            profession: form.profession,
            country: form.country
        }
        axios.post(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/raul-vinicius-guimaraes/trips/${form.trip.id}/apply`, body)
    }

    return (
        <PageContainer>
                <Typography variant="h3" align="center">Candidatar-se para Viagem</Typography>
            <BoxForm onSubmit={onSubmitApplication} >
                <TextField
                    label={"Nome do candidato"} 
                    onChange={onChangeInput}
                    value={form['name']}
                    name={'name'}
                />
                <TextField
                    label={"Idade"} type={"number"} 
                    onChange={onChangeInput}
                    value={form['age']}
                    name={'age'}
                />
                <TextField 
                    label={"Texto de aplicação"} helperText={"descreva o por que deve ser o escolhido."} 
                    onChange={onChangeInput}
                    value={form['applicationText']}
                    name={'applicationText'}
                />
                <TextField 
                    label={"Profissão"} 
                    onChange={onChangeInput}
                    value={form['profession']}
                    name={'profession'}
                />
                <FormControl fullWidth>
                    <InputLabel id="select-country">Nacionalidade</InputLabel>
                    <Select labelId="select-country"
                        onChange={onChangeInput}
                        value={form['country']}
                        name={'country'}
                    >
                        <MenuItem value={"brasil"} >Brasil</MenuItem>
                        <MenuItem value={"usa"} >USA</MenuItem>
                        <MenuItem value={"england"} >England</MenuItem>
                    </Select>
                </FormControl>  
                <FormControl fullWidth>
                    <InputLabel id="select-trip">Viagem</InputLabel>
                    <Select labelId="select-trip"
                        onChange={onChangeInput}
                        value={form['trip']}
                        name={'trip'}
                    >
                        {trips.map((trip) => {
                            return <MenuItem value={trip}>{trip.name}</MenuItem>
                        })}
                    </Select>
                </FormControl>             
                
                <Button type='submit' variant={'contained'} color={'primary'}>Enviar Candidatura</Button>
            </BoxForm>
        </PageContainer>
    )
};

export default ApplicationPage;