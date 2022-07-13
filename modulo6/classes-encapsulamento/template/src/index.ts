import connection from "./connection";
import app from "./app";
import { Request, Response } from "express";
import { UserAccount } from "./data/UserAccount";
import { Transaction } from "./data/Transaction";
// import { v4 as generateId } from "uuid"

// TESTANDO FUNCIONAMENTO DA API
app.get('/test', (req:Request, res:Response) => {
    res.status(200).send("Api funcionando!")
}); 

//-----------------------------

// 1. a) o constructor é um método que constrói um objeto e nos permite acessar propriedades de uma classe.
//Chamamos ele através da função consructor (){} ou constructor = () => {}

// b) é chamado apenas uma vez. 
const raulAccount = new UserAccount("123456789-10", "Raul", 28 )
console.log(raulAccount)

// c) criando métodos publicos dentro das classes que acessam essa informações.


// 2. 

const firstTransaction = new Transaction("Compra de fone de ouvido", 199.90, "13/07/2022")
console.log(firstTransaction)