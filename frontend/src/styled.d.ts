import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primary: string;
      secondary: string;
      white: string;
      text: string;
      accent: string;
      lightGray: string;
    };
    fonts: {
      primary: string;
      secondary: string;
    };
    breakpoints: {
      mobile: string;
      tablet: string;
    };
  }
}
