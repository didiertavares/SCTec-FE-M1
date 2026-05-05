const prompt = require('prompt-sync')()
// tbm pode ser const input p/ ficar + claro de que espera-se uma resposta/alimentação por parte do usuário
let nome = prompt('Qual seu nome?')

console.log(`Olá, ${nome}! seja bemvindo ao terminal!`)