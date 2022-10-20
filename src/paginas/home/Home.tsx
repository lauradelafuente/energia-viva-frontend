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
    display: "flex",
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

function Home(props: any) {
  let navigate = useNavigate();
  const token = useSelector<TokenState, TokenState["tokens"]>(
    (state) => state.tokens
  );
  let filter = props.inputText;
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

  const styles = useStyles();

  return (
    <>
      <Grid container>
        <Swiper
          pagination={{
            type: "progressbar",
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <Grid
              container
              direction="row"
              alignItems="center"
              justifyContent="center"
              className="img10"
              width="80%"
              height="40%"
            >
              <Grid alignItems="center" justifyContent="center">
                <Box className="efeito tamanho-form" width="50%">
                  <Typography
                    variant="h5"
                    align="center"
                    className="text-about-us"
                  >
                    Somos uma empresa com foco no acesso e distribuição de
                    energia solar, uma fonte de energia renovável, eficiente e
                    não poluente. Nossa proposta é incentivar o uso de uma
                    energia segura que preserve o meio-ambiente, onde após a
                    compra do cliente, parte da renda gerada é convertida para
                    instalação de painéis solares em comunidades carentes que
                    não têm acesso à energia.
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </SwiperSlide>
          <SwiperSlide>Slide 2</SwiperSlide>
          <SwiperSlide>Slide 3</SwiperSlide>
          <SwiperSlide>Slide 4</SwiperSlide>
          <SwiperSlide>Slide 5</SwiperSlide>
          <SwiperSlide>Slide 6</SwiperSlide>
          <SwiperSlide>Slide 7</SwiperSlide>
          <SwiperSlide>Slide 8</SwiperSlide>
          <SwiperSlide>Slide 9</SwiperSlide>
        </Swiper>
      </Grid>
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
                    <Button className="ok">Atualizar</Button>
                    <Typography color="textSecondary" gutterBottom>
                      {produtos.nomeProduto}
                    </Typography>
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
