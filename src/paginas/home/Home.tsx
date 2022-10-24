import Slider from "@material-ui/core/Slider/Slider";
import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import { useEffect, useState, useRef } from "react";
import { useSelector } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import ListaProdutos from "../../components/produtos/listaProdutos/ListaProdutos";
import ModalProdutos from "../../components/produtos/modalProdutos/ModalProdutos";
import { TokenState } from "../../store/tokens/tokensReducer";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import { makeStyles } from "@material-ui/core/styles";
import cx from "clsx";
import "./Home.css";
import { busca } from "../../service/Service";
import Produtos from "../../models/Produtos";
import * as React from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import SendIcon from "@mui/icons-material/Send";
import Stack from "@mui/material/Stack";
import UpdateOutlinedIcon from "@mui/icons-material/UpdateOutlined";

const useStyles = makeStyles(({ breakpoints, spacing }) => ({
  root: {
    // margin: "auto",
    borderRadius: spacing(2), // 16px
    transition: "0.3s",
    boxShadow: "0px 14px 80px rgba(34, 35, 58, 0.2)",
    position: "relative",
    // maxWidth: 500,
    // marginLeft: "auto",
    overflow: "initial",
    background: "white",
    display: "flex",
    marginTop: "20px",
    flexDirection: "column",
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

function Home(props: any) {
  let navigate = useNavigate();
  const token = useSelector<TokenState, TokenState["tokens"]>(
    (state) => state.tokens
  );
  let filter = props.inputText;
  let check: boolean = true;
  useEffect(() => {
    if (token == "") {
      alert("Você precisa estar logado");
      navigate("/login");
    }
  }, [token]);
  const [produtos, setProdutos] = useState<Produtos[]>([]);
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

  const checking = () => {
    if (filter !== "") {
      check = false;
    }
  };

  const styles = useStyles();

  return (
    <>
      {checking()}
      <Grid container marginTop="50px">
        {check ? (
          <Swiper
            pagination={{
              type: "progressbar",
            }}
            navigation={true}
            modules={[Pagination, Navigation]}
            className="mySwiper"
          >
            <SwiperSlide>
            <Box className='imagem1'>
            </Box>
            </SwiperSlide>
            <SwiperSlide>
             <Box className='imagem1'></Box>
            </SwiperSlide>
          </Swiper>
        ) : (
          <div></div>
        )}
      </Grid>
      {console.log(check)}
      <Grid>
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
                    <Typography color="textSecondary" variant="h6" gutterBottom>
                      {produtos.nomeProduto}
                    </Typography>
                    <Typography color="textSecondary" gutterBottom>
                      Marca: {produtos.marca}
                    </Typography>
                    <Typography color="textSecondary" gutterBottom>
                      Dimensao: {produtos.dimensao}
                    </Typography>
                    <Typography color="textSecondary" gutterBottom>
                      Preco R$ {produtos.preco},00
                    </Typography>
                    <Stack direction="row" spacing={2}>
                      <Link
                        to={`/formularioProduto/${produtos.id}`}
                        className="text-decoration"
                      >
                        <Button
                          variant="contained"
                          endIcon={<UpdateOutlinedIcon />}
                        >
                          Atualizar
                        </Button>
                      </Link>
                      <Link
                        to={`/deletarProduto/${produtos.id}`}
                        className="text-decoration"
                      >
                        <Button variant="outlined" startIcon={<DeleteIcon />}>
                          Deletar
                        </Button>
                      </Link>
                    </Stack>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          ))}
      </Grid>
    </>
  );
}

export default Home;
