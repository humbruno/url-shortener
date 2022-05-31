import { ThemeProvider } from 'styled-components';
import GlobalStyles from './styles/global';
import theme from './styles/theme';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Container from './components/Container';

const App = () => (
  <>
    <GlobalStyles />
    <ThemeProvider theme={theme}>
      <Container>
        <Navbar />
        <main>
          <Hero />
        </main>
      </Container>
    </ThemeProvider>
  </>
);

export default App;
