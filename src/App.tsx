import { ThemeProvider } from 'styled-components';
import GlobalStyles from './styles/global';
import theme from './styles/theme';

import Navbar from './components/Navbar';
import Hero from './components/Hero';

const App = () => (
  <>
    <GlobalStyles />
    <ThemeProvider theme={theme}>
      <header>
        <Navbar />
      </header>
      <main>
        <Hero />
      </main>
    </ThemeProvider>
  </>
);

export default App;
