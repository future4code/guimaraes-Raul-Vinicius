import connection from "./connection";
import app from "./app";
import { Request, Response } from "express";
import { v4 as generateId } from "uuid"

// TESTANDO FUNCIONAMENTO DA API
app.get('/test', (req:Request, res:Response) => {
    res.status(200).send("Api funcionando!")
});

// ENDPOINTS EM CONEXÃO COM O BANCO 

//1. Criar usuário
app.post('/user', async(req:Request, res:Response) => {
    let errorCode = 400
    try {
        const id = generateId()
        const {name, nickname, email} = req.body 

        if(!name || !nickname || !email) {
            errorCode = 401
            throw new Error("Todos os campos são obrigatórios.")
        }

        await connection.raw(`
            INSERT INTO TodoListUser (id, name, nickname, email)
            VALUES(
                "${id}",
                "${name}",
                "${nickname}",
                "${email}"
            )
        `)
        res.status(200).send(`Usuário criado com sucesso!`);

    } catch (error:any) {
        console.log(error)
        res.status(errorCode).send(error.message);
    }
})

//2. Pegar Usuário pelo Id

app.get('user/:id', async(req:Request, res:Response) => {
    try {
        const id = req.params.id 

        const userSelect = await connection.raw(`
            SELECT * FROM TodoListUser WHERE id = "${id}"
        `)
        res.status(201).send(userSelect[0])

    } catch (error:any) {
        console.log(error)
        res.status(400).send(error.message);
    }
})