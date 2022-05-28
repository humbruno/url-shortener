import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
    
    *, *::before, *::after {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    
    body {
        font-family: 'Poppins', sans-serif;
        padding: 48px 165px 72px;
    }

    button {
        font-family: inherit;
    }
`;

export default GlobalStyles;
