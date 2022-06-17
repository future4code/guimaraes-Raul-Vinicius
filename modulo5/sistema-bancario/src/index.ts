import express from "express"
import { AddressInfo } from "net"
import { Request, Response } from "express"
import { Account, users } from "./data/account"
// import { v4 as generateId } from 'uuid'

const app = express()
app.use(express.json())

const date = new Date()
const day = String(date.getDate()).padStart(2, '0')
const month = String(date.getMonth() + 1).padStart(2, '0')
const year = date.getFullYear()
const today = String(`${day}/${month}/${year}`)

//TESTE DE API

app.get('/test', (req: Request, res:Response) => {
  res.status(200).send("API está funcionando!")
})

//GET ALL USERS

app.get('/users', (req: Request, res:Response) => {
  try {
    res.status(200).send(users)
  }

  catch {
    res.status(500).send("Tente novamente!")
  }
 
})

//GET BALANCE BY CPF
app.get('/users/balance/:cpf', (req: Request, res:Response) => {

  let errorCode = 500
  const cpf = req.params.cpf

  try {

    if (!cpf) {
      errorCode = 422
      throw new Error("O CPF deve ser informado.")
    }

    for (let user of users) {
      if (user.cpf === cpf) {
        res.status(200).send(`O saldo do cliente ${user.name} é: ${user.balance}`)
      } else {
        throw new Error("O CPF informado é inválido. Tente novamente!")
      }
    }
    
  } catch (error : any) {
    res.status(errorCode).send(error.message)
  }
 
})

//CREATE NEW USER
app.post('/users/register', (req: Request, res:Response) => {
  
  const name = req.body.name as string
  const cpf = req.body.cpf as string
  const dateOfBirthday = req.body.dateOfBirthday
  const yearBirthSeparate:string = dateOfBirthday.split('/')
  // const dayBirth = Number(yearBirthSeparate[0])
  // const monthBirth = Number(yearBirthSeparate[1])
  const yearBirth = Number(yearBirthSeparate[2])
  let age:number = year - yearBirth
  let errorCode = 500

  try { 

    for (let user of users) {
      if (user.cpf === cpf) {
        throw new Error("O CPF informado já existe em nosso banco de dados.")
      }
    }

    if(age >= 18) {
      
      const newUser : Account = {
        name : name,
        cpf : cpf,
        dateOfBirthday : dateOfBirthday,
        balance : 0,
        extract : []
      }  
      users.push(newUser)
      res.status(200).send(newUser)
    } else {
      throw new Error("É necessário ser maior de idade para abrir uma conta.")
    }
      
  } catch (error : any) {
    res.status(errorCode).send(error.message)
  }
})

// SERVIDOR RODANDO --------------------------------------------------------
const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo
    console.log(`Server is running in http://localhost:${address.port}`)
  } else {
    console.error(`Failure upon starting server.`)
  }
})