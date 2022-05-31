import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primary: string;
      secondary: string;
      error: string;

      neutral: {
        lightGray: string;
        gray: string;
        violet: string;
        darkBlue: string;
        darkViolet: string;
      };
    };
  }
}
