const input = require('prompt-sync')()
// tbm pode ser const input p/ ficar + claro de que espera-se uma resposta/alimentação por parte do usuário

function exibirMenu() { 
    console.log('1 - registrar atividade')
    console.log('2 - registrar histórico')
    console.log('3 - ver resumo')
    console.log('0 - sair')
}

let opcaoSelecionada
const opcoesValidas = ['1', '2', '3', '0']

do {
    exibirMenu()
    opcaoSelecionada = input('Selecione uma opção: ')

    if (!opcoesValidas.includes(opcaoSelecionada)) {
        console.log('opção inválida')
    }
// o método de array "includes" permite observar se um valor/elemento específico consta dentro de um array
} while (opcaoSelecionada !=='0')

console.log('programa encerrado')

