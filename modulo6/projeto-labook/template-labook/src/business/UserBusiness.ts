import { UserDatabase } from "../data/UserDatabase"
import { AllFieldsRequired } from "../error/AllFieldsRequired"
import { user, userInputDTO } from "../model/User"
import { generateId } from "../services/GenerateId"

export class UserBusiness {
   create = async(input:userInputDTO) :Promise<void> => {

      const {name, email, password} = input

      if (!name || !email || !password) {
         throw new AllFieldsRequired()
      }
      
      const id = generateId()

      const userDatabase = new UserDatabase()
      const user :user = {
         id,
         name,
         email,
         password
      }
      await userDatabase.create(user)
   }
}
      
      
      