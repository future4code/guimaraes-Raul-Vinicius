import express from "express";
import { AddressInfo } from "net";
import { Request, Response } from "express";
import { users, USER_TYPE } from "./data";

// import { v4 as generateId } from 'uuid';

const app = express();
app.use(express.json());

//GET ALL USERS
app.get('/users', (req:Request, res:Response) => {
    const errorCode = 500 //erro de qualquer natureza
    try {
        res.status(200).send(users)        
    } catch (error:any) {
        res.status(errorCode).send(error.message)
    }
})

//GET USER TYPE EQUAL
app.get('/users/:type', (req:Request, res:Response) => {
    const errorCode = 500

    const type = req.params.type

    try {
        
        if(type !== USER_TYPE.ADMIN && type !== USER_TYPE.NORMAL) {
            throw new Error ("Informe um tipo de usuário igual a 'NORMAL' ou 'ADMIN' ")
        }

        res.status(200).send()

    } catch (error:any) {
        res.status(errorCode).send(error.message)
    }
})



// SERVIDOR
const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost:${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
})