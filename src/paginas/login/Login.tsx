import { Typography, Button } from "@material-ui/core";
import { Box, Grid, TextField } from "@mui/material";
import React, { ChangeEvent, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import UserLogin from "../../models/UserLogin";
import { login } from "../../service/Service";
import { addToken } from "../../store/tokens/actions";
import "./Login.css";

function Login() {
  let navigate = useNavigate();
  const dispatch = useDispatch();
  const [token, setToken] = useState("");

  const [userLogin, setUserLogin] = useState<UserLogin>({
    id: 0,
    nome: "",
    usuario: "",
    foto: "",
    senha: "",
    cpf: "",
    endereco: "",
    token: "",
  });

  const [respUserLogin, setRespUserLogin] = useState<UserLogin>({
    id: 0,
    nome: "",
    usuario: "",
    foto: "",
    senha: "",
    cpf: "",
    endereco: "",
    token: "",
  });

  function updateModel(event: ChangeEvent<HTMLInputElement>) {
    setUserLogin({
      ...userLogin,
      [event.target.name]: event.target.value,
    });
  }

  useEffect(() => {
    if (
      userLogin.usuario !== "" &&
      userLogin.senha !== "" &&
      userLogin.senha.length >= 8
    ) {
      setForm(true);
    }
  }, [userLogin]);

  const [form, setForm] = useState(false);

  async function conectar(event: ChangeEvent<HTMLFormElement>) {
    event.preventDefault();
    try {
      await login("usuarios/logar", userLogin, setRespUserLogin);
      console.log(respUserLogin);
      toast.success("Usuario conectado.", {
        theme: "colored",
        autoClose: 2000,
        hideProgressBar: true,
      });
    } catch (error) {
      toast.error(`Erro`, {
        theme: "colored",
        autoClose: 2000,
        hideProgressBar: true,
      });
    }
  }

  useEffect(() => {
    if (token !== "") {
      dispatch(addToken(token));
      navigate("/home");
      console.log(respUserLogin);
    }
  }, [token]);

  useEffect(() => {
    if (respUserLogin.token !== "") {
      dispatch(addToken(respUserLogin.token));
      navigate("/home");
      console.log(respUserLogin);
    }
  }, [respUserLogin.token]);

  return (
    <>
      <Grid
        container
        direction="row"
        alignItems="center"
        justifyContent="center"
        className="bg-login"
      >
        <Grid  alignItems="center" justifyContent="center">
          <Box paddingX={15} marginX={30} paddingY={20} className="efeito">
            <form onSubmit={conectar}>
              <Typography variant="h2" align="center">
                Entrar
              </Typography>

              <TextField
                value={userLogin.usuario}
                onChange={(event: ChangeEvent<HTMLInputElement>) =>
                  updateModel(event)
                }
                id="usuario"
                label="usuário"
                variant="outlined"
                name="usuario"
                margin="normal"
                fullWidth
              />

              <TextField
                value={userLogin.senha}
                onChange={(event: ChangeEvent<HTMLInputElement>) =>
                  updateModel(event)
                }
                id="senha"
                label="senha"
                variant="outlined"
                name="senha"
                margin="normal"
                type="password"
                fullWidth
              />

              <Box display="flex" justifyContent="center" marginTop={2} paddingX={35} >
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  disabled={!form}
                  className="botão"
                >
                  Entrar
                </Button>
              </Box>
            </form>

            <Box display="flex" justifyContent="center" marginTop={2}>
              <Box marginRight={1}>
                <Typography variant="h6" className="cadastro1">
                  Ainda não tem uma conta?
                </Typography>
              </Box>
              <Link to="/cadastro" className="cadastro">
                <Typography variant="h6" align="center" >
                  Cadastre-se
                </Typography>
              </Link>
            </Box>
          </Box>
        </Grid>

        
      </Grid>
    </>
  );
}

export default Login;
