let numero:number = 10;
console.log(numero);

let nome:string = "Crinabela";
console.log(nome);

const pi:number = 3.14;
console.log(pi);

function saudacao(nome:string, idade: number){
    console.log(`"olá meu nome é ${nome} e tenho ${idade} anos"`);

}

const nomeUsuario:string = "Crinabela";
const idade: number = 17;
saudacao(nomeUsuario,idade);

const pessoa ={
    nome:"senhorfarofa",
    idade:20,
    cidade:"fornai",
    apresentar: function ():string{
        return `Oi meu nome é ${this.nome}, e tenho ${this.idade} e sou do ${this.cidade}`
    }

}
console.log(pessoa.apresentar());

function somar(a: number, b: number): number {
    return a+b;
}
console.log(somar(3,4));