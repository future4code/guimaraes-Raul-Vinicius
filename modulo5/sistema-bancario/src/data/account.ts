export type Transactions = {
    date : string,
    description : string,
    value : number
}

export type Account = {
    nome : string,
    cpf : string,
    dataNascimento : string,
    saldo : number,
    // transactions : Transactions
}



export const users : Account[] = [
    {
        nome : "Raul",
        cpf : "123.123.123-12",
        dataNascimento : "09/09/1993",
        saldo : 1000,
    }
]

