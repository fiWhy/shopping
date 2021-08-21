import React, { useMemo } from 'react';
import { HashRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { Provider } from 'use-http';
import { useToken } from './hooks/use-token';
import { Routes } from './router';
import { AppWrapperStyled, GlobalStyles, theme } from './styles';

function App() {
  const { token } = useToken(process.env.REACT_APP_API_KEY || '');

  const fetchOptions = useMemo(
    () => ({
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }),
    [token]
  );

  return (
    <AppWrapperStyled className="App">
      <ThemeProvider theme={theme.light}>
        <GlobalStyles />
        <Provider options={fetchOptions}>
          {token && (
            <HashRouter>
              <Routes />
            </HashRouter>
          )}
        </Provider>
      </ThemeProvider>
    </AppWrapperStyled>
  );
}

export default App;
