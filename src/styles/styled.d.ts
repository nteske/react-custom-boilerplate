import 'styled-components';

declare module 'styled-components' {
    export interface DefaultTheme {
      colors:{
          primary: string,
          secondary: string
      }
      fonts: Array<string>,
      fontSizes: {
          small: string,
          medium: string,
          large: string
        }
    }
  }