import React, { FC } from "react";
import { DefaultTheme, ThemeProvider } from "styled-components";

const theme: DefaultTheme = {
  colors: {
    primary: "#AFDBD2",
    secondary: "#36313D",
  },
  fonts: ["sans-serif", "Roboto"],
  fontSizes: {
    small: "1em",
    medium: "2em",
    large: "3em",
  },
};

export const AppThemeStyles: FC<AppThemePropTypes> = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

type AppThemePropTypes = {
  children: React.ReactNode;
};
