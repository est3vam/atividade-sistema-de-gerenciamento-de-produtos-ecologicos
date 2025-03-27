import { AlimentoOrganico } from "./AlimentoOrganico";
import { GerenciadorProdutos } from "./GerenciadorProdutos";
import { ProdutoLimpezaBiodegradavel } from "./ProdutoLimpezaBiodregadavel";
import { itemDecoracaoSustentavel } from "./itemDecoracaoSustentavel";

const gerenciador = new GerenciadorProdutos();

const maca = new AlimentoOrganico("maça organica",5.99, new Date("2024-12-20"));
const detergente = new ProdutoLimpezaBiodegradavel("Detergente Natural", 12.50,500);
const vaso = new itemDecoracaoSustentavel("vaso de vidro", 29.90, "vidro reciclado");

maca.exibirDetalhes();
detergente.exibirDetalhes();
vaso.exibirDetalhes();

gerenciador.adicionarProduto(maca);
gerenciador.adicionarProduto(detergente);
gerenciador.adicionarProduto(vaso);

gerenciador.listarProdutos();