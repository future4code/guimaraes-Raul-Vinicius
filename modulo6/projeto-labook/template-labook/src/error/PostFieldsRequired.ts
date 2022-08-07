import { CustomError } from "./CustomError";

export class PostFieldsRequired extends CustomError {
    constructor() {
        super("Os campos 'photo' e 'description' são obrigatórios!", 400)
    }
} 