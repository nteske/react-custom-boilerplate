import styled, { DefaultTheme, ThemedStyledProps } from 'styled-components';

export const NavigationWrapper = styled.div<ThemedStyledProps<{},DefaultTheme>>`
  background-color: red;
  color:  ${props => props.theme.colors.primary};
`;
