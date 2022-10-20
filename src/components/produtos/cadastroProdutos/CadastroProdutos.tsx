import { Grid } from "@material-ui/core";
import {
  Container,
  Typography,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  FormHelperText,
  Button,
  Box
} from "@mui/material";
import React, { ChangeEvent, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import useLocalStorage from "react-use-localstorage";
import Categoria from "../../../models/Categoria";
import Produtos from "../../../models/Produtos";
import { busca, buscaId, put, post } from "../../../service/Service";
import { addToken } from "../../../store/tokens/actions";
import { TokenState } from "../../../store/tokens/tokensReducer";
import './CadastroProdutos.css'

function CadastroProdutos() {
  let navigate = useNavigate();

  const { id } = useParams<{ id: string }>();

  const [categorias, setCategorias] = useState<Categoria[]>([]);

  const token = useSelector<TokenState, TokenState["tokens"]>(
    (state) => state.tokens
  );

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
  
  const [categoria, setCategoria]: any = useState<Categoria>({
    id: 0,
    tipoProduto: "",
    descricao: "",
  });
  const [produto, setProduto]: any = useState<Produtos>({
    id: 0,
    nomeProduto: "",
    marca: "",
    dimensao: "",
    preco: 0,
    quantidade: 0,
    material: "",
    potencia: "", //potencia sera adicionada no nome e esse campo sera fotos
    categoria: null,
  });

  useEffect(() => {
    setProduto({
      ...produto,
      categoria: categoria,
    });
  }, [categoria]);

  async function findByIdProduto(id: string) {
    await buscaId(`produto/${id}`, setProduto, {
      headers: {
        Authorization: token,
      },
    });
  }

  useEffect(() => {
    getCategoria();
    if (id !== undefined) {
      findByIdProduto(id);
    }
  }, [id]);

  async function getCategoria() {
    await busca("/categoria", setCategorias, {
      headers: {
        Authorization: token,
      },
    });
  }

  function updatedProduto(e: ChangeEvent<HTMLInputElement>) {
    setProduto({
      ...produto,
      [e.target.name]: e.target.value,
      categoria: categoria,
    });
  }

  async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault();

    if (id !== undefined) {
      put(`/produto`, produto, setProduto, {
        headers: {
          Authorization: token,
        },
      });
      toast.success("Produto atualizado com sucesso!", {
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
      post(`/produto`, produto, setProduto, {
        headers: {
          Authorization: token,
        },
      });
      toast.success("Produto cadastrado com sucesso!", {
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
    navigate("/produtos");
  }
  return (
    <Grid container className="image">
    <Box maxWidth="sm" className="topo">
      <form onSubmit={onSubmit}>
        <Typography
          variant="h3"
          component="h1"
          align="center"
          className="formatacao"
        > Formulário de cadastro de novo produto</Typography>
        <TextField
          value={produto.nomeProduto}
          onChange={(e: ChangeEvent<HTMLInputElement>) => updatedProduto(e)}
          id="nomeProduto"
          label="Nome do Produto"
          variant="outlined"
          name="nomeProduto"
          margin="normal"
          fullWidth
        />
        <TextField
          value={produto.preco}
          onChange={(e: ChangeEvent<HTMLInputElement>) => updatedProduto(e)}
          id="preco"
          label="Preço"
          name="preco"
          variant="outlined"
          margin="normal"
          fullWidth
        />
        <TextField
          value={produto.marca}
          onChange={(e: ChangeEvent<HTMLInputElement>) => updatedProduto(e)}
          id="marca"
          label="Marca"
          name="marca"
          variant="outlined"
          margin="normal"
          fullWidth
        />
        <TextField
          value={produto.dimensao}
          onChange={(e: ChangeEvent<HTMLInputElement>) => updatedProduto(e)}
          id="dimensao"
          label="Dimensão"
          name="dimensao"
          variant="outlined"
          margin="normal"
          fullWidth
        />
        <TextField
          value={produto.quantidade}
          onChange={(e: ChangeEvent<HTMLInputElement>) => updatedProduto(e)}
          id="quantidade"
          label="Quantidade"
          name="quantidade"
          variant="outlined"
          margin="normal"
          fullWidth
        />

        <TextField
          value={produto.material}
          onChange={(e: ChangeEvent<HTMLInputElement>) => updatedProduto(e)}
          id="material"
          label="Material"
          name="material"
          variant="outlined"
          margin="normal"
          fullWidth
        />
        <TextField
          value={produto.potencia /*foto*/}
          onChange={(e: ChangeEvent<HTMLInputElement>) => updatedProduto(e)}
          id="potencia"
          label="Foto"
          name="potencia"
          variant="outlined"
          margin="normal"
          fullWidth
        />

        <FormControl>
          <InputLabel id="demo-simple-select-helper-label">
            Categoria{" "}
          </InputLabel>
          <Select
            labelId="demo-simple-select-helper-label"
            id="demo-simple-select-helper"
            onChange={(e) =>
              buscaId(`/categoria/${e.target.value}`, setCategoria, {
                headers: {
                  Authorization: token,
                },
              })
            }
          >
            {categorias.map((categoria) => (
              <MenuItem value={categoria.id}>{categoria.descricao}</MenuItem>
            ))}
          </Select>
          <FormHelperText>Escolha uma Categoria para o produto</FormHelperText>
          <Button type="submit" variant="contained" color="primary" className="button" >
            Finalizar
          </Button>
        </FormControl>
      </form>
    </Box>
    </Grid>
  );
}
//marca, dimensao, quantidade, material, potencia (foto)
export default CadastroProdutos;
