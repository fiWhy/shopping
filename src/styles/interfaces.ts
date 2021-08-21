export interface Theme {
  color: {
    main: string;
  };
}

export interface ThemeWrapper {
  light: Theme;
  dark: Theme;
}

export type ThemeTypes = keyof ThemeWrapper;
