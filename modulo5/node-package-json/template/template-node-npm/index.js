import { countries } from './countries.js'

const string = process.argv[2]
const resultado = countries.filter(pais => pais.name.toLocaleLowerCase().includes(string))

console.table(resultado)