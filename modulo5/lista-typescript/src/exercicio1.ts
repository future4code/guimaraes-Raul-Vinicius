const imprimeFrase = (nome:string, dataNascimento:string):string => {

    const separaData:string[] = dataNascimento.split("/")

    const dia:string = separaData[0]
    const mes:string = separaData[1]
    const ano:string = separaData[2]

    return `Olá me chamo ${nome}, nasci no dia ${dia} do mês ${mes} do ano de ${ano}.`
}

console.log(imprimeFrase("Raul", "09/09/1993"))