import { Request, Response } from "express"
import { PostBusiness } from "../business/PostBusiness"
import { postInputDTO } from "../model/Post"

export class PostController {
    create = async(req:Request, res: Response) :Promise<void> => {
        try {
            const { photo, description, type, authorId  } = req.body

            const postBusiness = new PostBusiness()
            const post : postInputDTO = {
                photo, 
                description, 
                type, 
                authorId 
            }
            await postBusiness.create(post)

            res.status(201).send({message:"Post criado!"})
            
        } catch (error:any) {
            res.status(error.statusCode || 400).send(error.message || error.sqlMessage)
        }
    }

    getPost = async(req:Request, res: Response) => {
        try {

            const id = req.params.id 

            const postBusiness = new PostBusiness
            const result = await postBusiness.getPost(id)

            res.status(200).send(result)
            
        } catch (error:any) {
            res.status(error.statusCode || 400).send(error.message || error.sqlMessage)
        }
    }
}
