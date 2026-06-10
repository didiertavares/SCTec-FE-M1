const nome = document.getElementById('nome')
console.log(nome.value)

const email = document.getElementById('email')
console.log(email.value)

const telefone = document.getElementById('telefone')
console.log(telefone.value)

const cidadeSede = document.getElementById('cidade')
console.log(cidadeSede.value)

const pacoteEscolhido = document.querySelector('input[name="pacote"]:checked')
if (pacoteEscolhido) {
    console.log(pacoteEscolhido.value)
}
console.log(pacoteEscolhido)

const dataIda = document.getElementById('data-ida')
console.log(dataIda.value)

const dataVolta = document.getElementById('data-volta')
console.log(dataVolta.value)

const obs = document.getElementById('observacoes')
console.log(obs.value)

const extras = []

const ingresso  = document.getElementById('ingresso')
if (ingresso.checked) {
    extras.push(ingresso)
}
const seguro  = document.getElementById('seguro')
if (seguro.checked) {
    extras.push(seguro)
}
const traslado  = document.getElementById('traslado')
if (traslado.checked) {
    extras.push(traslado)
}
console.log(extras)


const buttonEnviar = document.querySelector('button')

buttonEnviar.addEventListener('submit', (event) => {
    event.preventDefault()
})

