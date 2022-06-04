import express from "express"
import { AddressInfo } from "net"
import { Request, Response } from "express"
import { TODO, toDo } from "./data/ToDo"
import { title } from "process"

const app = express()
app.use(express.json())

app.get('/ping', (req: Request, res: Response) => {
  res.status(200).send("Pong! 🏓")
})

app.get('/todo/:completed', (req:Request, res:Response) => {

  const todoList = toDo

  if (req.params.completed !== "true") {
    return res.status(400).end("Tente novamente")
  }

  if (req.params.completed === "true") {
    const tasksCompleted = todoList.filter((task) => {
      return task.completed === true
    })
    res.status(201).send(tasksCompleted)
  }
})

//   try {
//     if (req.query.completed === "true") {
//       const tasksCompleted = todoList.filter((element) => {
//         return element.completed === true
//       })
//       res.status(201).send(tasksCompleted)
//     }
//   }

//   catch {
//     res.status(400).end("Tente novamente")
//   }
// })

app.post('/todo/create' , (req:Request, res:Response) => {

  const newTask : TODO = {
    userId : Math.random(),
    id: Math.random(),
    title: req.body.title,
    completed: req.body.completed
  }

  toDo.push(newTask)
  res.status(201).send(newTask)
})

app.put('/todo/:userId/:id', (req:Request, res:Response) => {

  const statusTask : TODO = {
    userId : Number(req.params.userId),
    id : Number(req.params.id),
    title: "toDo.title", // essa linha não to conseguindo fazer correto
    completed : Boolean(req.body.completed)
  }

  res.status(201).send(statusTask) 
})




//------------------------Funcionamento do servidor ---------------------------
const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost:${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
})

