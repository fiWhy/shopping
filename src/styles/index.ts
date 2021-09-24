import baseStyled, {
  createGlobalStyle,
  ThemedStyledInterface,
  css as baseCss,
  ThemedCssFunction,
} from 'styled-components';
import { Theme } from './interfaces';

export * from './theme';
export * from './interfaces';

export const styled = baseStyled as ThemedStyledInterface<Theme>;
export const css = baseCss as ThemedCssFunction<Theme>;

export const AppWrapperStyled = styled.div`
  width: 100%;
  height: 100%;
`;

export const GlobalStyles = createGlobalStyle<{
  theme: Theme;
}>`
    html, body, #root {
        width: 100%;
        height: 100%;
        padding: 0;
        margin: 0;
    }
    body {
          background-color: ${({ theme }) => theme.color.main};
          color: ${({ theme }) => theme.color.black};
    }
  `;
