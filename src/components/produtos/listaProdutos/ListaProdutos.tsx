import {
  Box,
  Card,
  CardContent,
  Typography,
  CardActions,
  Button,
  CardMedia,
  Container,
  Grid,
} from "@mui/material";
import { useEffect, useState, ChangeEvent } from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import Produtos from "../../../models/Produtos";
import { busca, post } from "../../../service/Service";
import { TokenState } from "../../../store/tokens/tokensReducer";
import Navbar from "../../estaticos/navbar/Navbar";
import "./ListaProdutos.css";
import { makeStyles } from "@material-ui/core/styles";
import cx from "clsx";
import { toast } from "react-toastify";

const useStyles = makeStyles(({ breakpoints, spacing }) => ({
  root: {
    // margin: "auto",
    borderRadius: spacing(2), // 16px
    transition: "0.3s",
    boxShadow: "0px 14px 80px rgba(34, 35, 58, 0.2)",
    position: "relative",
    maxWidth: 500,
    // marginLeft: "auto",
    overflow: "initial",
    background: "#6798C0",
    display: "inline-block",
    // flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "center",
    paddingBottom: spacing(2),
    [breakpoints.up("md")]: {
      flexDirection: "row",
      paddingTop: spacing(2),
    },
  },
  media: {
    width: "88%",
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: spacing(-3),
    height: 0,
    paddingBottom: "48%",
    borderRadius: spacing(2),
    backgroundColor: "#fff",
    position: "relative",
    [breakpoints.up("md")]: {
      width: "100%",
      marginLeft: spacing(-3),
      marginTop: 0,
      transform: "translateX(-8px)",
    },
    "&:after": {
      content: '" "',
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      // backgroundImage: "linear-gradient(147deg, #fe8a39 0%, #fd3838 74%)",
      borderRadius: spacing(2), // 16
      opacity: 0.5,
    },
  },
  content: {
    padding: 24,
  },
  cta: {
    marginTop: 24,
    textTransform: "initial",
  },
}));

function ListaProdutos(props: any) {
  let navigate = useNavigate();

  const [produtos, setProdutos] = useState<Produtos[]>([]);

  const token = useSelector<TokenState, TokenState["tokens"]>(
    (state) => state.tokens
  );
  let filter = props.inputText;

  console.log(filter);

  console.log();

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

  async function getProduto() {
    await busca("/produto", setProdutos, {
      headers: {
        Authorization: token,
      },
    });
  }
  useEffect(() => {
    getProduto();
  }, [produtos.length]);

  const styles = useStyles();

  return (
    <>
      {produtos
        .filter((produtos) => {
          return produtos.nomeProduto.toLowerCase().includes(filter);
        })
        .map((produtos) => (
          <Grid container justifyContent="space-around" display="flex">
            <Grid item xs={12} sm={6} m={4} lg={4}>
              <Card className={cx(styles.root)}>
                <CardMedia
                  className={styles.media}
                  image={`${produtos.potencia}`}
                />
                <CardContent>
                  <Button className="ok">Atualizar</Button>
                  <Typography color="textSecondary" gutterBottom>
                    {produtos.nomeProduto}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        ))}
    </>
  );
}

export default ListaProdutos;
