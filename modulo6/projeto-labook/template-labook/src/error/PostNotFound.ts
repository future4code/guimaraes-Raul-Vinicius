import { CustomError } from "./CustomError";

export class PostNotFound extends CustomError {
    constructor() {
        super("Post não encontrado!", 404)
    }
} 