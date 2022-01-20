import "../styles/globals.css";
import type { AppProps } from "next/app";
import Header from "../components/Header";
import { createTheme, ThemeProvider } from "@mui/material";
import { deepPurple, green } from "@mui/material/colors";
import React from "react";
import { CookiesProvider } from "react-cookie";
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

const theme = createTheme({
  palette: {
    primary: {
      main: deepPurple[800],
    },
    secondary: {
      main: green[500],
    },
  },
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <CookiesProvider>
        <Header />
        <Component {...pageProps} />
      </CookiesProvider>
    </ThemeProvider>
  );
}
export default MyApp;
