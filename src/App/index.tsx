// -> Import do provider do React-Router-dom
import { BrowserRouter } from 'react-router-dom';

// -> Import do provider do Styled-Components
import { ThemeProvider } from 'styled-components';

// -> Import das Rotas
import { Router } from '../router';

// -> Import dos Components
import { Header } from '../components/Header';

// -> Import do CSS global
import { GlobalStyles } from '../styles/global';


// -> Import das colors
import { defaultTheme } from '../styles/theme/default';

// -> Import do CSS
import { AppContainer } from './styles';

export function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={defaultTheme}>
        <GlobalStyles />
        <AppContainer>
          <Header />
          <Router />
        </AppContainer>
      </ThemeProvider>
    </BrowserRouter>
  );
}
