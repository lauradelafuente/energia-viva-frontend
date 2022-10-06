interface UserLogin {
    id: number;
    nome:string;
    usuario: string;
    foto: string;
    senha: string;
    cpf: string;
    endereco: string;
    token: string| null
}

export default UserLogin;