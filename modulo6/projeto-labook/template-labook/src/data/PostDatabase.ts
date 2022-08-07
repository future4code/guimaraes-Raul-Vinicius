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
}

