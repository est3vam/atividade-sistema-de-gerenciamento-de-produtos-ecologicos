import { contaBancaria } from "./contabancaria";
class ContaCorrente implements contaBancaria{
    saldo:number
    constructor(saldoInicial:number){
        this.saldo = saldoInicial;
    }

    depositar(valor:number){
        this.saldo += valor;

    }

    sacar(valor:number):void{
        if(this.saldo >= valor){
            this.saldo -= valor;
        }
        else{console.log("value baixo seu podreca");

        }
    }
}
const conta = new ContaCorrente(1000);
console.log(conta.saldo);

conta.depositar(200);

conta.sacar(900000);
