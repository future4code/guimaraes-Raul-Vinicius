// EXERCICIO 2 Crie uma aplicação Node que recebe uma string representando uma operação matemática
// e dois valores numéricos. O retorno deverá ser o resultado da operação selecionada utilizando os 
// 2 valores fornecidos

const operacao = process.argv[2]
const num1 = Number(process.argv[3])
const num2 = Number(process.argv[4])

switch(operacao){
	case "soma":
		num1 + num2
		break;
	case "sub":
		num1 - num2
		break;
    case "mult":
        num1 * num2
    case "div":
        num1 / num2
    default:
        console.log("Tente de novo")
}
