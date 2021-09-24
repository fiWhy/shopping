import { theme } from './theme';

export interface Theme {
  color: typeof theme['dark']['color'];
  text: typeof theme['dark']['text'];
}

export interface ThemeWrapper {
  light: Theme;
  dark: Theme;
}

export type ThemeTypes = keyof ThemeWrapper;
