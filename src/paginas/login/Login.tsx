import { Typography, Button } from '@material-ui/core';
import { Box, Grid, TextField } from '@mui/material';
import React, { ChangeEvent, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import useLocalStorage from 'react-use-localstorage';
import UserLogin from '../../models/UserLogin';
import { login } from '../../service/Service';
import './Login.css';

function Login() {
  let navigate = useNavigate();
  const [token, setToken] = useLocalStorage('token');
  const [userLogin, setUserLogin] = useState<UserLogin>(
    {
      id: 0,
      nome: "",
      usuario: "",
      foto: "",
      senha: "",
      cpf: "",
      endereco: "",
      token: ""
    }
  )

  function updatedModel(e: ChangeEvent<HTMLInputElement>) {

    setUserLogin({
      ...userLogin,
      [e.target.name]: e.target.value
    })
  }

  useEffect(() => {
    if (token !== '') {
      navigate('/home')
    }
  }, [token])

  async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault();
    try {
      await login(`/usuarios/logar`, userLogin, setToken)


      alert('Usuário logado com sucesso!');
    } catch (error) {
      alert('Dados do usuário inconsistentes. Erro ao logar!');
    }
  }

  return (
    <>
      <Grid style={{ backgroundColor: "#fff59d" }}
        container
        direction="row"
        alignItems="center"
        justifyContent="center"
      >
        <Grid item xs={6} alignItems="center" justifyContent="center" >
          <Box paddingX={20}>
            <form onSubmit={onSubmit} >
              <Typography variant="h2" align='center'>Entrar</Typography>

              <TextField value={userLogin.usuario} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} id='usuario' label='usuário' variant='outlined' name='usuario' margin='normal' fullWidth />

              <TextField value={userLogin.senha} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} id='senha' label='senha' variant='outlined' name='senha' margin='normal' type='password' fullWidth />

              <Box display='flex' justifyContent='center' marginTop={2}>

                <Button type="submit" variant="contained" color="primary">
                  Entrar
                </Button>

              </Box>
            </form>

            <Box display="flex" justifyContent='center' marginTop={2}>
              <Box marginRight={1}>
                <Typography variant='subtitle1'>Ainda não tem uma conta?</Typography>
              </Box>
              <Link to='/cadastro'>
                <Typography variant='subtitle1' align='center'>Cadastre-se</Typography>
              </Link>
            </Box>
          </Box>
        </Grid>

        <Grid item xs={6} className="bg-login"></Grid>
      </Grid>
    </>
  );
}

export default Login;