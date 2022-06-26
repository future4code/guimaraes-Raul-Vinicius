import connection from "./connection";
import app from "./app";
import { Request, Response } from "express";

// TESTANDO FUNCIONAMENTO DA API
app.get('/test', (req:Request, res:Response) => {
    res.status(200).send("Api funcionando!")
});