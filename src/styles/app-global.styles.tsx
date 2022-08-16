import { createGlobalStyle, DefaultTheme, GlobalStyleComponent } from 'styled-components';
 
export const AppGlobalStyles = createGlobalStyle<GlobalStyleComponent<{},DefaultTheme>>`
    *,
    *::after,
    *::before {
        margin: 0;
        padding: 0;
        box-sizing: inherit; 
    }

    html {
        font-size: 62.5%;
    }

    body {
        box-sizing: border-box; 
    }

    body {
        font-family: ${props => props.theme.fonts.join()};
        font-weight: 400;
        line-height: 1.7;
        color: #777;
        padding: 3rem; 
    }
`;