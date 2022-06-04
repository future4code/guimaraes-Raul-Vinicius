enum Genero {
	ACAO="ação",
	DRAMA="drama",
	COMEDIA="comédia",
	ROMANCE="romance",
	TERROR="terror"
}

type Filmes = {
    nomeFilme : string,
    anoLancamento : string,
    genero : Genero,
    pontuacao ?: number
}

const mostraFilme = (nomeFilme:string, anoLancamento:string, genero:Genero, pontuacao?:number) => {
    const filme : Filmes = {
        nomeFilme: nomeFilme,
        anoLancamento: anoLancamento,
        genero: genero,
        pontuacao: pontuacao
    }
    return filme
}

console.log(mostraFilme("Os segredos de Dumbleodore", "2022", Genero.DRAMA, 10))