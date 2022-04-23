/*const livros = require('./database')
const read = require('readline-sync')

console.log(livros)
const resposta = read.question('Estas funcionando? S/N').toUpperCase()
console.log(resposta)
*/


const read = require('readline-sync')
const buscarLivros = require('./controllers/buscarLivros')
const listarLivrosOrdenados = require('./controllers/listarLivrosOrdenados')
const listarLivrosNaoLidos = require('./controllers/listarLivrosNaoLidos')
const listarRecomendados = require('./controllers/listarRecomendados')

const resposta = read.question(`
===========================Menu===============================

1 - CATEGORIA: Buscar livro por categoria
2 - ORDENAR: Ordenar livros por quantidade de paginas
3 - RECOMENDADOS: Buscar livros recomendados
4 - LISTA DE DESEJO: Busca livros nao lidos

5 - SAIR

Digite um numero[1-5]:
`)
// Quando o usuário escolher a opção 1 o js chamará função no arquivo Buscar Livro
switch (resposta) {
    case '1':
        buscarLivros()
        //chamar a funcao buscar livro
        break
    case '2':
        listarLivrosOrdenados()
        //chamar a funcao buscar listarLivrosOrdenados
        break
    case '3':
        listarLivrosNaoLidos()
        //chamar a funcao listarLivrosNaoLidos
        break
    case '4':
        listarRecomendados()
        //chamar a funcao listarRecomendados
    default:
        console.log('fim do algoritmo')
        break

}








