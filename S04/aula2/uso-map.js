const precos = [100, 90, 250, 50]

const comDesconto = precos.map((preco) => {
    // return preco*0.90
    if (preco > 100) {
        return preco*0.90
    } else {return preco}
})
console.log(precos)
console.log(comDesconto)
