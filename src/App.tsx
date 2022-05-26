import { ThemeProvider } from 'styled-components';
import StyledButton from './styles/button';
import GlobalStyles from './styles/Global';
import theme from './styles/theme';

const App = () => (
  <>
    <GlobalStyles />
    <ThemeProvider theme={theme}>
      <StyledButton>Themed Button</StyledButton>
      <h1>URL Shortener</h1>
    </ThemeProvider>
  </>
);

export default App;
