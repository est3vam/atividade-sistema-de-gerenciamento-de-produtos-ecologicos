import { Animal } from "./animal";
class Gato{
    nome:string;
    idade:number;
    raca:string;

    constructor(nome:string, idade:number, raca:string){
        this.nome=nome;
        this.idade=idade;
        this.raca = raca;
    }
    som():void{
console.log("miaaaaau")

    }
   

    

}
 const gato = new Gato("trabalhador",2, "pobre");
 console.log(gato.idade);
 console.log(gato.nome);
 console.log(gato.raca);
 gato.som;
