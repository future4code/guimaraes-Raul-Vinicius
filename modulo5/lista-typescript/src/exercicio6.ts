type Cliente = {
    cliente : string,
    saldoTotal : number,
    debitos : number[]
}

const clientes : Cliente[] = [
	{ cliente: "João", saldoTotal: 1000, debitos: [100, 200, 300] },
	{ cliente: "Paula", saldoTotal: 7500, debitos: [200, 1040] },
	{ cliente: "Pedro", saldoTotal: 10000, debitos: [5140, 6100, 100, 2000] },
	{ cliente: "Luciano", saldoTotal: 100, debitos: [100, 200, 1700] },
	{ cliente: "Artur", saldoTotal: 1800, debitos: [200, 300] },
	{ cliente: "Soter", saldoTotal: 1200, debitos: [] }
]

const precisaEmprestimo = (arrayClientes:Cliente[]) : Cliente[] => {
    arrayClientes.forEach ((i : Cliente) => {
        const debitos = i.debitos.reduce((previousValue, currentValue) => previousValue + currentValue, 0)
        i.saldoTotal = i.saldoTotal - debitos
    })
    const verSaldoNegativo = arrayClientes.filter((i) => i.saldoTotal < 0 )
    
    return verSaldoNegativo
}

console.log(precisaEmprestimo(clientes))

// const array1 = [1, 2, 3, 4];

// // 0 + 1 + 2 + 3 + 4
// const initialValue = 0;
// const sumWithInitial = array1.reduce(
//   (previousValue, currentValue) => previousValue + currentValue,
//   initialValue
// );

// console.log(sumWithInitial);
// // expected output: 10