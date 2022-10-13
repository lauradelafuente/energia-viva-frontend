import Produtos from './Produtos'

interface Categoria {
    id: number;
    tipoProduto: string;
    descricao: string;
    produto?: Produtos | null
}

export default Categoria;