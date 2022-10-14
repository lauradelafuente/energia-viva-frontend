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
} from "@mui/material";
import React, { ChangeEvent, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import useLocalStorage from "react-use-localstorage";
import Categoria from "../../../models/Categoria";
import Produtos from "../../../models/Produtos";
import { busca, buscaId, put, post } from "../../../service/Service";
import { addToken } from "../../../store/tokens/actions";
import { TokenState } from "../../../store/tokens/tokensReducer";

function CadastroProdutos() {
  let navigate = useNavigate();

  const { id } = useParams<{ id: string }>();

  const [categorias, setCategorias] = useState<Categoria[]>([]);

  const token = useSelector<TokenState, TokenState["tokens"]>(
    (state) => state.tokens
  );

  useEffect(() => {
    if (token === "") {
      alert("Você precisa estar logado");
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
    nomeProduto: " ",
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
      alert("Produto atualizado com sucesso");
    } else {
      post(`/produto`, produto, setProduto, {
        headers: {
          Authorization: token,
        },
      });
      alert("Postagem cadastrada com sucesso");
    }
    back();
  }

  function back() {
    navigate("/produtos");
  }
  return (
    <Container maxWidth="sm" className="topo">
      <form onSubmit={onSubmit}>
        <Typography
          variant="h3"
          color="textSecondary"
          component="h3"
          align="center"
        >
          kk
        </Typography>
        <TextField
          value={produto.nomeProduto}
          onChange={(e: ChangeEvent<HTMLInputElement>) => updatedProduto(e)}
          id="nomeProduto"
          label="nome do produto"
          variant="outlined"
          name="nomeProduto"
          margin="normal"
          fullWidth
        />
        <TextField
          value={produto.preco}
          onChange={(e: ChangeEvent<HTMLInputElement>) => updatedProduto(e)}
          id="preco"
          label="preco"
          name="preco"
          variant="outlined"
          margin="normal"
          fullWidth
        />
        <TextField
          value={produto.marca}
          onChange={(e: ChangeEvent<HTMLInputElement>) => updatedProduto(e)}
          id="marca"
          label="marca"
          name="marca"
          variant="outlined"
          margin="normal"
          fullWidth
        />
        <TextField
          value={produto.dimensao}
          onChange={(e: ChangeEvent<HTMLInputElement>) => updatedProduto(e)}
          id="dimensao"
          label="dimensao"
          name="dimensao"
          variant="outlined"
          margin="normal"
          fullWidth
        />
        <TextField
          value={produto.quantidade}
          onChange={(e: ChangeEvent<HTMLInputElement>) => updatedProduto(e)}
          id="quantidade"
          label="quantidade"
          name="quantidade"
          variant="outlined"
          margin="normal"
          fullWidth
        />
        <TextField
          value={produto.material}
          onChange={(e: ChangeEvent<HTMLInputElement>) => updatedProduto(e)}
          id="material"
          label="material"
          name="material"
          variant="outlined"
          margin="normal"
          fullWidth
        />
        <TextField
          value={produto.potencia /*foto*/}
          onChange={(e: ChangeEvent<HTMLInputElement>) => updatedProduto(e)}
          id="potencia"
          label="foto"
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
          <Button type="submit" variant="contained" color="primary">
            Finalizar
          </Button>
        </FormControl>
      </form>
    </Container>
  );
}
//marca, dimensao, quantidade, material, potencia (foto)
export default CadastroProdutos;
