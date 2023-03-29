import Router from './routes';
import { GlobalStyle } from './styles/GlobalStyle';
import { borealTheme, summerTheme } from './styles/theme';
import { ThemeProvider } from "styled-components";

export default function App() {
  const boreal = borealTheme();
  const summer = summerTheme();

  return (
    <ThemeProvider theme={boreal}>
      <Router />
      <GlobalStyle />
    </ThemeProvider>
  )
}