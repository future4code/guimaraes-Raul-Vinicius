// EXERCICIOS DE INTERPRETAÇÃO 
// EXERCICIO 1

/*const respostaDoUsuario = prompt("Digite o número que você quer testar")
const numero = Number(respostaDoUsuario)

if (numero % 2 === 0) {
  console.log("Passou no teste.")
} else {
  console.log("Não passou no teste.")
}

// A) Explique o que o código faz. Qual o teste que ele realiza?
// Resposta: o código verifica se o resto da divisão entre a resposta do usuário
// por 2 é igual a 0. Se for ele passa no teste, senão ele não passa.

// B) Para que tipos de números ele imprime no console "Passou no teste"? 
// Resposta: divisiveis por 2 com resto 0.

// C) Para que tipos de números a mensagem é "Não passou no teste"?
// Resposta: numeros que a divisão por 2 tem o resto diferente de 0.

//EXERCICIO 2

let fruta = prompt("Escolha uma fruta")
let preco
switch (fruta) {
  case "Laranja":
    preco = 3.5
    break;
  case "Maçã":
    preco = 2.25
    break;
  case "Uva":
    preco = 0.30
    break;
  case "Pêra":
    preco = 5.5
    break; // BREAK PARA O ITEM c.
  default:
    preco = 5
    break;
}
console.log("O preço da fruta ", fruta, " é ", "R$ ", preco)

// A) Para que serve o código acima?
// Resposta: O usuário escolhe uma fruta e receebe o valor do produto.

// B) Qual será a mensagem impressa no console, se o valor de fruta for "Maçã"?
// Resposta: "O preço da fruta Maça é R$ 2.25"

// C) Considere que um usuário queira comprar uma Pêra, qual seria a mensagem 
//impressa no console se retirássemos o break que está logo acima do default 
//(o break indicado pelo comentário "BREAK PARA O ITEM c.")?
// Resposta: "O preço da fruta Pêra é 5"

//EXERCICIO 3

const numero2 = Number(prompt("Digite o primeiro número."))

if(numero2 > 0) {
  console.log("Esse número passou no teste")
	let mensagem = "Essa mensagem é secreta!!!"
}

console.log(mensagem)*/

// A) O que a primeira linha está fazendo?
// Resposta: pedindo para o usuário digitar o primeiro numero.

// B) Considere um usuário digitou o número 10. Qual será a mensagem do terminal? E se fosse o número -10?
// Resposta: Se digitar 10 "Esse numero passou no teste". Se for -10 deveria não aparecer nada.

// C) Haverá algum erro no console? Justifique usando os conceitos de bloco ou escopo.
// Resposta: com o console.log fora do escopo do if o console aponta que a variavel mensagem não está declarada.

// EXERCICIOS DE ESCRITA DE CÓDIGO

// EXERCICIO 1 

//Faça um programa que pergunta ao usuário qual a idade dele e imprima no console se ele/ela pode dirigir (apenas 
//maiores de idade).

// A)  Faça um prompt para receber a idade do usuário e guarde em uma variável.

// B)  Garanta que essa variável é do tipo Number, você deve usar o cast para number para isso

// C) Agora veja se essa idade do usuário corresponde à idade mínima que permite dirigir. Se sim, imprima no 
//console "Você pode dirigir", caso contrário, imprima "Você não pode dirigir."

const idadeUsuario = Number (prompt("Qual é a sua idade?"))

if (idadeUsuario >= 18) {
    console.log ("Já é maior de idade, então pode dirigir.")
} 
else{
    console.log ("Não é maior de idade, então não pode dirigir.")
} 

//EXERCICIO 2

// Agora faça um programa que verifica que turno do dia um aluno estuda. Peça para digitar M (matutino) 
// ou V (Vespertino) ou N (Noturno). Imprima no console a mensagem "Bom Dia!", "Boa Tarde!" ou "Boa Noite!".
// Utilize o bloco if/else

const periodoEstuda = prompt("Em qual período você estuda? Responda com M(matutino, V(vespertino) ou N(noturno).")

if (periodoEstuda === "M") {
    console.log ("Bom dia!")
} else if (periodoEstuda === "V") {
    console.log ("Boa tarde!")
} else if (periodoEstuda === "N") {
    console.log ("Boa noite!")
} else {
    console.log ("Resposta invalida.")
}

//EXERCICIO 3 - Repita o exercício anterior mas agora usando swotch case.

const periodoEstudaDois = prompt("Em qual período você estuda? Responda com M(matutino, V(vespertino) ou N(noturno).")

switch (periodoEstudaDois) {
    case "M":
      console.log ("Bom dia!") 
      break;
    case "V":
      console.log ("Boa tarde!")
      break;
    case "N":
      console.log ("Boa Noite!")
      break;
    default:
      console.log ("Resposta invalida!")
      break;
}

//EXERCICIO 4 

// Considere a situação: você vai ao cinema com um amigo ou amiga, porém ele/ela só assistirá a um filme com você 
// se ele for do gênero fantasia e se o ingresso está abaixo de 15 reais. Faça um código que pergunta ao usuário qual
// o gênero de filme que vão assistir e outra pergunta sobre o preço do ingresso, então verifique se seu amigo ou amiga
// vai topar assistir o filme. Caso positivo, imprima no console a mensagem: "Bom filme!", caso contrário, imprima 
// "Escolha outro filme :("

const generoFilme = prompt ("Qual o gênero de filme vocês vão assistir?")
const precoIngresso = Number (prompt("Qual é o preço do ingresso?"))

if (generoFilme === "fantasia" && precoIngresso <= 15) {
    console.log ("Bom filme!")
} else {
    console.log ("Escolha outro filme!")
}