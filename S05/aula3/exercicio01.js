class ContaBancaria{
    saldo = 0
    titular = ""
    constructor(titular, saldo) {
        this.saldo = saldo
        this.titular = titular
    }
    depositarValores(valorDepositado){
        this.saldo = this.saldo + valorDepositado
        console.log(`o valor ${valorDepositado} foi depositado`)
    }
    sacarValores(valorSacado){
        this.saldo = this.saldo - valorSacado
        console.log(`o valor ${valorSacado} foi sacado`)
    }
    extrato(){
        console.log(`Titular: ${this.titular} | Saldo: ${this.saldo}`)
    }
}

const Conta1 = new ContaBancaria('Didier', 300)

Conta1.extrato()

Conta1.depositarValores(100)

Conta1.sacarValores(500)

Conta1.extrato()
