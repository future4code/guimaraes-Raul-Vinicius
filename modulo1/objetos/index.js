// EXERCICIOS DE INTERPRETAÇÃO DE CÓDIGO
// EXERCÍCIO 1 

const filme = {
	nome: "Auto da Compadecida", 
	ano: 2000, 
	elenco: [
		"Matheus Nachtergaele", "Selton Mello", "Denise Fraga", 
		"Virginia Cavendish"
		], 
	transmissoesHoje: [
		{canal: "Telecine", horario: "21h"}, 
		{canal: "Canal Brasil", horario: "19h"}, 
		{canal: "Globo", horario: "14h"}
		]
}

console.log(filme.elenco[0])
console.log(filme.elenco[filme.elenco.length - 1])
console.log(filme.transmissoesHoje[2])

// O que será impresso no console?
// Matheus Nachtergale
// Virginia Cavendish
// Globo 14h
//--------------------------------------------------------------

// EXERCICIO 2

const cachorro = {
	nome: "Juca", 
	idade: 3, 
	raca: "SRD"
}

const gato = {...cachorro, nome: "Juba"}

const tartaruga = {...gato, nome: gato.nome.replaceAll("a", "o")}

console.log(cachorro)
console.log(gato)
console.log(tartaruga)

// a) O que vai ser impresso no console?
//Resposta: Juca ,3, SRD
//          Juba, 3, SRD
//          Jubo, 3, SRD

// b) O que faz a sintaxe dos 3 pontos antes do nome do objeto?
// Resposta: ela copia o objeto que chamamos e suas propriedades
//---------------------------------------------------------------

// EXERCÍCIO 3 

function minhaFuncao(objeto, propriedade) {
	return objeto[propriedade]
}

const pessoa = {
  nome: "Caio", 
  idade: 23, 
  backender: false
}

console.log(minhaFuncao(pessoa, "backender"))
console.log(minhaFuncao(pessoa, "altura"))

// a) O que vai ser impresso no console?
// Resposta: false
//           undefined

// b) Explique o valor impresso no console. Você sabe por que isso aconteceu?

// Resposta: retornou false para "backender" por que foi o valor atribuido, e retornou undefined para "altura" 
//por não ter definido valores para esse parâmetro
//---------------------------------------------------------------

// EXERCICIOS DE ESCRITA DE CÓDIGO

//EXERCÍCIO 1 

const novaPessoa = {
    nome: "Luna",
    apelidos: ["Luninha", "Lulu", "Lu"]
 }

 const outraPessoa = {
    ...novaPessoa,
        nome: "Raul",
        apelidos: ["Raulzin", "Ra", "Raur"]
}

function imprimeMensagem(parametro) {
    const imprimePessoa = `Eu sou a ${parametro.nome}, mas pode me chamar de ${parametro.apelidos[0]}, ${parametro.apelidos[1]} ou ${parametro.apelidos[2]}. `

    return imprimePessoa
}
console.log (imprimeMensagem(novaPessoa)) // LETRA A
console.log (imprimeMensagem(outraPessoa)) // LETRA B
//--------------------------------------------------------

// EXERCICIO 2

const profissional = {
    nome: "Raul",
    idade: 28,
    profissao: "Arquiteto"
}

const profissionalDois = {
    ...profissional,
    nome: "Alex",
    idade: 30,
    profissao: "Engenheiro"
}

function imprimeDadosProfissionais(dados) {

    let recebeDados = [dados.nome, dados.nome.length, dados.idade, dados.profissao, dados.profissao.length]

    return recebeDados
}

console.log(imprimeDadosProfissionais(profissional))
console.log(imprimeDadosProfissionais(profissionalDois))
//---------------------------------------------------------------

//EXERCICIO 3 

let carrinho = []

const mamao = {
    nome: "mamão",
    disponibilidade: true

}

const limao = {
    nome: "limao",
    disponibilidade: true
    
}

const morango = {
    nome: "morango",
    disponibilidade: true
    
}

function sacolao (frutas) {
    carrinho.push(frutas)
    return carrinho
}

console.log("carrinho", sacolao(mamao))
console.log("carrinho", sacolao(limao))
console.log("carrinho", sacolao(morango))

