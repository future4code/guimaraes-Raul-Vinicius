import express from "express";
import { AddressInfo } from "net";
import { Request, Response } from "express";
import { v4 as generateId } from 'uuid';
import { products } from "./data";

const app = express();
app.use(express.json());

app.get("/test", (req: Request, res: Response)=> {
    res.status(200).send("Testando funcionamento da API")
})

//Create products ----------------------------------------------

app.post("/products/create", (req:Request, res:Response) => {
    try {
        const id = products.length +1 //PARA FAZER COM NUMBER
        // const id = generateId().toString() //PARA FAZER COMO STRING
        const name = req.body.name
        const price = req.body.price

        products.push(
            {
                id : id,
                name : name,
                price : price
            }
        ) 
        res.status(201).send(products)
    }

    catch {
        res.status(400).end("Alguma informação está errada")
    }
})

// Get all products -----------------------------------------------

app.get("/products", (req:Request, res:Response) => {
    try {
        res.status(201).send(products)
    }

    catch {
        res.status(400).end("produtos não encontrados")
    }
})

// Edit Price of products -----------------------------------------------

app.put("/products/:id", (req:Request, res:Response) => {
    const id = Number(req.params.id)
    const price = Number(req.body.price)

    try {
        products.forEach(element => {
            if (id === element.id) {
                element.price = price
            }
        });
        res.status(201).send(products)
    }

    catch {
        res.status(400).end("produtos não encontrados")
    }
})






const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost:${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
})