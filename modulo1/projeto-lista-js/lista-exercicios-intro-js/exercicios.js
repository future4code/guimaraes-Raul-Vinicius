// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {
  // implemente sua lógica aqui
let alturaRetangulo = Number (prompt ("Digite a altura do retangulo."))
let larguraRetangulo = Number (prompt ("Digite a largura do retangulo."))

console.log( alturaRetangulo * larguraRetangulo)

}

// EXERCÍCIO 02
function imprimeIdade() {
  // implemente sua lógica aqui
let anoAtual = Number (prompt("Qual é o ano atual?"))
let anoNascimento = Number (prompt("Qual seu ano de nascimento?"))

console.log(anoAtual - anoNascimento)
}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  // implemente sua lógica aqui

return peso / (altura*altura)

}

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  // implemente sua lógica aqui
  // "Meu nome é NOME, tenho IDADE anos, e o meu email é EMAIL."
  const nome = prompt("Digite seu nome.")
  const idade = Number(prompt("Digite a sua idade."))
  const email = prompt("Digite o seu e-mail.")               

console.log (`Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`)

}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  // implemente sua lógica aqui
const cor1 = prompt ("Digite a primeira cor favorita")
const cor2 = prompt ("Digite a segunda cor favorita")
const cor3 = prompt ("Digite a terceira cor favorita")
const coresFavoritas = [cor1,cor2,cor3]

console.log (coresFavoritas)

}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  // implemente sua lógica aqui

return string.toUpperCase()

}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  // implemente sua lógica aqui

return custo / valorIngresso

}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  // implemente sua lógica aqui

  return string1 >= string2
}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  // implemente sua lógica aqui

return array[0]

}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  // implemente sua lógica aqui

  return array[1] // Só passa no primeiro teste
 
} 



// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  // implemente sua lógica aqui

  array.pop()
  array.pop()
  array.push("abc","ola")    // Só passa no primeiro teste
  
  return array 

}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  // implemente sua lógica aqui
string1 = true
string2 = true
return string1 || string2  // Não passa no terceiro teste

}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  // implemente sua lógica aqui

let anoHoje = Number (prompt ("Qual é o ano Atual?"))
let anoNasceu = Number (prompt ("Qual o ano que você nasceu?"))
let anoEmitiu = Number (prompt ("Em que ano foi emitido o seu Rg"))


return 

/*let idadeDoUsuario = anoHoje - anoNasceu
let renovarRg = anoHoje - anoEmitiu*/

//- Para pessoas entre 20 e 50 anos, ou exatamente 50, deve ser 
//renovada de 10 em 10 anos (se for exatamente 10 anos, deve ser renovada).

}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui

}