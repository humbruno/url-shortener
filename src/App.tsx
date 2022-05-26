import { ThemeProvider } from 'styled-components';
import GlobalStyles from './styles/global';
import theme from './styles/theme';

const App = () => (
  <>
    <GlobalStyles />
    <ThemeProvider theme={theme}>
      <h1>URL Shortener</h1>
    </ThemeProvider>
  </>
);

export default App;
