import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { createTheme, ThemeProvider } from '@mui/material';
import { deepPurple, green } from '@mui/material/colors';
import React from 'react';
import { CookiesProvider } from 'react-cookie';
import { StyledEngineProvider } from '@mui/material/styles';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

const theme = createTheme({
  palette: {
    primary: {
      main: deepPurple[300],
    },
    secondary: {
      main: deepPurple[200],
    },
  },
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <CookiesProvider>
          <Header />
          <Component {...pageProps} />
          <Footer />
        </CookiesProvider>
      </ThemeProvider>
    </StyledEngineProvider>
  );
}
export default MyApp;
