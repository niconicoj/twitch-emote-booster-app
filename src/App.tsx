import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core';

import theme from './theme'
import MainContainer from './containers/MainContainer';

const App: React.FC = () => {

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline/>
      <MainContainer/>
    </ThemeProvider>
  );
}

export default App;
