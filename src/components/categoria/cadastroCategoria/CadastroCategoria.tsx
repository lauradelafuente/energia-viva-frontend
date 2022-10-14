import { Container, Typography, TextField, Button } from "@mui/material";
import React, { ChangeEvent, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import useLocalStorage from "react-use-localstorage";
import Categoria from "../../../models/Categoria";
import { buscaId, put, post } from "../../../service/Service";
import { TokenState } from "../../../store/tokens/tokensReducer";
import "./CadastroCategoria.css";

function CadastroCategoria() {
  let navigate = useNavigate();

  const { id } = useParams<{ id: string }>();

  const token = useSelector<TokenState, TokenState["tokens"]>(
    (state) => state.tokens
  );

  const [categoria, setCategoria] = useState<Categoria>({
    id: 0,
    tipoProduto: "",
    descricao: "",
  });

  useEffect(() => {
    if (token === "") {
      alert("Você precisa estar logado");
      navigate("/login");
    }
  }, [token]);

  useEffect(() => {
    if (id !== undefined) {
      findById(id);
    }
  }, [id]);

  async function findById(id: string) {
    buscaId(`/categoria/${id}`, setCategoria, {
      headers: {
        Authorization: token,
      },
    });
  }

  function updatedModel(e: ChangeEvent<HTMLInputElement>) {
    setCategoria({
      ...categoria,
      [e.target.name]: e.target.value,
    });
  }

  async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault();

    if (id !== undefined) {
      console.log(categoria);
      put(`/categoria`, categoria, setCategoria, {
        headers: {
          Authorization: token,
        },
      });
      alert("Categoria atualizada com sucesso");
    } else {
      post(`/categoria`, categoria, setCategoria, {
        headers: {
          Authorization: token,
        },
      });
      alert("Categoria cadastrado com sucesso");
    }
    back();
  }

  function back() {
    navigate("/categorias");
  }

  return (
    <Container maxWidth="sm" className="topo">
      <form onSubmit={onSubmit}>
        <Typography
          variant="h3"
          color="textSecondary"
          component="h1"
          align="center"
        >
          Formulário de cadastro da Categoria
        </Typography>
        <TextField
          value={categoria.tipoProduto}
          onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)}
          id="tipoProduto"
          label="tipo do produto"
          variant="outlined"
          name="tipoProduto"
          margin="normal"
          fullWidth
        />
        <TextField
          value={categoria.descricao}
          onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)}
          id="descricao"
          label="descricao"
          variant="outlined"
          name="descricao"
          margin="normal"
          fullWidth
        />
        <Button type="submit" variant="contained" color="primary">
          Finalizar
        </Button>
      </form>
    </Container>
  );
}

export default CadastroCategoria;
