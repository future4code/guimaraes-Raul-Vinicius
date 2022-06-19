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
        cpf : "111.111.111-11",
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
        cpf : "222.222.222-22",
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

