import { css } from 'styled-components';
import { styled } from './';

export const Grid = styled.div<{
  direction?: 'column' | 'row';
  align?: 'center' | 'flex-start' | 'flex-end';
  justify?: 'center' | 'flex-start' | 'flex-end';
  flex?: number;
}>`
  display: flex;
  flex-direction: ${({ direction }) => (direction ? direction : 'row')};
  ${({ flex }) =>
    flex
      ? css`
          flex: ${flex};
        `
      : ``}
  ${({ align }) =>
    align
      ? css`
          align-items: ${align};
        `
      : ``}
        ${({ justify }) =>
    justify
      ? css`
          justify-content: ${justify};
        `
      : ``}
`;
