'use client';

import { Image } from '@mui/icons-material';
import AppBar from '@mui/material/AppBar';
import CssBaseline from '@mui/material/CssBaseline';
import Link from '@mui/material/Link';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

export default function Album() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>

          <Typography variant="h6" color="inherit" noWrap>
            Vozes da Imaculada
          </Typography>
        </Toolbar>
      </AppBar>
      <Box>
        <h1 color='#000000'>
          Então é Natal, e o que você fez?
          O ano termina e nasce outra vez
          Então é Natal, a festa Cristã
          Do velho e do novo
          Do amor como um todo
          Então bom Natal
          E um Ano Novo também
          Que seja feliz quem
          Souber o que é o bem
          Então é Natal, pro enfermo e pro são
          Pro rico e pro pobre, num só coração
          Então bom Natal, pro branco e pro negro
          Amarelo e vermelho, pra paz afinal
          Então bom Natal
          E um Ano Novo também
          Que seja feliz quem
          Souber o que é o bem
          Então é Natal, o que a gente fez?
          O ano termina, e começa outra vez
          E então é Natal, a festa Cristã
          Do velho e do novo, o amor como um todo
          Então bom Natal
          E um Ano Novo também
          Que seja feliz quem
          Souber o que é o bem
          Harehama, há quem ama
          Harehama, ah
          Então é Natal (Hiroshima)
          E o que você fez? (Nagasaki)
          O ano termina
          E nasce outra vez
          Hiroshima
          Nagasaki
          Mururoa, ah
          é Natal
          (Nagasaki) é Natal
          (Mururoa) é Natal, ah
        </h1>
      </Box>
    </ThemeProvider>
  );
}