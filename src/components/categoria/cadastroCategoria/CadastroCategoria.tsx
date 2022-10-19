import { Grid } from "@material-ui/core";
import { Container, Typography, TextField, Button, Box } from "@mui/material";
import React, { ChangeEvent, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
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
      toast.error("Voce precisa estar logado!", {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
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
      toast.success("Categoria atualizada com sucesso!", {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    } else {
      post(`/categoria`, categoria, setCategoria, {
        headers: {
          Authorization: token,
        },
      });
      toast.success("Categoria cadastrada com sucesso!", {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    }
    back();
  }

  function back() {
    navigate("/categorias");
  }

  const [form, setForm] = useState(false);

  useEffect(() => {
    if (categoria.tipoProduto !== "" && categoria.descricao !== "") {
      setForm(true);
    }
  }, [categoria]);

  return (
    <>
      <Grid container className="image">
        <Box maxWidth="sm" className="topo">
          <form onSubmit={onSubmit}>
            <Typography
              variant="h3"
              color="textSecondary"
              component="h1"
              align="center"
              className="formatacao"
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
            <Box display="flex" justifyContent="center" marginTop={5}>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                className="button"
                disabled={!form}
              >
                Finalizar
              </Button>
            </Box>
          </form>
        </Box>
      </Grid>
    </>
  );
}

export default CadastroCategoria;
