import { Request, Response } from "express";
import { UserBusiness } from "../business/UserBusiness";
import { LoginInputDTO, UserInputDTO } from "../model/user";

export class UserController {
    private userBusiness :UserBusiness

    constructor(){
        this.userBusiness = new UserBusiness()
    }

	public signUp = async (req:Request, res:Response) => {

		try {
			const { name, email, password, role } = req.body

			const input: UserInputDTO = {
				name,
				email,
				password,
				role
			};

			const token = await this.userBusiness.createUser(input)

            res.status(201).send({message: "Usuário criado", token})

		} catch (error: any) {
			res.status(400).send(error.message);
		}
	}

	public login = async (req:Request, res:Response) => {

		try {
			const { email, password } = req.body

			const input :LoginInputDTO = {
				email,
				password
			};

			const token = await this.userBusiness.login(input)

            res.status(200).send({message: "Usuário logado!", token})

		} catch (error: any) {
			res.status(400).send(error.message);
		}
	}

	public getProfile = async (req: Request, res: Response) => {

		try {
			const token = req.headers.authorization as string

			const result = await this.userBusiness.getProfile(token)

			res.status(200).send(result)

		} catch (error: any) {
			console.error(error)
			res.status(400).send(error.message)
		}
	}
}