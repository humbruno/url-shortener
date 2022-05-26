import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primary: string;
      secondary: string;
      error: string;

      neutral: {
        gray: string;
        violet: string;
        darkBlue: string;
        darkViolet: string;
      };
    };
  }
}
