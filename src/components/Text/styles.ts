import { css, styled } from '../../styles';
import { StyledTextProps } from './interfaces';

export const TextStyles = css<StyledTextProps>`
  ${({ theme, type }) => theme.text[type]};
  ${({ bold }) => (bold ? `font-weight: bold` : ``)}
`;

export const TextWrapperStyled = styled.span`
  ${TextStyles}
`;

export const TextHeaderThreeWrapperStyled = styled.span`
  ${TextStyles}
`;
