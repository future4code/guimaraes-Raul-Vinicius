import { CustomError } from "../error/customError";
import { user, UserOutput } from "../model/user";
import { BaseDatabase } from "./BaseDatabase";

export class UserDatabase extends BaseDatabase {
  private TABLE_NAME = "Cookenu_Users"

  public insertUser = async (user: user) => {
    try {
      await UserDatabase.connection
        .insert({
          id: user.id,
          name: user.name,
          email: user.email,
          password: user.password,
          role: user.role
        })
        .into(this.TABLE_NAME);
        
    } catch (error: any) {
      throw new CustomError(400, error.sqlMessage);
    }
  }
  
  public findUserByEmail = async (email: string) :Promise<user> => {
    try {
      const result = await UserDatabase.connection(this.TABLE_NAME)
      .select()
      .where({email});
      return result[0];
    } catch (error: any) {
      throw new CustomError(400, error.sqlMessage);
    }
  }

  public getProfile = async (id: string) :Promise<UserOutput> => {

		try {

			const result = await UserDatabase.connection(this.TABLE_NAME)
				.select("id", "name", "email")
				.where("id", "like", id)

			return result[0]

		} catch (error: any) {
			throw new CustomError(400, error.message)
		}
	}
}
