/*const livros = require('./database')
const read = require('readline-sync')

console.log(livros)
const resposta = read.question('Estas funcionando? S/N').toUpperCase()
console.log(resposta)
*/

const livros = require('./database')
const read = require('readline-sync')


const resposta = read.question(`
===========================Menu===============================

1 - CATEGORIA: Buscar livro por categoria
2 - ORDENAR: Ordenar livros por quantidade de paginas
3 - RECOMENDADOS: Buscar livros recomendados
4 - LISTA DE DESEJO: Busca livros nao lidos

5 - SAIR

Digite um numero[1-5]:
`)

console.log(resposta)

// Quando o usuário escolher a opção 1 o js chamará função no arquivo Buscar Livro








