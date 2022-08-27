import { CustomError } from "./CustomError";

export class AllFieldsRequired extends CustomError {
    constructor() {
        super("Todos os campos são obrigatórios!", 400)
    }
} 