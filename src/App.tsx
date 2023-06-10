// -> Import do provider do Styled-Components
import { ThemeProvider } from 'styled-components';

// -> Import do CSS global
import { GlobalStyles } from './styles/global';

// -> Import das colors
import { defaultTheme } from './styles/theme/default';

export default function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyles />
      <span> main </span>
    </ThemeProvider>
  );
}
