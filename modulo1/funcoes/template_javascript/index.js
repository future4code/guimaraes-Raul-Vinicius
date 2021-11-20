//EXERCICIO DE INTERPRETAÇÃO
//EXERCICIO 1 
function minhaFuncao(variavel) {
	return variavel * 5
}

console.log(minhaFuncao(2))
console.log(minhaFuncao(10))

//a) O que vai ser impresso no console? --- Será impresso 10 50

//b) O que aconteceria se retirasse os dois console.log e simplesmente invocasse a função 
//minhaFuncao(2) e minhaFuncao(10)? O que apareceria no console? --- não imprime nada no console e da erro 
// de sintaxe

//EXERCICIO 2

let textoDoUsuario = prompt("Insira um texto");

const outraFuncao = function(texto) {
	return texto.toLowerCase().includes("cenoura")
}

const resposta = outraFuncao(textoDoUsuario)
console.log(resposta)

//a. Explique o que essa função faz e qual é sua utilidade
//b. Determine qual será a saída no console para cada uma das 3 entradas do usuário:
//i.   `Eu gosto de cenoura`
//ii.  `CENOURA é bom pra vista`
//iii. `Cenouras crescem na terra`

//EXERCICIO DE ESCRITA
//EXERCICIO 1 - Escreva as funções explicadas abaixo:

//a) A função não deve receber nenhum parâmetro e deve imprimir uma mensagem falando 
//algumas informações sobre você, como:



//b)  Agora escreva uma função que receba 4 parâmetros que correspondem às informações de uma pessoa:
// o nome (`string`), a idade (`number`), a cidade (`string`) e uma profissão (`string`). Ela deve 
//retornar uma `string` que unifique todas as informações da pessoa em uma só mensagem com o template:

function imprimeInformacoes() {
    let meuNome = "Raul"
    let minhaIdade = 28
    let minhaCidade = "Motuca-SP"
    let minhaProfissao = "Arquiteto"

    console.log(`Eu sou o ${meuNome}, tenho ${minhaIdade} anos, moro em ${minhaCidade} e sou ${minhaProfissao}.`)
}