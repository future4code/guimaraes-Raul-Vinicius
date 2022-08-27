import { friendship } from "../model/Friendship"
import { BaseDatabase } from "./BaseDatabase"

export class FriendshipDatabase extends BaseDatabase {

    private TABLE_NAME = "labook_friendship"

    public addFriendship = async (relation: friendship) => {
        await FriendshipDatabase.connection(this.TABLE_NAME)
            .insert({
                id: relation.id,
                user_id: relation.userId,
                friend_id: relation.friendId
            })
    }
}