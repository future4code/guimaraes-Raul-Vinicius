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
            errorCode = 400
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
        res.status(201).send(`Usuário criado com sucesso!`);

    } catch (error:any) {
        console.log(error)
        res.status(errorCode).send(error.message || error.sqlMessage);
    }
})

//2. Pegar Usuário pelo Id

app.get('/user/:id', async(req:Request, res:Response) => {
    let errorCode = 400
    try {
        const id = req.params.id

        const userSelect = await connection.raw(`
            SELECT name, nickname FROM TodoListUser WHERE id = '${id}'
        `)

        if (userSelect[0].length === 0){
            errorCode = 404
            throw new Error("Usuário não encontrado.")
        }

        res.status(200).send(userSelect[0])

    } catch (error:any) {
        console.log(error)
        res.status(errorCode).send(error.message);
    }
})

app.put('/user/edit/:id', async(req: Request, res: Response) => {
    let errorCode = 400
    try {
        const id = req.params.id
        const {name, nickname, email} = req.body

        if (!name || !nickname || !email) {
            errorCode = 400
            throw new Error("É necessário preencher todos os campos.")
        }
        
        await connection("TodoListUser")
        .update({
            name,
            nickname,
            email
        })
        .where({
            id
        })

        res.status(200).send("Usuário atualizado com sucesso.")

    } catch (error:any) {
        console.log(error)
        res.status(errorCode).send(error.message);
    }
})