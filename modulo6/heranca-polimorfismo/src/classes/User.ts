export class User {
    private id : string
    private name : string
    private email : string
    private password : string

    constructor(
        id : string,
        name : string,
        email : string,
        password : string
    ){
        console.log("Chamando o construtor da classe USER")
        this.id = id
        this.name = name 
        this.email = email 
        this.password = password
    }

    public getId(): string {
		return this.id
	}

	public getEmail(): string {
		return this.email
	}

	public getName(): string {
		return this.name
	}

    public interoduceYourself(): string {
        return `Olá, sou ${this.name}. Bom dia!`
     }
}