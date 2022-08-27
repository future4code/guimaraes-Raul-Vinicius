import { Response, Request } from "express";
import { UserBusiness } from "../business/UserBusiness";

export class UserController {

    createUser = async(req:Request, res: Response) => {

        try {
            const input:any = {
                name: req.body.name,
                email: req.body.email,
                password: req.body.password
            }

            const userBusiness = new UserBusiness()
            await userBusiness.createUser(input)

            res.status(200).send("Usuário criado!")

        } catch (error:any) {
            res.status(400).send(error.message)
        }
    }

    getAllUsers  = async(req:Request, res: Response) :Promise<void> => {

        try {
          
            const users = await new UserBusiness().getAllUsers()
    
            res.status(200).send(users)
    
        } catch (error:any) {
            res.status(error.status).send(error.message)
        }
    }

    deleteUser = async(req:Request, res:Response) :Promise<void> => {
        
        try {
            const input = {
                id: req.params.id
            }

            const userBusiness = new UserBusiness()
            await userBusiness.deleteUser(input)

            res.status(200).send({ message: "Usuário apagado com sucesso" });

        } catch (error:any) {
            res.status(400).send({ error: error.message });
        }
    }
}

    