// Exercício 1
    
// O Typescript é uma linguagem um pouco mais criteriosa que o Javascript, então vamos conhecer um pouco
//  desses critérios.
    
// a) Crie uma variável **minhaString** do tipo `string` e atribua um valor a ela. Tente atribuir um número
// a esta variável. O que acontece?

const minhaString:string = "minha" // atribuindo um número a ela o TS aponta que não podemos atribuir um 
//numenro a uma string.
    
// b) Crie uma variável **meuNumero** do tipo `number` e atribua um valor numérico. Como fazer para que essa
// variável também aceite strings? Ou seja, como criamos no typescript uma variável que aceite mais de um tipo
// de valor?

let meuNumero:number | string = "olá" //colocando o operador lógico | permite que adicione mais tipagens 
    
// c) Agora crie um novo objeto. Este objeto é uma pessoa, e deve possuir três propriedades:
    
// `nome`, que é uma string;
    
// `idade`, que é um número;
    
// `corFavorita`, que é uma string.
    
// Crie mais três objetos, que também precisam ter apenas os campos definidos acima. Crie um **tipo** `Pessoa`
// para garantir que todos os objetos tenham os mesmos campos.

type pessoa = {
    nome:string,
    idade:number,
    corFavorita:string
}

const Raul:pessoa = {
    nome:"Raul",
    idade: 28,
    corFavorita: "Azul"
}

const Lela:pessoa = {
    nome:"Lela",
    idade: 53,
    corFavorita: "Amarelo"
}

const Felipe:pessoa = {
    nome:"Felipe",
    idade: 25,
    corFavorita: "Preto"
}
    
// d) Modifique a propriedade `corFavorita` para que apenas seja possível escolher entre as cores do arco-íris. 
// Utilize um `enum` para isso.
