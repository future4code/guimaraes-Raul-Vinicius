import { Transaction } from "./Transaction";


export class UserAccount {
    private cpf: string;
    private name: string;
    private age: number;
    private balance: number = 0;
    private transactions: Transaction[] = [];
  
    constructor(
       cpf: string,
       name: string,
       age: number,
    ) {
       console.log("Chamando o construtor da classe UserAccount")
       this.cpf = cpf;
       this.name = name;
       this.age = age;
    }

    //2. GETTERS

    getCPF(): string {
        return this.cpf;
    }
    
    getName(): string {
        return this.name;
    }
    
    getAge(): number {
        return this.age;
    }
}