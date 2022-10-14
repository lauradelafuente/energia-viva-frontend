import Categoria from "./Categoria";
import User from "./User";

interface Produtos {
  id: number;
  nomeProduto: string;
  marca: string;
  dimensao: string;
  preco: number;
  quantidade: number;
  material: string;
  potencia: string;
  categoria?: Categoria | null;
}

export default Produtos;
