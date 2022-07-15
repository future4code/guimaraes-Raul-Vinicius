import connection from "./connection";
import app from "./app";
import { Request, Response } from "express";
import { User } from "./classes/User";
import { Customer } from "./classes/Customer";
import { Client } from "./classes/polimorfismo/Client";
import { Place } from "./classes/polimorfismo/Place";
import { Residence } from "./classes/polimorfismo/Residence";
import { Commerce } from "./classes/polimorfismo/Commerce";
import { Industry } from "./classes/polimorfismo/Industry";
// import { v4 as generateId } from "uuid"

// TESTANDO FUNCIONAMENTO DA API
app.get('/test', (req:Request, res:Response) => {
    res.status(200).send("Api funcionando!")
}); 

//-----------------------

// // 1. Sem colocar a propriedade password ele nem le a classe. Foi impresso uma unica vez.
// const myDate = new User("luar", "Raul", "raul@email.com", "123456")
// console.log(myDate)

// // 2. A Classe User foi impressa 2 vezes porque ela se extende na classe Customer, e a Customer foi impressa
// // uma só vez.

// const firstCustomer = new Customer("abc", "Primeirinho da Silva", "primeiro@email.com", "123456", "1111-1111-1111-1111")
// console.log(firstCustomer)

// // 4.
// const customer = new Customer("hiuqwihu", "Testado", "testado@email.com", "taloko", "1212-1212-1212-1212") // passa os parâmetros corretos
// console.log(customer.interoduceYourself())


// -------- POLIMORFISMO ------------

const firstClient : Client = {
    name : "Neymar",
    registrationNumber : 10,
    consumedEnergy : 100,
    calculateBill() {
        return 2
    },
}

console.log(firstClient)

// 1. Foram impressas as seguintes informações. Não imprimiu o método calculateBill porque ele não foi chamado.
// {
//     name: 'Neymar',
//     registrationNumber: 10,
//     consumedEnergy: 100,
//     calculateBill: [Function: calculateBill]
//   }

// 2. Cannot create an instance of an abstract class. Talvez se extendê-la para uma classe publica podemos usar.
// const instancePlace = new Place("14835000")
// console.log(instancePlace)

//3
const residence = new Residence(4, "05038040");
console.log("Cep da residencia:",residence.getCep());

const commerce = new Commerce(8, "05061150");
console.log("Cep do comércio:",commerce.getCep());

const industry = new Industry(6, "00578030");
console.log("Cep da indústria:",industry.getCep());
