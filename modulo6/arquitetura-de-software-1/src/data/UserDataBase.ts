import { User } from "../types/User";
import { BaseDataBase } from "./BaseDataBase";

export class UserDataBase extends BaseDataBase {

    insertUser = async(user : User) :Promise<void> => {

        try {

            await UserDataBase.connection("Arq_User")
            .insert({
                id: user.id,
                name: user.name,
                email: user.email,
                password: user.password
            })
            
        } catch (error:any) {
            throw new Error(error.message || error.sqlMessage)
        }
    }

    pickAllUsers = async() :Promise<User[]> => {

        try {
            const users:User[] = []

            const result = await UserDataBase.connection("Arq_User")
            .select("*")

            for(let user of result){
                users.push(user)
            }

            return users

        } catch (error:any) {
            
            throw new Error(error.message || error.sqlMessage)
        }
        
    }

    deleteUser = async(id:string) :Promise<void> => {
        try {
            await UserDataBase.connection("Arq_User")
            .where(id)
			.delete()
            
        } catch (error:any) {
            throw new Error(error.message || error.sqlMessage)
        }
    }
}