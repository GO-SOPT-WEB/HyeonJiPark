import { useState } from 'react';

import { ThemeProvider } from 'styled-components';
import GlobalStyle from './styles/GlobalStyle';
import theme from './styles/theme';
import Game from './pages/Game';
import ZZANGU_LIST from './datas/zzanguList';
// #f1a816
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
