import Router from './routes';
import { GlobalStyle } from './styles/GlobalStyle';
import { borealTheme, summerTheme } from './styles/theme';
import { ThemeProvider } from "styled-components";
import { useState } from 'react';
import ThemeSwitcher from './components/ThemeSwitcher';
import { BotaoTema } from './styles/botaoSwitcher';

export default function App() {
  const boreal = borealTheme();
  const summer = summerTheme();

  const [theme, setTheme] = useState(true);
  const toggleTheme = () => {
    setTheme(theme => !theme);
  }
 
  return (
    <ThemeProvider theme={theme ? summer : boreal}>
      <GlobalStyle />
      <BotaoTema onClick={toggleTheme}>
        <ThemeSwitcher theme={theme} />
      </BotaoTema>
      <Router />
    </ThemeProvider>
  )
}