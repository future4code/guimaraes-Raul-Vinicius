import express from "express";
import { AddressInfo } from "net";
import { Request, Response } from "express";

const app = express();
app.use(express.json());

const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost:${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});

//Exercicio 1

app.get('/', (req: Request, res: Response) => {
    res.status(200).send("Hello from express")
})