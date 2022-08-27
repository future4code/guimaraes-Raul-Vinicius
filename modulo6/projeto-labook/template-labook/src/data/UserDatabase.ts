import { user } from "../model/User";
import { BaseDatabase } from "./BaseDatabase";

export class UserDatabase extends BaseDatabase {
    private TABLE_NAME = "labook_users"
    
    create = async(user : user) : Promise<void> => {
        await UserDatabase.connection(this.TABLE_NAME)
         .insert({
            id : user.id,
            name : user.name,
            email : user.email,
            password : user.password
        })
    }
}

