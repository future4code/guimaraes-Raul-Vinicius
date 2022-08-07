import { PostDatabase } from "../data/PostDatabase"
import { PostFieldsRequired } from "../error/PostFieldsRequired"
import { post, postInputDTO } from "../model/Post"
import { generateId } from "../services/GenerateId"


export class PostBusiness {
   create = async(input:postInputDTO) :Promise<void> => {

      const { photo, description, type, authorId } = input

      if (!photo || !description) {
         throw new PostFieldsRequired()
      }
      
      const id = generateId()
      const createdAt = new Date()

      const postDatabase = new PostDatabase()
      const post :post = {
          id,
          photo,
          description,
          type,
          createdAt,
          authorId
      }
      await postDatabase.create(post)
   }
}
      
      
      