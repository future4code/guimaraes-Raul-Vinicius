enum ROLE  {
    ADMIM = "admin",
    USER = "user"
}

type User = {
    name : string,
    email : string,
    role : ROLE
}

const users : User[] =  [
	{name: "Rogério", email: "roger@email.com", role: ROLE.USER},
	{name: "Ademir", email: "ademir@email.com", role: ROLE.ADMIM},
	{name: "Aline", email: "aline@email.com", role: ROLE.USER},
	{name: "Jéssica", email: "jessica@email.com", role: ROLE.USER},  
	{name: "Adilson", email: "adilson@email.com", role: ROLE.USER},  
	{name: "Carina", email: "carina@email.com", role: ROLE.ADMIM}      
] 

const showEmailAdmin = (arrayPerson:User[]):string[] =>  {
    return arrayPerson.filter((person:User) => {
        return person.role === ROLE.ADMIM
    })
    .map((person:User) => {
        return person.email
    })
}

console.log(showEmailAdmin(users))