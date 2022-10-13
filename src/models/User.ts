import Produtos from "./Produtos";

interface User {
  id: number;
  nome: string;
  usuario: string;
  foto: string;
  senha: string;
  cpf: string;
  endereco: string;
  produto?: Produtos[];
}

export default User;
