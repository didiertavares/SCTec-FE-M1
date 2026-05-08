const input = require('prompt-sync')()
// tbm pode ser const input p/ ficar + claro de que espera-se uma resposta/alimentação por parte do usuário

function exibirMenu() { 
    console.log('1 - registrar atividade')
    console.log('2 - registrar histórico')
    console.log('3 - ver resumo')
    console.log('0 - sair')
}

function listarExercicios(){
    console.log('1 - corrida')
    console.log('2 - caminhada')
    console.log('3 - ciclismo')
    console.log('4 - remo')
    console.log('5 - natação')
}

let opcaoSelecionada
const opcoesValidas = ['1', '2', '3', '0']

do {
    exibirMenu()
    opcaoSelecionada = input('Selecione uma opção: ')

    if (!opcoesValidas.includes(opcaoSelecionada)) {
    console.log('opção inválida')
    }

    if (opcaoSelecionada=='1') {
    ListarExercicios()
    exercSelecionado = input('Selecione uma atividade: ')
    }

    if (!exercDisponiveis.includes(exercSelecionado)) {
    console.log('atividade inexistente')
    }
} while (opcaoSelecionada !=='0')
    
// o método de array "includes" permite observar se um valor/elemento específico consta dentro de um array




let exercSelecionado

const exercDisponiveis = ['1', '2', '3', '4', '5']

// const novaAtividade = {
//     exercício: null,
//     tempoMinutos: null,
//     distância: null
// }


// const atividades = [
//     {}
// ]





console.log('programa encerrado')
