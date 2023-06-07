import { ThemeProvider } from 'styled-components';

import Game from './pages/Game';
import GlobalStyle from './styles/GlobalStyle';
import theme from './styles/theme';

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Game />
      </ThemeProvider>
    </>
  );
}

export default App;
