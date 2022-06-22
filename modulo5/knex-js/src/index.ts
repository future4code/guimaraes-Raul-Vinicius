import connection from "./connection";
import app from "./app";
import { Request, Response } from "express";

app.get('/test', (req:Request, res:Response) => {
    res.status(200).send("Api funcionando!")
});

//GetActorById - Abaixo, estamos pegando o Actor com o id 
app.get('/actor/:id', async (req:Request, res:Response) => {
    
    const id = req.params.id

    try {
        const result = await connection.raw(`
            SELECT * FROM Actor WHERE id = ${id}
        `)

        res.status(201).send(result[0])

    } catch (error:any) {
        console.error(error)
        console.log(error.message)
        res.status(500).send("Algo deu errado!")
    }
});

//GetActorByName 
// b) Faça uma função que busque um ator pelo nome

app.get('/actor/:name', async (req:Request, res:Response) => {
    const name = req.params.name

    try {
        const resultName = await connection.raw(`
            SELECT * FROM Actor WHERE name = ${name}
        `)
        
        res.status(201).send(resultName)

    } catch (error:any) {
        console.error(error)
        console.log(error.message)
        res.status(500).send("Algo deu errado!")   
    }
});

//c) CountByGender

app.get('/actor/:gender', async (req:Request, res:Response) => {
    
    const gender = req.params.gender

    try {
        const result = await connection.raw(`
            SELECT COUNT(*) FROM Actor WHERE gender = "${gender}"
        `);

        res.status(201).send(result[0])

    } catch (error:any) {
        console.error(error)
        console.log(error.message)
        res.status(500).send("Algo deu errado!")
    }
});

// -----------EXERCICIO 2 -----------------------------------

