import { Typography } from "@material-ui/core";
import { Box, Button, Grid, TextField } from "@mui/material";
import { useState, useEffect, ChangeEvent } from "react";
import { Link, useNavigate } from "react-router-dom";
import User from "../../models/User";
import { cadastroUsuario } from "../../service/Service";
import "./CadastroUsuario.css";

function CadastroUsuario() {
  let navigate = useNavigate();
  const [confirmarSenha, setConfirmarSenha] = useState<String>("");

  const [cadastro, setCadastro] = useState(false);
  const [user, setUser] = useState<User>({
    id: 0,
    nome: "",
    usuario: "",
    foto: "",
    senha: "",
    cpf: "",
    endereco: "",
  });

  const [userResult, setUserResult] = useState<User>({
    id: 0,
    nome: "",
    usuario: "",
    foto: "",
    senha: "",
    cpf: "",
    endereco: "",
  });

  useEffect(() => {
    if (user.nome.length > 3 && user.usuario !== "" && user.senha.length >= 8) {
      setCadastro(true);
    }
  }, [user]);

  useEffect(() => {
    if (userResult.id != 0) {
      navigate("/login");
    }
  }, [userResult]);

  function confirmarSenhaHandle(e: ChangeEvent<HTMLInputElement>) {
    setConfirmarSenha(e.target.value);
  }

  function updatedModel(e: ChangeEvent<HTMLInputElement>) {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  }
  async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault();
    if (confirmarSenha == user.senha) {
      cadastroUsuario(`/usuarios/cadastrar`, user, setUserResult);
      alert("Usuario cadastrado com sucesso");
    } else {
      alert(
        "Dados inconsistentes. Favor verificar as informações de cadastro."
      );
    }
  }

  return (
    <>
      <Grid container direction='row' justifyContent='center' alignItems='center' className='bg-cadastro' >
            <Grid item xs={6} alignItems='center' >
            <Box paddingX={10} paddingY={5} className="efeito">
            <form onSubmit={onSubmit}>
              <Typography variant="h2">Cadastre-se</Typography>

              <TextField
                value={user.nome}
                onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)}
                id="nome"
                label="nome"
                variant="outlined"
                name="nome"
                margin="normal"
                fullWidth
              />
              <TextField
                value={user.usuario}
                onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)}
                id="usuario"
                label="usuario"
                variant="outlined"
                name="usuario"
                margin="normal"
                fullWidth
              />
              <TextField
                value={user.foto}
                onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)}
                id="foto"
                label="foto(url)"
                variant="outlined"
                name="foto"
                margin="normal"
                fullWidth
              />
              <TextField
                value={user.endereco}
                onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)}
                id="endereco"
                label="Endereço"
                variant="outlined"
                name="endereco"
                margin="normal"
                fullWidth
              />
              <TextField
                value={user.cpf}
                onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)}
                id="cpf"
                label="CPF"
                variant="outlined"
                name="cpf"
                margin="normal"
                fullWidth
              />
              <TextField
                value={user.senha}
                onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)}
                id="senha"
                label="senha"
                variant="outlined"
                name="senha"
                margin="normal"
                type="password"
                fullWidth
              />
              <TextField
                value={confirmarSenha}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  confirmarSenhaHandle(e)
                }
                id="confirmarSenha"
                label="confirmarSenha"
                variant="outlined"
                name="confirmarSenha"
                margin="normal"
                type="password"
                fullWidth
              />

              <Box display="flex" justifyContent="space-around" marginTop={2}>
                <Link to="/login" className="text-decoration-none">
                  <Button type="submit" variant="contained" className="botao">
                    Cancelar
                  </Button>
                </Link>
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  disabled={!cadastro}
                >
                  Cadastrar
                </Button>
              </Box>
            </form>
            </Box>
          </Grid>
        </Grid>
      
    </>
  );
}

export default CadastroUsuario;
