// EXERCÍCIOS DE INTERPRETAÇÃO

//EXERCÍCIO 1
const bool1 = true
const bool2 = false
const bool3 = !bool2 //true

let resultado = bool1 && bool2
console.log("a. ", resultado) // a. false

resultado = bool1 && bool2 && bool3 
console.log("b. ", resultado) // b. false

resultado = !resultado && (bool1 || bool2) 
console.log("c. ", resultado) // c. true 

console.log("d. ", typeof resultado) // d. boolean
//-------------------------------------------------

//EXERCÍCIO 2

let primeiroNumero = prompt("Digite um numero!")
let segundoNumero = prompt("Digite outro numero!")

const soma = primeiroNumero + segundoNumero

console.log(soma) // 12

/* Se a intenção era somar o correto seria converter prompt em Number,
já que por padrão ele é uma String sendo assim ele concatena ao invés
de somar. Exemplificando abaixo:*/
//-------------------------------------------------

//EXERCÍCIO 3

let primeiroNum = Number(prompt("Digite um numero!"))
let segundoNum = Number(prompt("Digite outro numero!"))

const somaNum = primeiroNum + segundoNum

console.log(somaNum)
//--------------------------------------------------

//EXERCÍCIOS DE ESCRITA DE CÓDIGO
// EXERCÍCIO 1

let idadeUsuario = Number(prompt("Qual é a sua idade"))
let idadeMelhorAmigx = Number(prompt("Qual é a idade do seu(sua) melhor(a) amigo(a)"))

console.log("Sua idade é maior do que a do seu melhor amigo?", idadeUsuario > idadeMelhorAmigx)

//--------------------------------------------------
// EXERCÍCIO 2

let numPar = Number ( prompt ("Insira um número par."))
console.log ( numPar % 2)
/* Quando dividimos um numero PAR por dois sempre sobrará resto 0, e quando fazemos o mesmo com 
um numero IMPAR sobra restos diferentes de 0. */

//----------------------------------------------------
// EXERCÍCIO 3

let idadeEmAnos = Number (prompt ("Qual é a sua idade?"))
let idadeEmMeses = Number(idadeEmAnos * 12)
let idadeEmDias = Number(idadeEmMeses * 365)
let idadeEmHoras = Number (idadeEmDias * 24)

console.log ("A idade do Usuário em anos é ", idadeEmAnos)
console.log ("A idade do Usuário em meses é ", idadeEmMeses)
console.log ("A idade do Usuário em dias é ", idadeEmDias)
console.log ("A idade do Usuário em horas é ", idadeEmHoras)

//----------------------------------------------------
// EXERCÍCIO 4

/*4. Faça um programa que pergunte ao usuário dois números. Em seguida, faça as operações e imprima no
 console as seguintes mensagens seguidas pelo `true` ou `false`:

O primeiro numero é maior que segundo? true
O primeiro numero é igual ao segundo? false
O primeiro numero é divisível pelo segundo? true
O segundo numero é divisível pelo primeiro? true

obs: O true ou false vai depender dos números inseridos e do resultado das operações.*/
let numA = Number ( prompt ("Insira um número."))
let numB = Number ( prompt ("Insira um número."))

console.log ("O primeiro numero é maior que segundo?", numA > numB)
console.log ("O primeiro numero é igual ao segundo?", numA === numB)

let numC = numA % numB
let numD = numB % numA
console.log ("O primeiro numero é divisível pelo segundo?", numC === 0 )
console.log ("O segundo numero é divisível pelo primeiro?", numD === 0 )
