import { PostNotFound } from "../error/PostNotFound"
import { post } from "../model/Post"
import { BaseDatabase } from "./BaseDatabase"

export class PostDatabase extends BaseDatabase {
    private TABLE_NAME = "labook_posts"
    
    create = async(post : post) : Promise<void> => {
        await PostDatabase.connection(this.TABLE_NAME)
         .insert({
            id : post.id,
            photo : post.photo,
            description : post.description,
            type : post.type,
            created_at : post.createdAt,
            author_id: post.authorId
        })
    }

    getPost = async(id : string) : Promise<post[]> => {
        const queryResult = await PostDatabase.connection(this.TABLE_NAME)
        .select("*")
        .where({author_id:id})

        if (!queryResult[0]) {
            throw new PostNotFound()
         }

        return queryResult
    }
}

