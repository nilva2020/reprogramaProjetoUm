//requerer dados dos livros dentro do arquivo database, observe que tem dois pontos antes da barra é onde a database se encontra
const livros = require('../database')
const read = require('readline-sync')

const listarLivrosNaoLidos = () => {
    // quando 1 é chamado no app entra nesse codigo e fará esta pergunta
    const opcaoInicial = read.question('Deseja buscar por categoria? S/N: ').toUpperCase()
// quando o usuario responder sim, vai para a ação dentro do if
    if(opcaoInicial === 'S') {
        // mostrará no console todas as categorias existentes
       const categorias = livros.map(livro => livro.categoria)
        console.table(categorias)

    const inputCategoria = read.question('Digite uma categoria conforme nome na tabela acima: ')

    //depois que escolher a categorias o sistema ira pergunta se tem certeza?
    const confirmacao = read.question('Tem certeza? S/N: ').toUpperCase()

    if (confirmacao === 'S') {
        const livrosFiltrados = livros.filter(livro => livro.categoria === inputCategoria)
        console.table(livrosFiltrados)
    }
    }
  
}

module.exports = listarLivrosNaoLidos