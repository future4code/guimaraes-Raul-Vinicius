//EXERCICIOS DE INTERPRETAÇÃO DE CÓDIGO 
// EXERCICIO 1

// let valor = 0
// for(let i = 0; i < 5; i++) {
//   valor += i
// }
// console.log(valor) //Resposta: ele vai somar até que i seja maior que 5. valor= 0 + 1 + 2 + 3 + 4 = 10.

// EXERCICIO 2 

// const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]
// for (let numero of lista) {
//   if (numero > 18) {
// 		console.log(numero)
// 	}
// }

// A) O que vai ser impresso no console?
// Resposta: 19, 21, 23, 25, 27, 30

// B) Se eu quisesse acessar o índice de cada elemento dessa lista, o for...of... é suficiente? Se sim, 
//o que poderia ser usado para fazer isso?
// sim, porque é a melhor maneira pra percorrer um array. Depende do que colocamos na condição.

//EXERCICIO 3 - Qual seria o resultado impresso no console, se o usuário digitasse o número 4 ?

// const quantidadeTotal = Number(prompt("Digite a quantidade de linhas: "))
// let quantidadeAtual = 0
// while(quantidadeAtual < quantidadeTotal){
//   let linha = ""
//   for(let asteriscos = 0; asteriscos < quantidadeAtual + 1; asteriscos++){
//     linha += "*"
//   }
//   console.log(linha)
//   quantidadeAtual++
// }
// Resposta: imprimiria * , **, ***, ****. 

//EXERCICIOS DE ESCRITA DE CÓDIGO

// EXERCICIO 1 - Pergunte ao usuário quantos bichinhos de estimação ele tem e guarde esse dado em uma variável. 

// A) Se a quantidade for 0, imprima no console "Que pena! Você pode adotar um pet!"
// B)  Se a quantidade for maior que 0, solicite que o usuário digite os nomes deles, um por um, e guarde esses 
// nomes em um array
// C) Por fim, imprima o array com os nomes dos bichinhos no console

const qtdBichinhos = Number (prompt ("Quantos bichinhos de estimação você tem?"))

let arrayNomesBichinhos = []

if (qtdBichinhos === 0){
    console.log ("Que pena! Você pode adotar um pet!")
} else if (qtdBichinhos > 0) {
    for (let i=0; i < qtdBichinhos; i++) {
        arrayNomesBichinhos.push( prompt ("Digite o nome do seu pet."))
        
    }
}
// if (qtdBichosEstimacao === 0){
//     console.log ("Que pena! Você pode adotar um pet!")
// } else if (qtdBichosEstimacao > 0) {
//     for (nomesBichosEstimacao = ""; nomesBichosEstimacao.length < qtdBichosEstimacao; nomesBichosEstimacao += nomesBichosEstimacao ) {
//         prompt ("Digite o nome do seu pet.")
//         console.log(nomesBichosEstimacao.toString())
//     }
// }

// EXERCICIO 2 E

const arrayOriginal = [2, 3, 4, 5, 98, 10]

const MaiorMenor = (array) => {
    let maiorNum = 0
    let menorNum = Infinity

    for (leti = 0; i < array.length; i++) {
        if (array[i] < menorNum) {
            menorNum = array[i]
        } else if (array[i] > maiorNum) {
            maiorNum = array[i]
        }
    }
    console.log("maior numero é: ", maiorNum)
    console.log("menor numero é: ", menorNum)
}
MaiorMenor(arrayOriginal) // EXERCICIO FEITO NO PLANTAO, RESOLVER O RESTANTE NO FDS