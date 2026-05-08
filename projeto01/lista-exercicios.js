
function exibirListaExercicios(){
    console.log('1 - corrida')
    console.log('2 - caminhada')
    console.log('3 - ciclismo')
    console.log('4 - remo')
    console.log('1 - natação')
}

let exercSelecionado

const exercDisponiveis = ['1', '2', '3', '4', '5']
if (opcaoSelecionada==1) {
    exibirListaExercicios()
    
}
if (!exercDisponiveis.includes(exercSelecionado)) {
    console.log('opção inválida')
    }