import { ProdutoEcologico } from "./ProdutoEcologico";

export class GerenciadorProdutos{
    private produtos:ProdutoEcologico[] = [];

    adicionarProduto(produto:ProdutoEcologico):void{
        this.produtos.push(produto);
        console.log(`produto"${produto.nome}" cadastrado`);

    }

    listarProdutos():void{
    console.log("lista de produtos");
    this.produtos.forEach(produto => produto.exibirDetalhes());
    }
}
