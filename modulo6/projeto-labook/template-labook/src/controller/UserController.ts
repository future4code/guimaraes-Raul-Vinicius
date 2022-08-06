import { Request, Response } from "express"
import { UserBusiness } from "../business/UserBusiness"
import { userInputDTO } from "../model/User"

export class UserController {
    create = async(req:Request, res: Response) :Promise<void> => {
        try {
            const { name, email, password } = req.body

            const userBusiness = new UserBusiness()
            const user : userInputDTO = {
                name,
                email,
                password
            }
            await userBusiness.create(user)

            res.status(201).send({message:"Usuário criado!"})
            
        } catch (error:any) {
            res.status(error.statusCode || 400).send(error.message || error.sqlMessage)
        }
    }
}


