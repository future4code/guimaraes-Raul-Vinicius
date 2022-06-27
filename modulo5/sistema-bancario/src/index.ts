import express from "express"
import { AddressInfo } from "net"
import { Request, Response } from "express"
import { Account, users, Transactions } from "./data/account"
// import { v4 as generateId } from 'uuid'

const app = express()
app.use(express.json())

//TESTE DE API

app.get('/test', (req: Request, res:Response) => {
  res.status(200).send("API está funcionando!")
})

//GET ALL USERS

app.get('/users', (req: Request, res:Response) => {
  let errorCode = 500
  try {
    res.status(200).send(users)
  }

  catch (error:any) {
    res.status(errorCode).send(error.message)
  }
 
})

//GET BALANCE BY CPF
app.get('/users/balance/:cpf', (req: Request, res:Response) => {

  let errorCode = 500

  try {

    const cpf = req.params.cpf

    if (!cpf) {
      errorCode = 422
      throw new Error("O CPF deve ser informado.")
    }

    users.forEach((user) => {
      if (user.cpf === cpf) {
        res.status(201).send(`O Saldo do cliente ${user.name} é ${user.balance}.`)
      } else {
        errorCode = 406
        throw new Error ("O CPF informado não existe no nosso banco de dados. Tente novamente!")
      }
    })
    
  } catch (error : any) {
    res.status(errorCode).send(error.message)
  }
 
})

//CREATE NEW USER
app.post('/users/register', (req: Request, res:Response) => {
  
  let errorCode = 500

  try { 

    const name = req.body.name as string
    const cpf = req.body.cpf as string
    const dateOfBirthday = req.body.dateOfBirthday as string
    const [year, month, day] = dateOfBirthday.split('/')
    const formatDateOfBirthday = new Date (`${year}/${month}/${day}`)
    const ageInMs : number = Date.now() - formatDateOfBirthday.getTime()
    const ageInYears : number = ageInMs / 1000 / 60 / 60 / 24 / 365

    if(ageInYears < 18) {
      errorCode = 402
      throw new Error("É necessário ser maior de idade para abrir uma conta.")      
    } 

    users.forEach((u) => {
      if(u.cpf === cpf) {
        errorCode = 403
        throw new Error ("O CPF já é existente.")
      }
    })

    const newUser : Account = {
      name : name,
      cpf : cpf,
      dateOfBirthday : dateOfBirthday,
      balance : 0,
      extract : []
    }  
    users.push(newUser)
    res.status(201).send(`Conta criada com sucesso: ${newUser}`)
      
  } catch (error : any) {
    res.status(errorCode).send(error.message)
  }
})

// Crie um endpoint put que receba um nome, um CPF e um valor. Ele deve adicionar o valor ao 
// saldo do usuário. O nome e o CPF devem ser iguais ao que estiver salvo no sistema Se algum dos
// dados for diferente, exiba uma mensagem de erro.

//ALTER USER DATA
app.put('/users/edit', (req: Request, res:Response) => {
  let errorCode = 500
  const name =  req.body.name as string
  const cpf = req.body.cpf as string
  const value = Number(req.body.value)

  try {

    if (!name || !cpf || !value) {
      errorCode = 403
      throw new Error ("Algum parâmetro não foi passado.")
    }


    const alteredBalanceOfUser =  users.forEach((u) =>   {
      if (u.cpf === cpf && u.name === name) {
        u.balance + value
      } else {
        errorCode = 405
        throw new Error ("O nome ou cpf informados são inválidos.")
      }
    })
    const newBalance = Number(alteredBalanceOfUser)
    res.status(201).send(newBalance)

  } catch (error:any) {
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