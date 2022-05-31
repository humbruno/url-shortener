import { ThemeProvider } from 'styled-components';
import GlobalStyles from './styles/global';
import theme from './styles/theme';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Body from './components/Body';

const App = () => (
  <>
    <GlobalStyles />
    <ThemeProvider theme={theme}>
      <Navbar />
      <main>
        <Hero />
        <Body />
      </main>
    </ThemeProvider>
  </>
);

export default App;
