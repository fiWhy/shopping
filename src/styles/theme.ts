export enum TextType {
  DEFAULT = 'DEFAULT',
  CONTENT = 'CONTENT',
  HEADER_THREE = 'HEADER_THREE',
}

export const generalColors = {
  black: 'rgba(0,0,0,1)',
  lightGray: 'rgba(215, 215, 215, 0.5)',
};

export const textSettings: Record<TextType, string> = {
  [TextType.DEFAULT]: `
    font-size: 16px;
  `,
  [TextType.CONTENT]: `
    font-size: 14px;
  `,
  [TextType.HEADER_THREE]: `
    font-size: 18px;
  `,
};

export const theme = {
  light: {
    color: {
      main: '#fff',
      ...generalColors,
    },
    text: {
      ...textSettings,
    },
  },
  dark: {
    color: {
      main: '#fff',
      ...generalColors,
    },
    text: {
      ...textSettings,
    },
  },
};
