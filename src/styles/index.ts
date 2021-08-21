import baseStyled, {
  createGlobalStyle,
  ThemedStyledInterface,
} from 'styled-components';
import { Theme } from './interfaces';

export * from './theme';
export * from './interfaces';

export const styled = baseStyled as ThemedStyledInterface<Theme>;

export const AppWrapperStyled = styled.div`
  width: 100%;
  height: 100%;
`;

export const GlobalStyles = createGlobalStyle<{
  theme: Theme;
}>`
    html,body {
        width:100%;
        height: 100%;
    }
    body {
          background-color: ${({ theme }) => theme.color.main};
          color: #fff;
    }
  `;
