import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Header from '../components/Header'
import { green, deepPurple } from '@material-ui/core/colors';
import { createTheme, ThemeProvider } from '@material-ui/core/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: deepPurple[800],
    },
    secondary: {
      main: green[500],
    }
  }
});


function MyApp({ Component, pageProps }: AppProps) {
  return <ThemeProvider theme={theme}>
    <Header />
    <Component {...pageProps} />
  </ThemeProvider>
}
export default MyApp
