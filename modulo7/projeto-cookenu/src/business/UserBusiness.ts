import { UserDatabase } from "../data/UserDatabase";
import { CustomError, InvalidEmail, InvalidPassword, UserNotFound } from "../error/customError";
import { AuthenticationData } from "../model/types";
import { UserInputDTO, user, LoginInputDTO, UserOutput } from "../model/user";
import Authenticator from "../services/Authenticator";
import HashManager from "../services/HashManager";
import IdGenerator from "../services/IdGenerator";

export class UserBusiness {
  private userDB: UserDatabase
  constructor(){
    this.userDB = new UserDatabase()
  }
  public createUser = async (input :UserInputDTO) :Promise<string> => {
    let {name , email, password, role} = input 

    if (!name || !email || !password || !role) {
      throw new CustomError(422, "Todos os campos são obrigatórios.") 
    }

    if (!email.includes("@")) {
      throw new InvalidEmail();
    }

    if (password.length < 6) {
      throw new InvalidPassword()
    }

    if (role !== "NORMAL" && role !== "ADMIN"){
      role = "NORMAL"
    }

    const id = IdGenerator.generateId()
    const hash = await HashManager.generateHash(password)

    const user :user = {
      id, 
      email, 
      password: hash, 
      name, 
      role
    }

    await this.userDB.insertUser(user)
    const token = Authenticator.generateToken({id, role})

    return token
  }

  public login = async (input:LoginInputDTO) :Promise<string> => {
    let {email, password} = input 

    if(!email || !password) {
      throw new CustomError(400, "Todos os campos são obrigatórios.")
    }

    if (!email.includes("@")) {
      throw new InvalidEmail();
    }

    const user = await this.userDB.findUserByEmail(email)

    if (!user) {
      throw new UserNotFound()
    }

    const hashCompare = await HashManager.compareHash(password, user.password)

    if(!hashCompare){ 
      throw new InvalidPassword()
    }

    const payload :AuthenticationData = {
      id: user.id, 
      role: user.role
    }

    const token = Authenticator.generateToken(payload)

    return token
  }

  public getProfile = async (token: string) :Promise<UserOutput> => {

			const tokenData = Authenticator.getTokenData(token)

			const user = await this.userDB.getProfile(tokenData.id)

			if (!user) {
				throw new UserNotFound();
			}

			return user		
	}
  
}
