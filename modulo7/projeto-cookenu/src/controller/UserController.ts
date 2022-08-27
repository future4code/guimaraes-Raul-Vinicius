import { Request, Response } from "express";
import { UserBusiness } from "../business/UserBusiness";
import { UserInputDTO } from "../model/user";

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
}