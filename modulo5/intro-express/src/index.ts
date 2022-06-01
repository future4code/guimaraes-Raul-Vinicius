import express from "express";
import { AddressInfo } from "net";
import { Request, Response } from "express";
import { posts, users } from "./data";

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

app.get('/', (req: Request, res: Response) => {
    res.status(200).send("Hello from express")
})

app.get('/users', (req : Request, res : Response) => {
    try {
        const person = users
        const listaUsuarios = person.map((cadaUsuario) => cadaUsuario)

        res.status(200).send(listaUsuarios)
    }

    catch {
        res.status(400).end("Usuários não encontrados")
    }
})

app.get('/posts', (req : Request, res : Response) => {
    try {
        const arrayPosts = posts
        const listaPosts = arrayPosts.map((cadaPost) => cadaPost)

        res.status(200).send(listaPosts)
    }

    catch {
        res.status(400).end("Posts não encontrados")
    }
})

app.get('/posts/:userId', (req : Request, res : Response) => {
    
        const userId = Number (req.params.userId)
        const postsUser = posts.find((element) => {
            element.userId === userId
        })

        if (!postsUser) {
            res.status(404).send("Posts do usuário não foi encontrado")
        } else {
            res.status(200).send(postsUser)
        }

        res.status(200).send(postsUser)
    

    
})


