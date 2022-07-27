import {v4 as generateId} from 'uuid'
import { UserDataBase } from '../data/UserDataBase'
import { User } from '../types/User'

export class UserBusiness {
    
    createUser = async(input:any) => {

        try {
            const id:string = generateId()
            const {name, email, password}:User = input

            if(!name || !email || !password) {
                throw new Error("Preencha todos os campos.")
            }

            if(email.indexOf("@") === -1){
                throw new Error("Email inválido!");
            }

            if(password.length < 6) {
                throw new Error("A senha deve conter pelo menos 6 caracteres!")
            }

            const userDataBase = new UserDataBase()
            await userDataBase.insertUser({
                id,
                name,
                email,
                password
            })

        } catch (error:any) {
            throw new Error(error.message || error.sqlMessage)
        }
    }

    getAllUsers = async () :Promise<User[]> => {

        return await new UserDataBase().pickAllUsers()
    }
}