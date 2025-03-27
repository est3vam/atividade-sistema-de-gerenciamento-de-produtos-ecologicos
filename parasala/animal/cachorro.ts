import { Animal } from "./animal";

class Cachorro{
    nome:string;
    idade:number;
    raca:string;

    constructor(nome:string, idade:number, raca:string){
        this.nome=nome;
        this.idade=idade;
        this.raca = raca;
    }
    som():void{
console.log("ishagisuf")

    }
   

    

}
 const cachorro = new Cachorro("trabalhador",2, "pobre");
 console.log(cachorro.idade);
 console.log(cachorro.nome);
 console.log(cachorro.raca);
 cachorro.som;