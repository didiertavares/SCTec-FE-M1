console.log('main.js')

const endereco = document.getElementById('endereco')


async function buscaEndereco(){
    const cep = '13271450'

    const url = `https://viacep.com.br/ws/${cep}/json/`

    const resposta = await fetch(url)
    console.log(resposta)

    const dados = await resposta.json()
    console.log(dados)

    // endereco.innerHTML = `
    //     <p>Rua: ${dados.logradouro}<p/>
    //     <p>Bairro: ${dados.bairro}<p/>
    //     <p>Localidade: ${dados.localidade}<p/>
    //     <p>Estado: ${dados.uf}<p/>
    // `
}

buscaEndereco()

async function buscarDadosPersonagens(){
    const url = 'https://hp-api.onrender.com/api/characters'

    const resposta = await fetch(url)
    const dados = await resposta.json()
    console.log(dados)
}
buscarDadosPersonagens()