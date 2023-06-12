// -> Import do provider do Styled-Components
import { ThemeProvider } from 'styled-components';

// -> Import do CSS global
import { GlobalStyles } from '../styles/global';

// -> Import das colors
import { defaultTheme } from '../styles/theme/default';

// -> Import do CSS
import { AppContainer } from './styles';

import { Header } from '../components/Header';
import { Home } from '../pages/Home';

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyles />
      <AppContainer>
        <Header />
        <Home />
      </AppContainer>
    </ThemeProvider>
  );
}
