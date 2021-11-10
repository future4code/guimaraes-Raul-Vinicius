//EXERCÍCIO DE INTERPRETAÇÃO DE CÓDIGO
//EXERCÍCIO 1
let numA = 10
let numB = 10

console.log(numB)

numB = 5
console.log(numA, numB)

/* irá imprimir:
10
10 05
------------------------------------------------------------------*/ 
//EXERCÍCIO 2
let arroz = 10
let feijao = 20
batata = arroz
feijao = batata
arroz = feijao

console.log(arroz, feijao, batata)

/* irá imprimir:
10 10 10
------------------------------------------------------------------*/
//EXERCÍCIO 3
let horasTrabalhadasDia = prompt("Quantas horas você trabalha por dia?")
let quantoReceboDia = prompt("Quanto você recebe por dia?")
alert(`Voce recebe ${horasTrabalhadasDia/quantoReceboDia} por hora`)

/* O comando pergunta quantas horas trabalhos por dia e também o quanto ganhamos por dia trabalhado.
Assim ele retorna o resultado do quanto ganhamos por hora.
uma alternativa a variavel p pode ser horasTrabalhadasDia, para a variavel t podemos usar quantoReceboDia
----------------------------------------------------------------- */


//EXERCÍCIO DE ESCRITA DE CÓDIGO - EXERCÍCIO 1
let meuNome
let minhaIdade

console.log(typeof meuNome, typeof minhaIdade)

/* imprime na tela:
undefined undefined
Pelo fato de não termos atribuido valor às variaveis*/

let nome = prompt("Qual é o seu nome?")
let idade = prompt("Qual a sua idade?")

console.log(typeof nome, typeof idade)

/* imprimiu na tela:
string string 
Por padrão quando usamos o prompt as variáveis são String*/

console.log("Olá meu nome é", nome, "e tenho", idade, "anos")
//--------------------------------------------------------------------

//EXERCÍCIO 2 

//ITEM A
let trabalhou = prompt("Você trabalhou hoje?")
let ganha = prompt("Ganha bem o suficiente pra fazer o quer?")
let mudar = prompt("Se pudesse mudar de país iria agora mesmo?")

//ITEM B
let trabalhouHoje = "sim"
let ganhaBem = "não"
let mudarPais = "sim"

console.log("Você trabalhou hoje? - ", trabalhouHoje)
console.log("Ganha bem o suficiente pra fazer o quer? - ", ganhaBem)
console.log("Se pudesse mudar de país iria agora mesmo? - ", mudarPais)

//----------------------------------------------------------------------

//EXERCÍCIO 3 

let precoA = 10
let precoB = 25

let precoC = precoA //Lógica para trocar o valor
precoA=precoB
precoB=precoC
 
console.log("O novo valor de a é ", precoA)
console.log("O novo valor de b é ", precoB)

