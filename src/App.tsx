import React from 'react';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { Container } from './pages';
import { Router } from './router';
import store from './store';
import { AppWrapperStyled, GlobalStyles, theme } from './styles';

function App() {
  return (
    <AppWrapperStyled className="App">
      <ThemeProvider theme={theme.light}>
        <GlobalStyles />
        <Provider store={store}>
          <HashRouter>
            <Container>
              <Router />
            </Container>
          </HashRouter>
        </Provider>
      </ThemeProvider>
    </AppWrapperStyled>
  );
}

export default App;
