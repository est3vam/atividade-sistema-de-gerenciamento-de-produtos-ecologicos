import { Livro } from "./livro";

class livroDigital implements Livro{
    autor: string;
    titulo: string;
    formato:string;



     constructor(autor:string, titulo: string, formato:string){
     this.autor= autor;
      this.titulo=titulo;
         this.formato = formato;

     }
        detalhes(): string {
            return(`titulo ${this.titulo} é um livro de ${this.autor} `)
        };
    }


        const crinas = new livroDigital("crinas", "almas trevosas", "4k full uhd");
        console.log(crinas.autor);
        console.log(crinas.titulo);
        console.log(crinas.detalhes);
        console.log(crinas.formato);


     


     


