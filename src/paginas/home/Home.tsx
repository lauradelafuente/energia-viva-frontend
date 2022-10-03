import { Box, Button, Grid, Typography } from '@mui/material';
import './Home.css';

// import purple from '@material-ui/core/colors/purple';

// const roxin = purple[500]

function Home() {
  return (
    <>
      <Grid container direction="row" justifyContent="center" alignItems="center" style={{ backgroundColor: "#fff59d" }}>
        <Grid alignItems="center" item xs={6}>
          <Box paddingX={20} >
            <Typography variant="h3" gutterBottom color="textPrimary" component="h3" align="center" style={{ color: "black", fontWeight: "bold" }}>Seja bem vindo(a)!</Typography>
            <Typography variant="h5" gutterBottom color="textPrimary" component="h5" align="center" style={{ color: "black", fontWeight: "bold"}}>A maior empresa de tecnologia Solar!</Typography>
          </Box>
        </Grid>
        <Grid item xs={6} >
          <img src="https://cdn.discordapp.com/attachments/1011246818442608711/1024788240978427974/rounded-in-photoretrica.png" alt="" className='imagem' />
        </Grid>
        <Grid xs={12} style={{ backgroundColor: "white" }}>
        </Grid>
      </Grid>
    </>
  );
}

export default Home;