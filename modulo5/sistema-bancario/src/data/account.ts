enum DESCRIPTION {
    DEBIT = "Debit",
    CREDIT = "Credit"
}

export type Transactions = {
    date : string,
    description: DESCRIPTION,
    value : number
}

export type Account = {
    name : string,
    cpf : string,
    dateOfBirthday : string,
    balance : number,
    extract : Transactions[]
}



export const users : Account[] = [
    {
        name : "Raul",
        cpf : "123.123.123-12",
        dateOfBirthday : "09/09/1993",
        balance : 1000,
        extract : [
            {
                date : "01/01/2022",
                description : DESCRIPTION.CREDIT,
                value : 130
            }, 
            {
                date : "02/01/2022",
                description : DESCRIPTION.DEBIT,
                value : 50  
            }
        ]
    },

    {
        name : "Sara",
        cpf : "324.456.789-12",
        dateOfBirthday : "01/07/1998",
        balance : 500,
        extract : [
            {
                date : "01/01/2022",
                description : DESCRIPTION.CREDIT,
                value : 30
            }, 
            {
                date : "02/01/2022",
                description : DESCRIPTION.DEBIT,
                value : 70  
            }
        ]
    }
]

